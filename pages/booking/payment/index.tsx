import { useRouter } from 'next/router';
import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import {
  PaymentIntentResult,
  StripeConstructorOptions,
  StripePaymentElementChangeEvent,
  loadStripe,
} from '@stripe/stripe-js';
import BookingFlow from '../../../compositions/booking';
import { useStateContext } from '../../../reducers/booking/context';
import Button from '../../../components/button';
import { useMutation } from '@apollo/client';
import { SCHEDULE_APPOINTMENT } from '../../../graphql/queries';
import { formatDate } from '../../../misc';
import { ScheduleAppointmentArgs } from '../../../graphql/codegen_auto_generated';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const STRIPE_OPTS: StripeConstructorOptions = {
  apiVersion: '2020-08-27',
};
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  STRIPE_OPTS
);

function Payment() {
  const { userData, planSelection, dayAndTime } = useStateContext();

  const [mutateFunction, mutationState] = useMutation(SCHEDULE_APPOINTMENT);
  // const [userClickedPay, setUserClickedPay] = useState(false)
  const [payButtonDisabled, setPayButtonDisabled] = useState(true);
  const [errorMsg, setErrorMessages] = useState(null);
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  // Use a loading state to track the readiness of both elements
  const [elementsReady, setElementsReady] = useState(false);

  useEffect(() => {
    if (stripe && elements) {
      // Both stripe and elements are ready
      console.log(stripe);
      console.log(elements);
      setTimeout(() => {
        setElementsReady(true);
      }, 1800);
    }
  }, [stripe, elements]);

  async function onPayHandler(result: PaymentIntentResult) {
    const data: ScheduleAppointmentArgs = {
      patient_id: userData.userRegistrationId.toString(),
      service_id: planSelection.id,
      time_of_appt: dayAndTime.time,
      day_of_appt: formatDate(dayAndTime.date),
      duration_in_min: planSelection.metadata.duration_in_min,
      location: 'Online appointment',
      payment_intent_id: result.paymentIntent.id,
    };

    try {
      const mutationResult = await mutateFunction({ variables: { data } });
      return {
        error: null,
        successful: true,
        response: mutationResult,
      };
    } catch (error) {
      return {
        error,
        successful: false,
        response: 'Error while trying to get payment',
      };
    }
  }

  function changeHandler(event: StripePaymentElementChangeEvent) {
    if (event.complete) {
      setPayButtonDisabled(false);
      setErrorMessages(null);
    } else {
      setPayButtonDisabled(true);
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setPayButtonDisabled(true);

    let result: PaymentIntentResult;
    try {
      result = await stripe.confirmPayment({
        //`Elements` instance that was used to create the Payment Element
        elements,
        redirect: 'if_required',
        // confirmParams: {
        //   return_url: `${process.env.HOST_URL}/payment/success`,
        // },
      });
    } catch (e) {
      await router.push('/payment/fail');
    }

    if (result?.paymentIntent?.status === 'succeeded') {
      const { error, successful, response } = await onPayHandler(result);
      if (error === null && successful === true) {
        await router.push({
          pathname: `/payment/success`,
          query: {
            id: result.paymentIntent.id,
          },
        });
      } else {
        await router.push({
          pathname: `/payment/fail`,
          query: {
            id: result.paymentIntent.id,
            message: JSON.stringify(response),
          },
        });
      }
    }

    if (result?.error) {
      console.error('[Error Stripe] payments');
      console.error(result);
      switch (result.error.type) {
        case 'validation_error':
          setErrorMessages(result.error.message);
          break;
        case 'invalid_request_error':
          await router.push({
            pathname: '/payment/fail',
            query: {
              payment_intent_id: result.error.payment_intent.id,
              message: result.error.message,
            },
          });
          break;
        default:
          break;
      }
      setPayButtonDisabled(false);
    }
  };

  if (mutationState.error) {
    console.error('~~~~~ Error with mutation state ~~~~~~~~');
    console.error(mutationState.error);
  }

  return (
    <section className="payment">
      <section className="payment_card">
        <PaymentElement onChange={changeHandler} />
      </section>
      {elementsReady ? (
        <Button
          className={payButtonDisabled ? 'disabled' : ''}
          onClick={handleSubmit}
        >
          Pagar
        </Button>
      ) : null}
      <section className="payment__card-error">
        <span className="payment__message">{errorMsg}</span>
      </section>
    </section>
  );
}

function PaymentWithStripe() {
  const { planSelection } = useStateContext();
  const [clientSecret, setClientSecret] = useState(null);

  useEffect(() => {
    // Create PaymentIntent as soon as the screen loads
    fetch('/api/stripe/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: [planSelection] }),
    })
      .then((res) => {
        return res?.json();
      })
      .then((data) => {
        setClientSecret(data.clientSecret);
      })
      .catch((e) => {
        console.error(e);
      });
  }, [planSelection]);

  return (
    <BookingFlow>
      {clientSecret === null ? (
        <div className="loader">Loading...</div>
      ) : (
        <Elements
          stripe={stripePromise as any}
          options={{
            clientSecret: clientSecret,
            loader: 'always',
            locale: 'es',
            appearance: {
              theme: 'flat',
              // variables: {
              //   colorPrimary: '#0570de',
              //   colorBackground: '#ffffff',
              //   colorText: '#30313d',
              //   colorDanger: '#df1b41',
              //   fontFamily: 'Ideal Sans, system-ui, sans-serif',
              //   spacingUnit: '2px',
              //   borderRadius: '4px',
              //   // See all possible variables below
              // },
            },
          }}
        >
          <Payment />
        </Elements>
      )}
    </BookingFlow>
  );
}
export default PaymentWithStripe;

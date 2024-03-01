import { useRouter } from 'next/router';
import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { useEffect, useState, useRef, MouseEvent } from 'react';
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
import usePageIdleTimeout from '../../../misc/usePageIdleTiemout';
import Image from 'next/image';
import SimpleTable from '../../../components/simple-table';
import { useScrollToTheTopOfThePage } from '../../../misc/useScrollTop';

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
      duration_in_min: planSelection.duration_in_min,
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

  const handleSubmit = async (event: MouseEvent) => {
    event.preventDefault();
    if (payButtonDisabled === true) return;
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
    }
  };

  if (mutationState.error) {
    console.error(mutationState.error);
  }

  return (
    <section className="payment__card-wrapper">
      {/* <section className="payment__card"> */}
      <PaymentElement onChange={changeHandler} />
      {/* </section> */}
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
  const { planSelection, userData, dayAndTime } = useStateContext();
  const [clientSecret, setClientSecret] = useState(null);
  const router = useRouter();

  // Maximum of 3 minutes to provide payment.
  usePageIdleTimeout({
    timeout: 180000,
    onTimeout: () => router.push('/payment/fail'),
  });
  useScrollToTheTopOfThePage();
  useEffect(() => {
    // Create 39 as soon as the screen loads
    fetch('/api/stripe/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: [planSelection] }),
    })
      .then((res) => {
        console.log('Response from payment intent??');
        console.log(res);
        // console.log('NextJS_UI : Call from stripe resolved');
        if (res.status >= 100 && res.status < 300) {
          return res?.json();
        }
        router.push({
          pathname: '/payment/fail',
        });
      })
      .then((data) => {
        setClientSecret(data.clientSecret);
      })
      .catch((e) => {
        console.error('Can not process payment intent in stripe');
        router.push({
          pathname: '/payment/fail',
        });
      });
  }, [planSelection, router]);

  // let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  // let dayFormated = '';
  // if (dayAndTime.date && dayAndTime.date.toLocaleDateString !== undefined) {
  //   dayFormated = dayAndTime.date.toLocaleDateString('es-MX', {
  //     weekday: 'long',
  //     year: 'numeric',
  //     month: 'long',
  //     day: 'numeric',
  //   });
  // }

  return (
    <BookingFlow>
      <div className="payment__page">
        <div className="payment">
          <section className="payment__plan-summary">
            <h1 className="section-booking__header">ORDEN POR PAGAR</h1>
            <SimpleTable
              data={[
                { title: 'Servicio', value: planSelection.name },
                // { title: 'Descripción', value: planSelection.description },
                // { title: 'Paciente', value: `${userData.firstName} ${userData.lastName}` },
                // { title: 'Correo', value: userData.email },
                { title: 'Cantidad', value: '1' },
                // { title: 'Día', value: dayFormated },
                // { title: 'Hora', value: dayAndTime.time },
                // { title: 'Zona Horaria', value: timeZone },
                { title: 'Total', value: `${planSelection.price}.00 mxn` },
              ]}
            />
            <div className="payment__plan-options">
              <p>Pagos con tarjeta via</p>
              <Image
                src="/logo/Stripe-wordmark-blurple-small.png"
                alt="Stripe Logo"
                className="payment__plan-stripe-logo"
                width={100}
                height={45}
              />
            </div>
          </section>

          <section className="payment__card">
            {/* <h2 className="payment__card-title">Datos de tarjeta</h2> */}
            {clientSecret === null || clientSecret === undefined ? (
              <div className="loader">Loading...</div>
            ) : (
              <Elements
                stripe={stripePromise as any}
                options={{
                  clientSecret: clientSecret,
                  loader: 'always',
                  locale: 'es',
                  appearance: {
                    theme: 'stripe',
                    variables: {
                      // colorPrimary: '#4cfc7b',
                      // colorBackground: '#ffffff',
                      // colorBackgroundText: '#000',
                      // colorText: '#044e7d',
                      // colorText: '#545454',
                      // colorPrimaryText: '#4cfc7b',
                      // colorTextSecondary: '#4cfc7b'
                      // colorDanger: '#df1b41',
                      // fontFamily: 'Ideal Sans, system-ui, sans-serif',
                      // fontSizeBase: '15px'
                      // spacingUnit: '2px',
                      // borderRadius: '4px',
                      // See all possible variables below
                    },
                  },
                }}
              >
                <Payment />
              </Elements>
            )}
          </section>
        </div>
      </div>
    </BookingFlow>
  );
}

export default PaymentWithStripe;

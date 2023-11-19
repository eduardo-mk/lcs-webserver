import Button from '../../components/button';
import { useRouter } from 'next/router';
import {
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { useState } from 'react';
import { PaymentIntentResult } from '@stripe/stripe-js';

interface PaymentProps {
  onPayHandler: (result: PaymentIntentResult) => void;
  planSelection: () => void;
  userData: any;
  dayAndTime: any;
}

function Payment({ onPayHandler, planSelection }: PaymentProps) {
  const [payButtonDisabled, setPayButtonDisabled] = useState(true);
  const [errorMsg, setErrorMessages] = useState(null);
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  function changeHandler(event) {
    console.log('Event from payment');
    console.log(event);
    if (event.complete) {
      setPayButtonDisabled(true);
      setErrorMessages(null);
    }
  }

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    setPayButtonDisabled(false);
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
    }
    let result: PaymentIntentResult;
    try {
      result = await stripe.confirmPayment({
        //`Elements` instance that was used to create the Payment Element
        elements,
        redirect: 'if_required',
        confirmParams: {
          return_url: `${process.env.HOST_URL}/payment/success`,
        },
      });
    } catch (e) {
      console.error('[Error Stripe] payments');
      console.error(e);
      await router.push('/payment/fail');
    }

    if (result?.paymentIntent?.status === 'succeeded') {
      onPayHandler(result);
      await router.push({
        pathname: `/payment/success`,
        query: {
          id: result.paymentIntent.id,
        },
      });
      setPayButtonDisabled(false);
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
      setPayButtonDisabled(true);
    }
  };

  return (
    <section className="payment">
      <PaymentElement onChange={changeHandler} />
      <Button
        className={!payButtonDisabled ? 'disabled' : ''}
        onClick={handleSubmit}
      >
        Pagar
      </Button>
      <section className="payment__card-error">
        <span className="payment__message">{errorMsg}</span>
      </section>
    </section>
  );
}

export default Payment;

import { useRouter } from 'next/router';
import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { useEffect, useState, useRef, MouseEvent, SyntheticEvent } from 'react';
import {
  PaymentIntentResult,
  StripeConstructorOptions,
  StripePaymentElementChangeEvent,
  loadStripe,
} from '@stripe/stripe-js';
import BookingFlow from '../../../compositions/booking';
import {
  useDispatchContext,
  useStateContext,
} from '../../../reducers/booking/context';
import { useMutation } from '@apollo/client';
import { SCHEDULE_APPOINTMENT } from '../../../graphql/queries';
import { formatDate } from '../../../misc';
import { ScheduleAppointmentArgs } from '../../../graphql/codegen_auto_generated';
import usePageIdleTimeout from '../../../misc/usePageIdleTiemout';
import Image from 'next/image';
import { useScrollToTheTopOfThePage } from '../../../misc/useScrollTop';
import useRedirectIfPageIs from '../../../misc/useRedirectIfPageIs';

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
  const dispatch = useDispatchContext();
  const [mutateFunction, mutationState] = useMutation(SCHEDULE_APPOINTMENT);
  const [payButtonDisabled, setPayButtonDisabled] = useState(true);
  const [errorMsg, setErrorMessages] = useState(null);
  const redirectToErrorPage = useRedirectIfPageIs(
    '/booking/payment',
    '/payment/fail'
  );
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  // Use a loading state to track the readiness of both elements
  const [elementsReady, setElementsReady] = useState(false);

  useEffect(() => {
    if (stripe && elements) {
      // Both stripe and elements are ready
      // setTimeout(() => {
      setElementsReady(true);
      // }, 1800);
    }
  }, [stripe, elements]);

  // useEffect(() => {
  //   dispatch({ type: 'current_step_inside_form/update', payload: 4 });
  // }, [dispatch]);

  async function onPayHandler(result: PaymentIntentResult) {
    const data: ScheduleAppointmentArgs = {
      patient_id: userData.userRegistrationId.toString(),
      service_id: planSelection.id,
      time_of_appt: dayAndTime.time,
      day_of_appt: formatDate(dayAndTime.date),
      duration_in_min: planSelection.duration_minutes,
      // duration_in_min: planSelection.duration_minutes,
      location: 'Online appointment',
      payment_intent_id: result.paymentIntent.id,
    };

    try {
      const mutationResult = await mutateFunction({ variables: { data } });
      console.log('Mutation Result', mutationResult);

      if (mutationResult.data.scheduleAppointment.error) {
        console.log('Mutation Result Error');
        return {
          error: true,
          successful: false,
          response: 'Error while trying to get payment',
        };
      }
      return {
        error: null,
        successful: true,
        response: mutationResult.data.scheduleAppointment,
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
      await redirectToErrorPage();
      // await router.replace('/payment/fail');
    }

    if (result?.paymentIntent?.status === 'succeeded') {
      const { error, successful, response } = await onPayHandler(result);
      console.log('Payment Intent Handler reponse');
      console.log({ error, successful, response });
      if (error === null && successful === true) {
        await router.replace({
          pathname: `/payment/success`,
          query: {
            id: result.paymentIntent.id,
          },
        });

        dispatch({
          type: 'reset',
        });
      } else {
        // await router.replace({
        //   pathname: `/payment/fail`,
        //   query: {
        //     id: result.paymentIntent.id,
        //     message: JSON.stringify(response),
        //   },
        // });
        await redirectToErrorPage();
      }
    }

    if (result?.error) {
      // console.error('[Error Stripe] payments');
      // console.error(result);
      switch (result.error.type) {
        case 'validation_error':
          setErrorMessages(result.error.message);
          break;
        case 'invalid_request_error':
          await redirectToErrorPage();
          // await router.replace({
          //   pathname: '/payment/fail',
          //   query: {
          //     payment_intent_id: result.error.payment_intent.id,
          //     message: result.error.message,
          //   },
          // });
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    if (mutationState.error) {
      // console.error('mutationState.status');
      // console.error(mutationState);
      redirectToErrorPage();
      // router.replace('/payment/fail');
    }
  }, [mutationState, redirectToErrorPage]);

  return (
    <section className="flex flex-col justify-center place-items-center">
      {elementsReady ? (
        <>
          <PaymentElement onChange={changeHandler} />
          <button
            type="button"
            disabled={payButtonDisabled}
            className="disabled:bg-slate-100 disabled:text-neutral-600 mt-8 w-28 h-10 rounded-md bg-teal-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            onClick={handleSubmit}
          >
            Pagar
          </button>
        </>
      ) : (
        <div className="animate-pulse bg-500 min-h-[15rem] rounded-md">
          <div className=" bg-teal-100 w-72">
            <div className="p-4 max-w-sm w-full mx-auto">
              <div className="flex space-x-4">
                <div className="flex-1 space-y-6 py-1">
                  <div className="h-12 bg-slate-200 rounded"></div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4 gap-">
                      <div className="h-12 bg-slate-200 rounded col-span-2"></div>
                      <div className="h-12 bg-slate-200 rounded col-span-1"></div>
                    </div>
                    <div className="h-12 bg-slate-200 rounded"></div>
                    <div className="grid grid-cols-3 gap-4 gap-">
                      <div className="h-12 bg-slate-200 rounded col-span-1"></div>
                      <div className="h-12 bg-slate-200 rounded col-span-2"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[3rem] w-[8rem] m-auto h-12 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
      )}
      <section className="payment__card-error">
        <span className="payment__message">{errorMsg}</span>
      </section>
    </section>
  );
}

function PaymentWithStripe() {
  const {
    planSelection,
    userData,
    dayAndTime,
    planSelectionIsValid,
    userDataIsValid,
    confirmData,
    dayAndTimeIsValid,
  } = useStateContext();
  const dispatch = useDispatchContext();
  const [clientSecret, setClientSecret] = useState(null);
  const redirectToErrorPage = useRedirectIfPageIs(
    '/booking/payment',
    '/payment/fail'
  );
  const router = useRouter();

  useEffect(() => {
    if (
      !(
        planSelectionIsValid &&
        userDataIsValid &&
        dayAndTimeIsValid &&
        confirmData
      )
    )
      router.push('/');
  }, [
    planSelectionIsValid,
    userDataIsValid,
    dayAndTimeIsValid,
    confirmData,
    router,
  ]);
  // Set progress bar step
  useEffect(() => {
    dispatch({ type: 'current_step_inside_form/update', payload: 4 });
  }, [dispatch]);

  // Maximum of 3 minutes to provide payment.
  usePageIdleTimeout({
    timeout: 180000,
    onTimeout: () => redirectToErrorPage(),
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
        // console.log('Response from payment intent??');
        // console.log(res);
        // console.log('NextJS_UI : Call from stripe resolved');
        if (res.status >= 100 && res.status < 300) {
          return res?.json();
        }
        // setFailPaymentModal(true);
        // router.replace({
        //   pathname: '/payment/fail',
        // });
        // redirectToErrorPage();
      })
      .then((data) => {
        console.log(`Payment intent: Client secret : ${data.clientSecret}`);
        setClientSecret(data.clientSecret);
      })
      .catch((e) => {
        console.error('Can not process payment intent in stripe');
        // setFailPaymentModal(true);
        router.replace({
          pathname: '/payment/fail',
        });
        // redirectToErrorPage();
      });
  }, [planSelection, router, redirectToErrorPage]);

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
      <div className="flex flex-col items-center">
        <div className="bg-teal-50 p-8 mt-8">
          <div className="px-4 sm:px-0">
            <h3 className="text-base font-semibold leading-7 text-neutral-900">
              Resumen de información
            </h3>
            <p className="mt-1 max-w-2xl text-xl leading-6 text-neutral-500">
              {planSelection.name}
            </p>
          </div>
          <div className="mt-6">
            <dl className="grid grid-cols-1 sm:grid-cols-2">
              <div className="border-t border-neutral-200 px-4 py-6 sm:col-span-1 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-neutral-900">
                  Correo electrónico
                </dt>
                <dd className="mt-1 text-sm leading-6 text-neutral-700 sm:mt-2">
                  {userData.email}
                </dd>
              </div>
              <div className="border-t border-neutral-200 px-4 py-6 sm:col-span-1 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-neutral-900">
                  Precio
                </dt>
                <dd className="mt-1 text-smleading-6 text-neutral-500 sm:mt-2">
                  {`$${planSelection.price}.00 mxn`}
                </dd>
              </div>
              <div className="border-t border-neutral-200 px-4 py-6 sm:col-span-2 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-neutral-900">
                  Descripción del plan
                </dt>
                <dd className="mt-1 text-sm leading-6 text-neutral-700 sm:mt-2">
                  {planSelection.description}
                </dd>
              </div>
            </dl>
            <div className="border-t border-neutral-200 px-4 py-6 sm:col-span-2 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-neutral-900 flex flex-col justify-center items-center">
                <span className="text-lg">
                  Pago seguro con tarjeta mediante:
                </span>
                <Image
                  src="/logo/Stripe-wordmark-blurple-small.png"
                  alt="Stripe Logo"
                  className="payment__plan-stripe-logo"
                  width={100}
                  height={45}
                />
                <p className="text-neutral-700 font-normal max-w-lg mb-8">
                  Para ofrecer una experiencia de pago segura y confiable,
                  utilizamos la tecnología de Stripe, una plataforma líder en
                  pagos en línea, para procesar todas las transacciones con
                  tarjeta. De esta manera, garantizamos que tus datos estén
                  protegidos bajo los más altos estándares de seguridad
                </p>
              </dt>
              <dd className="flex flex-col items-center flexmt-1 text-sm leading-6 text-neutral-700 sm:mt-8">
                {typeof clientSecret !== 'string' ? (
                  <div className="animate-pulse bg-500 min-h-[15rem] rounded-md">
                    <div className=" bg-teal-100 w-72">
                      <div className="p-4 max-w-sm w-full mx-auto">
                        <div className="flex space-x-4">
                          <div className="flex-1 space-y-6 py-1">
                            <div className="h-12 bg-slate-200 rounded"></div>
                            <div className="space-y-3">
                              <div className="grid grid-cols-3 gap-4 gap-">
                                <div className="h-12 bg-slate-200 rounded col-span-2"></div>
                                <div className="h-12 bg-slate-200 rounded col-span-1"></div>
                              </div>
                              <div className="h-12 bg-slate-200 rounded"></div>
                              <div className="grid grid-cols-3 gap-4 gap-">
                                <div className="h-12 bg-slate-200 rounded col-span-1"></div>
                                <div className="h-12 bg-slate-200 rounded col-span-2"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-[3rem] w-[8rem] m-auto h-12 bg-slate-200 rounded"></div>
                      </div>
                    </div>
                  </div>
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
              </dd>
            </div>
          </div>
        </div>
      </div>
    </BookingFlow>
  );
}

export default PaymentWithStripe;

import BookingFlow from '../../../compositions/booking';
import { useRouter } from 'next/router';
import Plan from '../../../components/plan-card';
import { MouseEvent, useEffect } from 'react';
import { usePlans } from '../../../graphql/hooks';
import {
  useDispatchContext,
  useStateContext,
} from '../../../reducers/booking/context';
import { useScrollToTheTopOfThePage } from '../../../misc/useScrollTop';
import Image from 'next/image';
import useFormGoNextStep from '../../../misc/useFormGoNextStep';

const NEXT_PAGE = '/booking/day-time';

function Plans() {
  useScrollToTheTopOfThePage();
  const { userDataIsValid } = useStateContext();
  const dispatch = useDispatchContext();
  const { plans, error, loading } = usePlans(4, 0);
  const goNextStep = useFormGoNextStep();
  const router = useRouter();

  useEffect(() => {
    if (!userDataIsValid) router.push('/');
  }, [userDataIsValid, router]);

  // Set progress bar step
  useEffect(() => {
    dispatch({ type: 'current_step_inside_form/update', payload: 1 });
  }, [dispatch]);

  useEffect(() => {
    if (loading) dispatch({ type: 'api/loading', payload: true });
    else {
      setTimeout(() => {
        dispatch({ type: 'api/loading', payload: false });
      }, 800);
    }
  }, [loading, dispatch]);

  function selectionHandler(event: MouseEvent) {
    const planIdFormClickedElement = (event.target as HTMLElement).dataset.id;
    const planSelected = plans.find(({ id }) => {
      return id === planIdFormClickedElement;
    });
    dispatch({ type: 'plan_selection/update', payload: planSelected });
    dispatch({ type: 'plan_selection/validation', payload: true });
    // dispatch({ type: 'current_step_inside_form/update', payload: 2 });
    // router.push(NEXT_PAGE);
    goNextStep(NEXT_PAGE);
  }

  if (error) {
    return (
      <div
        style={{
          marginTop: '50px',
          zIndex: '10000',
          height: '400px',
          backgroundColor: 'black',
        }}
      >
        {JSON.stringify({ plans, error, loading })}
      </div>
    );
  }

  return (
    <BookingFlow loading={loading}>
      {plans?.map((plan) => (
        <div
          key={plan.id}
          className="bg-teal-50 p-8 mb-4 flex flex-col my-8 sm:rounded-lg ring-1 ring-neutral-200"
        >
          <div className="px-4 sm:px-0 flex sm:flex-row text-center flex-col items-center justify-between">
            <h3 className="text-xl font-semibold leading-7 text-neutral-900">
              {plan.name}
            </h3>
            {/* <Image
              src={`/images/consulta_logo_${plan.id}.png`}
              className="h-16 w-16 flex-none rounded-lg bg-teal-50 object-cover"
              alt="logo"
              width={120}
              height={120}
            /> */}
            {/* <p className="mt-1 max-w-2xl text-sm leading-5 text-neutral-500">
              Personal details and application.
            </p> */}
            <button
              type="button"
              className=" mt-4 w-28 h-10 rounded-md bg-teal-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
              data-id={plan.id}
              data-name-of-plan={plan.name}
              onClick={selectionHandler}
            >
              Seleccionar
            </button>
          </div>
          <div className="mt-6 border-t border-neutral-100">
            <dl className="divide-y divide-neutral-200">
              <div className="px-4 py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:px-0">
                <dt className="bg text-sm font-medium leading-5 text-neutral-900">
                  Descripción
                </dt>
                <dd className="mt-1 text-sm leading-5 text-neutral-700 sm:col-span-5 sm:mt-0">
                  {plan.description}
                </dd>
              </div>
              <div className="px-4 py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:px-0">
                <dt className="bg text-sm font-medium leading-5 text-neutral-900">
                  Detalles
                </dt>
                <dd className="mt-1 text-sm leading-5 text-neutral-700 sm:col-span-5 sm:mt-0">
                  <ul>
                    {plan.details.map((detail, index) => (
                      <li key={index} className="list-disc">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
              <div className="px-4 py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:px-0">
                <dt className="bg text-sm font-medium leading-5 text-neutral-900">
                  Duración
                </dt>
                <dd className="mt-1 text-sm leading-5 text-neutral-700 sm:col-span-5 sm:mt-0">
                  {plan.duration_in_min} min
                </dd>
              </div>
              <div className="px-4 py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:px-0">
                <dt className="bg text-sm font-medium leading-5 text-neutral-900">
                  Precio
                </dt>
                <dd className="mt-1 text-md leading-5 text-neutral-900 sm:col-span-1 sm:mt-0">
                  <span className="font-bold">${plan.price} pesos mx</span>
                </dd>
                <dd className="mt-1 text-sm leading-5 text-neutral-700 sm:col-start-6 sm:col-span-1 sm:mt-0"></dd>
              </div>
            </dl>
          </div>
        </div>
      ))}

      {/* <ul role="list" className="my-8 grid grid-cols-1 gap-x-6 gap-y-8">
        {plans?.map((plan) => (
          <li
            key={plan.id}
            className="bg-teal-50  overflow-hidden rounded-xl last:{pb-72}"
          >
            <div className="flex justify-between gap-x-4 border-b border-neutral-900/5  p-4">
              <Image
                src={`/images/consulta_logo_${plan.id}.png`}
                className="h-16 w-16 flex-none rounded-lg bg-teal-50 object-cover"
                alt="logo"
                width={120}
                height={120}
              />
              <img
                alt={plan.name}
                src={plan.imageUrl}
                className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-neutral-900/10"
              />
              <div className="self-center text-lg font-medium leading-5 text-neutral-900">
                {plan.name
                  .replace(/\b([Cc]onsulta\s+de|[Ii]nicio\s+de|de)\b/g, '')
                  .split(' ')
                  .map((word) => {
                    if (word.length > 3) {
                      return word.charAt(0).toUpperCase() + '' + word.slice(1);
                    }
                    return word;
                  })
                  .join(' ')}
              </div>
              <button
                type="button"
                className="self-center block w-28 h-10 rounded-md bg-teal-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                data-id={plan.id}
                data-name-of-plan={plan.name}
                onClick={selectionHandler}
              >
                Seleccionar
              </button>
            </div>
            <dl className="-my-3 divide-y px-6 py-4 text-sm leading-5">
              <div className="flex justify-start gap-x-4 py-3">
                <dt className="min-w-24 text-neutral-500">Descripción</dt>
                <dd className="text-neutral-700 text-sm">{plan.description}</dd>
              </div>

              <div className="flex justify-start gap-x-4 py-3">
                <dt className="min-w-24 text-neutral-500">Detalles</dt>
                <dd className="text-neutral-700 text-sm">{plan.details}</dd>
              </div>

              <div className="flex justify-start gap-x-4 py-3">
                <dt className="min-w-24 text-neutral-500">Duración</dt>
                <dd className="text-neutral-700">
                  <time dateTime={plan.duration_in_min}>
                    <span className="text-sm">
                      {plan.duration_in_min} minutos
                    </span>
                  </time>
                </dd>
              </div>

              <div className="flex justify-start gap-x-4 py-3">
                <dt className="min-w-24 text-neutral-500">Precio</dt>
                <dd className="flex items-start gap-x-2">
                  <div className="font-bold text-neutral-900">
                    ${plan.price}.00 pesos mx
                  </div>
                </dd>
              </div>
            </dl>
          </li>
        ))}
      </ul> */}
      {/* <section className="small-cards">
        <h1 className="section-booking__header">
          Selecciona un plan nutricional
        </h1>
        {Array.isArray(plans) &&
          plans.map((info) => {
            return (
              <Plan
                key={info.id}
                info={info}
                selectedPlan={state.planSelection?.id}
                clickHandler={selectionHandler}
              />
            );
          })}
      </section> */}
    </BookingFlow>
  );
}

export default Plans;

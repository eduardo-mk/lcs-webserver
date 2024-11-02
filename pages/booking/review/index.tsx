import {
  useDispatchContext,
  useStateContext,
} from '../../../reducers/booking/context';
import Button from '../../../components/button-white';
import { useEffect, useState } from 'react';
import BookingFlow from '../../../compositions/booking';
import { useRouter } from 'next/router';
import { reviewApplicationContent, translate_24_to_12 } from '../../../content';
import SimpleTable from '../../../components/simple-table';
import { useScrollToTheTopOfThePage } from '../../../misc/useScrollTop';
import useFormGoNextStep from '../../../misc/useFormGoNextStep';

const NEXT_PAGE = '/booking/payment';

function LastCheck() {
  const {
    userData,
    planSelection,
    dayAndTime,
    planSelectionIsValid,
    userDataIsValid,
    dayAndTimeIsValid,
  } = useStateContext();
  const router = useRouter();
  const dispatch = useDispatchContext();
  const { confirmData } = useStateContext();
  const goNextStep = useFormGoNextStep();

  // Set progress bar step
  useEffect(() => {
    dispatch({ type: 'current_step_inside_form/update', payload: 3 });
  }, [dispatch]);

  useEffect(() => {
    if (!(planSelectionIsValid && userDataIsValid && dayAndTimeIsValid))
      router.push('/');
  }, [planSelectionIsValid, dayAndTimeIsValid]);

  useScrollToTheTopOfThePage();
  const { date, time } = dayAndTime;
  let dayFormated = '';
  let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  if (date && date.toLocaleDateString !== undefined) {
    dayFormated = date.toLocaleDateString('es-MX', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  const firstName =
    userData.firstName.charAt(0).toUpperCase() + userData.firstName.slice(1);
  const lastName =
    userData.lastName.charAt(0).toUpperCase() + userData.lastName.slice(1);

  function confirmationHandler() {
    dispatch({ type: 'user/confirmation', payload: true });
    // router.push(NEXT_PAGE);
    goNextStep(NEXT_PAGE);
  }

  return (
    <BookingFlow>
      <div className="flex flex-col items-center ">
        <div className="bg-teal-50 md:min-w-[28rem] p-8 mt-8 sm:rounded-lg ring-1 ring-neutral-200">
          <div className="px-4 sm:px-0">
            <h3 className="text-base font-semibold leading-7 text-neutral-800">
              Resumen de información
            </h3>
            <p className="mt-1 max-w-2xl text-xl leading-6 text-neutral-600">
              {planSelection.name}
            </p>
          </div>
          <div className="mt-6">
            <dl className="grid grid-cols-1 sm:grid-cols-2">
              <div className="border-t border-neutral-200 px-4 py-6 sm:col-span-1 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-neutral-800">
                  Nombre completo
                </dt>
                <dd className="mt-1 text-sm leading-6 text-neutral-800 sm:mt- truncate">
                  {`${firstName} ${lastName}`}
                </dd>
              </div>
              <div className="border-t border-neutral-200 px-4 py-6 sm:col-span-1 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-neutral-800">
                  Correo electrónico
                </dt>
                <dd className="mt-1 text-sm leading-6 text-neutral-800 sm:mt-2">
                  {userData.email}
                </dd>
              </div>
              <div className="border-t border-neutral-200 px-4 py-6 sm:col-span-1 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-neutral-800">
                  Fecha
                </dt>
                <dd className="mt-1 text-sm leading-6 text-neutral-800 sm:mt-2">
                  {dayFormated}
                </dd>
              </div>

              <div className="border-t border-neutral-200 px-4 py-6 sm:col-span-1 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-neutral-800">
                  Hora
                </dt>
                <dd className="mt-1 text-sm leading-6 text-neutral-800 sm:mt-2">
                  {time}
                </dd>
              </div>
              <div className="border-t border-neutral-200 px-4 py-6 sm:col-span-1 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-neutral-800">
                  Zona horaria
                </dt>
                <dd className="mt-1 text-sm leading-6 text-neutral-800 sm:mt-2">
                  {timeZone}
                </dd>
              </div>
              <div className="border-t border-neutral-200 px-4 py-6 sm:col-span-1 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-neutral-800">
                  Precio
                </dt>
                <dd className="mt-1 text-sm leading-6 text-neutral-800 sm:mt-2">
                  {`$${planSelection.price}.00 mxn`}
                </dd>
              </div>
              <div className="border-t border-neutral-200 px-4 py-6 sm:col-span-2 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-neutral-800">
                  Descripción del plan
                </dt>
                <dd className="mt-1 text-sm leading-6 text-neutral-800 sm:mt-2">
                  {planSelection.description}
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <button
          type="button"
          className="mt-8 w-28 h-10 rounded-md bg-teal-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
          onClick={confirmationHandler}
        >
          Confirmar
        </button>
      </div>
    </BookingFlow>
  );
}

export default LastCheck;

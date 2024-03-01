import {
  useDispatchContext,
  useStateContext,
} from '../../../reducers/booking/context';
import Button from '../../../components/button';
import { useEffect } from 'react';
import BookingFlow from '../../../compositions/booking';
import { useRouter } from 'next/router';
import { reviewApplicationContent, translate_24_to_12 } from '../../../content';
import SimpleTable from '../../../components/simple-table';
import { useScrollToTheTopOfThePage } from '../../../misc/useScrollTop';
const NEXT_PAGE = '/booking/payment';

function LastCheck() {
  const state = useStateContext();
  const router = useRouter();
  const { userData, planSelection, dayAndTime } = state;
  const dispatch = useDispatchContext();

  useEffect(() => {
    dispatch({ type: 'current_step_inside_form/update', payload: 3 });
  }, [dispatch]);
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
    dispatch({ type: 'current_step_inside_form/update', payload: 4 });
    router.push(NEXT_PAGE);
  }

  return (
    <BookingFlow>
      <div className="last-check__page">
        <section className="last-check">
          <h1 className="section-booking__header">Revisa tu información</h1>
          <SimpleTable
            data={[
              { title: 'Servicio', value: planSelection.name },
              { title: 'Descripción', value: planSelection.description },
              { title: 'Paciente', value: `${firstName} ${lastName}` },
              { title: 'Correo', value: userData.email },
              { title: 'Día', value: dayFormated },
              { title: 'Hora', value: time },
              { title: 'Zona Horaria', value: timeZone },
              { title: 'Precio', value: `${planSelection.price}.00 mxn` },
            ]}
          />
          <Button onClick={confirmationHandler}>Confirmar</Button>
        </section>
      </div>
    </BookingFlow>
  );
}

export default LastCheck;

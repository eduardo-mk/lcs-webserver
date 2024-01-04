import { useState, useContext, useEffect } from 'react';
import Button from '../../../components/button';
import Calendar from '../../../components/calendar';
import TimeSessionPicker from '../../../components/time-session-picker';
import {
  useDispatchContext,
  useStateContext,
} from '../../../reducers/booking/context';
import {
  useCalendarAvailableDays,
  useCalendarAvailableHours,
} from '../../../graphql/hooks';
import BookingFlow from '../../../compositions/booking';
import { useRouter } from 'next/router';

const _1_day = 3600 * 1000 * 24;
const NEXT_PAGE = '/booking/review';

function DayAndTime() {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const state = useStateContext();
  const dispatch = useDispatchContext();
  const router = useRouter();

  const [date, setDate] = useState(new Date(Date.now() + _1_day));
  const [time, setTime] = useState(null);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const daysAvailable = useCalendarAvailableDays();
  const hoursAvailable = useCalendarAvailableHours(date, timeZone);

  useEffect(() => {
    dispatch({ type: 'current_step_inside_form/update', payload: 2 });
  }, [dispatch]);

  function dateHandler(date: Date) {
    setDate(date);
    setShowTimePicker(true);
    if (!daysAvailable.loading) {
      // return <BookingFlow>
      //   <div className="loader">Loading...</div>
      // </BookingFlow>
    }
  }

  function timeHandler(time: string) {
    setTime(time);
  }

  function handlerForDayAndTimeSelection() {
    dispatch({
      type: 'day_and_time/update',
      payload: {
        date,
        time: time ?? hoursAvailable.hours[0],
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
    });
    dispatch({ type: 'day_and_time/validation', payload: true });
    dispatch({ type: 'current_step_inside_form/update', payload: 3 });
    router.push(NEXT_PAGE);
  }

  if (daysAvailable.error) return <h1>Error while trying to load days</h1>;
  if (daysAvailable.loading) {
    return (
      <BookingFlow>
        <div className="loader">Loading...</div>
      </BookingFlow>
    );
  }

  return (
    <BookingFlow>
      <section className="day-time__wrapper">
        <h1 className="section-booking__header">
          Elige el día y después la hora
        </h1>
        <Calendar
          timeAvailable={daysAvailable.days}
          onSelectionHandler={dateHandler}
        />
        {showTimePicker && !hoursAvailable.loading ? (
          <>
            <TimeSessionPicker
              title={''}
              onSelectionHandler={timeHandler}
              hours={hoursAvailable.hours}
            />
            <Button
              className="btn--classic"
              type="button"
              onClick={handlerForDayAndTimeSelection}
            >
              Seleccionar
            </Button>
          </>
        ) : null}
      </section>
    </BookingFlow>
  );
}

export default DayAndTime;

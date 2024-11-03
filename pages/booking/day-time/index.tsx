import { useState, useContext, useEffect } from 'react';
import Button from '../../../components/button-white';
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
import useFormGoNextStep from '../../../misc/useFormGoNextStep';

const _1_day = 3600 * 1000 * 24;
const NEXT_PAGE = '/booking/review';

function DayAndTime() {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const { planSelectionIsValid, userDataIsValid } = useStateContext();
  const dispatch = useDispatchContext();
  const router = useRouter();
  const goNextStep = useFormGoNextStep();

  const [date, setDate] = useState(new Date(Date.now() + _1_day));
  const [time, setTime] = useState(null);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const daysAvailable = useCalendarAvailableDays();
  const hoursAvailable = useCalendarAvailableHours(date, timeZone);

  // Set progress bar step
  useEffect(() => {
    dispatch({ type: 'current_step_inside_form/update', payload: 2 });
  }, [dispatch]);

  useEffect(() => {
    if (!(planSelectionIsValid && userDataIsValid)) router.push('/');
  }, [planSelectionIsValid]);

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
    // dispatch({ type: 'current_step_inside_form/update', payload: 3 });
    // router.push(NEXT_PAGE);
    goNextStep(NEXT_PAGE);
  }

  if (daysAvailable.error) return <h1>Error while trying to load days</h1>;
  // if (daysAvailable.loading) {
  //   return (
  //     // <BookingFlow>
  //     <div className="loader">Loading...</div>
  //     // </BookingFlow>
  //   );
  // }

  return (
    <BookingFlow>
      <section className="day-time__page">
        <Calendar
          timeAvailable={daysAvailable.days}
          onSelectionHandler={dateHandler}
        />
        <section className="flex flex-col items-center justify-center day-time__time-wrapper ">
          {showTimePicker && !hoursAvailable.loading ? (
            <>
              <TimeSessionPicker
                title={''}
                onSelectionHandler={timeHandler}
                hours={hoursAvailable.hours}
              />
              <button
                className="self-center block w-28 mt-8 h-10 rounded-md bg-teal-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 "
                type="button"
                onClick={handlerForDayAndTimeSelection}
              >
                Seleccionar
              </button>
              {/* <Button
              >
                SELECCIONAR
              </Button> */}
            </>
          ) : null}
        </section>
      </section>
    </BookingFlow>
  );
}

export default DayAndTime;

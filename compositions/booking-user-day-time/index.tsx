import { useState, useContext } from 'react';
import Button from '../../components/button';
import Calendar from '../../components/calendar';
import TimeSessionPicker from '../../components/time-session-picker';
import { useStateContext } from '../../reducers/booking/context';
import {
  useCalendarAvailableDays,
  useCalendarAvailableHours,
} from '../../graphql/hooks';

const _1_day = 3600 * 1000 * 24;

function DayAndTime({ selectionHandler }) {
  const ctx = useStateContext();

  const [date, setDate] = useState(new Date(Date.now() + _1_day));
  const [time, setTime] = useState(null);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const daysAvailable = useCalendarAvailableDays();
  const hoursAvailable = useCalendarAvailableHours(date);

  function dateHandler(date: Date) {
    setDate(date);
    setShowTimePicker(true);
    if (!daysAvailable.loading) {
    }
  }

  function timeHandler(time: string) {
    setTime(time);
  }

  function handlerForDayAndTimeSelection() {
    if (!time) selectionHandler(date, hoursAvailable.hours[0]);
    else selectionHandler(date, time);
  }

  if (daysAvailable.error) return <h1>Error while trying to load days</h1>;
  if (daysAvailable.loading) return <h1>Loading...</h1>;

  return (
    <section className="day-time__wrapper">
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
  );
}

export default DayAndTime;

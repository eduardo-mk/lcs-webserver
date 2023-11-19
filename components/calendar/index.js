import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const _1_day = 3600 * 1000 * 24;
const tomorrow = new Date(Date.now() + _1_day);
const maxDateMockProp = new Date(Date.now() + _1_day * 30);

function CalendarSection({ timeAvailable, onSelectionHandler }) {
  const [value, setDate] = useState(undefined);
  const [availableDays, setAvailableDays] = useState(() =>
    timeAvailable.map((day) => new Date(day).getDate())
  );

  function daySelectionHandler(nextValue) {
    setDate(nextValue);
  }
  function tileClassName({ date, view }) {
    if (view === 'month') {
      return !availableDays.includes(date.getDate());
    }
  }

  return (
    <div className="calendar">
      <Calendar
        locale="es-ES"
        // activeStartDate={tomorrow}
        // onChange={daySelectionHandler}
        // allowPartialRange={false}
        tileDisabled={tileClassName}
        // tileClassName={tileClassName}
        minDate={tomorrow}
        maxDate={maxDateMockProp}
        onChange={onSelectionHandler}
        value={value}
        className={'day-picker'}
      />
    </div>
  );
}

export default CalendarSection;

function TimeSessionPicker({ title, onSelectionHandler, hours }) {
  console.log(hours)
  function onChangeHandler(e) {
    onSelectionHandler(e.target.value);
  }

  return (
    <div className="timepicker">
      <div className="timepicker__title">
        <label htmlFor="timepicker">{title}</label>
      </div>
      <select
        onChange={onChangeHandler}
        defaultValue={hours[0]}
        className="timepicker__selection"
        id="timepicker"
      >
        {hours.map((hour) => {
          return (
            <option key={hour} value={hour}>
              {hour}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default TimeSessionPicker;

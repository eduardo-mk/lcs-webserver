function TimeZonePicker({ title }) {
  return (
    <div className="timezone">
      <div className="timezone__title">
        <label htmlFor="timezones-picker">{title}</label>
      </div>
      <select className="timezone__selection" id="timezone-picker">
        <option value="PST">PST - Pacific Standard Time (default)</option>
        <option value="CST">CST - Central Standard Time</option>
        <option value="EST">EST - East Standard Time</option>
      </select>
    </div>
  );
}

export default TimeZonePicker;

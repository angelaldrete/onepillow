import React from "react";
import CalendarMonth from "./components/Calendar";

const Calendar = () => {
  return (
    <div className="calendar">
      <header className="calendar__header">
        <h1 className="calendar__title">Calendar</h1>
      </header>
      <CalendarMonth />
    </div>
  );
};

export default Calendar;

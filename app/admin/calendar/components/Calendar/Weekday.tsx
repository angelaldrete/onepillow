import React from "react";

interface WeekdayProps {
  weekday: string;
}

const Weekday: React.FC<WeekdayProps> = ({ weekday }) => {
  return (
    <>
      <div className="calendar-weekday--tablet">{weekday}</div>
      <div className="calendar-weekday">{weekday[0]}</div>
    </>
  );
};

export default Weekday;

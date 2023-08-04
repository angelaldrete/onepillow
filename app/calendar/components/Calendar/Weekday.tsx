import React from "react";

interface WeekdayProps {
  weekday: string;
}

const Weekday: React.FC<WeekdayProps> = ({ weekday }) => {
  return <div className="calendar-weekday">{weekday}</div>;
};

export default Weekday;

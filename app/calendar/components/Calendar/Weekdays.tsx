import React from "react";
import Weekday from "./Weekday";

interface WeekdaysProps {
  weekdays: string[];
}

const Weekdays: React.FC<WeekdaysProps> = ({ weekdays }) => {
  return (
    <ul className="calendar-month__weekdays">
      {weekdays.map((weekday, index) => (
        <li key={index} className="calendar-month__weekdays__weekday">
          <Weekday weekday={weekday} />
        </li>
      ))}
    </ul>
  );
};

export default Weekdays;

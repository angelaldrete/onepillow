import React from "react";
import Day from "./Day";

interface DaysProps {
  days: number[];
}

const Days: React.FC<DaysProps> = ({ days }) => {
  return (
    <ul className="calendar-month__days">
      {days.map((day) => (
        <li key={day} className="calendar-month__days__day">
          <Day day={day} />
        </li>
      ))}
    </ul>
  );
};

export default Days;

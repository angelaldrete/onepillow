import React from "react";
import Day from "./Day";

interface DaysProps {
  days: { day: number; fullDate: Date }[];
  weekdays: string[];
}

const Days: React.FC<DaysProps> = ({ weekdays, days }) => {
  return (
    <ul className="calendar-month__days">
      {days.map((dayInfo, index) => (
        <li
          key={index}
          className="calendar-month__days__day"
          style={{
            gridColumn:
              weekdays.indexOf(weekdays[dayInfo.fullDate.getDay()]) + 1,
          }}
        >
          <Day day={dayInfo.day} />
        </li>
      ))}
    </ul>
  );
};

export default Days;

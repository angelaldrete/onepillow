import React from "react";
import Day from "./Day";

interface DaysProps {
  days: { day: number; fullDate: Date; reservationsLength: number }[];
  weekdays: string[];
}

const Days: React.FC<DaysProps> = ({ weekdays, days }) => {
  return (
    <ul className="calendar-month__days">
      {days.map((dayInfo, index) => (
        <li
          key={index}
          className={
            dayInfo.fullDate.toDateString() === new Date().toDateString()
              ? "calendar-month__days__day calendar-month__days__day--today"
              : dayInfo.reservationsLength > 0 && dayInfo.reservationsLength < 5
              ? "calendar-month__days__day calendar-month__days__day--low"
              : dayInfo.reservationsLength >= 5 &&
                dayInfo.reservationsLength < 8
              ? "calendar-month__days__day calendar-month__days__day--medium"
              : dayInfo.reservationsLength <= 10
              ? "calendar-month__days__day calendar-month__days__day--full"
              : "calendar-month__days__day"
          }
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

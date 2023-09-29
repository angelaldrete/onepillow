import React from "react";
import Day from "./Day";
import Reservation from "@/app/admin/reservations/types/Reservation";

interface DaysProps {
  days: { day: number; fullDate: Date }[];
  weekdays: string[];
  reservations: Reservation[];
}

const Days: React.FC<DaysProps> = ({ weekdays, days, reservations }) => {
  return (
    <ul className="calendar-month__days">
      {days.map((dayInfo, index) => (
        <li
          key={dayInfo.day}
          style={{
            gridColumn:
              weekdays.indexOf(weekdays[dayInfo.fullDate.getDay()]) + 1,
            animationDelay: `${index * 0.1}s`,
          }}
        >
          <Day
            day={dayInfo.day}
            reservations={reservations}
            fullDate={dayInfo.fullDate}
          />
        </li>
      ))}
    </ul>
  );
};

export default Days;

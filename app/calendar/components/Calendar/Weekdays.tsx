import React from "react";
import Weekday from "./Weekday";

const Weekdays = () => {
  const weekdays: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

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

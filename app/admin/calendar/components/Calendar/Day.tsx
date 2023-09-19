import React from "react";

interface DayProps {
  day: number;
}

const Day: React.FC<DayProps> = ({ day }) => {
  return (
    <div className="calendar-day">
      <div className="calendar-day__number">{day}</div>
    </div>
  );
};

export default Day;

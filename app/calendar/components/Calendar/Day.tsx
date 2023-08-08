import React from "react";

interface DayProps {
  day: number;
}

const Day: React.FC<DayProps> = ({ day }) => {
  return (
    <div className="calendar-day">
      <div
        className="calendar-day__number"
        style={
          (day + 1) % 7 === 0
            ? {
                borderBottom: "0.1rem solid black",
                borderRight: "0.1rem solid black",
              }
            : {
                borderBottom: "0.1rem solid black",
                borderRight: "0.1rem solid black",
              }
        }
      >
        {day + 1}
      </div>
    </div>
  );
};

export default Day;

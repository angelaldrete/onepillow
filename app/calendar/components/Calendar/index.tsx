"use client";
import React, { useEffect } from "react";
import Header from "./Header";
import Days from "./Days";
import Weekdays from "./Weekdays";
import MonthControlsAction from "../../types/MonthControlsAction";
import AddButton from "@/app/components/Button/AddButton";

const CalendarMonth = () => {
  const [date, setDate] = React.useState(new Date());
  const [month, setMonth] = React.useState(date.getMonth() + 1);
  const [year, setYear] = React.useState(date.getFullYear());
  const [daysInMonth, setDaysInMonth] = React.useState(
    new Date(year, month, 0).getDate()
  );

  const handleMonthControls = (action: MonthControlsAction) => {
    if (action === MonthControlsAction.Previous) {
      setMonth(month - 1);
      setDaysInMonth(new Date(year, month - 1, 0).getDate());
    } else {
      setMonth(month + 1);
      setDaysInMonth(new Date(year, month + 1, 0).getDate());
    }
  };

  const weekdays: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const daysInMonthArray: { day: number; fullDate: Date }[] = Array.from(
    { length: daysInMonth },
    (_, index) => {
      const day = index + 1;
      const fullDate = new Date(year, month - 1, day); // month is 0-indexed
      return { day, fullDate };
    }
  );

  return (
    <div className="calendar-month">
      <section className="calendar-month__body">
        <Header
          handleMonthControls={(action: MonthControlsAction) =>
            handleMonthControls(action)
          }
          month={month}
          year={year}
        />
        <Weekdays weekdays={weekdays} />
        <Days weekdays={weekdays} days={daysInMonthArray} />
      </section>
      <AddButton onClick={() => console.log("clicked")} />
    </div>
  );
};

export default CalendarMonth;

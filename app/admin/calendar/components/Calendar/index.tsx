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

  const daysInMonthArray: {
    day: number;
    fullDate: Date;
    reservationsLength: number;
  }[] = Array.from({ length: daysInMonth }, (_, index) => {
    const day = index + 1;
    const fullDate = new Date(year, month - 1, day);
    const reservationsLength = Math.floor(Math.random() * 10) + 1;
    return { day, fullDate, reservationsLength };
  });

  return (
    <div className="calendar-month">
      <div className="calendar-month__body">
        <Header
          handleMonthControls={(action: MonthControlsAction) =>
            handleMonthControls(action)
          }
          month={month}
          year={year}
        />
        <Weekdays weekdays={weekdays} />
        <Days weekdays={weekdays} days={daysInMonthArray} />
        <ul className="calendar-month__legends">
          <li className="calendar-month__legends__legend">
            <span className="calendar-month__legends__legend--low">1-4</span>
          </li>
          <li className="calendar-month__legends__legend">
            <span className="calendar-month__legends__legend--medium">5-9</span>
          </li>
          <li className="calendar-month__legends__legend">
            <span className="calendar-month__legends__legend--full">Full</span>
          </li>
        </ul>
      </div>
      <AddButton to="/admin/reservations/new" />
    </div>
  );
};

export default CalendarMonth;

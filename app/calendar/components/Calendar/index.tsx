"use client";
import React from "react";
import Header from "./Header";
import Days from "./Days";
import Weekdays from "./Weekdays";
import MonthControlsAction from "../../types/MonthControlsAction";
import AddButton from "@/app/components/Button/AddButton";

const CalendarMonth = () => {
  const [date, setDate] = React.useState(new Date());
  const [month, setMonth] = React.useState(date.getMonth());
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
        <Weekdays />
        <Days days={Array.from(Array(daysInMonth).keys())} />
      </section>
      <AddButton
        onClick={() => console.log("clicked")}
        icon={<i className="fas fa-plus"></i>}
      />
    </div>
  );
};

export default CalendarMonth;

"use client";
import React from "react";
import Header from "./Header";
import Days from "./Days";
import Weekdays from "./Weekdays";
import MonthControlsAction from "../../types/MonthControlsAction";
import AddButton from "@/app/components/Button/AddButton";
import Reservation from "@/app/admin/reservations/types/Reservation";

const CalendarMonth = () => {
  const [date, setDate] = React.useState(new Date());
  const [month, setMonth] = React.useState(date.getMonth() + 1);
  const [year, setYear] = React.useState(date.getFullYear());
  const [daysInMonth, setDaysInMonth] = React.useState(
    new Date(year, month, 0).getDate()
  );
  const [reservations, setReservations] = React.useState<Reservation[]>([]);

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

  const daysInMonthArray = [];

  for (let i = 1; i <= daysInMonth; i++) {
    const day = i;
    const fullDate = new Date(year, month - 1, day);
    daysInMonthArray.push({ day, fullDate });
  }

  React.useEffect(() => {
    setDaysInMonth(new Date(year, month, 0).getDate());
    fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/reservation/calendar/${month}/${year}`
    )
      .then((res) => res.json())
      .then((data) => setReservations(data.reservations))
      .catch((err) => console.log(err));
  }, [month, year]);

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
        <Days
          weekdays={weekdays}
          days={daysInMonthArray}
          reservations={reservations}
        />
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

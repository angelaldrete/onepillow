import React from "react";
import MonthControlsAction from "../../types/MonthControlsAction";

interface HeaderProps {
  handleMonthControls: (action: MonthControlsAction) => void;
  month: number;
  year: number;
}

const Header: React.FC<HeaderProps> = ({
  handleMonthControls,
  month,
  year,
}) => {
  return (
    <div className="calendar-month__header">
      <button
        className="calendar-month__header__button"
        onClick={() => handleMonthControls(MonthControlsAction.Previous)}
      >
        Previous
      </button>
      <h2 className="calendar-month__header__title">
        {new Date(year, month, 0).toLocaleString("default", {
          month: "long",
          year: "numeric",
        })}
      </h2>
      <button
        className="calendar-month__header__button"
        onClick={() => handleMonthControls(MonthControlsAction.Next)}
      >
        Next
      </button>
    </div>
  );
};

export default Header;

import React from "react";
import useRecent from "../../hooks/useRecent";
import RecentReservationItem from "./RecentReservationItem";

const Recent = () => {
  const recentItems: RecentReservation[] = useRecent();
  return (
    <>
      <ul className="recent__list">
        <li className="recent__item recent__item--header">
          <div className="recent__item__info">
            <h3 className="recent__item__name">Name</h3>
          </div>
          <div className="recent__item__status">
            <span className="recent__item__status__dot">Status</span>
          </div>
        </li>
        {recentItems.map((item) => (
          <li
            key={item.id}
            className="recent__item"
            style={{ animationDelay: `${item.id * 0.2}s` }}
          >
            <RecentReservationItem key={item.id} recentItem={item} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Recent;

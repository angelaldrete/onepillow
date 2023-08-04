import React from "react";

interface RecentReservationItemProps {
  recentItem: RecentReservation;
}

const RecentReservationItem: React.FC<RecentReservationItemProps> = ({
  recentItem,
}) => {
  return (
    <>
      <div className="recent__item__info">
        <h3 className="recent__item__name">{recentItem.name}</h3>
      </div>

      <div className="recent__item__status">
        <span
          className={`recent__item__status__dot recent__item__status__dot--${recentItem.status.toLowerCase()}`}
        >
          {recentItem.status}
        </span>
      </div>
    </>
  );
};

export default RecentReservationItem;

import Link from "next/link";
import React from "react";

interface RecentReservationItemProps {
  recentItem: RecentReservation;
}

const RecentReservationItem: React.FC<RecentReservationItemProps> = ({
  recentItem,
}) => {
  return (
    <>
      {Object.entries(recentItem).map(([key, value]) => {
        if (!value || key === "id") return null;
        return (
          <Link
            href="/admin/reservations/[id]"
            as={`/admin/reservations/${recentItem.id}`}
            key={key}
          >
            <div key={key} className="recent__item__info">
              <p className="recent__item__detail">
                {key === "arrivalDate" || key === "departureDate"
                  ? new Date(value).toISOString().split("T")[0]
                  : value}
              </p>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default RecentReservationItem;

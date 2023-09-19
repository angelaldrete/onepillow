import React from "react";
import Reservation from "../types/Reservation";

interface ReservationItemProps {
  reservation: Reservation;
}

const ReservationItem: React.FC<ReservationItemProps> = ({ reservation }) => {
  return (
    <div className="reservation">
      <div className="reservation__title">{reservation.name}</div>
      <div className="reservation__checkInDate">
        <strong>Check In Date: </strong>
        {reservation.checkInDate}
      </div>
      <div className="reservation__checkOutDate">
        <strong>Check Out Date: </strong>
        {reservation.checkOutDate}
      </div>
    </div>
  );
};

export default ReservationItem;

import React from "react";
import Reservation from "../types/Reservation";

interface ReservationItemProps {
  reservation: Reservation;
}
const ReservationItem: React.FC<ReservationItemProps> = async ({
  reservation,
}) => {
  return (
    <div className="reservation">
      <div className="reservation__title">{reservation.customer.name}</div>
      <div className="reservation__arrivalDate">
        <strong>Arrival Date: </strong>
        {new Date(reservation.arrivalDate).toDateString()}
      </div>
      <div className="reservation__departureDate">
        <strong>Departure Date: </strong>
        {new Date(reservation.departureDate).toDateString()}
      </div>
      <div className="reservation__room">
        <strong>Room: </strong>
        {reservation.room.name}
      </div>
    </div>
  );
};

export default ReservationItem;

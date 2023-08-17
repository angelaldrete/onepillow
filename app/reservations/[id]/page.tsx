import React from "react";
import Reservation from "../types/Reservation";
import Card from "@/app/components/Card";
import { MdDelete, MdEdit } from "react-icons/md";

interface SingleReservationProps {
  params: {
    id: string;
  };
}

const SingleReservation: React.FC<SingleReservationProps> = ({
  params: { id },
}) => {
  const reservation: Reservation = {
    id: 1,
    name: "John Doe",
    address: "123 Main St",
    bedPreferences: "single",
    checkInDate: "2020-01-01",
    checkOutDate: "2020-01-02",
    phone: "123-456-7890",
    email: "example@example.com",
    numberOfGuests: 1,
    roomType: "single",
  };

  return (
    <div className="reservation-single">
      <div className="reservation-single__header">
        <h1 className="reservation-single__title">Reservation</h1>
        <MdEdit />
        <MdDelete />
      </div>

      <Card>
        <div className="reservation-single__content">
          {Object.entries(reservation).map(([key, value]) => {
            if (key === "id") return null;
            return (
              <div className="reservation-single__item" key={key}>
                <div className="reservation-single__label">
                  {key[0].toUpperCase() + key.slice(1)}
                </div>
                <div className="reservation-single__value">{value}</div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default SingleReservation;

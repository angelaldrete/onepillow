"use client";
import React from "react";
import Reservation from "../types/Reservation";
import Card from "@/app/components/Card";
import { MdDelete, MdEdit } from "react-icons/md";
import { useRouter } from "next/navigation";
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

  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div className="reservation-single">
      <div className="reservation-single__header">
        <h1 className="reservation-single__title">Reservation</h1>
        <MdEdit
          onClick={() => {
            navigateTo(`/admin/reservations/edit/${id}`);
          }}
        />
        <MdDelete />
      </div>

      <Card>
        <div className="reservation-single__content">
          {Object.entries(reservation).map(([key, value]) => {
            if (key === "id") return null;
            return (
              <div className="reservation-single__item" key={key}>
                <div className="reservation-single__label">
                  {key
                    .split(/(?=[A-Z])/)
                    .map((word) => word[0].toUpperCase() + word.slice(1))
                    .join(" ")}{" "}
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
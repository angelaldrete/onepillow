import React from "react";
import Reservation from "../types/Reservation";
import ReservationItem from "./ReservationItem";
import Link from "next/link";
import Card from "@/app/components/Card";

interface ReservationsListProps {
  reservations: Reservation[];
}

const ReservationsList: React.FC<ReservationsListProps> = ({
  reservations,
}) => {
  return (
    <ul className="reservations__list">
      {reservations.map((reservation, idx) => (
        <li key={reservation.id} className="reservation">
          <Link href={`/admin/reservations/${reservation.id}`}>
            <Card
              style={{
                animationDelay: `${idx * 0.1}s`,
              }}
            >
              <ReservationItem reservation={reservation} />
            </Card>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ReservationsList;

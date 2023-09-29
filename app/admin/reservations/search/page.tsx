"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import ReservationsList from "../components/ReservationsList";
import AddButton from "@/app/components/Button/AddButton";
import { MdSearch } from "react-icons/md";
import Reservation from "../types/Reservation";

const CustomerSearch = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  const [reservations, setReservations] = React.useState<Reservation[]>([]);

  React.useEffect(() => {
    async function getReservations() {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/reservation?query=${query}`
      );
      const data = await response.json();
      return data.reservations;
    }

    if (query) {
      getReservations().then((reservations) => setReservations(reservations));
    }
  }, [query]);

  return (
    <div className="reservations">
      <header className="reservations__header">
        <h1 className="reservations__title">Reservations</h1>
        <form className="search-bar" action="/admin/reservations/search">
          <MdSearch />
          <input
            className="input"
            type="text"
            placeholder="Search for a reservation"
            name="query"
          />
        </form>
      </header>
      {reservations.length > 0 ? (
        <ReservationsList reservations={reservations} />
      ) : (
        <div className="reservations__empty">
          No reservation found for "{query}"
        </div>
      )}
      <AddButton to="/admin/reservations/new" />
    </div>
  );
};

export default CustomerSearch;

"use client";
import React from "react";
import ReservationsList from "./components/ReservationsList";
import ReservationsSearchBar from "./components/ReservationsSearchBar";
import AddButton from "@/app/components/Button/AddButton";
import Reservation from "./types/Reservation";

const reservations: Reservation[] = [
  {
    id: 1,
    name: "John Doe",
    email: "example@example.com",
    phone: "123456789",
    address: "123 Main St",
    checkInDate: "2020-01-01",
    checkOutDate: "2020-01-02",
    roomType: "Single",
    numberOfGuests: 1,
    bedPreferences: "Single",
  },
  {
    id: 2,
    name: "John Doe",
    email: "example@example.com",
    phone: "123456789",
    address: "123 Main St",
    checkInDate: "2020-01-01",
    checkOutDate: "2020-01-02",
    roomType: "Single",
    numberOfGuests: 1,
    bedPreferences: "Single",
  },
  {
    id: 3,
    name: "John Doe",
    email: "example@example.com",
    phone: "123456789",
    address: "123 Main St",
    checkInDate: "2020-01-01",
    checkOutDate: "2020-01-02",
    roomType: "Single",
    numberOfGuests: 1,
    bedPreferences: "Single",
  },
  {
    id: 4,
    name: "John Doe",
    email: "example@example.com",
    phone: "123456789",
    address: "123 Main St",
    checkInDate: "2020-01-01",
    checkOutDate: "2020-01-02",
    roomType: "Single",
    numberOfGuests: 1,
    bedPreferences: "Single",
  },
];

const Reservations = () => {
  return (
    <div className="reservations">
      <header className="reservations__header">
        <h1 className="rooms__title">Reservations</h1>
        <ReservationsSearchBar />
      </header>
      <ReservationsList reservations={reservations} />
      <AddButton to="/reservations/new" />
    </div>
  );
};

export default Reservations;

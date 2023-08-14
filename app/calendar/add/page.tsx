import React from "react";
import AddReservationForm from "./components/AddReservationForm";

const AddReservation = () => {
  return (
    <div className="add-reservation">
      <header className="add-reservation__header">
        <h1 className="add-reservation__title">Add Reservation</h1>
      </header>
      <AddReservationForm />
    </div>
  );
};

export default AddReservation;

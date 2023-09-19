import React from "react";
import EditReservationForm from "./components/EditReservationForm";

const EditReservation = () => {
  return (
    <div className="edit-reservation">
      <header className="edit-reservation__header">
        <h1 className="edit-reservation__title">Edit Reservation</h1>
      </header>
      <EditReservationForm />
    </div>
  );
};

export default EditReservation;

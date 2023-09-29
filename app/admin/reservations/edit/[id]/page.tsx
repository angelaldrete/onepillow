"use client";
import EditReservationForm from "./components/EditReservationForm";
import { useParams } from "next/navigation";

const EditReservation = () => {
  const { id } = useParams();

  return (
    <div className="edit-reservation">
      <header className="edit-reservation__header">
        <h1 className="edit-reservation__title">Edit Reservation</h1>
      </header>
      <EditReservationForm id={id} />
    </div>
  );
};

export default EditReservation;

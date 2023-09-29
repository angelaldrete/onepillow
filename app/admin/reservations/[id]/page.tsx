"use client";
import React from "react";
import Reservation from "../types/Reservation";
import Card from "@/app/components/Card";
import { MdDelete, MdEdit } from "react-icons/md";
import { useRouter } from "next/navigation";
import Modal from "@/app/components/Modal";
interface SingleReservationProps {
  params: {
    id: string;
  };
}

const SingleReservation: React.FC<SingleReservationProps> = ({
  params: { id },
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const [reservation, setReservation] = React.useState<Reservation>();

  React.useEffect(() => {
    const getReservation = async () => {
      const response = await fetch(
        `http://localhost:3000/api/reservation/${id}`
      );
      const data = await response.json();
      setReservation(data.reservation);
    };
    getReservation();
  }, []);

  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  const handleReservationDelete = () => {
    setIsOpen(false);
    fetch(`http://localhost:3000/api/reservation/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          new Error(data.error);
        }
        navigateTo("/admin/reservations");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="reservation-single">
        <div className="reservation-single__header">
          <h1 className="reservation-single__title">Reservation</h1>
          <MdEdit
            onClick={() => {
              navigateTo(`/admin/reservations/edit/${id}`);
            }}
          />
          <MdDelete
            onClick={() => {
              setIsOpen(true);
            }}
          />
        </div>

        <Card>
          <div className="reservation-single__content">
            <div className="reservation-single__item">
              <div className="reservation-single__label">Customer</div>
              <div className="reservation-single__value">
                {reservation?.customer.name}
              </div>
            </div>

            <div className="reservation-single__item">
              <div className="reservation-single__label">Arrival Date</div>
              <div className="reservation-single__value">
                {new Date(reservation?.arrivalDate!).toDateString()}
              </div>
            </div>

            <div className="reservation-single__item">
              <div className="reservation-single__label">Departure Date</div>
              <div className="reservation-single__value">
                {new Date(reservation?.departureDate!).toDateString()}
              </div>
            </div>

            <div className="reservation-single__item">
              <div className="reservation-single__label">Room</div>
              <div className="reservation-single__value">
                {reservation?.room.name}
              </div>
            </div>
          </div>
        </Card>
      </div>
      <Modal
        title="Delete Reservation"
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        actions={
          <>
            <button
              className="btn btn--danger"
              onClick={handleReservationDelete}
            >
              Delete
            </button>
          </>
        }
      >
        Are you sure you want to delete this reservation?
      </Modal>
    </>
  );
};

export default SingleReservation;

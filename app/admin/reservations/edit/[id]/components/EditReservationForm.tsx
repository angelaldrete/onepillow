"use client";
import React from "react";
import { ReservationFields } from "@/app/admin/reservations/common/ReservationFields";
import AppForm from "@/app/components/AppForm/AppForm";
import FormType from "@/app/common/FormType";

const EditReservationForm = () => {
  return (
    <AppForm
      action="/api/reservations"
      fields={ReservationFields}
      type={FormType.CREATE}
      modalTitle="Edit Reservation"
      modalMessage="Are you sure you want to edit this reservation?"
      modalActions={
        <>
          <div></div>
        </>
      }
    />
  );
};

export default EditReservationForm;

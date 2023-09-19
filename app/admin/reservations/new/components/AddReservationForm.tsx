"use client";
import React from "react";
import { ReservationFields } from "@/app/admin/reservations/common/ReservationFields";
import AppForm from "@/app/components/AppForm/AppForm";
import FormType from "@/app/common/FormType";

const AddReservationForm = () => {
  return (
    <AppForm
      action="/api/reservations"
      fields={ReservationFields}
      type={FormType.CREATE}
    />
  );
};

export default AddReservationForm;

"use client";
import React from "react";
import { ReservationFields } from "@/app/reservations/common/ReservationFields";
import AppForm from "@/app/components/AppForm/AppForm";

const EditReservationForm = () => {
  return <AppForm action="/api/reservations" fields={ReservationFields} />;
};

export default EditReservationForm;

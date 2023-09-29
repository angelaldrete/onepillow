"use client";
import React from "react";
import FormType from "@/app/common/FormType";
import ReservationForm from "../../../components/ReservationForm";

interface EditReservationFormProps {
  id: string | string[];
}

const EditReservationForm: React.FC<EditReservationFormProps> = ({ id }) => {
  return <ReservationForm type={FormType.UPDATE} id={id} />;
};

export default EditReservationForm;

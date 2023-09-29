"use client";
import FormType from "@/app/common/FormType";
import ReservationForm from "../../components/ReservationForm";

const AddReservationForm = () => {
  return <ReservationForm type={FormType.CREATE} />;
};

export default AddReservationForm;

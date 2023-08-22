"use client";
import React from "react";
import { RoomFields } from "@/app/rooms/common/RoomFields";
import AppForm from "@/app/components/AppForm/AppForm";
import FormType from "@/app/common/FormType";

const AddRoomForm = () => {
  return (
    <AppForm action="/api/rooms" fields={RoomFields} type={FormType.CREATE} />
  );
};

export default AddRoomForm;

"use client";
import React from "react";
import { RoomFields } from "@/app/rooms/common/RoomFields";
import AppForm from "@/app/components/AppForm/AppForm";

const EditRoomForm = () => {
  return <AppForm action="/api/rooms" fields={RoomFields} />;
};

export default EditRoomForm;

"use client";
import React from "react";
import { RoomFields } from "@/app/admin/rooms/common/RoomFields";
import AppForm from "@/app/components/AppForm/AppForm";
import FormType from "@/app/common/FormType";
import CancelButton from "@/app/components/Button/CancelButton";
import SubmitButton from "@/app/components/Button/SubmitButton";

const EditRoomForm = () => {
  return (
    <AppForm
      action="/api/admin/rooms"
      fields={RoomFields}
      type={FormType.UPDATE}
      modalTitle="Edit Room"
      modalMessage="Are you sure you want to edit this room?"
      modalActions={
        <>
          <div></div>
        </>
      }
    />
  );
};

export default EditRoomForm;

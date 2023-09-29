"use client";
import { RoomFields } from "@/app/admin/rooms/common/RoomFields";
import AppForm from "@/app/components/AppForm/AppForm";
import FormType from "@/app/common/FormType";

const AddRoomForm = () => {
  return (
    <AppForm
      action="/api/room"
      fields={RoomFields}
      type={FormType.CREATE}
      redirectPath="/admin/rooms"
    />
  );
};

export default AddRoomForm;

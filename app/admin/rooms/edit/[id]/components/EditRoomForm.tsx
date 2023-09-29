"use client";
import React from "react";
import { RoomFields } from "@/app/admin/rooms/common/RoomFields";
import AppForm from "@/app/components/AppForm/AppForm";
import FormType from "@/app/common/FormType";
import { Room } from "@prisma/client";

interface EditRoomForm {
  id: string | string[];
}

const EditRoomForm: React.FC<EditRoomForm> = ({ id }) => {
  const [room, setRoom] = React.useState<Room>(Object);

  React.useEffect(() => {
    const getRoom = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/room/${id}`
      );
      const data = await response.json();
      setRoom(data.room);
    };
    getRoom();
  }, []);

  return (
    <AppForm
      action={`/api/room/${id}`}
      fields={RoomFields}
      type={FormType.UPDATE}
      values={room}
      redirectPath="/admin/rooms"
      modalTitle="Edit Room"
      modalMessage="Are you sure you want to edit this room?"
    />
  );
};

export default EditRoomForm;

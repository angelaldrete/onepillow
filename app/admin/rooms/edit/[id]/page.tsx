"use client";
import EditRoomForm from "./components/EditRoomForm";
import { useParams } from "next/navigation";

const EditRoom = () => {
  const { id } = useParams();

  return (
    <div className="edit-room">
      <header className="edit-room__header">
        <h1 className="edit-room__title">Edit Room</h1>
      </header>
      <EditRoomForm id={id} />
    </div>
  );
};

export default EditRoom;

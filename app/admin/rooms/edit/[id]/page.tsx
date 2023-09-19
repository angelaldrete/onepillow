import React from "react";
import EditRoomForm from "./components/EditRoomForm";

const EditRoom = () => {
  return (
    <div className="edit-room">
      <header className="edit-room__header">
        <h1 className="edit-room__title">Edit Room</h1>
      </header>
      <EditRoomForm />
    </div>
  );
};

export default EditRoom;

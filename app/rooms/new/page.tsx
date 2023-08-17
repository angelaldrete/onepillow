import React from "react";
import AddRoomForm from "./components/AddRoomForm";

const AddRoom = () => {
  return (
    <div className="add-room">
      <header className="add-room__header">
        <h1 className="add-room__title">Add Room</h1>
      </header>
      <AddRoomForm />
    </div>
  );
};

export default AddRoom;

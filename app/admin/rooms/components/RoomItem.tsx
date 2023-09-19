import React from "react";
import Room from "../types/Room";

interface RoomItemProps {
  room: Room;
}

const RoomItem: React.FC<RoomItemProps> = ({ room }) => {
  return (
    <div className="room">
      <div className="room__title">{room.name}</div>
      <div className="room__description">{room.description}</div>
    </div>
  );
};

export default RoomItem;

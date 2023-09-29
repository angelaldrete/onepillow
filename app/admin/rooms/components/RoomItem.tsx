import React from "react";
import Room from "../types/Room";

interface RoomItemProps {
  room: Room;
}

const RoomItem: React.FC<RoomItemProps> = ({ room }) => {
  return (
    <div className="room">
      <div className="room__title">{room.name}</div>
      {room.description && (
        <div className="room__description">
          <strong>Description</strong>
          {room.description}
        </div>
      )}
      <div className="room__price">
        <strong>Price: </strong>
        {room.price}
      </div>
    </div>
  );
};

export default RoomItem;

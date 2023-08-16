import Card from "@/app/components/Card";
import React from "react";
import Link from "next/link";
import RoomItem from "./RoomItem";
import Room from "../types/Room";

interface RoomsListProps {
  rooms: Room[];
}

const RoomsList: React.FC<RoomsListProps> = ({ rooms }) => {
  return (
    <ul className="rooms__list">
      {rooms.map((room, idx) => (
        <li key={room.id} className="room">
          <Link href={`/rooms/${room.id}`}>
            <Card
              style={{
                animationDelay: `${idx * 0.1}s`,
              }}
            >
              <RoomItem room={room} />
            </Card>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default RoomsList;

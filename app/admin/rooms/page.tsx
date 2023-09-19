import React from "react";
import RoomsSearchBar from "./components/RoomsSearchBar";
import RoomsList from "./components/RoomsList";
import Room from "./types/Room";
import AddButton from "@/app/components/Button/AddButton";

const Rooms = () => {
  const rooms: Room[] = [
    {
      id: 1,
      name: "Room 1",
      description: "Room 1 description",
      capacity: 4,
      price: 100,
      available: true,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Room 2",
      description: "Room 2 description",
      capacity: 4,
      price: 100,
      available: true,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Room 3",
      description: "Room 3 description",
      capacity: 4,
      price: 100,
      available: true,
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="rooms">
      <header className="rooms__header">
        <h1 className="rooms__title">Rooms</h1>
        <RoomsSearchBar />
      </header>
      <RoomsList rooms={rooms} />
      <AddButton to="/admin/rooms/new" />
    </div>
  );
};

export default Rooms;

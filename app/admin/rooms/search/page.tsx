"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import RoomsList from "../components/RoomsList";
import AddButton from "@/app/components/Button/AddButton";
import { MdSearch } from "react-icons/md";
import Room from "../types/Room";

const CustomerSearch = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  const [rooms, setRooms] = React.useState<Room[]>([]);

  React.useEffect(() => {
    async function getRooms() {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/room?query=${query}`
      );
      const data = await response.json();
      return data.rooms;
    }

    if (query) {
      getRooms().then((rooms) => setRooms(rooms));
    }
  }, [query]);

  return (
    <div className="rooms">
      <header className="rooms__header">
        <h1 className="rooms__title">Rooms</h1>
        <form className="search-bar" action="/admin/rooms/search">
          <MdSearch />
          <input
            className="input"
            type="text"
            placeholder="Search for a room"
            name="query"
          />
        </form>
      </header>
      {rooms.length > 0 ? (
        <RoomsList rooms={rooms} />
      ) : (
        <div className="rooms__empty">No room found for "{query}"</div>
      )}
      <AddButton to="/admin/rooms/new" />
    </div>
  );
};

export default CustomerSearch;

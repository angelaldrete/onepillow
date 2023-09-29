import RoomsList from "./components/RoomsList";
import Room from "./types/Room";
import AddButton from "@/app/components/Button/AddButton";
import { MdSearch } from "react-icons/md";

async function getRooms() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/room`, {
    next: {
      revalidate: 60,
    },
  });
  const data = await response.json();
  return data.rooms;
}

const Rooms = async () => {
  const rooms: Room[] = await getRooms();

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
        <div className="rooms__empty">No rooms found</div>
      )}
      <AddButton to="/admin/rooms/new" />
    </div>
  );
};

export default Rooms;

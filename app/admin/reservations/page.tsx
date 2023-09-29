import ReservationsList from "./components/ReservationsList";
import AddButton from "@/app/components/Button/AddButton";
import Reservation from "./types/Reservation";
import { MdSearch } from "react-icons/md";

async function getReservations() {
  const response = await fetch("http://localhost:3000/api/reservation", {
    next: {
      revalidate: 60,
    },
  });
  const data = await response.json();
  return data.reservations;
}

const Reservations = async () => {
  const reservations: Reservation[] = await getReservations();

  return (
    <div className="reservations">
      <header className="reservations__header">
        <h1 className="rooms__title">Reservations</h1>
        <form className="search-bar" action="/admin/reservations/search">
          <MdSearch />
          <input
            className="input"
            type="text"
            placeholder="Search for a reservation"
            name="query"
          />
        </form>
      </header>
      {reservations.length > 0 ? (
        <ReservationsList reservations={reservations} />
      ) : (
        <div className="reservations__empty">No reservations found</div>
      )}
      <AddButton to="/admin/reservations/new" />
    </div>
  );
};

export default Reservations;

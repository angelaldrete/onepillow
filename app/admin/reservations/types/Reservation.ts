import Customer from "../../customers/types/Customer";
import Room from "../../rooms/types/Room";

interface Reservation {
  id: number;
  name: string;
  arrivalDate: string;
  departureDate: string;
  customer: Customer;
  room: Room;
}

export default Reservation;
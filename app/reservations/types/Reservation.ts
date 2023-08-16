interface Reservation {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  checkInDate: string;
  checkOutDate: string;
  roomType: string;
  numberOfGuests: number;
  bedPreferences: string;
}

export default Reservation;
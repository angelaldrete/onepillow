interface Room {
  id: number;
  name: string;
  description: string;
  capacity: number;
  price: number;
  image: string;
  available: boolean;
}

export default Room;
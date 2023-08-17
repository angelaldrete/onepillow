import React from "react";
import Room from "../types/Room";
import Card from "@/app/components/Card";
import { MdDelete, MdEdit } from "react-icons/md";

interface SingleRoomProps {
  params: {
    id: string;
  };
}

const SingleRoom: React.FC<SingleRoomProps> = ({ params: { id } }) => {
  const room: Room = {
    id: 1,
    name: "John Doe",
    available: true,
    capacity: 1,
    price: 100,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    image: "https://source.unsplash.com/random/400x400",
  };

  return (
    <div className="room-single">
      <div className="room-single__header">
        <h1 className="room-single__title">Room</h1>
        <MdEdit />
        <MdDelete />
      </div>

      <Card>
        <div className="room-single__content">
          {Object.entries(room).map(([key, value]) => {
            if (key === "id") return null;
            if (key === "image")
              return (
                <>
                  <div className="room-single__label">
                    {key[0].toUpperCase() + key.slice(1)}
                  </div>
                  <div className="room-single__value">
                    {/* <img
                      width={100}
                      height={100}
                      className="room-single__image"
                      src={value}
                    /> */}
                  </div>
                </>
              );
            return (
              <div className="room-single__item" key={key}>
                <div className="room-single__label">
                  {key[0].toUpperCase() + key.slice(1)}
                </div>
                <div className="room-single__value">{value}</div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default SingleRoom;

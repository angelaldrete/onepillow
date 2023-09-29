"use client";
import React from "react";
import Room from "../types/Room";
import Card from "@/app/components/Card";
import { MdDelete, MdEdit } from "react-icons/md";
import { useRouter } from "next/navigation";
import Modal from "@/app/components/Modal";
interface SingleRoomProps {
  params: {
    id: string;
  };
}

const SingleRoom: React.FC<SingleRoomProps> = ({ params: { id } }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const [room, setRoom] = React.useState<Room>({
    id: parseInt(""),
    name: "",
    description: "",
    price: 0,
    capacity: 0,
  });

  React.useEffect(() => {
    const getRoom = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/room/${id}`
      );
      const data = await response.json();
      setRoom(data.room);
    };
    getRoom();
  }, []);

  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  const handleRoomDelete = () => {
    setIsOpen(false);
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/room/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          new Error(data.error);
        }
        navigateTo("/admin/rooms");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="room-single">
        <div className="room-single__header">
          <h1 className="room-single__title">Room</h1>
          <MdEdit
            onClick={() => {
              navigateTo(`/admin/rooms/edit/${id}`);
            }}
          />
          <MdDelete
            onClick={() => {
              setIsOpen(true);
            }}
          />
        </div>

        <Card>
          <div className="room-single__content">
            {Object.entries(room).map(([key, value]) => {
              if (!value) return null;
              if (key === "id") return null;
              return (
                <div className="room-single__item" key={key}>
                  <div className="room-single__label">
                    {key
                      .split(/(?=[A-Z])/)
                      .map((word) => word[0].toUpperCase() + word.slice(1))
                      .join(" ")}{" "}
                  </div>
                  <div className="room-single__value">{value}</div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
      <Modal
        title="Delete Room"
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        actions={
          <>
            <button className="btn btn--danger" onClick={handleRoomDelete}>
              Delete
            </button>
          </>
        }
      >
        Are you sure you want to delete this room?
      </Modal>
    </>
  );
};

export default SingleRoom;

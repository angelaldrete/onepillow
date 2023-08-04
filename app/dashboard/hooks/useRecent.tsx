import React from "react";

const useRecent = () => {
  const recentItems: RecentReservation[] = [
    {
      id: 1,
      name: "John Doe",
      date: "2020-01-01",
      roomId: 1,
      status: "Pending",
    },
    {
      id: 2,
      name: "John Doe",
      date: "2020-01-01",
      roomId: 1,
      status: "Pending",
    },
    {
      id: 3,
      name: "John Doe",
      date: "2020-01-01",
      roomId: 1,
      status: "Pending",
    },
  ];
  return recentItems;
};

export default useRecent;

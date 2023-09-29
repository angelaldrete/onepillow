"use client";
import React from "react";

const useRecent = () => {
  const [recentItems, setRecentItems] = React.useState([]);

  React.useEffect(() => {
    fetch(`http://localhost:3000/api/reservation/recent`, {})
      .then((res) => res.json())
      .then((data) => setRecentItems(data.recentReservations))
      .catch((err) => console.log(err));
  }, []);

  return recentItems;
};

export default useRecent;

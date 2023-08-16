"use client";
import React from "react";
import { MdSearch } from "react-icons/md";

const RoomsSearchBar = () => {
  const handleSearch = (search: string) => {
    const rooms = document.querySelectorAll(".room");

    rooms.forEach((room) => {
      if (room.id.toLowerCase().includes(search.toLowerCase())) {
        room.classList.remove("hidden");
      } else {
        room.classList.add("hidden");
      }
    });
  };

  return (
    <span className="rooms__search-bar">
      <MdSearch />
      <input
        className="rooms__input"
        type="text"
        placeholder="Search for a room"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </span>
  );
};

export default RoomsSearchBar;

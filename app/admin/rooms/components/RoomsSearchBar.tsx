"use client";
import SearchBar from "@/app/components/SearchBar";
import React from "react";

const RoomsSearchBar = () => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  return (
    <SearchBar placeholder="Search for a room" handleSearch={handleSearch} />
  );
};

export default RoomsSearchBar;

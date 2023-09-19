import React from "react";
import SearchBar from "@/app/components/SearchBar";

const ReservationsSearchBar = () => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <SearchBar
      placeholder="Search for a reservation"
      handleSearch={handleSearch}
    />
  );
};

export default ReservationsSearchBar;

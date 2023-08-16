"use client";
import SearchBar from "@/app/components/SearchBar";
import React from "react";

const CustomersSearchBar = () => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  return (
    <SearchBar
      placeholder="Search for a customer"
      handleSearch={handleSearch}
    />
  );
};

export default CustomersSearchBar;

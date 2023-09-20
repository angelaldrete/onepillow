"use server";
import SearchBar from "@/app/components/SearchBar";
import React from "react";

interface CustomerSearchBarProps {
  handleSearch: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const CustomersSearchBar: React.FC<CustomerSearchBarProps> = ({
  handleSearch,
}) => {
  return (
    <SearchBar
      placeholder="Search for a customer"
      handleSearch={(e) => {
        handleSearch(e);
      }}
    />
  );
};

export default CustomersSearchBar;

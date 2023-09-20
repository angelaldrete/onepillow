"use client";
import React from "react";
import { MdSearch } from "react-icons/md";

interface SearchBarProps {
  handleSearch: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ handleSearch, placeholder }) => {
  return (
    <form className="search-bar">
      <MdSearch />
      <input
        className="input"
        type="text"
        placeholder={placeholder}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch(e);
          }
        }}
      />
    </form>
  );
};

export default SearchBar;

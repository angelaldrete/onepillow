import React from "react";
import { MdSearch } from "react-icons/md";

interface SearchBarProps {
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ handleSearch, placeholder }) => {
  return (
    <span className="search-bar">
      <MdSearch />
      <input
        className="input"
        type="text"
        placeholder={placeholder}
        onChange={handleSearch}
      />
    </span>
  );
};

export default SearchBar;

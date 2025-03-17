import React from "react";

const Search = ({ onSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        className="border p-2 rounded w-full"
        //value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;

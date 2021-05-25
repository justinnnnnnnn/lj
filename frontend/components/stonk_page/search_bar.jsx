import React from "react";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={"yo mama"}
        // onChange={}
        className="search-field"
      />
      {/* thing that inserts all the backend stonks */}
    </div>
  );
};

export default SearchBar;
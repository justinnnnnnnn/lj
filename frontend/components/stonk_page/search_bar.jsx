import React from "react";

const searchInput = (props) => {
  // this takes in somethin
}

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={"yo mama"}
        // onChange={searchInput}
        className="search-field"
      />
      {/* thing that inserts all the backend stonks */}
    </div>
  );
};

export default SearchBar;
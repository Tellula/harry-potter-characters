
import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--black bg w-100 searchbox"
        type="search"
        placeholder="search characters..."
        onChange={searchChange} // tells the parent to run the searchChange function, each time the input is mofified by the user
      />
    </div>
  );
};

export default SearchBox;
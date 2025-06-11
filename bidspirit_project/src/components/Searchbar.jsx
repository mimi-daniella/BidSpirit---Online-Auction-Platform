// Example SearchBar.jsx
import React from "react";

const SearchBar = () => (
  <form className="input-group">
    <input
      type="text"
      className="form-control"
      placeholder="Search auctions..."
      aria-label="Search"
    />
    <button className="btn btn-outline-secondary" type="submit">
      <i className="bi bi-search"></i>
    </button>
  </form>
);

export default SearchBar;
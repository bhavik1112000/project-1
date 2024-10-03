import React from "react";
import "./sort.css";

const Sort = ({ sortOption, handleSortChange }) => {
  return (
    <div className="sort-container">
      <label htmlFor="sort">Sort by: </label>
      <select
        aria-label="sort"
        id="sort"
        value={sortOption}
        onChange={handleSortChange}
      >
        <option value="">Select</option>
        <option value="low-to-high">Price: Low to High</option>
        <option value="high-to-low">Price: High to Low</option>
        <option value="a-z">Name: A-Z</option>
        <option value="z-a">Name: Z-A</option>
      </select>
    </div>
  );
};

export default Sort;

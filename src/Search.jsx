import React, { useContext, useState } from "react";
import { appContext } from "./context";
import "./search.css";

const Search = ({
  setSelectedBrands,
  setSelectedCategory,
  setSelectedPriceRange,
}) => {
  const { text, setText } = useContext(appContext);

  const changeHandler = (e) => {
    setText(e.target.value);
    if (text !== "") {
      setSelectedBrands([]);
      setSelectedCategory("");
      setSelectedPriceRange("");
    }
    console.log(text);
  };

  return (
    <div className="search-container">
      <input
        className="search-input"
        placeholder="Search..."
        autoComplete="off"
        type="text"
        name="search"
        value={text}
        onChange={(e) => changeHandler(e)}
      />
      {text !== "" && (
        <i class="fa-solid fa-xmark" onClick={() => setText("")}></i>
      )}
    </div>
  );
};

export default Search;

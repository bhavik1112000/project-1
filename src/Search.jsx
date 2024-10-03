import React, { useContext, useState } from "react";
import { appContext } from "./context";
import "./search.css";

const Search = () => {
  const { text, setText } = useContext(appContext);

  const changeHandler = (e) => {
    setText(e.target.value);
    console.log(text);
  };

  return (
    <div className="search-container">
      <input
        data-testid="searchbar"
        className="search-input"
        placeholder="Search..."
        autoComplete="off"
        type="text"
        name="search"
        onChange={(e) => changeHandler(e)}
      />
    </div>
  );
};

export default Search;

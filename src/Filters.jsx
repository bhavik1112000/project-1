import React, { useContext, useEffect, useState } from "react";
import { AppState, appContext } from "./context";
import "./filters.css";

const Filters = ({ handleFilterChange, filterOption }) => {
  const { allProducts, categories, setCategories, brands, setBrands } =
    useContext(appContext);

  useEffect(() => {
    allProducts.length > 0 &&
      allProducts.forEach((product) => {
        // if (!categories.includes(product.category)) {
        //   return setCategories([...prevCategories, product.category]);
        // }
        setCategories((prevCategories) => {
          if (!prevCategories.includes(product.category)) {
            return [...prevCategories, product.category];
          }
          return prevCategories;
        });
        setBrands((prevBrands) => {
          if (!prevBrands.includes(product.brand)) {
            return [...prevBrands, product.brand];
          }
          return prevBrands;
        });
      });
    // console.log;
  }, [allProducts]);

  // console.log(categories);

  return (
    <div className="filters">
      <div className="filters-container">
        <div className="filter-type">
          <p className="filter-name">Categories</p>
          {categories.map((category, index) => (
            <div
              id={index}
              className={`filter-item ${
                category === filterOption ? "active" : ""
              }`}
            >
              <input
                type="radio"
                id={category}
                name="category"
                value={category}
                onChange={(e) => handleFilterChange(e)}
              />
              <label htmlFor={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </label>
            </div>
          ))}
        </div>
        <div className="filter-type">
          <p className="filter-name">Brands</p>
          {brands.map((brand, index) => (
            <div
              id={index}
              className={`filter-item ${
                brand === filterOption ? "active" : ""
              }`}
            >
              <input
                type="radio"
                id={brand}
                name="brand"
                value={brand}
                onChange={(e) => handleFilterChange(e)}
              />
              <label className="filter-item-label" htmlFor={brand}>
                {brand}
              </label>
            </div>
          ))}
        </div>
        <div className="filter-type">
          <p className="filter-name">Price Range</p>
          <div
            className={`filter-item ${
              "0-499" === filterOption ? "active" : ""
            }`}
          >
            <input
              type="radio"
              id="0-499"
              name="brand"
              value="0-499"
              onChange={(e) => handleFilterChange(e)}
            />
            <label className="filter-item-label" htmlFor="0-499">
              ₹0-₹499
            </label>
          </div>
          <div
            className={`filter-item ${
              "500-999" === filterOption ? "active" : ""
            }`}
          >
            <input
              type="radio"
              id="500-999"
              name="brand"
              value="500-999"
              onChange={(e) => handleFilterChange(e)}
            />
            <label className="filter-item-label" htmlFor="500-999">
              ₹500-₹999
            </label>
          </div>
          <div
            className={`filter-item ${
              "1000-1499" === filterOption ? "active" : ""
            }`}
          >
            <input
              type="radio"
              id="1000-1499"
              name="brand"
              value="1000-1499"
              onChange={(e) => handleFilterChange(e)}
            />
            <label className="filter-item-label" htmlFor="1000-1499">
              ₹1000-₹1499
            </label>
          </div>
          <div
            className={`filter-item ${
              "1500-1999" === filterOption ? "active" : ""
            }`}
          >
            <input
              type="radio"
              id="1500-1999"
              name="brand"
              value="1500-1999"
              onChange={(e) => handleFilterChange(e)}
            />
            <label className="filter-item-label" htmlFor="1500-1999">
              ₹1500-₹1999
            </label>
          </div>
          <div
            className={`filter-item ${
              "2000+" === filterOption ? "active" : ""
            }`}
          >
            <input
              type="radio"
              id="2000+"
              name="brand"
              value="2000+"
              onChange={(e) => handleFilterChange(e)}
            />
            <label className="filter-item-label" htmlFor="2000+">
              ₹2000+
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;

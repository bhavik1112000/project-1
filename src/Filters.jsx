import React, { useContext, useEffect, useState } from "react";
import { AppState, appContext } from "./context";
import "./filters.css";

const Filters = ({
  handleCategoryChange,
  selectedCategory,
  selectedBrands,
  handleBrandsChange,
  selectedPriceRange,
  handlePriceChange,
  filteredProducts,
}) => {
  const { allProducts, categories, setCategories, brands, setBrands, text } =
    useContext(appContext);

  const [validPriceRanges, setValidPriceRanges] = useState([]);

  useEffect(() => {
    let newBrands = [];
    let newCategories = [];
    let priceRanges = [];
    // let x = selectedPriceRange.split("-");
    // let min = x[0];
    // let max = x[1];
    // console.log(min);
    let [min, max] = selectedPriceRange.split("-").map(Number);
    if (selectedPriceRange === "2000+") {
      max = Infinity;
      min = 2000;
    }
    // if (!max) max = Infinity; // Handle the case for "2000+"

    // console.log(filteredProducts);
    if (allProducts.length > 0) {
      allProducts.forEach((product) => {
        // if (!categories.includes(product.category)) {
        //   return setCategories([...prevCategories, product.category]);
        // }
        // setCategories((prevCategories) => {
        //   if (!prevCategories.includes(product.category)) {
        //     return [...prevCategories, product.category];
        //   }
        //   return prevCategories;
        // });
        if (product.category && !newCategories.includes(product.category)) {
          newCategories.push(product.category);
        }
        // setBrands((prevBrands) => {
        //   if (product.brand && !prevBrands.includes(product.brand)) {
        //     return [...prevBrands, product.brand];
        //   }
        //   return prevBrands;
        // });
        if (
          (!selectedCategory || product.category === selectedCategory) &&
          (!selectedPriceRange || (product.price >= min && product.price < max))
        ) {
          if (product.brand && !newBrands.includes(product.brand)) {
            newBrands.push(product.brand);
          }
        }

        // if (product.price >= min && product.price < max)
        if (
          (!selectedCategory || product.category === selectedCategory) &&
          (selectedBrands.length === 0 ||
            selectedBrands.includes(product.brand))
        ) {
          // Collect valid price ranges based on selected category and brands
          if (product.price >= 0 && product.price < 500) {
            priceRanges.push("0-499");
          }
          if (product.price >= 500 && product.price < 1000) {
            priceRanges.push("500-999");
          }
          if (product.price >= 1000 && product.price < 1500) {
            priceRanges.push("1000-1499");
          }
          if (product.price >= 1500 && product.price < 2000) {
            priceRanges.push("1500-1999");
          }
          if (product.price >= 1500 && product.price < 2000) {
            priceRanges.push("1500-1999");
          }
          if (product.price >= 2000 && product.price < 5000) {
            priceRanges.push("2000-4999");
          }
          if (product.price >= 5000 && product.price < 10000) {
            priceRanges.push("5000-9999");
          }
          if (product.price >= 10000 && product.price < 20000) {
            priceRanges.push("10000-19999");
          }
          if (product.price >= 20000 && product.price < 30000) {
            priceRanges.push("20000-29999");
          }
          if (product.price >= 30000) {
            priceRanges.push("30000+");
          }
        }

        if (text !== "") {
          newBrands = [
            ...new Set(filteredProducts.map((product) => product.brand)),
          ];
          newCategories = [
            ...new Set(filteredProducts.map((product) => product.category)),
          ];
          priceRanges = [];
          filteredProducts.forEach((product) => {
            if (product.price >= 0 && product.price < 500) {
              priceRanges.push("0-499");
            }
            if (product.price >= 500 && product.price < 1000) {
              priceRanges.push("500-999");
            }
            if (product.price >= 1000 && product.price < 1500) {
              priceRanges.push("1000-1499");
            }
            if (product.price >= 1500 && product.price < 2000) {
              priceRanges.push("1500-1999");
            }
            if (product.price >= 1500 && product.price < 2000) {
              priceRanges.push("1500-1999");
            }
            if (product.price >= 2000 && product.price < 5000) {
              priceRanges.push("2000-4999");
            }
            if (product.price >= 5000 && product.price < 10000) {
              priceRanges.push("5000-9999");
            }
            if (product.price >= 10000 && product.price < 20000) {
              priceRanges.push("10000-19999");
            }
            if (product.price >= 20000 && product.price < 30000) {
              priceRanges.push("20000-29999");
            }
            if (product.price >= 30000) {
              priceRanges.push("30000+");
            }
          });

          // Remove duplicates using a Set
          priceRanges = [...new Set(priceRanges)];
        }

        // if (selectedCategory === product.category) {
        //   if (product.brand && !newBrands.includes(product.brand)) {
        //     newBrands.push(product.brand);
        //   }
        // } else {
        //   // If no category is selected, add all brands
        //   if (product.brand && !newBrands.includes(product.brand)) {
        //     newBrands.push(product.brand);
        //   }
        // }
        // if (selectedCategory) {
        //   const x = brands.filter(
        //     (brand) =>
        //       brands.includes(product.brand) &&
        //       selectedCategory === product.category
        //   );
        //   console.log(x);
        //   setBrands([...brands, x]);
        // }
      });
      console.log(
        filteredProducts.filter((product) => {
          return product.price >= 1500 && product.price < 2000;
        }).length > 0
      );
      // console.log(newBrands);
      setBrands(newBrands);
      setCategories(newCategories);
      setValidPriceRanges([...new Set(priceRanges)]);
    }

    // console.log;
    // console.log(allProducts);
  }, [filteredProducts, selectedCategory, text, selectedPriceRange]);

  console.log(brands);

  // console.log(categories);

  return (
    <div
      className="filters"
      // style={{ visibility: filteredProducts.length > 0 ? "visible" : "hidden" }}
    >
      <div className="filters-container">
        {categories.length > 0 && (
          <div className="filter-type">
            <p className="filter-name">Categories</p>
            {categories.map((category, index) => (
              <div
                id={index}
                aria-label="filter"
                className={`filter-item ${
                  category === selectedCategory ? "active" : ""
                }`}
              >
                <input
                  type="radio"
                  id={category}
                  name="category"
                  value={category}
                  checked={category === selectedCategory}
                  onClick={(e) => handleCategoryChange(e)}
                />
                <label htmlFor={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </label>
              </div>
            ))}
          </div>
        )}
        {brands.length > 1 && (
          <div className="filter-type">
            <p className="filter-name">Brands</p>
            {brands.map(
              (brand, index) =>
                brand && (
                  <div
                    id={index}
                    className={`filter-item ${
                      selectedBrands.includes(brand) ? "active" : ""
                    }`}
                  >
                    <input
                      type="checkbox"
                      id={brand}
                      name="brand"
                      checked={selectedBrands.includes(brand)}
                      value={brand}
                      onChange={(e) => handleBrandsChange(e)}
                    />
                    <label className="filter-item-label" htmlFor={brand}>
                      {brand}
                    </label>
                  </div>
                )
            )}
          </div>
        )}
        {validPriceRanges.length > 0 && (
          <div className="filter-type">
            <p className="filter-name">Price Range</p>
            {validPriceRanges.includes("0-499") && (
              <div
                className={`filter-item ${
                  "0-499" === selectedPriceRange ? "active" : ""
                }`}
              >
                <input
                  type="radio"
                  id="0-499"
                  name="brand"
                  value="0-499"
                  checked={"0-499" === selectedPriceRange}
                  onClick={(e) => handlePriceChange(e)}
                />
                <label className="filter-item-label" htmlFor="0-499">
                  $0-$499
                </label>
              </div>
            )}
            {validPriceRanges.includes("500-999") && (
              <div
                className={`filter-item ${
                  "500-999" === selectedPriceRange ? "active" : ""
                }`}
              >
                <input
                  type="radio"
                  id="500-999"
                  name="brand"
                  value="500-999"
                  checked={"500-999" === selectedPriceRange}
                  onClick={(e) => handlePriceChange(e)}
                />
                <label className="filter-item-label" htmlFor="500-999">
                  $500-$999
                </label>
              </div>
            )}
            {validPriceRanges.includes("1000-1499") && (
              <div
                className={`filter-item ${
                  "1000-1499" === selectedPriceRange ? "active" : ""
                }`}
              >
                <input
                  type="radio"
                  id="1000-1499"
                  name="brand"
                  value="1000-1499"
                  checked={"1000-1499" === selectedPriceRange}
                  onClick={(e) => handlePriceChange(e)}
                />
                <label className="filter-item-label" htmlFor="1000-1499">
                  $1000-$1499
                </label>
              </div>
            )}
            {validPriceRanges.includes("1500-1999") && (
              <div
                className={`filter-item ${
                  "1500-1999" === selectedPriceRange ? "active" : ""
                }`}
              >
                <input
                  type="radio"
                  id="1500-1999"
                  name="brand"
                  value="1500-1999"
                  checked={"1500-1999" === selectedPriceRange}
                  onClick={(e) => handlePriceChange(e)}
                />
                <label className="filter-item-label" htmlFor="1500-1999">
                  $1500-$1999
                </label>
              </div>
            )}
            {validPriceRanges.includes("2000-4999") && (
              <div
                className={`filter-item ${
                  "2000-4999" === selectedPriceRange ? "active" : ""
                }`}
              >
                <input
                  type="radio"
                  id="2000-4999"
                  name="brand"
                  value="2000-4999"
                  checked={"2000-4999" === selectedPriceRange}
                  onClick={(e) => handlePriceChange(e)}
                />
                <label className="filter-item-label" htmlFor="2000-4999">
                  $2000-$4999
                </label>
              </div>
            )}
            {validPriceRanges.includes("5000-9999") && (
              <div
                className={`filter-item ${
                  "5000-9999" === selectedPriceRange ? "active" : ""
                }`}
              >
                <input
                  type="radio"
                  id="5000-9999"
                  name="brand"
                  value="5000-9999"
                  checked={"5000-9999" === selectedPriceRange}
                  onClick={(e) => handlePriceChange(e)}
                />
                <label className="filter-item-label" htmlFor="5000-9999">
                  $5000-$9999
                </label>
              </div>
            )}
            {validPriceRanges.includes("10000-19999") && (
              <div
                className={`filter-item ${
                  "10000-19999" === selectedPriceRange ? "active" : ""
                }`}
              >
                <input
                  type="radio"
                  id="10000-19999"
                  name="brand"
                  value="10000-19999"
                  checked={"10000-19999" === selectedPriceRange}
                  onClick={(e) => handlePriceChange(e)}
                />
                <label className="filter-item-label" htmlFor="10000-19999">
                  $10000-$19999
                </label>
              </div>
            )}
            {validPriceRanges.includes("20000-29999") && (
              <div
                className={`filter-item ${
                  "20000-29999" === selectedPriceRange ? "active" : ""
                }`}
              >
                <input
                  type="radio"
                  id="20000-29999"
                  name="brand"
                  value="20000-29999"
                  checked={"20000-29999" === selectedPriceRange}
                  onClick={(e) => handlePriceChange(e)}
                />
                <label className="filter-item-label" htmlFor="20000-29999">
                  $20000-$29999
                </label>
              </div>
            )}
            {validPriceRanges.includes("30000+") && (
              <div
                className={`filter-item ${
                  "30000+" === selectedPriceRange ? "active" : ""
                }`}
              >
                <input
                  type="radio"
                  id="30000+"
                  name="brand"
                  value="30000+"
                  checked={"30000+" === selectedPriceRange}
                  onClick={(e) => handlePriceChange(e)}
                />
                <label className="filter-item-label" htmlFor="30000+">
                  $30000+
                </label>
              </div>
            )}
          </div>
        )}
        {/* <div className="filter-type">
          <p className="filter-name">Price Range</p>
          {(filteredProducts.filter((product) => {
            return product.price > 0 && product.price < 500;
          }).length > 0 ||
            (selectedCategory === "" && selectedBrands.length === 0)) && (
            <div
              className={`filter-item ${
                "0-499" === selectedPriceRange ? "active" : ""
              }`}
            >
              <input
                type="radio"
                id="0-499"
                name="brand"
                value="0-499"
                checked={"0-499" === selectedPriceRange}
                onClick={(e) => handlePriceChange(e)}
              />
              <label className="filter-item-label" htmlFor="0-499">
                $0-$499
              </label>
            </div>
          )}
          {(filteredProducts.filter((product) => {
            return product.price >= 500 && product.price < 1000;
          }).length > 0 ||
            (selectedCategory === "" && selectedBrands.length === 0)) && (
            <div
              className={`filter-item ${
                "500-999" === selectedPriceRange ? "active" : ""
              }`}
            >
              <input
                type="radio"
                id="500-999"
                name="brand"
                value="500-999"
                checked={"500-999" === selectedPriceRange}
                onClick={(e) => handlePriceChange(e)}
              />
              <label className="filter-item-label" htmlFor="500-999">
                $500-$999
              </label>
            </div>
          )}
          {(filteredProducts.filter((product) => {
            return product.price >= 1000 && product.price < 1500;
          }).length > 0 ||
            (selectedCategory === "" && selectedBrands.length === 0)) && (
            <div
              className={`filter-item ${
                "1000-1499" === selectedPriceRange ? "active" : ""
              }`}
            >
              <input
                type="radio"
                id="1000-1499"
                name="brand"
                value="1000-1499"
                checked={"1000-1499" === selectedPriceRange}
                onClick={(e) => handlePriceChange(e)}
              />
              <label className="filter-item-label" htmlFor="1000-1499">
                $1000-$1499
              </label>
            </div>
          )}
          {(filteredProducts.filter((product) => {
            return product.price >= 1500 && product.price < 2000;
          }).length > 0 ||
            (selectedCategory === "" && selectedBrands.length === 0)) && (
            <div
              className={`filter-item ${
                "1500-1999" === selectedPriceRange ? "active" : ""
              }`}
            >
              <input
                type="radio"
                id="1500-1999"
                name="brand"
                value="1500-1999"
                checked={"1500-1999" === selectedPriceRange}
                onClick={(e) => handlePriceChange(e)}
              />
              <label className="filter-item-label" htmlFor="1500-1999">
                $1500-$1999
              </label>
            </div>
          )}
          {(filteredProducts.filter((product) => {
            return product.price >= 2000;
          }).length > 0 ||
            (selectedCategory === "" && selectedBrands.length === 0)) && (
            <div
              className={`filter-item ${
                "2000+" === selectedPriceRange ? "active" : ""
              }`}
            >
              <input
                type="radio"
                id="2000+"
                name="brand"
                value="2000+"
                checked={"2000+" === selectedPriceRange}
                onClick={(e) => handlePriceChange(e)}
              />
              <label className="filter-item-label" htmlFor="2000+">
                $2000+
              </label>
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default Filters;

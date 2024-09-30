import React, { useContext, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import Card from "./Card";
import { appContext } from "./context";
import Pagination from "./Pagination";
import Search from "./Search";
import Sort from "./Sort";
import "./home.css";
import Filters from "./Filters";

const Home = () => {
  const [currentProducts, setCurrentProducts] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [filterOption, setFilterOption] = useState("");
  const productsPerPage = 7;

  const { allProducts, getAllProducts, text, categories, brands } =
    useContext(appContext);

  useEffect(() => {
    getAllProducts();
    // console.log(allProducts);
  }, []);

  const paginateAndSortProducts = (page) => {
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    let filtered = allProducts.filter((product) =>
      product.title.toLowerCase().includes(text.toLowerCase())
    );

    if (text) setActivePage(1);

    // console.log(filtered);

    if (categories.includes(filterOption)) {
      filtered = filtered.filter((product) => {
        return product.category === filterOption;
      });
    } else if (brands.includes(filterOption)) {
      filtered = filtered.filter((product) => {
        return product.brand === filterOption;
      });
    } else if (sortOption === "0-499") {
      filtered = filtered.filter((product) => {
        return product.price > 0 && product.price < 500;
      });
    } else if (sortOption === "500-999") {
      filtered = filtered.filter((product) => {
        return product.price >= 500 && product.price < 1000;
      });
    } else if (sortOption === "1000-1499") {
      filtered = filtered.filter((product) => {
        return product.price >= 1000 && product.price < 1500;
      });
    } else if (sortOption === "1500-1999") {
      filtered = filtered.filter((product) => {
        return product.price >= 1500 && product.price < 2000;
      });
    } else if (sortOption === "2000+") {
      filtered = filtered.filter((product) => {
        return product.price >= 2000;
      });
    }

    // console.log(filtered);

    setFilteredProducts(filtered);

    if (sortOption === "low-to-high") {
      filtered = filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "high-to-low") {
      filtered = filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === "a-z") {
      filtered = filteredProducts.sort();
    } else if (sortOption === "z-a") {
      filtered = filteredProducts.reverse();
    }

    setFilteredProducts(filtered);

    setCurrentProducts(filtered.slice(startIndex, endIndex));
  };

  useEffect(() => {
    paginateAndSortProducts(activePage);
  }, [activePage, allProducts, text, sortOption, filterOption]);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    // console.log(e.target.value);
    setActivePage(1);
  };
  const handleFilterChange = (e) => {
    setFilterOption(e.target.value);
    // console.log(e.target.value);
    setActivePage(1);
  };

  return (
    <>
      {allProducts.length > 0 ? (
        <div className="home">
          <div className="flex-container">
            <div className="column-1">
              <Filters
                handleFilterChange={handleFilterChange}
                filterOption={filterOption}
              />
            </div>
            <div className="column-2">
              <Search />

              <Sort
                handleSortChange={handleSortChange}
                sortOption={sortOption}
              />

              {currentProducts.map((product) => (
                <Card id={product.id} product={product} />
              ))}

              <Pagination
                productsLength={filteredProducts.length}
                activePage={activePage}
                setActivePage={setActivePage}
                productsPerPage={productsPerPage}
              />
            </div>
          </div>
        </div>
      ) : (
        <div style={{ marginTop: 50 }}>
          <RotatingLines
            visible={true}
            height="60"
            width="60"
            strokeColor="gray"
            strokeWidth="3"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
    </>
  );
};

export default Home;

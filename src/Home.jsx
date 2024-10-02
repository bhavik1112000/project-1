import React, { useContext, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import Card from "./Card";
import { appContext } from "./context";
import Pagination from "./Pagination";
import Search from "./Search";
import Sort from "./Sort";
import "./home.css";

const Home = () => {
  const [currentProducts, setCurrentProducts] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const productsPerPage = 7;

  const { allProducts, getAllProducts, text } = useContext(appContext);

  useEffect(() => {
    getAllProducts();
  }, []);

  const paginateAndSortProducts = (page) => {
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    let filtered = allProducts.filter((product) =>
      product.title.toLowerCase().includes(text.toLowerCase())
    );

    if (sortOption === "low-to-high") {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === "high-to-low") {
      filtered = filtered.sort((a, b) => b.price - a.price);
    } else if (sortOption === "a-z") {
      filtered = filtered.sort();
    } else if (sortOption === "z-a") {
      filtered = filtered.reverse();
    }

    setFilteredProducts(filtered);

    setCurrentProducts(filtered.slice(startIndex, endIndex));
  };

  useEffect(() => {
    paginateAndSortProducts(activePage);
  }, [activePage, allProducts, text, sortOption]);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    setActivePage(1);
  };

  return (
    <>
      {allProducts.length > 0 ? (
        <div className="home">
          <Search />

          <Sort handleSortChange={handleSortChange} sortOption={sortOption} />

          {currentProducts.map((product) => (
            <Card
              data-testid="product-card"
              id={product.id}
              product={product}
            />
          ))}

          <Pagination
            productsLength={filteredProducts.length}
            activePage={activePage}
            setActivePage={setActivePage}
            productsPerPage={productsPerPage}
          />
        </div>
      ) : (
        <div style={{ marginTop: 50 }}>
          <RotatingLines
            data-testid="loading"
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

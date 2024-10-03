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
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategory, setSelectedcategory] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const productsPerPage = 15;

  const { allProducts, getAllProducts, text, categories, brands } =
    useContext(appContext);

  useEffect(() => {
    getAllProducts();
    console.log(allProducts);
  }, []);

  const paginateAndSortProducts = (page) => {
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    let filtered = allProducts.filter(
      (product) =>
        product.title.toLowerCase().includes(text.toLowerCase()) ||
        product.tags.some((tag) =>
          tag.toLowerCase().includes(text.toLowerCase())
        )
    );

    if (text) setActivePage(1);

    if (categories.includes(selectedCategory)) {
      filtered = filtered.filter((product) => {
        return product.category === selectedCategory;
      });
    }

    if (selectedBrands.length > 0) {
      filtered = filtered.filter((product) =>
        selectedBrands.includes(product.brand)
      );
    }
    if (selectedPriceRange === "0-499") {
      filtered = filtered.filter((product) => {
        return product.price > 0 && product.price < 500;
      });
    } else if (selectedPriceRange === "500-999") {
      filtered = filtered.filter((product) => {
        return product.price >= 500 && product.price < 1000;
      });
    } else if (selectedPriceRange === "1000-1499") {
      filtered = filtered.filter((product) => {
        return product.price >= 1000 && product.price < 1500;
      });
    } else if (selectedPriceRange === "1500-1999") {
      filtered = filtered.filter((product) => {
        return product.price >= 1500 && product.price < 2000;
      });
    } else if (selectedPriceRange === "2000-4999") {
      filtered = filtered.filter((product) => {
        return product.price >= 2000 && product.price < 5000;
      });
    } else if (selectedPriceRange === "5000-9999") {
      filtered = filtered.filter((product) => {
        return product.price >= 5000 && product.price < 10000;
      });
    } else if (selectedPriceRange === "10000-19999") {
      filtered = filtered.filter((product) => {
        return product.price >= 10000 && product.price < 20000;
      });
    } else if (selectedPriceRange === "20000-29999") {
      filtered = filtered.filter((product) => {
        return product.price >= 20000 && product.price < 30000;
      });
    } else if (selectedPriceRange === "30000+") {
      filtered = filtered.filter((product) => {
        return product.price >= 30000;
      });
    }

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
  }, [
    activePage,
    allProducts,
    text,
    sortOption,
    selectedCategory,
    selectedBrands,
    selectedPriceRange,
  ]);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    setActivePage(1);
  };

  const handleCategoryChange = (e) => {
    setSelectedcategory(
      selectedCategory === e.target.value ? "" : e.target.value
    );

    setActivePage(1);
    setSelectedBrands([]);
    setSelectedPriceRange("");
  };

  const handlePriceChange = (e) => {
    setSelectedPriceRange(
      selectedPriceRange === e.target.value ? "" : e.target.value
    );
    console.log(selectedCategory);

    setActivePage(1);
  };

  const handleBrandsChange = (e) => {
    if (selectedBrands.includes(e.target.value)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== e.target.value));
    } else {
      setSelectedBrands([...selectedBrands, e.target.value]);
    }
    setActivePage(1);
    setSelectedPriceRange("");
  };

  return (
    <>
      {allProducts.length > 0 ? (
        <div className="home">
          <div className="flex-container">
            <div className="column-1">
              <Filters
                handleCategoryChange={handleCategoryChange}
                handleBrandsChange={handleBrandsChange}
                handlePriceChange={handlePriceChange}
                selectedCategory={selectedCategory}
                selectedBrands={selectedBrands}
                selectedPriceRange={selectedPriceRange}
                filteredProducts={filteredProducts}
              />
            </div>
            <div className="column-2">
              <Search
                setSelectedBrands={setSelectedBrands}
                setSelectedCategory={setSelectedcategory}
                setSelectedPriceRange={setSelectedPriceRange}
              />

              {filteredProducts.length > 0 && (
                <Sort
                  handleSortChange={handleSortChange}
                  sortOption={sortOption}
                />
              )}

              {currentProducts.length > 0 ? (
                currentProducts.map((product) => (
                  <Card id={product.id} product={product} />
                ))
              ) : (
                <p className="no-item">No item to display</p>
              )}

              {filteredProducts.length > 0 && (
                <Pagination
                  productsLength={filteredProducts.length}
                  activePage={activePage}
                  setActivePage={setActivePage}
                  productsPerPage={productsPerPage}
                />
              )}
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

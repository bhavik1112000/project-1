import React, { useEffect, useState } from "react";
import "./pagination.css";

const Pagination = ({
  productsLength,
  activePage,
  setActivePage,
  productsPerPage,
}) => {
  const [totalPages, setTotalPages] = useState([]);

  useEffect(() => {
    if (productsLength > 0) {
      console.log("bhavik", productsLength);
      createPageButtons();
    }
  }, [productsLength]);

  const createPageButtons = () => {
    const pages = [];
    const totalPageCount = Math.ceil(productsLength / productsPerPage);
    for (let i = 1; i <= totalPageCount; i++) {
      pages.push(i);
    }
    setTotalPages(pages);
  };

  return (
    <div className="pagination">
      <button
        disabled={activePage === 1 ? true : false}
        className="left-arrow"
        onClick={() => setActivePage((prev) => Math.max(prev - 1, 1))}
      >
        <i class="fa-solid fa-arrow-left"></i>
      </button>
      {productsLength > 0 &&
        totalPages.map((page) => (
          <span
            className={`pagination-bullet ${
              page === activePage ? "active-btn" : ""
            }`}
            onClick={(e) => {
              setActivePage(page);
              // clickHandler(e);
            }}
            key={page}
          >
            <p className="bullet-text" style={{ margin: "0 auto" }}>
              {page}
            </p>
          </span>
        ))}
      <button
        disabled={
          activePage === totalPages.length || productsLength === 0
            ? true
            : false
        }
        className="right-arrow"
        onClick={() =>
          setActivePage((prev) => Math.min(prev + 1, totalPages.length))
        }
      >
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default Pagination;

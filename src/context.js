import { createContext, useState } from "react";

export const appContext = createContext();

export const AppState = (props) => {
  const [allProducts, setAllProducts] = useState([]);
  const [text, setText] = useState("");
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  const getAllProducts = async () => {
    try {
      const products = await fetch("https://dummyjson.com/products?limit=200");
      const json = await products.json();
      setAllProducts(json.products);
      //   console.log(allProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <appContext.Provider
      value={{
        allProducts,
        setAllProducts,
        getAllProducts,
        text,
        setText,
        categories,
        setCategories,
        brands,
        setBrands,
      }}
    >
      {props.children}
    </appContext.Provider>
  );
};

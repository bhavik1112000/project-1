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

  // const getAllProducts = async () => {
  //   try {
  //     const products = await fetch(
  //       "https://api.jsonbin.io/v3/b/66fe4330ad19ca34f8b1ec80",
  //       {
  //         method: "GET",
  //         headers: {
  //           "X-Master-Key":
  //             "$2a$10$nXlygou0VDQCVK/g2uz2B.mBGRvL6Fsg8X0R/w5AIsY0B8p.uxR9S",
  //         },
  //       }
  //     );
  //     const json = await products.json();
  //     setAllProducts(json.record.products);
  //     console.log(json.record.products);
  //   } catch (error) {
  //     console.error("Error fetching products:", error);
  //   }
  // };

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

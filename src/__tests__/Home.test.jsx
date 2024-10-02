import { render, screen } from "@testing-library/react";
import App from "../App";

const timeoutMs = 5000;

describe("home page test", () => {
  it("renders on screen", () => {
    render(<App />);

    setTimeout(() => {
      const cards = screen.getByRole("list");
      expect(cards).toBeInTheDocument();
    }, timeoutMs);
  });

  it("mock data", () => {
    render(<App />);

    let productsList = {};

    setTimeout(() => {
      fetch("https://dummyjson.com/products").then((productsArray) => {
        let product = productsArray["products"];

        if (productsList.length < 10) {
          productsList.push(product);
        }
      });
    }, timeoutMs);
  });

  it("show loading animation", () => {
    render(<App />);

    setTimeout(() => {
      const loadingElement = screen.getByTestId("loading");
      expect(loadingElement).toBeInTheDocument();
    }, timeoutMs);
  });

  it("show data after loaded", () => {
    render(<App />);

    setTimeout(() => {
      const productCards = screen.getAllByTestId("product-card");
      expect(productCards).toBeInTheDocument();
    }, timeoutMs);
  });
});

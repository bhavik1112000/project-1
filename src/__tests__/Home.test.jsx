import { render, screen } from '@testing-library/react'
import App from '../App';

const timeoutMs = 5000;

describe("home page test", () => {
  it("renders on screen", () => {
    render(<App />);

    setInterval(() => {
      const cards = screen.getByRole('list');
      expect(cards).toBeInTheDocument();
    }, timeoutMs);
  });

  it("mock data", () => {
    render(<App />);

    let productsList = {};

    setInterval(() => {
      fetch("https://dummyjson.com/products").then(productsArray => {
        let product = productsArray['products'];

        if (productsList.length < 10) {
          productsList.push(product);
        }
      });
    }, timeoutMs);
  });
});

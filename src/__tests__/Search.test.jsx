import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

const timeoutMs = 5000;

describe("searchbox test", () => {
  it("renders on page", () => {
    render(<App />);

    setTimeout(() => {
      const searchbox = screen.getByPlaceholderText("Search...");
      expect(searchbox).toBeInTheDocument();
    }, timeoutMs);
  });

  it("typing keywords", () => {
    render(<App />);

    setTimeout(() => {
      const searchbox = screen.getByPlaceholderText("Search...");

      userEvent.type(searchbox, "green");
      expect(searchbox).toHaveValue("green");
    }, timeoutMs);
  });

  it("number input", () => {
    render(<App />);

    setTimeout(() => {
      const searchbox = screen.getByPlaceholderText("Search...");

      userEvent.type(searchbox, "123");
      expect(searchbox).toHaveValue("");
    }, timeoutMs);
  });
});

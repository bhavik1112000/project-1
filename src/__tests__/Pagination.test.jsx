import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

const timeoutMs = 5000;

describe("page bullets test", () => {
  it("renders on page", () => {
    render(<App />);

    setTimeout(() => {
      const buttons = screen.getAllByTestId("page-bullet");
      expect(buttons).toBeInTheDocument();
    }, timeoutMs);
  });

  it("hovering buttons", () => {
    render(<App />);

    setTimeout(() => {
      const buttons = screen.getAllByTestId("page-bullet");
      userEvent.hover(buttons);
    }, timeoutMs);
  });

  it("clicking buttons", () => {
    render(<App />);

    setTimeout(() => {
      const buttons = screen.getAllByTestId("page-bullet");
      userEvent.click(buttons);
    }, timeoutMs);
  });

  it("page navigation", () => {
    render(<App />);

    setTimeout(() => {
      const buttons = screen.getAllByTestId("page-bullet");
      userEvent.click(buttons[1]);
      expect(buttons[1]).toHaveStyle("background-color: #6495ed");
    }, timeoutMs);
  });

  it("page bullets", () => {
    render(<App />);

    setTimeout(() => {
      const buttons = screen.getAllByTestId("page-bullet");
      expect(buttons).toBe(5);
    }, timeoutMs);
  });
});

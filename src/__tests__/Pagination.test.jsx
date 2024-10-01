import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import App from '../App';

const timeoutMs = 5000;

describe("page indicators test", () => {
  it("renders on page", () => {
    render(<App />);

    setInterval(() => {
      const buttons = screen.getAllByRole('button');
      expect(buttons).toBeInTheDocument();
    }, timeoutMs);
  });

  it("hovering buttons", () => {
    render(<App />);

    setInterval(() => {
      const buttons = screen.getAllByRole('button');
      userEvent.hover(buttons);
    }, timeoutMs);
  });

  it("clicking buttons", () => {
    render(<App />);

    setInterval(() => {
      const buttons = screen.getAllByRole('button');
      userEvent.click(buttons);
    }, timeoutMs);
  });
});

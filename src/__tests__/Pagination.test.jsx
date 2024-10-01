import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import App from '../App';

const timeoutMs = 5000;

describe("page bullets test", () => {
  it("renders on page", () => {
    render(<App />);

    setInterval(() => {
      const buttons = screen.getAllByTestId('page-bullet');
      expect(buttons).toBeInTheDocument();
    }, timeoutMs);
  });

  it("hovering buttons", () => {
    render(<App />);

    setInterval(() => {
      const buttons = screen.getAllByTestId('page-bullet');
      userEvent.hover(buttons);
    }, timeoutMs);
  });

  it("clicking buttons", () => {
    render(<App />);

    setInterval(() => {
      const buttons = screen.getAllByTestId('page-bullet');
      userEvent.click(buttons);
    }, timeoutMs);
  });
});

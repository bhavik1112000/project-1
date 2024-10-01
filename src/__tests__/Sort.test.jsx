import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import App from '../App';

const timeoutMs = 5000;

describe("sort menu test", () => {
  it("renders on page", () => {
    render(<App />);

    setInterval(() => {
      const menu = screen.getByRole('select');
      expect(menu).toBeInTheDocument();
    }, timeoutMs);
  });

  it("show menu items", () => {
    render(<App />);

    setInterval(() => {
      const listbox = screen.getByRole('listbox');
      userEvent.click();
      expect(listbox).toHaveValue('Select');
    }, timeoutMs);
  });

  it("select menu item", () => {
    render(<App />);

    setInterval(() => {
      const listbox = screen.getByRole('listbox');
      userEvent.selectOptions(listbox, ['Select', 'Price: Low to High', 'Price: High to Low', 'Name: A-Z', 'Name: Z-A']);
      expect(listbox).at(0).instance().selected;
    }, timeoutMs);
  });
});

// import necessary react testing library helpers here
// import the Counter component here

const { render, screen } = require("@testing-library/react");
import Counter from '../components/Counter'
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  render(<Counter />)
})

test('renders counter message', () => {
  const message = screen.getByText(/Counter/i);
  expect(message).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const value = screen.getByTestId('count');
  expect(value).toHaveTextContent(0);
});

test('clicking + increments the count', () => {
  const increment = screen.getByText('+');
  userEvent.click(increment);
  const value = screen.getByText('1');
  expect(value).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  const decrement = screen.getByText('-');
  userEvent.click(decrement);
  const value = screen.getByText('-1');
  expect(value).toBeInTheDocument();
});

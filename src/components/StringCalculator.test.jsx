import { render, screen, fireEvent } from '@testing-library/react';
import StringCalculator from '../components/StringCalculator';

describe('String Calculator Component', () => {
  test('renders the component', () => {
    render(<StringCalculator />);
    expect(screen.getByText(/String Calculator/i)).toBeInTheDocument();
  });

  test('calculates and displays result for valid input', () => {
    render(<StringCalculator />);

    const textarea = screen.getByPlaceholderText(/Enter numbers/i);
    fireEvent.change(textarea, { target: { value: '2,3' } });

    fireEvent.click(screen.getByText(/Calculate/i));
    expect(screen.getByText(/Result: 5/i)).toBeInTheDocument();
  });

  test('displays 0 for empty input', () => {
    render(<StringCalculator />);

    fireEvent.click(screen.getByText(/Calculate/i));
    expect(screen.getByText(/Result: 0/i)).toBeInTheDocument();
  });

  test('handles multiple numbers gracefully', () => {
    render(<StringCalculator />);

    const textarea = screen.getByPlaceholderText(/Enter numbers/i);
    fireEvent.change(textarea, { target: { value: '1,2,3,4,5' } });

    fireEvent.click(screen.getByText(/Calculate/i));
    expect(screen.getByText(/Result: 15/i)).toBeInTheDocument();
  });

  test('handles custom delimiters', () => {
    render(<StringCalculator />);

    const textarea = screen.getByPlaceholderText(/Enter numbers/i);
    fireEvent.change(textarea, { target: { value: '//;\n1;2;3' } });

    fireEvent.click(screen.getByText(/Calculate/i));
    expect(screen.getByText(/Result: 6/i)).toBeInTheDocument();
  });

  test('displays an error for negative numbers', () => {
    render(<StringCalculator />);

    const textarea = screen.getByPlaceholderText(/Enter numbers/i);
    fireEvent.change(textarea, { target: { value: '1,-2,3' } });

    fireEvent.click(screen.getByText(/Calculate/i));
    expect(screen.getByText(/Negatives not allowed: -2/i)).toBeInTheDocument();
  });

  test('displays multiple negatives in the error message', () => {
    render(<StringCalculator />);

    const textarea = screen.getByPlaceholderText(/Enter numbers/i);
    fireEvent.change(textarea, { target: { value: '1,-2,-3,4' } });

    fireEvent.click(screen.getByText(/Calculate/i));
    expect(screen.getByText(/Negatives not allowed: -2, -3/i)).toBeInTheDocument();
  });
});

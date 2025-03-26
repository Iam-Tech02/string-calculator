import { render, screen, fireEvent } from '@testing-library/react';
import StringCalculator from '../components/StringCalculator';

describe('String Calculator Component', () => {
  test('renders the component', () => {
    render(<StringCalculator />);
    expect(screen.getByText(/String Calculator/i)).toBeInTheDocument();
  });

  test('calculates and displays result for valid input', () => {
    render(<StringCalculator />);

    const textarea = screen.getByPlaceholderText(/Enter numbers separated by commas/i);
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

    const textarea = screen.getByPlaceholderText(/Enter numbers separated by commas/i);
    fireEvent.change(textarea, { target: { value: '1,2,3,4,5' } });

    fireEvent.click(screen.getByText(/Calculate/i));
    expect(screen.getByText(/Result: 15/i)).toBeInTheDocument();
  });

  test('displays 0 for invalid input', () => {
    render(<StringCalculator />);

    const textarea = screen.getByPlaceholderText(/Enter numbers separated by commas/i);
    fireEvent.change(textarea, { target: { value: 'abc' } });

    fireEvent.click(screen.getByText(/Calculate/i));
    expect(screen.getByText(/Result: 0/i)).toBeInTheDocument();
  });

  test('handles mixed valid and invalid input', () => {
    render(<StringCalculator />);

    const textarea = screen.getByPlaceholderText(/Enter numbers separated by commas/i);
    fireEvent.change(textarea, { target: { value: '2,abc,3' } });

    fireEvent.click(screen.getByText(/Calculate/i));
    expect(screen.getByText(/Result: 5/i)).toBeInTheDocument();
  });

  test('handles leading and trailing spaces', () => {
    render(<StringCalculator />);

    const textarea = screen.getByPlaceholderText(/Enter numbers separated by commas/i);
    fireEvent.change(textarea, { target: { value: ' 2 , 3 , 4 ' } });

    fireEvent.click(screen.getByText(/Calculate/i));
    expect(screen.getByText(/Result: 9/i)).toBeInTheDocument();
  });
});

import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '../../src/components/controls/Button';

describe('Button', () => {
  const textContent = 'testBtn';
  const mockFn = jest.fn();

  it('renders', () => {
    render(<Button textContent="testBtn" handleClick={mockFn} />);
  });

  it('renders button containing textContent prop value', () => {
    render(<Button textContent={textContent} handleClick={mockFn} />);
    const btn = screen.getByText(textContent);
    expect(btn).toBeInTheDocument();
  });

  it('runs handling function', () => {
    render(<Button textContent={textContent} handleClick={mockFn} />);
    const btn = screen.getByText(textContent);
    fireEvent.click(btn);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});

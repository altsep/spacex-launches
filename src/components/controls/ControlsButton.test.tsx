import { fireEvent, render, screen } from '@testing-library/react';
import { ControlsButton } from './ControlsButton';

describe('Button', () => {
  const textContent = 'testBtn';
  const mockFn = jest.fn();

  it('renders', () => {
    render(<ControlsButton textContent={textContent} handleClick={mockFn} />);
  });

  it('renders button containing textContent prop value', () => {
    render(<ControlsButton textContent={textContent} handleClick={mockFn} />);

    screen.getByRole('button', { name: textContent });
  });

  it('runs handling function', () => {
    render(<ControlsButton textContent={textContent} handleClick={mockFn} />);

    const btn = screen.getByRole('button', { name: textContent });
    fireEvent.click(btn);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});

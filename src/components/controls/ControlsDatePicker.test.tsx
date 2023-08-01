import { fireEvent, render, screen } from '@testing-library/react';
import { ControlsDatePicker } from './ControlsDatePicker';

describe('ControlsDatePicker', () => {
  const handleChangeMockFn = jest.fn();

  it('renders', () => {
    render(<ControlsDatePicker handleChange={handleChangeMockFn} labelText="" />);
  });

  it('changes state', () => {
    const mockLabelText = 'datepicker label';
    const mockValue = '2020-05-25';
    render(<ControlsDatePicker handleChange={handleChangeMockFn} labelText={mockLabelText} />);

    fireEvent.change(screen.getByLabelText(mockLabelText), { target: { value: mockValue } });

    expect(handleChangeMockFn).toHaveBeenCalledTimes(1);
    expect(screen.getByLabelText(mockLabelText)).toHaveValue(mockValue);
  });
});

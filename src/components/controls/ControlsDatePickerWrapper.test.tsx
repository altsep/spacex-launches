import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../../utils/test-utils';
import { ControlsDatePickerWrapper } from './ControlsDatePickerWrapper';

describe('ControlsDatePickerWrapper', () => {
  it('renders', () => {
    renderWithProviders(<ControlsDatePickerWrapper />);
  });

  it('renders inputs', () => {
    const mockValue = '2020-05-25';
    renderWithProviders(<ControlsDatePickerWrapper />);

    const allInputs = screen.getAllByLabelText(/date/i);

    allInputs.forEach((input) => {
      fireEvent.change(input, { target: { value: mockValue } });
      expect(input).toHaveValue(mockValue);
    });
  });
});

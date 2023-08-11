import { fireEvent, screen } from '@testing-library/react';
import dayjs from 'dayjs';
import { DEFAULT_LAUNCHES_QUERY_ARG } from '../../utils/constants';
import { DATEPICKER_DATE_FORMAT } from '../../utils/constants/dateFormats.constant';
import { renderWithProviders } from '../../utils/test-utils';
import { ControlsDatePicker } from './ControlsDatePicker';

describe('ControlsDatePicker', () => {
  const nameMock = '$gte';
  it('renders', () => {
    renderWithProviders(<ControlsDatePicker labelText="" name={nameMock} />);
  });

  it('changes value', () => {
    const mockLabelText = 'datepicker label';
    const mockValue = '2020-05-25';
    renderWithProviders(<ControlsDatePicker labelText={mockLabelText} name={nameMock} />);

    fireEvent.change(screen.getByLabelText(mockLabelText), { target: { value: mockValue } });

    expect(screen.getByLabelText(mockLabelText)).toHaveValue(mockValue);
  });

  it('sets value to the initial value if empty', () => {
    const mockLabelText = 'datepicker label';
    const mockValue = '';
    const defaultValue = DEFAULT_LAUNCHES_QUERY_ARG.query.date_utc[nameMock];
    const initialValue = dayjs(defaultValue).format(DATEPICKER_DATE_FORMAT);
    renderWithProviders(<ControlsDatePicker labelText={mockLabelText} name={nameMock} />);

    fireEvent.change(screen.getByLabelText(mockLabelText), { target: { value: mockValue } });

    expect(screen.getByLabelText(mockLabelText)).toHaveValue(initialValue);
  });
});

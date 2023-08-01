import { screen } from '@testing-library/react';
import dayjs from 'dayjs';
import { mockLaunch } from '../../../__mocks__/launch.mock';
import { CARD_DATE_FORMAT } from '../../utils/constants';
import { renderWithProviders } from '../../utils/test-utils';
import { Card } from './Card';

describe('Card', () => {
  it('renders', () => {
    renderWithProviders(<Card item={mockLaunch} />);
  });

  it('contains formatted date', () => {
    renderWithProviders(<Card item={mockLaunch} />);

    const formattedDate = dayjs(mockLaunch.date_utc).format(CARD_DATE_FORMAT);

    expect(screen.getByRole('time')).toHaveTextContent(formattedDate);
  });
});

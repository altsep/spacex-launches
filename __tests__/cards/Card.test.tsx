import dayjs from 'dayjs';
import { mockLaunch } from '../../__mocks__/launch.mock';
import { Card } from '../../src/components/cards/Card';
import { renderWithProviders } from '../../src/utils/test-utils';
import { CARD_DATE_FORMAT } from '../../src/utils/constants';

describe('Card', () => {
  it('renders', () => {
    renderWithProviders(<Card item={mockLaunch} />);
  });

  it('contains formatted date', () => {
    const { container } = renderWithProviders(<Card item={mockLaunch} />);
    const formattedDate = dayjs(mockLaunch.date_utc).format(CARD_DATE_FORMAT);
    expect(container).toHaveTextContent(formattedDate);
  });
});

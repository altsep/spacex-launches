import { CardLoadMore } from '../../src/components/cards/CardLoadMore';
import { renderWithProviders } from '../../src/utils/test-utils';

describe('CardLoadMore', () => {
  it('renders', () => {
    renderWithProviders(<CardLoadMore />);
  });
});

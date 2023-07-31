import { screen } from '@testing-library/react';
import { CardList } from '../../src/components/cards/CardList';
import { CardLoadMore } from '../../src/components/cards/CardLoadMore';
import { renderWithProviders } from '../../src/utils/test-utils';

describe('CardList', () => {
  it('renders', () => {
    renderWithProviders(<CardList />);
  });

  it('appends data to state on click', () => {
    renderWithProviders(<CardLoadMore />);

    const cards = screen.queryAllByTestId('card');

    expect(cards.length).toBeTruthy();
  });
});

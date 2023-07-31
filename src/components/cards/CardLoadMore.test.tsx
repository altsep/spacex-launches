import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../../utils/test-utils';
import { CardLoadMore } from './CardLoadMore';

describe('CardLoadMore', () => {
  it('renders', () => {
    renderWithProviders(<CardLoadMore />);
  });

  it('dispatches to state on click', async () => {
    const { store } = renderWithProviders(<CardLoadMore />);
    const initialState = store.getState().queryArgOpts;

    const btn = await screen.findByText('Load more...');

    fireEvent.click(btn);

    screen.getByText('Loading...');
    const state = store.getState().queryArgOpts;

    expect(state).toHaveProperty('page');
    expect(state.page).not.toStrictEqual(initialState.page);
  });
});

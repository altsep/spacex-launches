import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../../utils/test-utils';
import { CardLoadMoreButton } from './CardLoadMoreButton';

describe('CardLoadMoreButton', () => {
  it('renders', () => {
    renderWithProviders(<CardLoadMoreButton />);
  });

  it('dispatches to state on click', async () => {
    const { store } = renderWithProviders(<CardLoadMoreButton />);
    const initialState = store.getState().queryArgOpts.options;

    const btn = await screen.findByRole('button', { name: 'Load more...' });
    fireEvent.click(btn);
    const state = store.getState().queryArgOpts.options;

    expect(state).toHaveProperty('page');
    expect(state.page).not.toStrictEqual(initialState.page);
  });

  it('switches textContent on click', async () => {
    renderWithProviders(<CardLoadMoreButton />);

    const btn = await screen.findByRole('button', { name: 'Load more...' });

    fireEvent.click(btn);
    screen.getByRole('button', { name: 'Loading...' });
  });
});

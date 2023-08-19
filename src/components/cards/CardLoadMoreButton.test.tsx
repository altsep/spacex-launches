import { fireEvent, screen } from '@testing-library/react';
import {
  mockDisconnect,
  mockIntersectionEntry,
  mockIntersectionObserver,
  mockObserve,
  renderWithProviders,
} from '../../utils/test-utils';
import { CardLoadMoreButton } from './CardLoadMoreButton';

describe('CardLoadMoreButton', () => {
  beforeEach(() => {
    mockIntersectionObserver.mockClear();
    mockIntersectionEntry.isIntersecting = false;
  });

  it('renders', () => {
    renderWithProviders(<CardLoadMoreButton />);
  });

  it('registers intersection observer', async () => {
    renderWithProviders(<CardLoadMoreButton />);

    await screen.findByRole('button', { name: 'Load more...' });

    expect(mockObserve).toHaveBeenCalled();
    expect(mockDisconnect).toHaveBeenCalled();
  });

  it('does not dispatch if not intersecting', async () => {
    const { store } = renderWithProviders(<CardLoadMoreButton />);

    await screen.findByRole('button', { name: 'Load more...' });

    expect(mockObserve).toHaveBeenCalled();
    expect(mockDisconnect).toHaveBeenCalled();

    const state = store.getState().queryArg.options;
    expect(state.page).toBe(1);
  });

  it('dispatches on intersect', async () => {
    mockIntersectionEntry.isIntersecting = true;

    const { store } = renderWithProviders(<CardLoadMoreButton />);
    const initialState = store.getState().queryArg.options;

    await screen.findByRole('button', { name: 'Loading...' });

    expect(mockObserve).toHaveBeenCalled();
    expect(mockDisconnect).toHaveBeenCalled();

    const state = store.getState().queryArg.options;
    expect(state.page).not.toStrictEqual(initialState.page);
  });

  it('dispatches to state on click', async () => {
    const { store } = renderWithProviders(<CardLoadMoreButton />);
    const initialState = store.getState().queryArg.options;

    const btn = await screen.findByRole('button', { name: 'Load more...' });
    fireEvent.click(btn);
    const state = store.getState().queryArg.options;

    expect(state).toHaveProperty('page');
    expect(state.page).not.toStrictEqual(initialState.page);
  });

  it('switches textContent on click', async () => {
    renderWithProviders(<CardLoadMoreButton />);

    const btn = await screen.findByRole('button', { name: 'Load more...' });

    fireEvent.click(btn);
    screen.getByText('Loading...');
  });
});

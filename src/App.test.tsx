import { fireEvent, screen } from '@testing-library/react';
import { App } from './App';
import { renderWithProviders } from './utils/test-utils';

describe('App', () => {
  it('renders', () => {
    renderWithProviders(<App />);
  });

  it('renders the right amount of appended cards', async () => {
    const { store } = renderWithProviders(<App />);

    let state = store.getState().queryArgOpts;

    const btn = await screen.findByText('Load more...');

    expect(screen.getAllByTestId('card').length).toBe(state.limit * state.page);

    fireEvent.click(btn);

    state = store.getState().queryArgOpts;

    await screen.findByText('Load more...');

    expect(screen.getAllByTestId('card').length).toBe(state.limit * state.page);
  });

  it('does not append cards if page number equals 1', async () => {
    const { store } = renderWithProviders(<App />);

    const { limit } = store.getState().queryArgOpts;

    const btn = screen.getByText('Sort by date');

    await screen.findByText('Load more...');

    expect(screen.getAllByTestId('card').length).toBe(limit);

    fireEvent.click(btn);

    await screen.findByText('Load more...');

    expect(screen.getAllByTestId('card').length).toBe(limit);
  });
});
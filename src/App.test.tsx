import { fireEvent, screen, waitFor } from '@testing-library/react';
import dayjs from 'dayjs';
import { App } from './App';
import { renderWithProviders } from './utils/test-utils';

describe('App', () => {
  it('renders', () => {
    renderWithProviders(<App />);
  });

  it('does not append cards on refetch, given the page number equals 1', async () => {
    const { store } = renderWithProviders(<App />);
    const { limit } = store.getState().queryArgOpts;

    const btn = screen.getByRole('button', { name: 'Sort by date' });
    await screen.findByRole('button', { name: 'Load more...' });
    expect(screen.getAllByTestId('card').length).toBe(limit);

    fireEvent.click(btn);

    await screen.findByRole('button', { name: 'Load more...' });
    expect(screen.getAllByTestId('card').length).toBe(limit);
  });

  it('renders cards in the correct order if more cards were appended after sort', async () => {
    const { store } = renderWithProviders(<App />);
    const sortBtn = screen.getByRole('button', { name: 'Sort by date' });
    const loadBtn = await screen.findByRole('button', { name: 'Load more...' });

    fireEvent.click(sortBtn);

    await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument());
    fireEvent.click(loadBtn);

    await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument());

    const state = store.getState().queryArgOpts;
    const times = screen.getAllByRole<HTMLTimeElement>('time').map(({ dateTime }) => dayjs(dateTime).unix());
    const sortedTimes = times.slice().sort((a, b) => (state.sort.date_unix === 'asc' ? a - b : b - a));

    expect(times.length).toBe(state.limit * state.page);
    expect(times).toStrictEqual(sortedTimes);
  });
});

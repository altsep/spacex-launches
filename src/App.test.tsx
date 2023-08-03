import { fireEvent, screen, waitFor } from '@testing-library/react';
import { App } from './App';
import { Launch } from './models/launch.model';
import { spaceXApi } from './services/spaceXApi.service';
import { sortByDate } from './utils/helpers/sorting.helpers';
import { renderWithProviders } from './utils/test-utils';

describe('App', () => {
  it('renders', () => {
    renderWithProviders(<App />);
  });

  it('does not append cards on refetch, given the page number equals 1', async () => {
    const { store } = renderWithProviders(<App />);
    const { limit } = store.getState().queryArgOpts.options;

    const btn = screen.getByRole('button', { name: 'Sort by date' });
    await screen.findByRole('button', { name: 'Load more...' });
    expect(screen.getAllByTestId('card').length).toBe(limit);

    fireEvent.click(btn);

    await screen.findByRole('button', { name: 'Load more...' });
    expect(screen.getAllByTestId('card').length).toBe(limit);
  });

  it('merges docs in the correct order if more cards were appended after sort', async () => {
    const { store } = renderWithProviders(<App />);
    const sortBtn = screen.getByRole('button', { name: 'Sort by date' });
    const loadBtn = await screen.findByRole('button', { name: 'Load more...' });

    fireEvent.click(sortBtn);
    await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument());
    fireEvent.click(loadBtn);
    await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument());

    const queryArg = store.getState().queryArgOpts;
    const selector = spaceXApi.endpoints.getLaunchesByQuery.select(queryArg);
    const queryState = selector(store.getState());

    expect(queryState.status).toBe('fulfilled');

    const docs: Launch[] = queryState.data?.docs || [];
    const { options } = queryArg;
    const sortedDocs = sortByDate(docs.slice(), options.sort.date_unix);

    expect(docs.length).toBe(options.limit * options.page);
    expect(docs).toStrictEqual(sortedDocs);
  });
});

import { fireEvent, screen } from '@testing-library/react';
import { rest } from 'msw';
import { server } from '../../../__mocks__/api/server';
import { API_BASE_URL, ApiPath } from '../../utils/constants';
import { renderWithProviders } from '../../utils/test-utils';
import { CardList } from './CardList';

describe('CardList', () => {
  it('renders', () => {
    renderWithProviders(<CardList />);
  });

  it('renders the right amount cards initially', async () => {
    const { store } = renderWithProviders(<CardList />);
    const { limit } = store.getState().queryArgOpts.options;

    expect((await screen.findAllByTestId('card')).length).toBe(limit);
  });

  it('renders the right amount of cards after append', async () => {
    const { store } = renderWithProviders(<CardList />);

    const btn = await screen.findByRole('button', { name: 'Load more...' });
    fireEvent.click(btn);
    await screen.findByRole('button', { name: 'Load more...' });
    const { limit, page } = store.getState().queryArgOpts.options;

    expect(screen.getAllByTestId('card').length).toBe(limit * page);
  });

  it('handles error response', async () => {
    server.use(
      rest.post(`${API_BASE_URL}${ApiPath.launches}/query`, (_req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    renderWithProviders(<CardList />);

    await screen.findByText('Error occured');
  });
});

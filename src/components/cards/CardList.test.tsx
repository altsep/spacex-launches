import { screen } from '@testing-library/react';
import { rest } from 'msw';
import { server } from '../../../__mocks__/api/server';
import { API_BASE_URL, ApiPath } from '../../utils/constants';
import { renderWithProviders } from '../../utils/test-utils';
import { CardList } from './CardList';

describe('CardList', () => {
  it('renders', () => {
    renderWithProviders(<CardList />);
  });

  it('renders cards', async () => {
    const { store } = renderWithProviders(<CardList />);
    const { page, limit } = store.getState().queryArgOpts.options;

    const cards = await screen.findAllByTestId('card');

    expect(cards.length).toStrictEqual(page * limit);
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

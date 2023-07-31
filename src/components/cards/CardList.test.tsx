import { screen } from '@testing-library/react';
import { rest } from 'msw';
import { server } from '../../../__mocks__/api/server';
import { mockLaunchesQueryRes } from '../../../__mocks__/launchesQueryRes.mock';
import { API_BASE_URL } from '../../utils/constants';
import { ApiPath } from '../../utils/constants/api.constants';
import { renderWithProviders } from '../../utils/test-utils';
import { CardList } from './CardList';

describe('CardList', () => {
  const mockCardsLen = mockLaunchesQueryRes.docs.length;

  it('renders', () => {
    renderWithProviders(<CardList />);
  });

  it('renders cards', async () => {
    renderWithProviders(<CardList />);

    const cards = await screen.findAllByTestId('card');

    expect(cards.length).toStrictEqual(mockCardsLen);
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

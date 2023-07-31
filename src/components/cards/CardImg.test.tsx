import { screen } from '@testing-library/react';
import { mockLaunch } from '../../../__mocks__/launch.mock';
import { renderWithProviders } from '../../utils/test-utils';
import { CardImg } from './CardImg';

describe('CardImg', () => {
  it('renders', () => {
    renderWithProviders(<CardImg rocket={mockLaunch.rocket} />);
  });

  it('displays image', async () => {
    renderWithProviders(<CardImg rocket={mockLaunch.rocket} />);
    const img: HTMLImageElement = await screen.findByTestId('card-img');
    expect(img).toBeInTheDocument();
    expect(img.src.length).toBeTruthy();
  });
});

import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { mockLaunch } from '../../__mocks__/launch.mock';
import { CardImg } from '../../src/components/cards/CardImg';
import { store } from '../../src/store';

describe('CardImg', () => {
  it('renders', () => {
    render(
      <Provider store={store}>
        <CardImg rocket={mockLaunch.rocket} />
      </Provider>
    );
  });
});

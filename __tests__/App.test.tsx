import { App } from '../src/App';
import { renderWithProviders } from '../src/utils/test-utils';

describe('App', () => {
  it('renders', () => {
    renderWithProviders(<App />);
  });
});

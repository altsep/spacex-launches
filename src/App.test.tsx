import { App } from './App';
import { renderWithProviders } from './utils/test-utils';

describe('App', () => {
  it('renders', () => {
    renderWithProviders(<App />);
  });
});

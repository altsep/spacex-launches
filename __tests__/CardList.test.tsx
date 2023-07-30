import { render } from '@testing-library/react';
import { CardList } from '../src/components/CardList';

describe('CardList', () => {
  it('renders', () => {
    render(<CardList />);
  });
});

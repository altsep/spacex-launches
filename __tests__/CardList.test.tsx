import { render } from '@testing-library/react';
import { CardList } from '../src/components/cards/CardList';

describe('CardList', () => {
  it('renders', () => {
    render(<CardList />);
  });
});

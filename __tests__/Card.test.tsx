import { render } from '@testing-library/react';
import { launch } from '../__mocks__/launch';
import { Card } from '../src/components/Card';

describe('Card', () => {
  it('renders', () => {
    render(<Card data={launch} />);
  });
});

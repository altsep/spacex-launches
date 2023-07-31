import { render } from '@testing-library/react';
import { CardWrapper } from '../../src/components/cards/CardWrapper';

describe('CardWrapper', () => {
  it('renders', () => {
    render(<CardWrapper>{null}</CardWrapper>);
  });

  it('children to render', () => {
    const childNode = 'Some text';
    const { container } = render(<CardWrapper>{childNode}</CardWrapper>);
    expect(container).toHaveTextContent(childNode);
  });
});

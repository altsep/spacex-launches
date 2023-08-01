import { render, screen } from '@testing-library/react';
import { CardWrapper } from './CardWrapper';

describe('CardWrapper', () => {
  it('renders', () => {
    render(<CardWrapper>{null}</CardWrapper>);
  });

  it('children to render', () => {
    const childNode = 'Some text';
    render(<CardWrapper>{childNode}</CardWrapper>);
    screen.getByText(childNode);
  });
});

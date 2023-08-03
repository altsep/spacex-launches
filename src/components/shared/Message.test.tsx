import { render, screen } from '@testing-library/react';
import { Message } from './Message';

describe('Message', () => {
  it('renders', () => {
    render(<Message content="" />);
  });

  it('displays text content passed as prop', () => {
    const contentMock = 'Some text';

    render(<Message content={contentMock} />);

    expect(screen.getByText(contentMock)).toBeInTheDocument();
  });
});

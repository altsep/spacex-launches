import { render } from '@testing-library/react';
import { mockLaunch } from '../../__mocks__/launch.mock';
import { CardText } from '../../src/components/cards/CardText';

describe('CardText', () => {
  const { name, details } = mockLaunch;
  it('renders', () => {
    render(<CardText name={name} details={details} />);
  });

  it('contains text passed as props', () => {
    const { container } = render(<CardText name={name} details={details} />);

    expect(container).toHaveTextContent(name);

    if (details != null) {
      expect(container).toHaveTextContent(details);
    }
  });
});

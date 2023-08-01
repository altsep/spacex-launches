import { render, screen } from '@testing-library/react';
import { mockLaunch } from '../../../__mocks__/launch.mock';
import { CardText } from './CardText';

describe('CardText', () => {
  const { name, details } = mockLaunch;
  it('renders', () => {
    render(<CardText name={name} details={details} />);
  });

  it('contains text passed as props', () => {
    render(<CardText name={name} details={details} />);

    screen.getByText(name);

    if (details != null) {
      screen.getByText(details);
    }
  });
});

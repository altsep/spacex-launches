import { render } from '@testing-library/react';
import { Button } from '../src/components/controls/Button';
import { Controls } from '../src/components/controls/Controls';

describe('Controls', () => {
  it('renders', () => {
    render(
      <Controls>
        <Button handleClick={() => undefined} textContent="Test btn" />
      </Controls>
    );
  });
});

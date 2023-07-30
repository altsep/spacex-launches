import { render } from '@testing-library/react';
import { launches } from '../__mocks__/launches';
import { CardList } from '../src/components/CardList';
import { LaunchFull } from '../src/models/launch';

describe('CardList', () => {
  let data: LaunchFull[];

  beforeEach(() => {
    data = [...launches];
  });

  it('renders', () => {
    render(<CardList data={data} loading={false} error={false} handleLoadMore={() => null} />);
  });
});

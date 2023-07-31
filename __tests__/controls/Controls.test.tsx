import { fireEvent, screen } from '@testing-library/react';
import { Controls } from '../../src/components/controls/Controls';
import { renderWithProviders } from '../../src/utils/test-utils';

describe('Controls', () => {
  it('renders', () => {
    renderWithProviders(<Controls />);
  });

  it('alters state on sort', () => {
    const { store } = renderWithProviders(<Controls />);
    const initialState = store.getState().queryArgOpts;

    const btn = screen.getByText('Sort by date');
    fireEvent.click(btn);

    const state = store.getState().queryArgOpts;
    const assertion = initialState.sort !== state.sort;

    expect(state).toHaveProperty('sort');
    expect(assertion).toBeTruthy();
  });
});

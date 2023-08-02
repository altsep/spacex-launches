import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../../utils/test-utils';
import { Controls } from './Controls';

describe('Controls', () => {
  it('renders', () => {
    renderWithProviders(<Controls />);
  });

  it('dispatches to state on click', () => {
    const { store } = renderWithProviders(<Controls />);
    const initialState = store.getState().queryArgOpts;

    const btn = screen.getByRole('button', { name: 'Sort by date' });
    fireEvent.click(btn);

    const state = store.getState().queryArgOpts;

    expect(state).toHaveProperty('sort');
    expect(state.sort).not.toStrictEqual(initialState.sort);
  });
});

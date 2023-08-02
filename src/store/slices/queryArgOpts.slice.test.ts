import { store } from '..';
import { mockLaunchesQueryRes } from '../../../__mocks__/launchesQueryRes.mock';
import { incrementPage, queryArgOptsSlice, toggleSort } from './queryArgOpts.slice';

describe('queryArgOptsSlice.toggleSort', () => {
  const initialState = queryArgOptsSlice.getInitialState();

  it('toggles sort property', () => {
    expect(initialState.sort).toHaveProperty('date_unix');

    expect(initialState.sort.date_unix).toBe('desc');

    store.dispatch(toggleSort());

    const state1 = store.getState().queryArgOpts.sort.date_unix;

    expect(state1).toBe('asc');

    store.dispatch(toggleSort());

    const state2 = store.getState().queryArgOpts.sort.date_unix;

    expect(state2).toBe('desc');
  });

  it('resets page property after increment', () => {
    expect(initialState.page).toBe(1);

    store.dispatch(incrementPage(mockLaunchesQueryRes));

    const state1 = store.getState().queryArgOpts;

    expect(state1.page).toBe(2);

    store.dispatch(toggleSort());

    const state2 = store.getState().queryArgOpts;

    expect(state2.page).toBe(1);
  });
});

describe('queryArgOptsSlice.incrementPage', () => {
  const initialState = queryArgOptsSlice.getInitialState();

  it('does not alter state when no payload is passed', () => {
    expect(initialState.page).toBe(1);

    store.dispatch(incrementPage());

    const state = store.getState().queryArgOpts;

    expect(state.page).toStrictEqual(initialState.page);
  });

  it('increments page property', () => {
    expect(initialState.page).toBe(1);

    const payload = mockLaunchesQueryRes;

    store.dispatch(incrementPage(payload));

    const state = store.getState().queryArgOpts;

    expect(state.page).toBe(payload.nextPage);
  });
});

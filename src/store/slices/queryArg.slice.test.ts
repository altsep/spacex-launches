import { store } from '..';
import { mockLaunchesQueryRes } from '../../../__mocks__/launchesQueryRes.mock';
import { incrementPage, queryArgSlice, setDateUTC, toggleSort } from './queryArg.slice';

describe('queryArgOptsSlice.toggleSort', () => {
  const initialState = queryArgSlice.getInitialState().options;

  it('toggles sort property', () => {
    expect(initialState.sort).toHaveProperty('date_unix');

    expect(initialState.sort.date_unix).toBe('desc');

    const getSortState = () => store.getState().queryArg.options.sort;

    store.dispatch(toggleSort());

    const state1 = getSortState().date_unix;

    expect(state1).toBe('asc');

    store.dispatch(toggleSort());

    const state2 = getSortState().date_unix;

    expect(state2).toBe('desc');
  });

  it('resets page property after increment', () => {
    expect(initialState.page).toBe(1);

    store.dispatch(incrementPage(mockLaunchesQueryRes));

    const state1 = store.getState().queryArg;

    expect(state1.options.page).toBe(2);

    store.dispatch(toggleSort());

    const state2 = store.getState().queryArg;

    expect(state2.options.page).toBe(1);
  });
});

describe('queryArgSlice.incrementPage', () => {
  const initialState = queryArgSlice.getInitialState();

  it('does not alter state when no payload is passed', () => {
    expect(initialState.options.page).toBe(1);

    store.dispatch(incrementPage());

    const state = store.getState().queryArg;

    expect(state.options.page).toStrictEqual(initialState.options.page);
  });

  it('increments page property', () => {
    expect(initialState.options.page).toBe(1);

    const payload = mockLaunchesQueryRes;

    store.dispatch(incrementPage(payload));

    const state = store.getState().queryArg;

    expect(state.options.page).toBe(payload.nextPage);
  });
});

describe('queryArgSlice.setDateUTC', () => {
  const mockDate = new Date('2020-05-25').toISOString();
  const mockDateUTCObj = { $gte: mockDate, $lte: mockDate };

  it('setStartDate sets value', () => {
    store.dispatch(setDateUTC(mockDateUTCObj));

    const queryDateUTCObj = store.getState().queryArg.query.date_utc;
    const { page } = store.getState().queryArg.options;

    expect(queryDateUTCObj).toStrictEqual(mockDateUTCObj);
    expect(page).toBe(1);
  });
});

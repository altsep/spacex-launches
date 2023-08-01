import { store } from '..';
import { mockLaunchesQueryRes } from '../../../__mocks__/launchesQueryRes.mock';
import { incrementPage, queryArgOptsSlice, setEndDate, setStartDate, toggleSort } from './queryArgOpts.slice';

describe('queryArgOptsSlice.toggleSort', () => {
  const initialState = queryArgOptsSlice.getInitialState();

  it('toggles sort property', () => {
    const desc = '-date_unix';
    const asc = 'date_unix';

    expect(initialState.options.sort).toBe(desc);

    store.dispatch(toggleSort());

    const state1 = store.getState().queryArgOpts;

    expect(state1.options.sort).toBe(asc);

    store.dispatch(toggleSort());

    const state2 = store.getState().queryArgOpts;

    expect(state2.options.sort).toBe(desc);
  });

  it('resets page property after increment', () => {
    expect(initialState.options.page).toBe(1);

    store.dispatch(incrementPage(mockLaunchesQueryRes));

    const state1 = store.getState().queryArgOpts;

    expect(state1.options.page).toBe(2);

    store.dispatch(toggleSort());

    const state2 = store.getState().queryArgOpts;

    expect(state2.options.page).toBe(1);
  });
});

describe('queryArgOptsSlice.incrementPage', () => {
  const initialState = queryArgOptsSlice.getInitialState();

  it('does not alter state when no payload is passed', () => {
    expect(initialState.options.page).toBe(1);

    store.dispatch(incrementPage());

    const state = store.getState().queryArgOpts;

    expect(state.options.page).toStrictEqual(initialState.options.page);
  });

  it('increments page property', () => {
    expect(initialState.options.page).toBe(1);

    const payload = mockLaunchesQueryRes;

    store.dispatch(incrementPage(payload));

    const state = store.getState().queryArgOpts;

    expect(state.options.page).toBe(payload.nextPage);
  });
});

describe('queryArgOptsSlice.setStartDate', () => {
  const initialState = queryArgOptsSlice.getInitialState();
  const initialValue = initialState.query.date_utc.$gte;
  const mockDate = new Date('2020-05-25').toISOString();

  it('setStartDate sets value', () => {
    const getDateValue = () => store.getState().queryArgOpts.query.date_utc.$gte;
    const getPage = () => store.getState().queryArgOpts.options.page;

    store.dispatch(setStartDate());

    expect(getDateValue()).toBe(initialValue);

    store.dispatch(setStartDate(mockDate));

    expect(getDateValue()).toBe(mockDate);
    expect(getPage()).toBe(1);
  });
});

describe('queryArgOptsSlice.setEndDate', () => {
  const initialState = queryArgOptsSlice.getInitialState();
  const initialValue = initialState.query.date_utc.$lte;
  const mockDate = new Date('2020-05-25').toISOString();

  it('sets value', () => {
    const getDateValue = () => store.getState().queryArgOpts.query.date_utc.$lte;
    const getPage = () => store.getState().queryArgOpts.options.page;

    store.dispatch(setEndDate());

    expect(getDateValue()).toBe(initialValue);

    store.dispatch(setEndDate(mockDate));

    expect(getDateValue()).toBe(mockDate);
    expect(getPage()).toBe(1);
  });
});

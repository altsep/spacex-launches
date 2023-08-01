import { mockLaunches } from '../../../__mocks__/launches.mock';
import { sortByDate } from './sorting.helpers';

describe('sortByDate', () => {
  it('sorts ascendingly', () => {
    const sortedArr = sortByDate(mockLaunches, 'asc');
    expect(Array.isArray(sortedArr)).toBe(true);
    expect(sortedArr).toStrictEqual(mockLaunches.sort((a, b) => a.date_unix - b.date_unix));
  });

  it('sorts descendingly', () => {
    const sortedArr = sortByDate(mockLaunches, 'desc');
    expect(Array.isArray(sortedArr)).toBe(true);
    expect(sortedArr).toStrictEqual(mockLaunches.sort((a, b) => b.date_unix - a.date_unix));
  });
});

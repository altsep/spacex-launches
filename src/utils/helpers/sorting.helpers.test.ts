import { mockLaunches } from '../../../__mocks__/launches.mock';
import { sortByDate } from './sorting.helpers';

describe('sortByDate', () => {
  it('sorts ascendingly', () => {
    const sortedArr = sortByDate(mockLaunches.slice(), 'asc');
    const nativeSortArr = mockLaunches.slice().sort((a, b) => a.date_unix - b.date_unix);

    expect(Array.isArray(sortedArr)).toBe(true);
    expect(sortedArr).toStrictEqual(nativeSortArr);
  });

  it('sorts descendingly', () => {
    const sortedArr = sortByDate(mockLaunches.slice(), 'desc');
    const nativeSortArr = mockLaunches.slice().sort((a, b) => b.date_unix - a.date_unix);

    expect(Array.isArray(sortedArr)).toBe(true);
    expect(sortedArr).toStrictEqual(nativeSortArr);
  });
});

import * as TimSort from 'timsort';
import { Launch } from '../../models/launch';

export const sortByDate = (arr: Launch[], mode: 'asc' | 'desc') => {
  const newArr = [...arr];

  if (mode === 'asc') {
    TimSort.sort(newArr, (a, b) => a.date_unix - b.date_unix);
  }

  if (mode === 'desc') {
    TimSort.sort(newArr, (a, b) => b.date_unix - a.date_unix);
  }

  return newArr;
};

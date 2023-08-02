import * as TimSort from 'timsort';
import { Launch } from '../../models/launch.model';
import { SortOrder } from '../../models/launchesQueryArg.model';

export const sortByDate = (arr: Launch[], mode?: SortOrder) => {
  TimSort.sort(arr, (a, b) => (mode === 'desc' ? b.date_unix - a.date_unix : a.date_unix - b.date_unix));

  return arr;
};

import { LaunchesQueryRes } from '../src/models/queryRes.model';
import { mockLaunches } from './launches.mock';

export const mockLaunchesQueryRes: LaunchesQueryRes = {
  docs: mockLaunches,
  totalDocs: mockLaunches.length,
  limit: 10,
  totalPages: 5,
  page: 1,
  pagingCounter: 1,
  hasPrevPage: false,
  hasNextPage: true,
  prevPage: null,
  nextPage: 2,
};

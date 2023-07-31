import { Launch } from './launch.model';

export type LaunchesQueryRes = QueryRes<Launch>;

export type QueryRes<T> = {
  docs: T[];
  totalDocs: number;
  offset?: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: null | number;
  nextPage: number;
};

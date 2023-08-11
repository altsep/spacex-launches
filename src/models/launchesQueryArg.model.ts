import { Launch } from './launch.model';

export interface LaunchesQueryArg {
  query: QueryParams;
  options: QueryOptions;
}

export interface QueryParams {
  date_utc: DateUTC;
  success: boolean;
}

export interface DateUTC {
  $gte: string;
  $lte: string;
}

export interface QueryOptions {
  select: string;
  limit: number;
  sort: Sort;
  page: number;
}

export type Sort = Partial<{ [key in keyof Launch]: SortOrder }>;

export type SortOrder = 'asc' | 'desc';

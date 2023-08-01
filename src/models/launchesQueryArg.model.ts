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
  sort: string;
  page: number;
}

export interface LaunchesQueryArg {
  query: QueryClass;
  options: Options;
}

export interface Options {
  select: string;
  limit: number;
}

export interface QueryClass {
  date_utc: DateUTC;
  success: boolean;
}

export interface DateUTC {
  $gte: string;
  $lt: string;
}

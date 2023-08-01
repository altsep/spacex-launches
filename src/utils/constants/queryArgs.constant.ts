import { LaunchesQueryArg } from '../../models/launchesQueryArg.model';

export const DEFAULT_LAUNCHES_QUERY_ARG: LaunchesQueryArg = {
  query: {
    date_utc: {
      $gte: '2015-01-01T00:00:00.000Z',
      $lte: '2020-01-01T00:00:00.000Z',
    },
    success: true,
  },
  options: {
    select: 'id name details date_utc date_unix rocket',
    limit: 10,
    sort: '-date_unix',
    page: 1,
  },
};

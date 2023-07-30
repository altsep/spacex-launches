import { LaunchesQueryArg } from '../../models/launchesQueryArg';

export const DEFAULT_LAUNCHES_QUERY_ARG: LaunchesQueryArg = {
  query: {
    date_utc: {
      $gte: '2015-01-01T00:00:00.000Z',
      $lt: '2020-01-01T00:00:00.000Z',
    },
    success: true,
  },
  options: {
    select: 'id name details date_utc date_unix links.flickr',
    limit: 3,
    sort: '-date_unix',
  },
};

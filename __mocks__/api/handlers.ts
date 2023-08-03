// eslint-disable-next-line import/no-extraneous-dependencies
import dayjs from 'dayjs';
import { rest } from 'msw';
import { LaunchesQueryArg } from '../../src/models/launchesQueryArg.model';
import { API_BASE_URL, ApiPath } from '../../src/utils/constants';
import { sortByDate } from '../../src/utils/helpers/sorting.helpers';
import placeholderImg from '../assets/rocket_placeholder.png';
import { mockLaunchesQueryRes } from '../launchesQueryRes.mock';
import { Launch } from '../../src/models/launch.model';

const transformDocs = (arr: Launch[], queryArg: LaunchesQueryArg) => {
  const { query, options } = queryArg;
  const startMs = dayjs(query.date_utc.$gte).unix();
  const endMs = dayjs(query.date_utc.$lte).unix();
  const startIndex = (options.page - 1) * options.limit;
  const endIndex = startIndex + options.limit;
  const filteredDocs = arr.filter(({ date_unix }) => date_unix >= startMs && date_unix <= endMs);
  const sortedDocs = sortByDate(filteredDocs, options.sort.date_unix);
  const docsSelection = sortedDocs.slice(startIndex, endIndex);
  return { docs: docsSelection, filteredDocs };
};

const getLaunchesByQuery = rest.post(`${API_BASE_URL}${ApiPath.launches}/query`, async (req, res, ctx) => {
  const queryArg: LaunchesQueryArg = await req.json();
  const { page, limit } = queryArg.options;
  const { docs, filteredDocs } = transformDocs(mockLaunchesQueryRes.docs, queryArg);
  const totalPages = Math.ceil(filteredDocs.length / limit);
  const data = {
    ...mockLaunchesQueryRes,
    page,
    hasNextPage: page < totalPages,
    nextPage: page + 1,
    docs,
  };
  return res(ctx.status(200), ctx.json(data), ctx.delay(30));
});

const getRocketById = rest.get(`${API_BASE_URL}${ApiPath.rockets}/:id`, (_req, res, ctx) => {
  return res(ctx.status(200), ctx.json({ flickr_images: [placeholderImg] }), ctx.delay(30));
});

export const handlers = [getLaunchesByQuery, getRocketById];

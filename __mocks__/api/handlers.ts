// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';
import { LaunchesQueryArg } from '../../src/models/launchesQueryArg.model';
import { API_BASE_URL, ApiPath } from '../../src/utils/constants';
import { sortByDate } from '../../src/utils/helpers/sorting.helpers';
import placeholderImg from '../assets/rocket_placeholder.png';
import { mockLaunchesQueryRes } from '../launchesQueryRes.mock';

export const handlers = [
  rest.post(`${API_BASE_URL}${ApiPath.launches}/query`, async (req, res, ctx) => {
    const { options }: LaunchesQueryArg = await req.json();
    const startIndex = (options.page - 1) * options.limit;
    const endIndex = startIndex + options.limit;
    const sortMode = options.sort[0] === '-' ? 'desc' : 'asc';
    const docs = sortByDate(mockLaunchesQueryRes.docs, sortMode).slice(startIndex, endIndex);
    const data = {
      ...mockLaunchesQueryRes,
      page: options.page,
      hasNextPage: options.page < mockLaunchesQueryRes.totalPages,
      nextPage: options.page + 1,
      docs,
    };
    return res(ctx.status(200), ctx.json(data), ctx.delay(30));
  }),
  rest.get(`${API_BASE_URL}${ApiPath.rockets}/:id`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ flickr_images: [placeholderImg] }), ctx.delay(30));
  }),
];

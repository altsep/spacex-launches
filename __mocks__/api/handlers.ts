// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';
import { LaunchesQueryArg, QueryOptions } from '../../src/models/launchesQueryArg.model';
import { API_BASE_URL, ApiPath } from '../../src/utils/constants';
import { sortByDate } from '../../src/utils/helpers/sorting.helpers';
import placeholderImg from '../assets/rocket_placeholder.png';
import { mockLaunchesQueryRes } from '../launchesQueryRes.mock';

const transformDocs = (options: QueryOptions) => {
  const startIndex = (options.page - 1) * options.limit;
  const endIndex = startIndex + options.limit;
  const sortMode = options.sort[0] === '-' ? 'desc' : 'asc';
  const docs = sortByDate(mockLaunchesQueryRes.docs, sortMode).slice(startIndex, endIndex);
  return docs;
};

export const handlers = [
  rest.post(`${API_BASE_URL}${ApiPath.launches}/query`, async (req, res, ctx) => {
    const { options }: LaunchesQueryArg = await req.json();
    const { page } = options;
    const data = {
      ...mockLaunchesQueryRes,
      page,
      hasNextPage: page < mockLaunchesQueryRes.totalPages,
      nextPage: page + 1,
      docs: transformDocs(options),
    };
    return res(ctx.status(200), ctx.json(data), ctx.delay(30));
  }),
  rest.get(`${API_BASE_URL}${ApiPath.rockets}/:id`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ flickr_images: [placeholderImg] }), ctx.delay(30));
  }),
];

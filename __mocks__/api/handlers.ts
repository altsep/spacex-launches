// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';
import { API_BASE_URL } from '../../src/utils/constants';
import { ApiPath } from '../../src/utils/constants/api.constants';
import { mockLaunchesQueryRes } from '../launchesQueryRes.mock';
import { mockRocket } from '../rocket.mock';

export const handlers = [
  rest.post(`${API_BASE_URL}${ApiPath.launches}/query`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockLaunchesQueryRes), ctx.delay(300));
  }),
  rest.get(`${API_BASE_URL}${ApiPath.rockets}/:id`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockRocket), ctx.delay(30));
  }),
];

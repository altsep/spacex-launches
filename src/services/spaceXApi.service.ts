import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { QueryOptions } from '../models/launchesQueryArg.model';
import { LaunchesQueryRes } from '../models/queryRes.model';
import { Rocket } from '../models/rocket.model';
import { API_BASE_URL, ApiPath } from '../utils/constants/api.constants';
import { DEFAULT_LAUNCHES_QUERY_ARG } from '../utils/constants/queryArgs.constants';

export const spaceXApi = createApi({
  reducerPath: 'spaceXApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getLaunchesByQuery: builder.query<LaunchesQueryRes, QueryOptions>({
      query: (opts) => {
        const body = { ...DEFAULT_LAUNCHES_QUERY_ARG };

        if (opts != null) {
          body.options = { ...body.options, ...opts };
        }

        return {
          url: `${ApiPath.launches}/query`,
          method: 'POST',
          body,
        };
      },
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newItems) => {
        if (newItems.page === 1) {
          return newItems;
        }

        return { ...newItems, docs: [...currentCache.docs, ...newItems.docs] };
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getRocketImageById: builder.query<string, string | null>({
      query: (id) => `${ApiPath.rockets}/${id}`,
      transformResponse: ({ flickr_images }: Rocket) => flickr_images[0],
    }),
  }),
});

export const { useGetLaunchesByQueryQuery, useGetRocketImageByIdQuery } = spaceXApi;

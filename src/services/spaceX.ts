import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { QueryOptions } from '../models/launchesQueryArg';
import { LaunchQueryRes } from '../models/queryRes';
import { API_BASE_URL } from '../utils/constants/apiBase';
import { DEFAULT_LAUNCHES_QUERY_ARG } from '../utils/constants/defaultLaunchesQueryArg';

export const spaceXApi = createApi({
  reducerPath: 'spaceXApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getLaunchesByQuery: builder.query<LaunchQueryRes, QueryOptions>({
      query: (opts) => {
        const body = { ...DEFAULT_LAUNCHES_QUERY_ARG };

        if (opts != null) {
          body.options = { ...body.options, ...opts };
        }

        return {
          url: 'launches/query',
          method: 'POST',
          body,
        };
      },
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newItems) => {
        if (currentCache.page === newItems.page || newItems.page === 1) {
          return newItems;
        }

        return { ...newItems, docs: [...currentCache.docs, ...newItems.docs] };
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
  }),
});

export const { useGetLaunchesByQueryQuery } = spaceXApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Launch } from '../models/launch';
import { Options } from '../models/launchesQueryArg';
import { QueryRes } from '../models/queryRes';
import { API_BASE_URL } from '../utils/constants/apiBase';
import { DEFAULT_LAUNCHES_QUERY_ARG } from '../utils/constants/defaultLaunchesQueryArg';

export const spaceXApi = createApi({
  reducerPath: 'spaceXApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getLaunches: builder.query<Launch[], void>({
      query: () => 'launches',
    }),
    getLaunchesByQuery: builder.query<QueryRes<Launch>, Options>({
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
        if (currentCache.page === newItems.page) {
          return newItems;
        }

        return { ...newItems, docs: [...currentCache.docs, ...newItems.docs] };
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getLaunchById: builder.query<Launch, string>({
      query: (id) => `launches/${id}`,
    }),
  }),
});

export const { useGetLaunchesQuery, useGetLaunchesByQueryQuery, useGetLaunchByIdQuery } = spaceXApi;

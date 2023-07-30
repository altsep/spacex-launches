import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Launch } from '../models/launch';
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
    getLaunchesByQuery: builder.query<QueryRes<Launch>, string>({
      query: (sortParam) => {
        const body = { ...DEFAULT_LAUNCHES_QUERY_ARG };

        if (sortParam != null) {
          body.options.sort = sortParam;
        }

        return {
          url: 'launches/query',
          method: 'POST',
          body,
        };
      },
    }),
    getLaunchById: builder.query<Launch, string>({
      query: (id) => `launches/${id}`,
    }),
  }),
});

export const { useGetLaunchesQuery, useGetLaunchesByQueryQuery, useGetLaunchByIdQuery } = spaceXApi;

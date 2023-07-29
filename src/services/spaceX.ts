import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Launch } from '../models/launch';
import { API_BASE_URL } from '../utils/constants';

// TODO: add query that would limit response to successful launches ranging from the year 2015 to 2019

export const spaceXApi = createApi({
  reducerPath: 'spaceXApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getLaunches: builder.query<Launch[], string>({
      query: () => 'launches',
    }),
    getLaunchById: builder.query<Launch, string>({
      query: (id: string) => `launches/${id}`,
    }),
  }),
});

export const { useGetLaunchesQuery, useGetLaunchByIdQuery } = spaceXApi;

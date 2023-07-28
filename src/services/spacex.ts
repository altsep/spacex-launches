import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// TODO: Add query that would limit launch dates to years 2015-2019

export const spaceXApi = createApi({
  reducerPath: 'spaceXApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spacexdata.com/v5/' }),
  endpoints: (builder) => ({
    getLaunches: builder.query<unknown, string>({
      query: () => 'launches',
    }),
    getLaunchById: builder.query<unknown, string>({
      query: (id: string) => `launches/${id}`,
    }),
  }),
});

export const { useGetLaunchesQuery, useGetLaunchByIdQuery } = spaceXApi;

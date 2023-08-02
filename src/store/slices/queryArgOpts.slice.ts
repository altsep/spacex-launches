import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LaunchesQueryRes } from '../../models/queryRes.model';
import { DEFAULT_LAUNCHES_QUERY_ARG } from '../../utils/constants';

export const queryArgOptsSlice = createSlice({
  name: 'queryArgOpts',
  initialState: DEFAULT_LAUNCHES_QUERY_ARG,
  reducers: {
    toggleSort: (state) => {
      const { date_unix: dateUnix } = state.options.sort;
      state.options.sort = { date_unix: dateUnix === 'desc' ? 'asc' : 'desc' };
      state.options.page = 1;
    },
    incrementPage: (state, action: PayloadAction<LaunchesQueryRes | undefined>) => {
      if (action.payload?.hasNextPage) {
        state.options.page = action.payload.nextPage;
      }
    },
    setStartDate: (state, action: PayloadAction<string>) => {
      state.query.date_utc.$gte = action.payload;
      state.options.page = 1;
    },
    setEndDate: (state, action: PayloadAction<string>) => {
      state.query.date_utc.$lte = action.payload;
      state.options.page = 1;
    },
  },
});

export const { toggleSort, incrementPage, setStartDate, setEndDate } = queryArgOptsSlice.actions;

export const queryArgOpts = queryArgOptsSlice.reducer;

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LaunchesQueryRes } from '../../models/queryRes.model';
import { DEFAULT_LAUNCHES_QUERY_ARG } from '../../utils/constants';

export const queryArgOptsSlice = createSlice({
  name: 'queryArgOpts',
  initialState: DEFAULT_LAUNCHES_QUERY_ARG,
  reducers: {
    toggleSort: (state) => {
      const { sort } = state.options;
      state.options.sort = sort[0] === '-' ? sort.slice(1) : `-${sort}`;
      state.options.page = 1;
    },
    incrementPage: (state, action: PayloadAction<LaunchesQueryRes | undefined>) => {
      if (action.payload && action.payload.hasNextPage) {
        state.options.page = action.payload.nextPage;
      }
    },
    setStartDate: (state, action: PayloadAction<string | undefined>) => {
      if (action.payload != null) {
        state.query.date_utc.$gte = action.payload;
        state.options.page = 1;
      }
    },
    setEndDate: (state, action: PayloadAction<string | undefined>) => {
      if (action.payload != null) {
        state.query.date_utc.$lte = action.payload;
        state.options.page = 1;
      }
    },
  },
});

export const { toggleSort, incrementPage, setStartDate, setEndDate } = queryArgOptsSlice.actions;

export const queryArgOpts = queryArgOptsSlice.reducer;

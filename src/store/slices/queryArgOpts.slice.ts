import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LaunchesQueryRes } from '../../models/queryRes.model';
import { DEFAULT_LAUNCHES_QUERY_ARG } from '../../utils/constants';

export const queryArgOptsSlice = createSlice({
  name: 'queryArgOpts',
  initialState: DEFAULT_LAUNCHES_QUERY_ARG.options,
  reducers: {
    toggleSort: (state) => {
      return { ...state, sort: { date_unix: state.sort.date_unix === 'asc' ? 'desc' : 'asc' }, page: 1 };
    },
    incrementPage: (state, action: PayloadAction<LaunchesQueryRes | undefined>) => {
      if (action.payload && action.payload.hasNextPage) {
        return { ...state, page: action.payload.nextPage };
      }

      return state;
    },
  },
});

export const { toggleSort, incrementPage } = queryArgOptsSlice.actions;

export const queryArgOpts = queryArgOptsSlice.reducer;

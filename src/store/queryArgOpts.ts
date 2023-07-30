import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LaunchQueryRes } from '../models/queryRes';
import { DEFAULT_LAUNCHES_QUERY_ARG } from '../utils/constants/defaultLaunchesQueryArg';

export const queryArgOptsSlice = createSlice({
  name: 'queryArgOpts',
  initialState: DEFAULT_LAUNCHES_QUERY_ARG.options,
  reducers: {
    toggleSort: (state) => {
      return { ...state, sort: state.sort[0] === '-' ? state.sort.slice(1) : `-${state.sort}`, page: 1 };
    },
    incrementPage: (state, action: PayloadAction<LaunchQueryRes | undefined>) => {
      if (action.payload && action.payload.hasNextPage) {
        return { ...state, page: action.payload.nextPage };
      }

      return state;
    },
  },
});

export const { toggleSort, incrementPage } = queryArgOptsSlice.actions;

export const queryArgOpts = queryArgOptsSlice.reducer;

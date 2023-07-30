import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { spaceXApi } from '../services/spaceX.service';
import { queryArgOpts } from './queryArgOpts.slice';

const store = configureStore({
  reducer: {
    [spaceXApi.reducerPath]: spaceXApi.reducer,
    queryArgOpts,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(spaceXApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { spaceXApi } from '../services/spaceXApi.service';
import { queryArg } from './slices/queryArg.slice';

const rootReducer = combineReducers({
  [spaceXApi.reducerPath]: spaceXApi.reducer,
  queryArg,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(spaceXApi.middleware),
    preloadedState,
  });
};

export const store = setupStore();

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;

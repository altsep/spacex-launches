/* eslint-disable import/no-extraneous-dependencies */
import type { PreloadedState } from '@reduxjs/toolkit';
import type { RenderOptions } from '@testing-library/react';
import { render } from '@testing-library/react';
import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import type { AppStore, RootState } from '../store';
import { setupStore } from '../store';

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store. For
// future dependencies, such as wanting to test with react-router, you can extend
// this interface to accept a path and route and use those in a <MemoryRouter />
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

function renderWithProviders(
  ui: React.ReactElement,
  { preloadedState = {}, store = setupStore(preloadedState), ...renderOptions }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<object>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

const mockIntersectionObserver = jest.fn();
const mockObserve = jest.fn();
const mockDisconnect = jest.fn();
const mockIntersectionEntry = { isIntersecting: false };

mockIntersectionObserver.mockImplementation((cb: (entries: Partial<IntersectionObserverEntry>[]) => void) => {
  return {
    observe: mockObserve.mockImplementation(() => {
      cb([mockIntersectionEntry]);
    }),
    disconnect: mockDisconnect,
  };
});

export { renderWithProviders, mockIntersectionObserver, mockObserve, mockDisconnect, mockIntersectionEntry };

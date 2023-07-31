/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom';
import React from 'react';
import 'whatwg-fetch';
import { server } from './__mocks__/api/server';
import { spaceXApi } from './src/services/spaceXApi.service';
import { store } from './src/store';

global.React = React;

beforeAll(() => {
  // Enable the mocking in tests.
  server.listen({ onUnhandledRequest: 'error' });
});

afterEach(() => {
  // Reset any runtime handlers tests may use.
  server.resetHandlers();
  store.dispatch(spaceXApi.util.resetApiState());
});

afterAll(() => {
  // Clean up once the tests are done.
  server.close();
});

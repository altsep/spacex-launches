/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom';
import React from 'react';
import 'whatwg-fetch';
import { server } from './__mocks__/api/server';
import { mockIntersectionObserver } from './src/utils/test-utils';

global.React = React;

window.IntersectionObserver = mockIntersectionObserver;

beforeAll(() => {
  // Enable the mocking in tests.
  server.listen({ onUnhandledRequest: 'error' });
});

afterEach(() => {
  // Reset any runtime handlers tests may use.
  server.resetHandlers();
});

afterAll(() => {
  // Clean up once the tests are done.
  server.close();
});

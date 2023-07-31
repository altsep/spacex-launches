/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom';
import 'whatwg-fetch';
import React from 'react';
import { server } from './__mocks__/api/server';

global.React = React;

beforeAll(() => {
  // Enable the mocking in tests.
  server.listen();
});

afterEach(() => {
  // Reset any runtime handlers tests may use.
  server.resetHandlers();
});

afterAll(() => {
  // Clean up once the tests are done.
  server.close();
});

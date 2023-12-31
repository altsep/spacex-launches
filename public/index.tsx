import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from '../src/App';
import '../src/index.scss';
import { store } from '../src/store';

async function render() {
  if (process.env.NODE_ENV === 'development') {
    const { worker } = await import('../__mocks__/api/browser');
    await worker.start();
  }

  const container = document.getElementById('root') as HTMLDivElement;

  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}

render().catch(console.error);

import { createRoot } from 'react-dom/client';
import React from 'react';
import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: 'https://e184d7ff627ea830234a804f59282bda@o925438.ingest.us.sentry.io/4508301866762240',
  integrations: [],
});

function App() {
  return (
    <div>
      <h1>This is my React app!</h1>
      <button
        onClick={() => {
          throw new Error('This is your first error!');
        }}
      >
        Send Error
      </button>
    </div>
  );
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);

import { createRoot } from 'react-dom/client';
import React from 'react';

function App() {
  return (
    <div>
      <h1>This is my React app!</h1>
      <button>Send Error</button>
    </div>
  );
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);

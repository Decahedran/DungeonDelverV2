import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SeedProvider } from './context/SeedContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SeedProvider>
    <App />
  </SeedProvider>
);

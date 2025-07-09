import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { SeedProvider } from './context/SeedContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SeedProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SeedProvider>
);

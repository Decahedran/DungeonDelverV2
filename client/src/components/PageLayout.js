import React, { useContext } from 'react';
import { SeedContext } from '../context/SeedContext';
import NavBar from './NavBar';

function PageLayout({ children }) {
  const { seed } = useContext(SeedContext);

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', minHeight: '100vh', color: '#eee' }}>
      <NavBar />
      <div style={{ padding: '2rem' }}>
        {children}
      </div>
      <footer style={{ padding: '1rem', textAlign: 'center', fontSize: '0.8rem', color: '#888' }}>
        🔁 Current Seed: <code>{seed}</code>
      </footer>
    </div>
  );
}

export default PageLayout;

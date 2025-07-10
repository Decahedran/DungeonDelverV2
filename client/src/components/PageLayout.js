import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

function PageLayout({ children }) {
  return (
    <div
      style={{
        fontFamily: 'Segoe UI, sans-serif',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#0d0d0d',
        color: '#eee'
      }}
    >
      <NavBar />
      <div style={{ flex: 1, padding: '2rem' }}>
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default PageLayout;

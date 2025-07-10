import React, { useContext } from 'react';
import { SeedContext } from '../context/SeedContext';

function Footer() {
  const { seed } = useContext(SeedContext);

  return (
    <footer style={{
      padding: '1rem',
      textAlign: 'center',
      fontSize: '0.8rem',
      color: '#888',
      backgroundColor: 'transparent',
      marginTop: 'auto'
    }}>
      🔁 Current Seed: <code>{seed}</code>
    </footer>
  );
}

export default Footer;

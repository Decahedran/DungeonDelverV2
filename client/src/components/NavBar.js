import React from 'react';
import { Link } from 'react-router-dom';

const navStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '12px',
  padding: '1rem',
  background: '#111',
  color: '#fff'
};

function NavBar() {
    console.log("Rendering NavBar");
  return (
    <nav style={navStyle}>
      <Link to="/home">Home</Link> {/* ✅ Fixed */}
      <Link to="/about">About</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/lore">Lore</Link>
      <Link to="/world">World</Link>
      <Link to="/downloads">Downloads</Link>
      <Link to="/faq">FAQ</Link>
      <Link to="/play">Play</Link>
      <Link to="/terms">Terms</Link>
      <Link to="/privacy">Privacy</Link>
    </nav>
  );
}

export default NavBar;

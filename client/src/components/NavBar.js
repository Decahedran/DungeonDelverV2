import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const navContainer = {
  background: '#111',
  padding: '1rem',
  color: '#fff',
  position: 'relative',
};

const menuButton = {
  fontSize: '1.5rem',
  background: 'none',
  color: '#facc15',
  border: 'none',
  cursor: 'pointer',
};

const dropdownMenu = {
  position: 'absolute',
  top: '60px',
  left: '1rem',
  backgroundColor: '#222',
  padding: '1rem',
  borderRadius: '6px',
  boxShadow: '0 2px 6px rgba(0,0,0,0.4)',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
};

const linkStyle = {
  color: '#facc15',
  textDecoration: 'none',
};

function NavBar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <div style={navContainer}>
      <button onClick={toggleMenu} style={menuButton}>
        ☰ Menu
      </button>

      {open && (
        <div style={dropdownMenu}>
          <Link to="/home" style={linkStyle} onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" style={linkStyle} onClick={() => setOpen(false)}>About</Link>
          <Link to="/shop" style={linkStyle} onClick={() => setOpen(false)}>Shop</Link>
          <Link to="/lore" style={linkStyle} onClick={() => setOpen(false)}>Lore</Link>
          <Link to="/world" style={linkStyle} onClick={() => setOpen(false)}>World</Link>
          <Link to="/downloads" style={linkStyle} onClick={() => setOpen(false)}>Downloads</Link>
          <Link to="/faq" style={linkStyle} onClick={() => setOpen(false)}>FAQ</Link>
          <Link to="/play" style={linkStyle} onClick={() => setOpen(false)}>Play</Link>
          <Link to="/terms" style={linkStyle} onClick={() => setOpen(false)}>Terms</Link>
          <Link to="/privacy" style={linkStyle} onClick={() => setOpen(false)}>Privacy</Link>
        </div>
      )}
    </div>
  );
}

export default NavBar;

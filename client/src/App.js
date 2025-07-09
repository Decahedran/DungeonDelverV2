import React, { useContext } from 'react';
import './App.css';
import { SeedContext } from './context/SeedContext';

function App() {
  const { seed } = useContext(SeedContext);

  return (
    <div className="container">
      <h1>🛠️ Dungeon Delver V2</h1>
      <h2>Coming Soon</h2>
      <p>A new kind of dungeon awaits beneath the mountain...</p>
      <p className="note">Site under construction. Check back soon!</p>

      <div style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#888' }}>
        Current Seed: <code>{seed}</code>
      </div>
    </div>
  );
}

export default App;

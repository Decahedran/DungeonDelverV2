import React, { useContext, useMemo } from 'react';
import seedrandom from 'seedrandom';
import { SeedContext } from '../context/SeedContext';

const MONSTERS = [
  "Goblin", "Kobold", "Slime", "Orc", "Minotaur",
  "Harpy", "Raven Mage", "Troll", "Void Specter", "Dragon"
];

function SeedMonster() {
  const { seed } = useContext(SeedContext);

  const dailyMonster = useMemo(() => {
    const rng = seedrandom(seed);
    const index = Math.floor(rng() * MONSTERS.length);
    return MONSTERS[index];
  }, [seed]);

  return (
    <div style={{ marginTop: '2rem', fontSize: '1.1rem', color: '#fcd34d' }}>
      👹 <strong>Today's Monster:</strong> {dailyMonster}
    </div>
  );
}

export default SeedMonster;

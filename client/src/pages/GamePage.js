import React, { useContext } from 'react';
import PageLayout from '../components/PageLayout';
import { SeedContext } from '../context/SeedContext';
import { generateDungeonFromSeed } from '../utils/generateDungeonFromSeed';

function GamePage() {
  const { seed } = useContext(SeedContext);
  const dungeon = generateDungeonFromSeed(seed);

  return (
    <PageLayout>
      <h1>🧩 Daily Dungeon</h1>
      <p><code>{seed}</code></p>

      <ol>
        {dungeon.map((room, i) => (
          <li key={i}>
            {room.type === 'boss' && '🏆 Final Boss Room'}
            {room.type === 'combat' && `⚔️ Combat (${room.difficulty})`}
            {room.type === 'puzzle' &&
              `🧠 Puzzle (${room.variant}${room.trapped ? ', trapped' : ''})`}
          </li>
        ))}
      </ol>
    </PageLayout>
  );
}

export default GamePage;

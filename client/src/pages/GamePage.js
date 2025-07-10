import React, { useContext, useState } from 'react';
import PageLayout from '../components/PageLayout';
import RoomRenderer from '../components/RoomRenderer';
import { SeedContext } from '../context/SeedContext';
import { generateDungeonFromSeed } from '../utils/generateDungeonFromSeed';

function GamePage() {
  const { seed } = useContext(SeedContext);
  const dungeon = generateDungeonFromSeed(seed);
  const [currentRoomIndex, setCurrentRoomIndex] = useState(0);

  const currentRoom = dungeon[currentRoomIndex];

  const goNext = () => {
    if (currentRoomIndex < dungeon.length - 1) {
      setCurrentRoomIndex((i) => i + 1);
    }
  };

  const goBack = () => {
    if (currentRoomIndex > 0) {
      setCurrentRoomIndex((i) => i - 1);
    }
  };

  return (
    <PageLayout>
      <h1>🧩 Daily Dungeon</h1>
      <RoomRenderer seed={seed} roomIndex={currentRoomIndex} roomMeta={currentRoom} />

      <div style={{ marginTop: '1rem' }}>
        <button onClick={goBack} disabled={currentRoomIndex === 0}>
          ⬅️ Prev Room
        </button>
        <button onClick={goNext} disabled={currentRoomIndex === dungeon.length - 1}>
          Next Room ➡️
        </button>
      </div>
    </PageLayout>
  );
}

export default GamePage;

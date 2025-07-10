import React from 'react';
import { generateRoomGridLayout } from '../utils/generateRoomGridLayout';

const tileColors = {
  wall: '#333',
  empty: '#222',
  start: '#3b82f6',
  action: '#10b981',
};

function RoomRenderer({ seed, roomIndex, roomMeta }) {
  const roomSeed = `${seed}-room${roomIndex}`;
  const { layout } = generateRoomGridLayout(roomSeed);

  return (
    <div>
      <h2>Room {roomIndex + 1}</h2>
      <p>
  Type: {roomMeta.type === 'puzzle'
    ? `🧩 Puzzle (${roomMeta.variant}${roomMeta.trapped ? ', Trapped' : ''})`
    : roomMeta.type === 'combat'
    ? `⚔️ Combat (${roomMeta.difficulty})`
    : '🏆 Boss'}
</p>


      {/* 🧭 Outer flex wrapper centers the grid */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '1rem'
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${layout[0].length}, 20px)`,
            gap: '2px'
          }}
        >
          {layout.flatMap((row, y) =>
            row.map((tile, x) => (
              <div
                key={`${y}-${x}`}
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: tileColors[tile] || '#111',
                }}
                title={`${tile} (${x},${y})`}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default RoomRenderer;

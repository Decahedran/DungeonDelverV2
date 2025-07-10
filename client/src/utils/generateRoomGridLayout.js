import seedrandom from 'seedrandom';

export function generateRoomGridLayout(seed) {
  const rng = seedrandom(seed);

  const width = 10 + Math.floor(rng() * 6);
  const height = 10 + Math.floor(rng() * 6);

  const layout = Array.from({ length: height }, () =>
    Array.from({ length: width }, () => (rng() < 0.2 ? 'wall' : 'empty'))
  );

  // Start tile
  layout[0][0] = 'start';

  // Action tile
  let actionX, actionY;
  do {
    actionX = Math.floor(rng() * width);
    actionY = Math.floor(rng() * height);
  } while (layout[actionY][actionX] !== 'empty');

  layout[actionY][actionX] = 'action';

  return {
    layout,
    width,
    height
  };
}

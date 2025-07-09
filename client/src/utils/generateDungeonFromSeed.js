import seedrandom from 'seedrandom';

export function generateDungeonFromSeed(seed) {
  const rng = seedrandom(seed);
  const dungeon = [];

  const pick = (arr) => arr[Math.floor(rng() * arr.length)];

  for (let i = 0; i < 5; i++) {
    if (i === 4) {
      // Room 5 is always a boss
      dungeon.push({ type: 'boss' });
    } else {
      const type = rng() < 0.5 ? 'puzzle' : 'combat';

      if (type === 'puzzle') {
        const variants = ['lockpick', 'runes', 'maze'];
        dungeon.push({
          type: 'puzzle',
          variant: pick(variants),
          trapped: rng() < 0.3
        });
      } else {
        const sizes = ['mini', 'standard'];
        dungeon.push({
          type: 'combat',
          difficulty: pick(sizes)
        });
      }
    }
  }

  return dungeon;
}

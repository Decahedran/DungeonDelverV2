export function generateCombatEncounter(seed, difficulty) {
    const rng = seedrandom(seed + '-combat');
    const enemies = []; // pick from catalogue
    const count = difficulty === 'mini' ? 1 : 2;
  
    for (let i = 0; i < count; i++) {
      enemies.push({
        name: 'Goblin',
        hp: 30 + Math.floor(rng() * 10),
        attack: 5 + Math.floor(rng() * 3)
      });
    }
  
    return enemies;
  }
  
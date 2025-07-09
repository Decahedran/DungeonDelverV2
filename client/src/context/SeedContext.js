import React, { createContext, useEffect, useState } from 'react';

export const SeedContext = createContext();

export function SeedProvider({ children }) {
  const [seed, setSeed] = useState(generateSeed());

  // Generate a new seed based on the current 5-minute window
  function generateSeed() {
    const now = new Date();
    const rounded = Math.floor(now.getTime() / (1 * 60 * 1000)) * (1 * 60 * 1000);
    return new Date(rounded).toISOString(); // ISO format seed
  }

  useEffect(() => {
    const updateSeed = () => setSeed(generateSeed());

    const interval = setInterval(updateSeed, 15 * 1000); // check every minute
    updateSeed(); // also set on mount

    return () => clearInterval(interval);
  }, []);

  return (
    <SeedContext.Provider value={{ seed }}>
      {children}
    </SeedContext.Provider>
  );
}

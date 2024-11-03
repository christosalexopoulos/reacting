import React, { createContext, useState, useContext } from 'react';

const MemoryContext = createContext();

export function MemoryProvider({ children }) {
  const [memories, setMemories] = useState([]);

  const addMemory = (newMemory) => {
    setMemories(prev => [newMemory, ...prev]);
  };

  return (
    <MemoryContext.Provider value={{ memories, addMemory }}>
      {children}
    </MemoryContext.Provider>
  );
}

export function useMemories() {
  return useContext(MemoryContext);
} 
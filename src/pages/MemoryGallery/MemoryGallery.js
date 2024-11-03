import React, { useState } from 'react';
import { useMemories } from '../../context/MemoryContext';
import MemoryCard from '../../components/MemoryCard/MemoryCard';
import AddMemoryModal from '../../components/AddMemoryModal/AddMemoryModal';
import './MemoryGallery.css';

function MemoryGallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { memories, addMemory } = useMemories();

  const handleAddMemory = (newMemory) => {
    addMemory({
      ...newMemory,
      id: Date.now(),
    });
  };

  return (
    <div className="memory-gallery">
      <div className="gallery-header">
        <h2>Memories</h2>
        <button 
          className="add-memory-btn" 
          onClick={() => setIsModalOpen(true)}
        >
          +
        </button>
      </div>
      
      <div className="memory-grid">
        {memories.map(memory => (
          <MemoryCard 
            key={memory.id} 
            memory={memory}
          />
        ))}
      </div>

      <AddMemoryModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddMemory}
      />
    </div>
  );
}

export default MemoryGallery;
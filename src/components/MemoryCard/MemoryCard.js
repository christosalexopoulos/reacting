import React from 'react';
import './MemoryCard.css';

function MemoryCard({ memory }) {
  return (
    <div className="memory-card">
      <img src={memory.imageUrl} alt={memory.title} />
      <div className="memory-info">
        <span className="memory-date">{memory.date}</span>
      </div>
    </div>
  );
}

export default MemoryCard; 
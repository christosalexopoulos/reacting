import React, { useState } from 'react';
import './AddMemoryModal.css';

function AddMemoryModal({ isOpen, onClose, onAdd }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [date, setDate] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // For now, we'll just use the local URL
      // Later, we'll add actual image upload to a server
      const newMemory = {
        date: date,
        imageUrl: selectedImage,
      };

      onAdd(newMemory);
      onClose();
      
      // Reset form
      setSelectedImage(null);
      setImageFile(null);
      setDate('');
    } catch (error) {
      console.error('Error creating memory:', error);
      alert('Failed to create memory. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Create New Memory</h2>
        
        <form onSubmit={handleSubmit}>
          <div 
            className="image-upload"
            onClick={() => document.getElementById('image-input').click()}
          >
            {selectedImage ? (
              <img src={selectedImage} alt="Preview" />
            ) : (
              <div className="upload-placeholder">
                <span>Click to upload image</span>
                <span className="upload-icon">+</span>
              </div>
            )}
            <input
              id="image-input"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              hidden
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <button 
            type="submit" 
            className="submit-button"
            disabled={isLoading || !selectedImage || !date}
          >
            {isLoading ? 'Creating...' : 'Create Memory'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddMemoryModal; 
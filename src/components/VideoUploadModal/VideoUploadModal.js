import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './VideoUploadModal.css';

function VideoUploadModal({ isOpen, onClose }) {
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const navigate = useNavigate();

  const handleVideoSelect = (e) => {
    const files = Array.from(e.target.files);
    const videoFiles = files.filter(file => file.type.startsWith('video/'));
    
    setSelectedVideos(prev => [...prev, ...videoFiles.map(file => ({
      file,
      id: Date.now() + Math.random(),
      name: file.name,
      size: file.size,
      preview: URL.createObjectURL(file)
    }))]);
  };

  const handleSubmit = async () => {
    if (selectedVideos.length === 0) return;
    
    setIsUploading(true);
    try {
      // Here you would typically upload the videos to your server
      // For now, we'll just simulate a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Close modal and navigate to studio
      onClose();
      navigate('/enhance');
    } catch (error) {
      console.error('Error uploading videos:', error);
    } finally {
      setIsUploading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="upload-area">
          <input
            type="file"
            accept="video/*"
            multiple
            onChange={handleVideoSelect}
            id="video-input"
            className="hidden-input"
          />
          <label htmlFor="video-input" className="upload-label">
            <div className="upload-icon">+</div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default VideoUploadModal; 
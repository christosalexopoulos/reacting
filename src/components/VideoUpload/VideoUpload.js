import React, { useState } from 'react';
import './VideoUpload.css';

function VideoUpload({ onUpload }) {
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

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

  return (
    <div className="video-upload">
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

      {selectedVideos.length > 0 && (
        <div className="selected-videos">
          <div className="video-grid">
            {selectedVideos.map(video => (
              <div key={video.id} className="video-preview">
                <video src={video.preview} controls />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoUpload;
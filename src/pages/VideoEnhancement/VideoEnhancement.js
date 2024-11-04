import React from 'react';
import VideoUpload from '../../components/VideoUpload/VideoUpload';
import './VideoEnhancement.css';

function VideoEnhancement() {
  return (
    <div className="video-enhancement">
      <div className="upload-container">
        <VideoUpload />
      </div>
    </div>
  );
}

export default VideoUpload; 
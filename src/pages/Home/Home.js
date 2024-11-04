import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const handleVideoSelect = (e) => {
    const files = Array.from(e.target.files);
    const videoFiles = files.filter(file => file.type.startsWith('video/'));
    
    if (videoFiles.length > 0) {
      console.log('Videos selected:', videoFiles);
      // Here you would handle the videos and navigate to studio
      navigate('/enhance');
    }
  };

  return (
    <div className="home">
      <div className="animated-grid"></div>
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>ed!t</h1>
        <div className="upload-button-container">
          <input
            type="file"
            accept="video/*"
            multiple
            onChange={handleVideoSelect}
            id="video-input"
            className="hidden-input"
          />
          <label htmlFor="video-input" className="upload-button">
            +
          </label>
        </div>
      </div>
    </div>
  );
}

export default Home; 
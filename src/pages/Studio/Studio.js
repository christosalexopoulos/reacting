import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useVideos } from '../../context/VideoContext';
import VideoUploadModal from '../components/VideoUploadModal/VideoUploadModal';
import './Studio.css';

function Studio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { projects } = useVideos();
  const location = useLocation();
  const activeProjectId = location.state?.activeProject;

  return (
    <div className="studio">
      <div className="projects-grid">
        {projects.map(project => (
          <div 
            key={project.id} 
            className={`project-card ${project.id === activeProjectId ? 'active' : ''}`}
          >
            {project.videos[0] && (
              <video 
                src={project.videos[0].preview} 
                className="project-preview"
              />
            )}
            <div className="project-info">
              <span className="project-date">
                {new Date(project.dateCreated).toLocaleDateString()}
              </span>
              <span className="project-status">{project.status}</span>
            </div>
          </div>
        ))}
        
        <button 
          className="upload-button"
          onClick={() => setIsModalOpen(true)}
        >
          +
        </button>
      </div>

      <VideoUploadModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default Studio; 
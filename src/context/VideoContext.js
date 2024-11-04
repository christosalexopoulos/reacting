import React, { createContext, useContext, useState } from 'react';

const VideoContext = createContext();

export function VideoProvider({ children }) {
  const [projects, setProjects] = useState([]);
  
  const createNewProject = (videos) => {
    const newProject = {
      id: Date.now(),
      dateCreated: new Date(),
      videos: videos,
      status: 'processing' // could be 'processing', 'completed', 'failed'
    };
    
    setProjects(prev => [newProject, ...prev]);
    return newProject.id;
  };

  return (
    <VideoContext.Provider value={{ projects, createNewProject }}>
      {children}
    </VideoContext.Provider>
  );
}

export const useVideos = () => useContext(VideoContext); 
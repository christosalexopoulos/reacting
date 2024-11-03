import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import MemoryGallery from './pages/MemoryGallery/MemoryGallery';
import Chat from './components/Chat/Chat';
import './App.css';
import { MemoryProvider } from './context/MemoryContext';

function App() {
  return (
    <MemoryProvider>
      <Router>
        <div className="App">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/memories" element={<MemoryGallery />} />
              <Route path="/chat" element={<Chat />} />
            </Routes>
          </main>
        </div>
      </Router>
    </MemoryProvider>
  );
}

export default App;

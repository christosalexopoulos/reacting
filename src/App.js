import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import VideoEnhancement from './pages/VideoEnhancement/VideoEnhancement';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/enhance" element={<VideoEnhancement />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

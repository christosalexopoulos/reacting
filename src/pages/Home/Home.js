import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Memory Museum</h1>
      <Link to="/memories" className="primary-button">
        Enter
      </Link>
    </div>
  );
}

export default Home; 
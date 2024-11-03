import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Your Logo</h1>
      </div>
      <Navigation />
    </header>
  );
}

export default Header; 
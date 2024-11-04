import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">ed!t</Link>
      <nav className="navigation">
        <Link to="/">home</Link>
        <Link to="/enhance">studio</Link>
      </nav>
    </header>
  );
}

export default Header; 
import React from 'react';
import "../styles/Header.css";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="Header">
      <h1>Winston</h1>
      <nav>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

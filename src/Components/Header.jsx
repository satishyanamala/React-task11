import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <nav className="header">
      <img src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png" alt="wave" className="logo" />
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;

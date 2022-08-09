import React from 'react';
import '../styles/Navigation.css';


function Navigation() {
  return (
    <nav className="navbar">
      <ul className="nav navbar-nav navbar-right">
        <li><a href="/about">ABOUT ME</a></li>
        <li><a href="/portfolio">PORTFOLIO</a></li>
        <li><a href="/resume">RESUME</a></li>
        <li><a href="/contact">CONTACT</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;

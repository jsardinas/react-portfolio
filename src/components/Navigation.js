import React from 'react';
import '../styles/Navigation.css';


function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar">
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#about" onClick={() => handlePageChange('About')}>ABOUT ME</a></li>
        <li><a href="#portfolio" onClick={() => handlePageChange('Portfolio')}>PORTFOLIO</a></li>
        <li><a href="#resume" onClick={() => handlePageChange('Resume')}>RESUME</a></li>
        <li><a href="#contact" onClick={() => handlePageChange('Contact')}>CONTACT</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;

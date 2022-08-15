import React from 'react';
import '../styles/Navigation.css';


function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar">
      <ul className="nav navbar-nav navbar-right">
        <li><a className={currentPage==='About'?'active':'inactive'} href="#about" onClick={() => handlePageChange('About')}>ABOUT ME</a></li>
        <li><a className={currentPage==='Portfolio'?'active':'inactive'} href="#portfolio" onClick={() => handlePageChange('Portfolio')}>PORTFOLIO</a></li>
        <li><a className={currentPage==='Resume'?'active':'inactive'} href="#resume" onClick={() => handlePageChange('Resume')}>RESUME</a></li>
        <li><a className={currentPage==='Contact'?'active':'inactive'} href="#contact" onClick={() => handlePageChange('Contact')}>CONTACT</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;

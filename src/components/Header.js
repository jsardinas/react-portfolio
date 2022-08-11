import React from 'react';
import Navigation from './Navigation';
import styles from '../styles/Header.css';


function Header({ currentPage, handlePageChange }) {
  return (
    <header className="header" style={styles.header}>
      <h1>Javier Sardi&#241;as</h1>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
    </header>
  );
}

export default Header;

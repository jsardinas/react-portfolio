import React from 'react';
import Navigation from './Navigation';
import styles from '../styles/Header.css';


function Header() {
  return (
    <header className="header" style={styles.header}>
      <h1>Javier Sardi&#241;as</h1>
      <Navigation />
    </header>
  );
}

export default Header;

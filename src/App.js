import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About'
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'Contact') {
      return <div className='container-fluid'><Contact /></div>;
    }
    if (currentPage === 'Portfolio') {
      return <div className='container-fluid'><Portfolio /></div>;
    }
    if (currentPage === 'Resume') {
      return <div className='container-fluid'><Resume /></div>;
    }
    return <div className='container-fluid'><About /></div>;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="App">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import './HomeContainer.css';

const HomeContainer = () => {
  return (
    <div className="grid-container">
      <header className="header">
        <Header />
      </header>
      <main className="main-content">
        <h1>Contenido Principal</h1>
        <p>testeando</p>
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default HomeContainer;
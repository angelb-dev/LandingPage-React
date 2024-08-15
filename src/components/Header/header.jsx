import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Landing Page React</h1>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a href="/">Home</a>
          </li>
          <li className="header__nav-item">
            <a href="/about">About</a>
          </li>
          <li className="header__nav-item">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
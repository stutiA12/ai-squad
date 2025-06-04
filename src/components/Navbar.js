import React, { useState } from 'react';
import '../styles/Navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <header>
      <div className="header-left">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <nav className={menuOpen ? 'show' : ''}>
        <a href="/#">Home</a>
        <a href="/#">About Us</a>
        <a href="/#">Services</a>
        <a href="/#">Pricing</a>
      </nav>
      <div className={`buttons ${menuOpen ? 'show' : ''}`}>
        <button type="button">Sign In</button>
        <button type="button">Sign Up</button>
      </div>
    </header>
  );
}
export default Navbar;

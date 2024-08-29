import React, { useState } from 'react';
import './header.css';
import honda from '../../Images/hondaLogo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="custom-navbar">
      <div className="custom-navbar-container">
        <a href="#home" className="custom-navbar-brand">
          <img
            src={honda} 
            alt="Honda"
            className="custom-logo"
          />
        </a>
        <button className="custom-navbar-toggle" onClick={toggleMenu}>
          &#9776; {/* Ícono de menú hamburguesa */}
        </button>
        <ul className={`custom-navbar-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#models">Models</a></li>
          <li><a href="#service">Service</a></li>
          <li><a href="#about">About Us</a></li>
          <li className="custom-dropdown">
            <a href="#more" className="custom-dropdown-toggle">More</a>
            <ul className="custom-dropdown-menu">
              <li><a href="#news">News</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

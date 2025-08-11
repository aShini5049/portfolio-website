import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      if (scrollPosition > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
      const currentSection = Math.floor(scrollPosition / windowHeight);
      
      if (currentSection >= 0 && currentSection < sections.length) {
        setActiveMenu(sections[currentSection]);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (menu) => {
    setActiveMenu(menu);
    setMenuOpen(false);

    const sections = {
      'home': 0,
      'about': window.innerHeight,
      'services': window.innerHeight * 2,
      'portfolio': window.innerHeight * 3,
      'contact': window.innerHeight * 4
    };
    
    const targetPosition = sections[menu];
    
    window.scrollTo({ 
      top: targetPosition, 
      behavior: 'smooth' 
    });
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    setActiveMenu('home');
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="/" onClick={handleHomeClick} className="logo-link" aria-label="Home">
        <img src={logo} alt="Logo" className="logo" />
      </a>

      <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <li className={activeMenu === 'home' ? 'active' : ''}>
          <a 
            href="#home" 
            className="anchor-link" 
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('home');
            }}
          >
            Home
          </a>
        </li>
        <li className={activeMenu === 'about' ? 'active' : ''}>
          <a 
            href="#about" 
            className="anchor-link" 
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('about');
            }}
          >
            About Me
          </a>
        </li>
        <li className={activeMenu === 'services' ? 'active' : ''}>
          <a 
            href="#services" 
            className="anchor-link" 
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('services');
            }}
          >
            Services
          </a>
        </li>
        <li className={activeMenu === 'portfolio' ? 'active' : ''}>
          <a 
            href="#portfolio" 
            className="anchor-link" 
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('portfolio');
            }}
          >
            Portfolio
          </a>
        </li>
        <li className={activeMenu === 'contact' ? 'active' : ''}>
          <a 
            href="#contact" 
            className="anchor-link" 
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('contact');
            }}
          >
            Contact
          </a>
        </li>
      </ul>

      {!menuOpen && (
        <img
          src={menu_open}
          alt="Open menu"
          className="nav-mob-open"
          onClick={() => setMenuOpen(true)}
          aria-label="Open navigation menu"
        />
      )}
      {menuOpen && (
        <img
          src={menu_close}
          alt="Close menu"
          className="nav-mob-close"
          onClick={() => setMenuOpen(false)}
          aria-label="Close navigation menu"
        />
      )}
    </nav>
  );
};

export default Navbar;
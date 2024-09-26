import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import custom CSS for styling

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo"><Link to="/">MyPortfolio</Link></h1>

        {/* Toggle button for mobile view */}
        <div className="menu-icon" onClick={handleToggle}>
          <i className={isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        {/* Main Navigation Links */}
        <ul className={isMobileMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-links" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

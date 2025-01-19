import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-left">
        <img className="logo" src="/images/logo.png" alt="Logo" />
        <img className="menu-icon" src="/images/menu-icon.png" alt="Menu Icon" />
      </div>
      <div className="nav-middle">
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <img src="/images/search-icon.png" alt="Search" />
        </div>
      </div>
      <div className="nav-right">
        <img className="user-icon" src="/images/user-icon.png" alt="User Icon" />
      </div>
    </nav>
  );
};

export default Navbar;


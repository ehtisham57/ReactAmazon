import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <a href="/">Amazon Clone</a>
      </div>
      <div className="header__search">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
      <div className="header__nav">
        <a href="/signin" className="header__navLink">Sign In</a>
        <a href="/cart" className="header__navLink">Cart</a>
      </div>
    </header>
  );
}

export default Header;

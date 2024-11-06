import React from 'react';
import './header.css'
function Header() {
  return (
    <header className="custom-header">
    <div className="header-left">
      <h5>INDIAN INSTITUTE OF SKILL DEVELOPMENT</h5>
    </div>
    <div className="header-right">
      <i className="bi bi-bell"></i>
      <span><i className="bi bi-person-circle"></i> Admin</span>
      <span><i className="bi bi-person-circle"></i> ABC</span>
    </div>
  </header>
  );
}

export default Header;

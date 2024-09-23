import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [activeTab, setActiveTab] = useState('encrypt');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/" className="nav-link">
          <h3 style={{ color: 'secondary' }}>Encryptor-Decryptor</h3>
        </NavLink>
      </div>
      <div className="nav-links">
        <NavLink
          to="/encrypt"
          className={`nav-link ${activeTab === 'encrypt' ? 'active' : ''}`}
          onClick={() => handleTabClick('encrypt')}
        >
          Encrypt
        </NavLink>
        <NavLink
          to="/decrypt"
          className={`nav-link ${activeTab === 'decrypt' ? 'active' : ''}`}
          onClick={() => handleTabClick('decrypt')}
        >
          Decrypt
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;

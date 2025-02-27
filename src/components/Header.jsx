import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Simulated user state:
  // Change "null" to a user object to simulate a logged-in state.
  const user = null; // e.g., { name: 'John Doe', avatar: 'https://via.placeholder.com/40' }

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">
          <Link to="/">Employee Management</Link>
        </h1>
        <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/employee-form" className="nav-link" onClick={() => setMenuOpen(false)}>
                Add Employee
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/search" className="nav-link" onClick={() => setMenuOpen(false)}>
                Search
              </Link>
            </li>
          </ul>
        </nav>
        <div className="header-right">
          {user ? (
            <div className="profile-icon">
              <img src={user.avatar} alt="Profile" />
            </div>
          ) : (
            <div className="auth-buttons">
              <Link to="/login" className="btn-auth">Login</Link>
              <Link to="/signup" className="btn-auth btn-signup">Signup</Link>
            </div>
          )}
          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

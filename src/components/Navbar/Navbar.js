import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { useAuth } from "../../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  return (
    <nav className="navbar">
      <h1>🤖 SafeAI Academy</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        {currentUser ? (
          <>
            <li><Link to="/learn">Learn</Link></li>
            <li><Link to="/scenario">Scenario</Link></li>
            <li><Link to="/quiz">Quiz</Link></li>
          </>
        ) : null}
      </ul>
      <div className="nav-right">
        <ThemeToggle />
        {currentUser ? (
          <div className="user-menu">
            <button 
              className="user-menu-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="User menu"
            >
              {currentUser.displayName || currentUser.email}
            </button>
            {isMenuOpen && (
              <div className="user-dropdown">
                <Link to="/profile">Profile</Link>
                <Link to="/progress">My Progress</Link>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <div className="auth-buttons">
            <Link to="/login" className="auth-link">Login</Link>
            <Link to="/signup" className="auth-link signup">Sign Up</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

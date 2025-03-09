import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>🤖 SafeAI Academy</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/learn">Learn</Link></li>
        <li><Link to="/scenario">Scenario</Link></li>
        <li><Link to="/quiz">Quiz</Link></li>      
      </ul>
    </nav>
  );
};

export default Navbar;

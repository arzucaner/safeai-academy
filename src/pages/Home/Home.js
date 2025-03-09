import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import aiImage from "../../assets/ai-image.png";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <h1>Welcome to <span>SafeAI Academy</span></h1>
          <p>Explore the future of AI safety through interactive scenarios & quizzes.</p>
          <div className="buttons">
            <Link to="/learn" className="btn">Start Learning</Link>
            <Link to="/quiz" className="btn">Take a Quiz</Link>
          </div>
        </div>
        <div className="image-container">
          <img src={aiImage} alt="AI Illustration" className="ai-image" />
        </div>
      </div>
    </div>
  );
};

export default Home;


import React from "react";
import { Link } from "react-router-dom";
import "./Learn.css";

const Learn = () => {
  return (
    <div className="learn">
      <h1>Learn About AI Safety</h1>
      <p>Artificial Intelligence is powerful, but it must be safe. Understanding AI safety helps prevent risks and biases.</p>

      <div className="topics">
        <div className="card">
          <h2>Bias in AI</h2>
          <p>AI models can inherit biases present in training data, leading to unfair decisions. Learn how to detect and mitigate bias in AI systems.</p>
        </div>
        <div className="card">
          <h2>Adversarial Attacks</h2>
          <p>Adversarial attacks manipulate AI models by introducing small, often imperceptible changes to input data, causing incorrect predictions. Learn how these attacks work and how to defend against them.</p>
        </div>
        <div className="card">
          <h2>AI Alignment</h2>
          <p>AI alignment ensures that machine learning models act in ways that are beneficial to humans, preventing unintended harm. Explore key strategies to align AI with human values.</p>
        </div>
      </div>

      <div className="back">
        <Link to="/" className="btn">Back to Home</Link>
      </div>
    </div>
  );
};

export default Learn;

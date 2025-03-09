import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Scenario.css";

const scenarios = [
  {
    id: 1,
    text: "You are a developer working on an AI hiring system. The AI seems to prefer certain demographics over others. What action do you take?",
    options: [
      { text: "Ignore the issue", feedback: "Not the best choice. Always consider transparency and ethics in AI." },
      { text: "Inform your team and find a solution", feedback: "Correct! Transparency in AI decisions is crucial to prevent biases." },
      { text: "Manually adjust the AI’s decisions", feedback: "Be careful! Direct adjustments may introduce new biases." },
    ],
  },
  {
    id: 2,
    text: "An AI chatbot you built is spreading misinformation. What should you do?",
    options: [
      { text: "Let it continue learning on its own", feedback: "Not ideal. AI should have human oversight to prevent misinformation." },
      { text: "Implement content moderation rules", feedback: "Correct! Ensuring AI follows ethical guidelines is crucial." },
      { text: "Shut down the AI immediately", feedback: "This might work temporarily, but improving the model is a better solution." },
    ],
  },
  {
    id: 3,
    text: "A self-driving car’s AI must choose between hitting a pedestrian or swerving into a wall, risking the passenger. What’s the best approach?",
    options: [
      { text: "Allow AI to decide based on past accident data", feedback: "This could be dangerous and unethical." },
      { text: "Ensure AI prioritizes human safety above all", feedback: "Correct! AI should always minimize harm as much as possible." },
      { text: "Let passengers manually override the AI in real-time", feedback: "This may be impractical, but adding human intervention options can be useful." },
    ],
  },
  {
    id: 4,
    text: "An AI system in healthcare misdiagnoses patients. What action should be taken?",
    options: [
      { text: "Let AI improve itself over time", feedback: "Incorrect. Human doctors must oversee AI medical decisions." },
      { text: "Require human verification before making decisions", feedback: "Correct! AI should assist but not replace human expertise." },
      { text: "Shut down the AI immediately", feedback: "Not the best choice. The AI could be retrained instead of being abandoned." },
    ],
  },
  {
    id: 5,
    text: "An AI-powered surveillance system misidentifies an innocent person as a suspect. What should be done?",
    options: [
      { text: "Let law enforcement handle it based on AI data", feedback: "Incorrect. AI should not be the sole decision-maker in law enforcement." },
      { text: "Ensure AI decisions are reviewed by humans", feedback: "Correct! AI should assist but not replace legal judgment." },
      { text: "Shut down all AI surveillance", feedback: "Extreme response. Instead, AI should be made more accountable and transparent." },
    ],
  },
];

const Scenario = () => {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState("");

  const handleChoice = (choice) => {
    setSelectedOption(choice.text);
    setFeedback(choice.feedback);
  };

  const nextScenario = () => {
    setSelectedOption(null);
    setFeedback("");
    setCurrentScenario((prevScenario) => (prevScenario + 1) % scenarios.length);
  };

  return (
    <div className="scenario">
      <h1>AI Safety Scenario Simulation</h1>
      <p>{scenarios[currentScenario].text}</p>

      <div className="choices">
        {scenarios[currentScenario].options.map((option, index) => (
          <button key={index} onClick={() => handleChoice(option)}>
            {option.text}
          </button>
        ))}
      </div>

      {selectedOption && <p className="feedback">{feedback}</p>}

      <div className="buttons">
        <button className="next-btn" onClick={nextScenario}>Next Scenario</button>
        <Link to="/" className="btn">Back to Home</Link>
      </div>
    </div>
  );
};

export default Scenario;

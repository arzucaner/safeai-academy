import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Quiz.css";

const quizQuestions = [
  {
    id: 1,
    question: "What is AI Safety?",
    options: [
      { text: "Ensuring AI systems are aligned with human values", correct: true },
      { text: "Making AI more intelligent", correct: false },
      { text: "Removing all AI technologies", correct: false },
    ],
  },
  {
    id: 2,
    question: "Which of the following is a risk of AI?",
    options: [
      { text: "Bias in decision-making", correct: true },
      { text: "AI always being correct", correct: false },
      { text: "AI never making mistakes", correct: false },
    ],
  },
  {
    id: 3,
    question: "How can AI bias be reduced?",
    options: [
      { text: "Using diverse and representative datasets", correct: true },
      { text: "Letting AI learn by itself without oversight", correct: false },
      { text: "Ignoring bias because it is unavoidable", correct: false },
    ],
  },
  {
    id: 4,
    question: "Why is AI transparency important?",
    options: [
      { text: "So AI decisions can be understood and trusted", correct: true },
      { text: "Because AI should be secretive", correct: false },
      { text: "To make AI decisions unpredictable", correct: false },
    ],
  },
  {
    id: 5,
    question: "What should be done if an AI system is spreading misinformation?",
    options: [
      { text: "Apply stricter content moderation", correct: true },
      { text: "Let AI decide what is true", correct: false },
      { text: "Ignore the issue", correct: false },
    ],
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    setSelectedOption(option);
    if (option.correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption(null);
    setShowResult(false);
  };

  return (
    <div className="quiz">
      <h1>AI Safety Quiz</h1>

      {showResult ? (
        <div className="result">
          <h2>Your Score: {score} / {quizQuestions.length}</h2>
          <div className="button-container">
          <button className="btn" onClick={restartQuiz}>Try Again</button>
          <Link to="/" className="btn">Back to Home</Link>
        </div>
        </div>
      ) : (
        <div className="question-container">
          <h2>{quizQuestions[currentQuestion].question}</h2>
          <div className="options">
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`option ${selectedOption === option ? (option.correct ? "correct" : "incorrect") : ""}`}
                onClick={() => handleAnswer(option)}
                disabled={selectedOption !== null}
              >
                {option.text}
              </button>
            ))}
          </div>

          {selectedOption && (
            <button className="next-btn" onClick={nextQuestion}>Next Question</button>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;


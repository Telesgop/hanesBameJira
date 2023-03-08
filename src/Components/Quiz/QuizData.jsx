import React from "react";
import "./Quiz.css";
import { useState } from "react";
import { motion } from "framer-motion";

const QuizData = () => {
  const questions = [
    {
      questionText: "Where was Richard Parks born?",
      answerOptions: [
        { answerText: "Wrexham", isCorrect: false },
        { answerText: "Cardiff", isCorrect: false },
        { answerText: "Pontypridd", isCorrect: true },
        { answerText: "Swansea", isCorrect: false },
      ],
    },
    {
      questionText:
        "What sport did Richard Parks go on to play professionally?",
      answerOptions: [
        { answerText: "Football", isCorrect: false },
        { answerText: "Rugby", isCorrect: true },
        { answerText: "Golf", isCorrect: false },
        { answerText: "Basketball", isCorrect: false },
      ],
    },
    {
      questionText: "What did Richard Parks become after retiring from rugby?",
      answerOptions: [
        { answerText: "Extreme Athlete", isCorrect: true },
        { answerText: "Gardener", isCorrect: false },
        { answerText: "Football Commentator", isCorrect: false },
        { answerText: "Pilot", isCorrect: false },
      ],
    },
    {
      questionText:
        "How long did it take Richard to climb the highest mountain on each continent?",
      answerOptions: [
        { answerText: "1 year", isCorrect: false },
        { answerText: "312 days", isCorrect: false },
        { answerText: "2 months", isCorrect: false },
        { answerText: "7 months", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="wholePage">
      <div className="personBox">
        <div className="personInfoQuiz">
          {showScore ? (
            <div className="score-section">
              You scored {score} out of {questions.length}!
            </div>
          ) : (
            <>
              <h2 className="personH2Quiz">Richard Parks</h2>
              <div className="question-section">
                <div className="quizQuestionText">
                  {questions[currentQuestion].questionText}
                </div>
              </div>
              <div className="quizQuestionButtons">
                <div className="quizQuestionButtonsMiddle">
                  {questions[currentQuestion].answerOptions.map(
                    (answerOption) => (
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="quizQuestionButtonIndiv"
                        onClick={() =>
                          handleAnswerOptionClick(answerOption.isCorrect)
                        }
                      >
                        {answerOption.answerText}
                      </motion.div>
                    )
                  )}
                </div>
              </div>
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizData;

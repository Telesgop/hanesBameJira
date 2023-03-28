import React from "react";
import "./Quiz.css";
import { useState } from "react";
import { motion } from "framer-motion";

const QuizData = () => {
  const questions = [
    {
      questionText: "Where was Richard Parks born?",
    },
    {
      questionText:
        "What sport did Richard Parks go on to play professionally?",
    },
    {
      questionText: "What did Richard Parks become after retiring from rugby?",
    },
    {
      questionText:
        "How long did it take Richard to climb the highest mountains on each continent?",
    },
    {
      questionText:
        "In January 2014, what did Richard become the first Welshman to do?",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [next, setNext] = useState(false);
  const [buttonStyle, setButtonStyle] = useState("white");
  const [buttonStyleWrong, setButtonStyleWrong] = useState("white");
  const [buttonStyleWrong2, setButtonStyleWrong2] = useState("white");
  const [buttonStyleWrong3, setButtonStyleWrong3] = useState("white");
  const [finished, setFinished] = useState(false);
  function goNext() {
    setNext(true);
    setButtonStyle("#96E072");
  }
  function finishedQuiz() {
    setFinished(true);
    setButtonStyle("#96E072");
  }

  function nextPage() {
    setCurrentQuestion(currentQuestion + 1);
    setButtonStyle("white");
    setButtonStyleWrong("white");
    setButtonStyleWrong2("white");
    setButtonStyleWrong3("white");

    setNext(false);
  }

  return (
    <div className="wholePage">
      <div className="personBox">
        <div className="personInfoQuiz">
          <h2 className="personH2Quiz">Richard Parks</h2>
          <div className="questions">
            <h3>
              Question {currentQuestion + 1}:{" "}
              {questions[currentQuestion].questionText}
            </h3>
            <div className="answerBoxes">
              {currentQuestion === 1 && (
                <div className="boxes">
                  <motion.div
                    className="answers"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ backgroundColor: buttonStyleWrong }}
                    onClick={() => setButtonStyleWrong("#E71D36")}
                  >
                    Football
                  </motion.div>
                  <motion.div
                    className="answers"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ backgroundColor: buttonStyle }}
                    onClick={() => goNext()}
                  >
                    Rugby
                  </motion.div>
                  <motion.div
                    className="answers"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ backgroundColor: buttonStyleWrong2 }}
                    onClick={() => setButtonStyleWrong2("#E71D36")}
                  >
                    Badminton
                  </motion.div>
                  <motion.div
                    className="answers"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ backgroundColor: buttonStyleWrong3 }}
                    onClick={() => setButtonStyleWrong3("#E71D36")}
                  >
                    Extreme Frisbee
                  </motion.div>
                </div>
              )}
              {currentQuestion === 0 && (
                <div className="boxes">
                  <motion.div
                    className="answers"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ backgroundColor: buttonStyleWrong }}
                    onClick={() => setButtonStyleWrong("#E71D36")}
                  >
                    Wrexham
                  </motion.div>
                  <motion.div
                    className="answers"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ backgroundColor: buttonStyle }}
                    onClick={() => goNext()}
                  >
                    Pontypridd
                  </motion.div>
                  <motion.div
                    className="answers"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ backgroundColor: buttonStyleWrong2 }}
                    onClick={() => setButtonStyleWrong2("#E71D36")}
                  >
                    Cardiff
                  </motion.div>
                  <motion.div
                    className="answers"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ backgroundColor: buttonStyleWrong3 }}
                    onClick={() => setButtonStyleWrong3("#E71D36")}
                  >
                    Swansea
                  </motion.div>
                </div>
              )}
              {currentQuestion === 2 && (
                <div className="boxes">
                  <motion.div
                    className="answers"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ backgroundColor: buttonStyle }}
                    onClick={() => goNext()}
                  >
                    Extreme Athlete
                  </motion.div>
                  <motion.div
                    className="answers"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ backgroundColor: buttonStyleWrong }}
                    onClick={() => setButtonStyleWrong("#E71D36")}
                  >
                    Gardener
                  </motion.div>
                  <motion.div
                    className="answers"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ backgroundColor: buttonStyleWrong2 }}
                    onClick={() => setButtonStyleWrong2("#E71D36")}
                  >
                    Pilot
                  </motion.div>
                  <motion.div
                    className="answers"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ backgroundColor: buttonStyleWrong3 }}
                    onClick={() => setButtonStyleWrong3("#E71D36")}
                  >
                    Astronaut
                  </motion.div>
                </div>
              )}
              {currentQuestion === 3 && (
                <div className="boxes">
                  <motion.div
                    className="answers"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ backgroundColor: buttonStyleWrong }}
                    onClick={() => setButtonStyleWrong("#E71D36")}
                  >
                    1 year
                  </motion.div>
                  <motion.div
                    className="answers"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ backgroundColor: buttonStyleWrong2 }}
                    onClick={() => setButtonStyleWrong2("#E71D36")}
                  >
                    17 months
                  </motion.div>
                  <motion.div
                    className="answers"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ backgroundColor: buttonStyle }}
                    onClick={() => goNext()}
                  >
                    7 months
                  </motion.div>
                  <motion.div
                    className="answers"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ backgroundColor: buttonStyleWrong3 }}
                    onClick={() => setButtonStyleWrong3("#E71D36")}
                  >
                    7 weeks
                  </motion.div>
                </div>
              )}
              {currentQuestion === 4 && (
                <div className="boxes">
                  <motion.div
                    className="answers"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ backgroundColor: buttonStyleWrong }}
                    onClick={() => setButtonStyleWrong("#E71D36")}
                  >
                    Eat 2,000 Welshcakes in 24 hours
                  </motion.div>
                  <motion.div
                    className="answers"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ backgroundColor: buttonStyleWrong2 }}
                    onClick={() => setButtonStyleWrong2("#E71D36")}
                  >
                    Absail off the Millennium Stadium
                  </motion.div>
                  <motion.div
                    className="answers"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ backgroundColor: buttonStyleWrong3 }}
                    onClick={() => setButtonStyleWrong3("#E71D36")}
                  >
                    Ride a dragon side saddle
                  </motion.div>
                  <motion.div
                    className="answers"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ backgroundColor: buttonStyle }}
                    onClick={() => finishedQuiz()}
                  >
                    Ski solo to the South Pole
                  </motion.div>
                </div>
              )}
            </div>{" "}
            <div className="nextArea">
              {next == true && (
                <div className="nextBut" onClick={() => nextPage()}>
                  Next
                </div>
              )}
              {finished == true && (
                <>
                  <div className="finishedQuiz">Well done!</div>
                  <div className="finishedBut">
                    {" "}
                    <a href="https://dev.addysgop.co.uk/hanesbame/6to9yo/RichardParks">
                      Back to info page
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizData;

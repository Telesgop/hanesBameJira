import React from "react";
import "./Quiz.css";
import { useState } from "react";
import { motion } from "framer-motion";

const BettyQuiz = () => {
  const questions = [
    {
      questionText: "Where was Elizabeth Campbell born?",
    },
    {
      questionText: "What nickname is Elizabeth Campbell also known by?",
    },
    {
      questionText: "What did young Betty Campbell dream of becoming?",
    },
    {
      questionText: "What did Betty Campbell help set up?",
    },
    {
      questionText:
        "Which famous activist and politician did Betty meet in 1998?",
    },
    {
      questionText: " What did Betty Campbell receive in 2003?",
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
          <h2 className="personH2Quiz">Elizabeth Campbell</h2>
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
                    style={{ backgroundColor: buttonStyle }}
                    onClick={() => goNext()}
                  >
                    Betty Campbell
                  </motion.div>
                  <motion.div
                    className="answers"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ backgroundColor: buttonStyleWrong }}
                    onClick={() => setButtonStyleWrong("#E71D36")}
                  >
                    Eliza Campbell
                  </motion.div>
                  <motion.div
                    className="answers"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ backgroundColor: buttonStyleWrong2 }}
                    onClick={() => setButtonStyleWrong2("#E71D36")}
                  >
                    Bell Campbell
                  </motion.div>
                  <motion.div
                    className="answers"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ backgroundColor: buttonStyleWrong3 }}
                    onClick={() => setButtonStyleWrong3("#E71D36")}
                  >
                    Elle Campbell
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
                    Abergavenny
                  </motion.div>
                  <motion.div
                    className="answers"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ backgroundColor: buttonStyle }}
                    onClick={() => goNext()}
                  >
                    Butetown
                  </motion.div>
                  <motion.div
                    className="answers"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ backgroundColor: buttonStyleWrong2 }}
                    onClick={() => setButtonStyleWrong2("#E71D36")}
                  >
                    Merthyr Tydfil
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
                    A teacher
                  </motion.div>
                  <motion.div
                    className="answers"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ backgroundColor: buttonStyleWrong }}
                    onClick={() => setButtonStyleWrong("#E71D36")}
                  >
                    A politician
                  </motion.div>
                  <motion.div
                    className="answers"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ backgroundColor: buttonStyleWrong2 }}
                    onClick={() => setButtonStyleWrong2("#E71D36")}
                  >
                    A sailor
                  </motion.div>
                  <motion.div
                    className="answers"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ backgroundColor: buttonStyleWrong3 }}
                    onClick={() => setButtonStyleWrong3("#E71D36")}
                  >
                    A philosopher
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
                    BBC Radio 2 Wales
                  </motion.div>
                  <motion.div
                    className="answers"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ backgroundColor: buttonStyleWrong2 }}
                    onClick={() => setButtonStyleWrong2("#E71D36")}
                  >
                    NHS Wales
                  </motion.div>
                  <motion.div
                    className="answers"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ backgroundColor: buttonStyle }}
                    onClick={() => goNext()}
                  >
                    Black History Month
                  </motion.div>
                  <motion.div
                    className="answers"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ backgroundColor: buttonStyleWrong3 }}
                    onClick={() => setButtonStyleWrong3("#E71D36")}
                  >
                    Football Association of Wales
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
                    Thomas Mann
                  </motion.div>
                  <motion.div
                    className="answers"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ backgroundColor: buttonStyleWrong2 }}
                    onClick={() => setButtonStyleWrong2("#E71D36")}
                  >
                    Bob Geldof
                  </motion.div>
                  <motion.div
                    className="answers"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ backgroundColor: buttonStyleWrong3 }}
                    onClick={() => setButtonStyleWrong3("#E71D36")}
                  >
                    Angela Davis
                  </motion.div>
                  <motion.div
                    className="answers"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ backgroundColor: buttonStyle }}
                    onClick={() => goNext()}
                  >
                    Nelson Mandela
                  </motion.div>
                </div>
              )}
              {currentQuestion === 5 && (
                <div className="boxes">
                  <motion.div
                    className="answers"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ backgroundColor: buttonStyleWrong }}
                    onClick={() => setButtonStyleWrong("#E71D36")}
                  >
                    Keys to the City of Cardiff
                  </motion.div>
                  <motion.div
                    className="answers"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ backgroundColor: buttonStyleWrong2 }}
                    onClick={() => setButtonStyleWrong2("#E71D36")}
                  >
                    Time's Person of the Year
                  </motion.div>
                  <motion.div
                    className="answers"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ backgroundColor: buttonStyleWrong3 }}
                    onClick={() => setButtonStyleWrong3("#E71D36")}
                  >
                    Golden Daffodil Award
                  </motion.div>
                  <motion.div
                    className="answers"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ backgroundColor: buttonStyle }}
                    onClick={() => finishedQuiz()}
                  >
                    An MBE
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
                    <a href="https://dev.addysgop.co.uk/hanesbame/ps4/ElizabethCampbell">
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

export default BettyQuiz;

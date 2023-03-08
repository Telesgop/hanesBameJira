import React from "react";
import { LanguageContext } from "../../Helper/Context";
import { useContext } from "react";
import { useState } from "react";
import "./PersonQuiz.css";

const PersonQuiz = ({
  indivName,
  indivNameCym,
  indivPic,
  slugText,
  welshSlugText,
  dateOfBirth,
  text,
  welshText,
}) => {
  const { lang, setLang } = useContext(LanguageContext);
  const { quizNum, setQuizNum } = useState(0);

  return (
    <div className="wholePage">
      <div className="personBox">
        <div className="personInfoQuiz">
          {" "}
          <div className="quizPage">
            <div className="personName">
              <h2 className="personH2">
                {lang !== true ? indivName : indivNameCym}
              </h2>
            </div>
            <div>Try the quiz on all things {indivName}!</div>
            <div className="quizQuestions">
              <div className="quizQuestionText">
                Question:
                {quizNum === 0 ? "sfg" : "ONE"}
                {quizNum === 1 ? "TWO" : ""}
              </div>
              <div className="quizQuestionButtons">
                <div className="quizQuestionButtonsMiddle">
                  <div className="quizQuestionButtonIndiv">
                    {quizNum === 0 ? "1" : "1"}
                  </div>
                  <div
                    className="quizQuestionButtonIndiv"
                    onClick={console.log(quizNum)}
                  >
                    {quizNum === 0 ? "2" : "sdfgs"}
                  </div>
                  <div className="quizQuestionButtonIndiv">
                    {quizNum === 0 ? "3" : "sdfgs"}
                  </div>
                  <div className="quizQuestionButtonIndiv">
                    {quizNum === 0 ? "4" : "sdfgs"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default PersonQuiz;

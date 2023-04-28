import React from "react";
import { Link } from "react-router-dom";
import StoryBox from "../StoryBox/StoryBox";
import "./Quiz.css";

const Quiz = () => {
  return (
    <>
      <div className="infoMain">
        <h1 className="infoH1">Quizzes</h1>
        <p className="infoP">A variety of quizzes for use in the classroom.</p>
      </div>
      <div className="storiesContainer">
        <a href=" https://dev.addysgop.co.uk/hanesbame/RichardParksQuiz">
          <StoryBox
            name={"Richard Parks"}
            image={
              "https://images.ctfassets.net/pjshm78m9jt4/qOAmfNKcRdpCajNzkBHMa/0259e6a2036bb8d1797efdbd1a41fee3/richard_parks_hero_2.jpg"
            }
            slug={"5 questions"}
          />
        </a>
        <a href="https://dev.addysgop.co.uk/hanesbame/BettyQuiz">
          <StoryBox
            name={"Elizabeth Campbell"}
            image={
              "https://ichef.bbci.co.uk/news/976/cpsprodpb/13CF5/production/_98314118_bettyclean.jpg"
            }
            slug={"5 questions"}
          />
        </a>
        <StoryBox />
        <StoryBox />
      </div>
    </>
  );
};

export default Quiz;

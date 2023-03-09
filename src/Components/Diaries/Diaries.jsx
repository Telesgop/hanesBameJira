import React from "react";
import { Link } from "react-router-dom";
import Diary from "../../Images/FongSuiDiary.png";
import Idris from "../../Images/IdrisPhillipsDiary.png";
import StoryBoxDiaries from "../StoryBox/StoryBoxDiaries";
import "./Diaries.css";

const Diaries = () => {
  return (
    <>
      <div className="infoMainDiaries">
        <h1 className="infoH1Diaries">Fictional Diaries</h1>
        <p className="infoPDiaries">
          What was life like for these individuals?
        </p>
      </div>
      <div className="storiesContainer">
        <Link to={"/Diaries/FongSui"}>
          <StoryBoxDiaries name={"Fong Sui"} image={Diary} />
        </Link>
        <Link to={"/Diaries/IdrisPhillips"}>
          <StoryBoxDiaries name={"Idris Phillips"} image={Idris} />
        </Link>
      </div>
    </>
  );
};

export default Diaries;

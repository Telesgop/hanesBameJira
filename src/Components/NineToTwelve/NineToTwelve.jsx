import { React, useContext } from "react";
import "./NineToTwelve.css";
import { LanguageContext } from "../../Helper/Context";
import StoryBox from "../StoryBox/StoryBox";
import { useParams } from "react-router-dom";
import blob1 from "../../Images/blob1.png";
import blob2 from "../../Images/blob2.png";
import manface from "../../Images/manface.jpg";
import richardParks from "../../Images/richardParks.png";
import Copyright from "../Copyright/Copyright";
import { Link } from "react-router-dom";

const NineToTwelve = () => {
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <>
      <div className="ageRange">
        {lang !== true ? "Ages 9 - 12" : "9 - 12 Oed"}
      </div>
      <div className="storiesContainer">
        <Link to={"/9to12yo/RichardParks"}>
          <StoryBox
            name={"Richard Parks"}
            image={richardParks}
            slug={"Rugby player and athlete"}
            alt={`Image of {name}`}
          ></StoryBox>
        </Link>

        <StoryBox
          name={"Example"}
          image={manface}
          className="storyBox"
          slug={"Footballer"}
          alt="test"
        ></StoryBox>

        <Link to={"/6to9yo/example"}>
          <StoryBox
            name={"Example"}
            image={manface}
            className="storyBox"
            alt="test"
          ></StoryBox>
        </Link>
        <Link to={"/6to9yo/example"}>
          <StoryBox
            name={"Example"}
            image={manface}
            className="storyBox"
            alt="test"
          ></StoryBox>
        </Link>
        <Link to={"/6to9yo/example"}>
          <StoryBox
            name={"Example"}
            image={manface}
            className="storyBox"
            alt="test"
          ></StoryBox>
        </Link>
        <Link to={"/6to9yo/example"}>
          <StoryBox
            name={"Example"}
            image={manface}
            className="storyBox"
            alt="test"
          ></StoryBox>
        </Link>
        <Link to={"/6to9yo/example"}>
          <StoryBox
            name={"Example"}
            image={manface}
            className="storyBox"
            alt="test"
          ></StoryBox>
        </Link>
        <Link to={"/6to9yo/example"}>
          <StoryBox
            name={"Example"}
            image={manface}
            className="storyBox"
            alt="test"
          ></StoryBox>
        </Link>
      </div>
      <Copyright />
    </>
  );
};

export default NineToTwelve;

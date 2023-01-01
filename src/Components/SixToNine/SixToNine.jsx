import { React, useContext } from "react";
import "./SixToNine.css";
import { LanguageContext } from "../../Helper/Context";
import StoryBox from "../StoryBox/StoryBox";
import { useParams } from "react-router-dom";
import blob1 from "../../Images/blob1.png";
import blob2 from "../../Images/blob2.png";
import manface from "../../Images/manface.jpg";
import richard from "../../Images/richard2.png";
import john from "../../Images/johnYstumllyn.png";
import Copyright from "../Copyright/Copyright";
import { Link } from "react-router-dom";

const SixToNine = () => {
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <>
      <div className="ageRange">
        {lang !== true ? "Ages 6 - 9" : "6 - 9 Oed"}
      </div>
      <div className="storiesContainer">
        <Link to={"/6to9yo/RichardParks"}>
          <StoryBox
            name={"Richard Parks"}
            image={richard}
            slug={"Rugby Player, Athlete"}
          ></StoryBox>
        </Link>
        <Link to={"/6to9yo/JohnYstumllyn"}>
          <StoryBox
            name={"John Ystumllyn"}
            image={john}
            alt="test"
            slug={"18th Century Gardener"}
          ></StoryBox>
        </Link>
        {/* <Link to={"/6to9yo/example"}> */}
        <StoryBox name={"Example"} image={manface} alt="test"></StoryBox>
        {/* </Link> */}
        {/* <Link to={"/6to9yo/example"}> */}
        <StoryBox name={"Example"} image={manface} alt="test"></StoryBox>
        {/* </Link>
        <Link to={"/6to9yo/example"}> */}
        <StoryBox name={"Example"} image={manface} alt="test"></StoryBox>
        {/* </Link>
        <Link to={"/6to9yo/example"}> */}
        <StoryBox name={"Example"} image={manface} alt="test"></StoryBox>
        {/* </Link>
        <Link to={"/6to9yo/example"}> */}
        <StoryBox name={"Example"} image={manface} alt="test"></StoryBox>
        {/* </Link>
        <Link to={"/6to9yo/example"}> */}
        <StoryBox name={"Example"} image={manface} alt="test"></StoryBox>
        {/* </Link> */}
        {/* <StoryBox name={"Example"} image={manface} alt="test"></StoryBox>
        <StoryBox name={"Example"} image={manface} alt="test"></StoryBox> */}
      </div>
      <Copyright />
    </>
  );
};

export default SixToNine;

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
import api from "../../api.json";

const SixToNine = () => {
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <>
      <div className="ageRange">
        {lang !== true ? "Ages 6 - 9" : "6 - 9 Oed"}
      </div>
      <div className="storiesContainer">
        {api.map((item) => (
          <Link to={item.url}>
            <StoryBox
              key={item.id}
              name={item.name}
              image={manface}
              slug={item.slug}
            ></StoryBox>
          </Link>
        ))}
      </div>
      <Copyright />
    </>
  );
};

export default SixToNine;

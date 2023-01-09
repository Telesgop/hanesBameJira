import { React, useContext } from "react";
import { LanguageContext } from "../../Helper/Context";
import StoryBox from "../StoryBox/StoryBox";
import threetosix from "../../3to6.json";
import Copyright from "../Copyright/Copyright";
import { Link } from "react-router-dom";

const ThreeToSix = () => {
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <>
      <div className="ageRange">
        {lang !== true ? "Ages 3 - 6" : "3 - 6 Oed"}
      </div>
      <div className="storiesContainer">
        {threetosix.map((item) => (
          <Link to={item.url}>
            <StoryBox
              key={item.id}
              name={item.name}
              image={""}
              slug={item.slug}
            ></StoryBox>
          </Link>
        ))}
      </div>
      <Copyright />
    </>
  );
};

export default ThreeToSix;

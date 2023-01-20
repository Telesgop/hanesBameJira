import { React, useContext, useState } from "react";
import "./NineToTwelve.css";
import { LanguageContext } from "../../Helper/Context";
import StoryBox from "../StoryBox/StoryBox";
import ninetotwelve from "../../9to12.json";
import Copyright from "../Copyright/Copyright";
import { Link } from "react-router-dom";

const NineToTwelve = () => {
  const { lang, setLang } = useContext(LanguageContext);
  const [query, setQuery] = useState("");

  return (
    <>
      <div className="ageRange">
        {lang !== true ? "Ages 9 - 12" : "9 - 12 Oed"}
      </div>
      <div className="searchbar">
        <input
          onChange={(event) => setQuery(event.target.value)}
          className="searchInput"
          placeholder={lang !== true ? "Search" : "Chwilio"}
        ></input>
      </div>
      <div className="storiesContainer">
        {query == "" && (
          <ul className="ulSearch">
            {ninetotwelve.map((item, id) => (
              <Link to={item.url}>
                <StoryBox
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  slug={item.slug}
                  keywords={item.keywords}
                ></StoryBox>
              </Link>
            ))}
          </ul>
        )}
        {query && (
          <ul className="ulSearch">
            {ninetotwelve.map((item) => {
              if (item.keywords.toLowerCase().includes(query.toLowerCase()))
                return (
                  <Link to={item.url}>
                    <StoryBox
                      key={item.id}
                      name={item.name}
                      image={item.image}
                      slug={item.slug}
                      keywords={item.keywords}
                    ></StoryBox>
                  </Link>
                );
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default NineToTwelve;

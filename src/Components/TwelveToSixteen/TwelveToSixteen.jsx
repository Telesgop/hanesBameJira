import { React, useContext, useState } from "react";
import "./TwelveToSixteen.css";
import { LanguageContext } from "../../Helper/Context";
import StoryBox from "../StoryBox/StoryBox";
import twelvetosixteen from "../../12to16.json";
import Copyright from "../Copyright/Copyright";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";

const TwelveToSixteen = () => {
  const { lang, setLang } = useContext(LanguageContext);
  const [query, setQuery] = useState("");
  document.body.style = "background: #FF686B;";

  return (
    <>
      <div className="ageRange">
        <h2 className="ageRangeh2">
          {" "}
          {lang !== true ? "Progression Step 4" : "Cam Cynnydd 4"}
        </h2>
      </div>
      <div className="searchbar">
        <input
          onChange={(event) => setQuery(event.target.value)}
          className="searchInput"
          placeholder={lang !== true ? "Search" : "Chwilio"}
        ></input>
        <BiSearchAlt className="magnifyingGlass" />
      </div>
      <div className="storiesContainer">
        {query == "" && (
          <ul className="ulSearch">
            {twelvetosixteen.map((item, id) => (
              <Link to={item.url}>
                <StoryBox
                  id={item.id}
                  name={lang !== true ? item.name : item.nameCym}
                  image={item.image}
                  slug={item.slug}
                  welshSlug={item.welshSlug}
                  keywords={item.keywords}
                ></StoryBox>
              </Link>
            ))}
          </ul>
        )}
        {query && (
          <ul className="ulSearch">
            {twelvetosixteen.map((item) => {
              if (item.keywords.toLowerCase().includes(query.toLowerCase()))
                return (
                  <Link to={item.url}>
                    <StoryBox
                      key={item.id}
                      name={item.name}
                      image={item.image}
                      slug={item.slug}
                      welshSlug={item.welshSlug}
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

export default TwelveToSixteen;

import { React, useContext, useState } from "react";
import "./NineToTwelve.css";
import { LanguageContext } from "../../Helper/Context";
import { SearchbarContext } from "../../Helper/Context";
import StoryBox from "../StoryBox/StoryBox";
import ninetotwelve from "../../9to12.json";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";

const NineToTwelve = () => {
  const { lang, setLang } = useContext(LanguageContext);
  const { searchClear, setSearchClear } = useContext(SearchbarContext);
  const [query, setQuery] = useState("");
  document.body.style = "background: #A2D6F9;";

  function handleClick() {
    setSearchClear(false);
    console.log(searchClear);
  }

  function handleBlur() {
    setSearchClear(true);
    console.log(searchClear);
  }
  return (
    <>
      <div className="ageRange">
        <h2 className="ageRangeh2">
          {lang !== true ? "Progression Step 3" : "Cam Cynnydd 3"}
        </h2>
      </div>
      <div className="searchbar">
        <input
          onChange={(event) => setQuery(event.target.value)}
          onClick={handleClick}
          onBlur={handleBlur}
          className="searchInput"
          placeholder={lang !== true ? "Search" : "Chwilio"}
        ></input>
        <BiSearchAlt className="magnifyingGlass" />
      </div>
      <div className="storiesContainer">
        {query == "" && (
          <ul className="ulSearch">
            {ninetotwelve.map((item, id) => (
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
            {ninetotwelve.map((item) => {
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

export default NineToTwelve;

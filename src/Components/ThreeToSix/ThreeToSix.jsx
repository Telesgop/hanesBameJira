import { React, useContext, useState } from "react";
import { LanguageContext } from "../../Helper/Context";
import StoryBox from "../StoryBox/StoryBox";
import threetosix from "../../3to6.json";
import Copyright from "../Copyright/Copyright";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import StoryBoxAnim from "../StoryBoxAnim/StoryBoxAnim";

const ThreeToSix = () => {
  const { lang, setLang } = useContext(LanguageContext);
  const [query, setQuery] = useState("");
  document.body.style = "background: #FFCB77;";

  return (
    <>
      <div className="ageRange">
        <h2 className="ageRangeh2">
          {lang !== true
            ? "Progression Step 1"
            : "NOT DEVELOPED - DO NOT TRIAL"}
        </h2>
      </div>
      {/* <div className="searchbar">
        <input
          onChange={(event) => setQuery(event.target.value)}
          className="searchInput"
          placeholder={lang !== true ? "Search" : "Chwilio"}
        ></input>
        <BiSearchAlt className="magnifyingGlass" />
      </div> */}
      <div className="storiesContainerAnim">
        {query == "" && (
          <ul className="ulSearchAnim">
            {threetosix.map((item, id) => (
              <Link to={item.url}>
                <StoryBoxAnim
                  id={item.id}
                  name={lang !== true ? item.name : item.nameCym}
                  image={item.image}
                  slug={item.slug}
                  welshSlug={item.welshSlug}
                  keywords={item.keywords}
                ></StoryBoxAnim>
              </Link>
            ))}
          </ul>
        )}
        {query && (
          <ul className="ulSearch">
            {threetosix.map((item) => {
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

export default ThreeToSix;

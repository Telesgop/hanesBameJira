import { React, useContext, useState } from "react";
import "./SixToNine.css";
import { LanguageContext } from "../../Helper/Context";
import StoryBox from "../StoryBox/StoryBox";
import { useParams } from "react-router-dom";

import Copyright from "../Copyright/Copyright";
import { Link } from "react-router-dom";
import api from "../../api.json";

const SixToNine = () => {
  const { lang, setLang } = useContext(LanguageContext);
  const [query, setQuery] = useState("");

  return (
    <>
      <div className="ageRange">
        {lang !== true ? "Ages 6 - 9" : "6 - 9 Oed"}
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
            {api.map((item, id) => (
              <Link to={item.url}>
                <StoryBox
                  key={item.id}
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
            {api.map((item) => {
              if (item.keywords.toLowerCase().includes(query.toLowerCase()))
                return (
                  <Link to={item.url}>
                    <StoryBox
                      key={item.id}
                      name={item.name}
                      image={item.image}
                      slug={item.slug}
                      keywords={item.keywords}
                      altName={item.name}
                    ></StoryBox>
                  </Link>
                );
            })}
          </ul>
        )}
      </div>
      {/* 
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={api.length}
        paginate={paginate}
      ></Pagination> */}
      {/* <Copyright /> */}
    </>
  );
};

export default SixToNine;

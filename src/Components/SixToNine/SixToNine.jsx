import { React, useContext, useState } from "react";
import "./SixToNine.css";
import { LanguageContext } from "../../Helper/Context";
import StoryBox from "../StoryBox/StoryBox";
import { useParams } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import Copyright from "../Copyright/Copyright";
import { Link } from "react-router-dom";
import api from "../../api.json";
import { motion } from "framer-motion";

const SixToNine = () => {
  const { lang, setLang } = useContext(LanguageContext);
  const [query, setQuery] = useState("");
  document.body.style = "background: #CFE57D;";

  return (
    <>
      <div className="ageRange">
        <h2 className="ageRangeh2">
          {lang !== true ? "Progression Step 2" : "Cam Cynnydd 2"}
        </h2>
      </div>
      <div className="searchbar">
        <input
          onChange={(event) => setQuery(event.target.value)}
          className="searchInput"
          placeholder={lang !== true ? "Search" : "Chwilio"}
        ></input>
        <div className="searchMagni">
          <BiSearchAlt className="magnifyingGlass" />
        </div>
      </div>
      <div className="storiesContainer">
        {query == "" && (
          <ul className="ulSearch">
            {api.map((item, id) => (
              <Link to={item.url}>
                <StoryBox
                  key={item.id}
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
            {api.map((item) => {
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

import { React, useContext, useState } from "react";
import { LanguageContext } from "../../Helper/Context";
import StoryBox from "../StoryBox/StoryBox";
import threetosix from "../../3to6.json";
import Copyright from "../Copyright/Copyright";
import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";

const ThreeToSix = () => {
  const { lang, setLang } = useContext(LanguageContext);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = threetosix.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="ageRange">
        {lang !== true ? "Ages 3 - 6" : "3 - 6 Oed"}
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
            {currentPosts.map((item, id) => (
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
            {threetosix.map((item) => {
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
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={threetosix.length}
        paginate={paginate}
      ></Pagination>
      <Copyright />
    </>
  );
};

export default ThreeToSix;

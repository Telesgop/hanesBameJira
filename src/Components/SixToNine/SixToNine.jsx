import { React, useContext, useState } from "react";
import "./SixToNine.css";
import { LanguageContext } from "../../Helper/Context";
import StoryBox from "../StoryBox/StoryBox";
import { useParams } from "react-router-dom";
import manface from "../../Images/manface.jpg";
import richard from "../../Images/richard2.png";
import john from "../../Images/johnYstumllyn.png";
import Copyright from "../Copyright/Copyright";
import { Link } from "react-router-dom";
import api from "../../api.json";
import Pagination from "../Pagination/Pagination";

const SixToNine = () => {
  const { lang, setLang } = useContext(LanguageContext);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = api.slice(indexOfFirstPost, indexOfLastPost);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
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
        {currentPosts
          .filter((post) => {
            if (query === "") {
              return post;
            } else if (
              post.keywords.toLowerCase().includes(query.toLowerCase())
            ) {
              return post;
            }
          })
          .map((item, id) => (
            <Link to={item.url}>
              <StoryBox
                key={item.id}
                name={item.name}
                image={manface}
                slug={item.slug}
                keywords={item.keywords}
              ></StoryBox>
            </Link>
          ))}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={api.length}
        paginate={paginate}
      ></Pagination>
      <Copyright />
    </>
  );
};

export default SixToNine;

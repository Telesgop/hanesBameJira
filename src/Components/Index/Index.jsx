import { React, useContext, useState } from "react";
import { LanguageContext } from "../../Helper/Context";
import StoryBox from "../StoryBox/StoryBox";
import indexapi from "./indexApi.json";
import Copyright from "../Copyright/Copyright";
import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import "./Index.css";

const Index = () => {
  const { lang, setLang } = useContext(LanguageContext);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = indexapi.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="ageRange">{lang !== true ? "Index" : "Index"}</div>
      <div className="indexContainer">
        {query == "" && (
          <table>
            {currentPosts.map((item, id) => (
              <Link to={item.url}>
                <tr>
                  <td>
                    <strong>{item.name}</strong>
                  </td>

                  <td>{item.slug}</td>
                </tr>
              </Link>
            ))}
          </table>
        )}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={indexapi.length}
        paginate={paginate}
      ></Pagination>
      <Copyright />
    </>
  );
};

export default Index;

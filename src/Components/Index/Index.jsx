import { React, useContext, useState } from "react";
import { LanguageContext } from "../../Helper/Context";
import indexapi from "./indexApi.json";
import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import "./Index.css";

const Index = () => {
  document.body.style = "background: #f2f2f2;";

  const { lang, setLang } = useContext(LanguageContext);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = indexapi.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="ageRange">
        <h1 className="indexH2">{lang !== true ? "Index" : "Index"}</h1>
      </div>
      <div className="indexContainer">
        {query == "" && (
          <table>
            {currentPosts.map((item, id) => (
              <Link to={item.url}>
                <tr>
                  <td>
                    <strong>{item.name}</strong>
                  </td>

                  <td>{lang !== true ? item.slug : item.welshSlug}</td>
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
    </>
  );
};

export default Index;

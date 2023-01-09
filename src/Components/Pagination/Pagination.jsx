import React from "react";
import "./Pagination.css";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="paginationPages">
      <nav className="paginationNav">
        {pageNumbers.map((number) => (
          <ul className="paginationText" key={number}>
            <a className="paginationNum" onClick={() => paginate(number)}>
              {number}
            </a>
          </ul>
        ))}
      </nav>
    </div>
  );
};

export default Pagination;

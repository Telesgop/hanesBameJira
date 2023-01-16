import React from "react";
import "./Pagination.css";
import { motion } from "framer-motion";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="paginationPages">
      <nav className="paginationNav">
        {pageNumbers.map((number) => (
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            initial="hidden"
            animate="visible"
            onClick={() => paginate(number)}
          >
            <ul className="paginationText" key={number}>
              <a className="paginationNum">{number}</a>
            </ul>
          </motion.div>
        ))}
      </nav>
    </div>
  );
};

export default Pagination;

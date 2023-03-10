import React, { lazy } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import "./DiaryBox.css";

const DiaryBox = () => {
  const [page, setPage] = useState(0);
  function pageUpdate() {
    if (page <= 1) {
      setPage(page + 1);
    } else {
      setPage(0);
    }
  }

  const container = {
    hidden: { opacity: 1, scale: 0.1 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <div className="DiaryWholePage">
      <div className="DiaryPrevPage"></div>
      <motion.div
        className="DiaryFlipBook"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="DiaryFlipBookLeft">
          <div className="DiaryText">
            {page === 0 && (
              <>
                <h2>Monday</h2>
                <p>
                  Today, Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
              </>
            )}
            {page === 1 && (
              <>
                <h2>Wednesday</h2>
                <p>
                  {" "}
                  Today, Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
              </>
            )}
          </div>
        </div>
        <div className="DiaryFlipBookSpine"></div>
        <div className="DiaryFlipBookRight">
          {" "}
          <div className="DiaryText">
            {page === 0 && (
              <>
                <h2>Tuesday</h2>
                <p>
                  Today, Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
              </>
            )}
            {page === 1 && (
              <>
                <h2>Thursday</h2>
                <p>
                  {" "}
                  Today, Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
              </>
            )}
          </div>
        </div>
      </motion.div>
      <div className="DiaryPrevPage">
        <div className="button" onClick={() => pageUpdate()}>
          gui
        </div>
      </div>
    </div>
  );
};

export default DiaryBox;

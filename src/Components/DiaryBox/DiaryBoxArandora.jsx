import React, { lazy } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import "./DiaryBox.css";
import { HiArrowCircleRight } from "react-icons/hi";
import { HiArrowCircleLeft } from "react-icons/hi";

const DiaryBoxArandora = () => {
  const [page, setPage] = useState(0);
  function pageUpdate() {
    if (page <= 2) {
      setPage(page + 1);
    } else {
      setPage(0);
    }
  }
  function pageBack() {
    if (page >= 1) {
      setPage(page - 1);
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
  const prevnextbuttons = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="DiaryWholePage">
      <motion.div
        className="prevnext"
        variants={prevnextbuttons}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => pageBack()}
        >
          <HiArrowCircleLeft className="prevnext" />
        </motion.div>
      </motion.div>
      <motion.div
        className="DiaryFlipBook"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="DiaryFlipBookLeftAS">
          <div className="DiaryTextArandora">
            {page === 0 && (
              <>
                <div className="ASdiv">
                  <p>
                    The SS Arandora Star was originally built to be a cruise
                    ship, but during WW2 she was used to carry soldiers. To
                    prepare her for war, she was painted grey and had guns and
                    barbed wire added.
                  </p>
                  <img
                    src="https://www.dev.addysgop.co.uk/pdfs/AS1.png"
                    className="ASimg"
                  ></img>
                </div>
              </>
            )}
            {page === 1 && (
              <>
                <div className="ASdiv">
                  <p>
                    On July 1st 1940, 734 Welsh-Italian prisoners were put on
                    the SS Arandora Star, along with 944 other prisoners of war,
                    to travel to a war camp in Canada.
                  </p>
                  <img
                    src="https://www.dev.addysgop.co.uk/pdfs/AS3.png"
                    className="ASimg"
                  ></img>
                </div>
              </>
            )}
            {page === 2 && (
              <>
                <div className="ASdiv">
                  <p>
                    On 2nd July, just one day into the SS Arandora Star’s
                    journey, she was struck by a German torpedo. The SS Arandora
                    Star wasn’t showing the International Red Cross symbol. This
                    meant other ships didn’t know she was carrying civilians and
                    shouldn’t be fired at.
                  </p>
                  <img
                    src="https://www.dev.addysgop.co.uk/pdfs/AS5.png"
                    className="ASimg"
                  ></img>
                </div>
              </>
            )}
            {page === 3 && (
              <>
                <div className="ASdiv2">
                  <p className="diaryLOs">
                    53 of the men who died were Welsh-Italians who should never
                    have been on the ship in the first place. It was a dreadful
                    tragedy.
                  </p>
                  <img
                    src="https://www.dev.addysgop.co.uk/pdfs/AS7.png"
                    className="ASimg"
                  ></img>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="DiaryFlipBookSpine"></div>
        <div className="DiaryFlipBookRight">
          {" "}
          <div className="DiaryTextArandora">
            {page === 0 && (
              <>
                <div className="ASdiv">
                  <p>
                    During the war, the British Government kept many
                    Welsh-Italians as prisoners of war, even though their
                    families had moved to Wales years before the war and they
                    were British citizens!
                  </p>
                  <img
                    src="https://www.dev.addysgop.co.uk/pdfs/AS2.png"
                    className="ASimg"
                  ></img>
                </div>
              </>
            )}
            {page === 1 && (
              <>
                <div className="ASdiv">
                  <p>
                    The SS Arandora Star was only meant to hold 500 people, but
                    1678 men were on board that day. The ship was dangerously
                    overcrowded, and there were not enough lifeboats for the
                    number of people.
                  </p>
                  <img
                    src="https://www.dev.addysgop.co.uk/pdfs/AS4.png"
                    className="ASimg"
                  ></img>
                </div>
              </>
            )}
            {page === 2 && (
              <>
                <div className="ASdiv">
                  <p>
                    The SS Arandora Star sank in minutes and, because the ship
                    was overcrowded and there weren’t enough lifeboats, 800 men
                    died.
                  </p>
                  <img
                    src="https://www.dev.addysgop.co.uk/pdfs/AS6.png"
                    className="ASimg"
                  ></img>
                </div>
              </>
            )}
          </div>
        </div>
      </motion.div>
      <motion.div
        className="prevnext"
        variants={prevnextbuttons}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => pageUpdate()}
        >
          <HiArrowCircleRight className="prevnext" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DiaryBoxArandora;

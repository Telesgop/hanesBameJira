import "./AnimCard.css";
import React, { useState } from "react";

import { motion } from "framer-motion";
import { LanguageContext } from "../../Helper/Context";
import { useContext } from "react";

const AnimCard = ({ indivName, sourceVid, sourceVidCym }) => {
  const { lang, setLang } = useContext(LanguageContext);
  const [slide, setSlide] = useState(0);
  const [displayStyle, setDisplayStyle] = useState("flex");

  const container = {
    hidden: { y: 50 },
    visible: {
      y: 0,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <div className="wholePageAnimCard">
        <>
          <motion.div
            className="personBoxAnimCard"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <div className="personInfoAnimCard">
              <div className="personNameAnimCard">
                <h2 className="personH2AnimCard">{indivName}</h2>
              </div>

              <div className="animCardVideo">
                <iframe
                  className="animVideoIframe"
                  src={lang ? sourceVidCym : sourceVid}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </motion.div>
        </>
      </div>
    </>
  );
};

export default AnimCard;

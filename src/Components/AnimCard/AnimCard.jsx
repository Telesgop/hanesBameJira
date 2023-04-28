import "./AnimCard.css";
import React, { useState } from "react";
import { HiArrowCircleRight } from "react-icons/hi";
import { HiArrowCircleLeft } from "react-icons/hi";
import { motion } from "framer-motion";
import { LanguageContext } from "../../Helper/Context";
import { useContext } from "react";
import Copyright from "../Copyright/Copyright";

const AnimCard = ({ indivName, sourceVid }) => {
  const { lang, setLang } = useContext(LanguageContext);
  const [slide, setSlide] = useState(0);

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
                  src={sourceVid}
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

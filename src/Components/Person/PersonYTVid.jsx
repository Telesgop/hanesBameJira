import "./Person.css";
import React, { useState } from "react";
import { HiArrowCircleRight } from "react-icons/hi";
import { HiArrowCircleLeft } from "react-icons/hi";
import { motion } from "framer-motion";
import { LanguageContext } from "../../Helper/Context";
import { useContext } from "react";
import Copyright from "../Copyright/Copyright";
import { Link } from "react-router-dom";

const PersonYTVid = ({
  text,
  welshText,
  indivName,
  indivPic,
  backText,
  backWelshText,
  slugText,
  welshSlugText,
  resource,
  dateOfBirth,
  youtubeVid,
  backLContent,
  backLContentCym,
  indivNameCym,
  links,
  quizButtonText,
  buttonLink,
  linkQuiz,
}) => {
  const { lang, setLang } = useContext(LanguageContext);
  const [slide, setSlide] = useState(0);

  const container = {
    // hidden: { y: 50 },
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
  const prevnextbuttons = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <div className="wholePage">
        {slide === 0 && (
          <>
            <motion.div
              className="prevnext"
              variants={prevnextbuttons}
              transition={{ delay: 5 }}
              // initial="hidden"
              // animate="visible"
            >
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <HiArrowCircleLeft className="prevnextBlocked" />
              </motion.div>
            </motion.div>
            <motion.div
              className="personBox"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <div className="personInfo" id="myDIV">
                <div className="leftSide">
                  <div className="personName">
                    <h2 className="personH2">
                      {lang !== true ? indivName : indivNameCym}
                    </h2>
                  </div>
                  <div className="imgBox">
                    <img
                      src={indivPic}
                      className="personImg"
                      alt={indivName}
                    ></img>
                  </div>
                  <div className="personShortSlug">
                    {lang !== true ? slugText : welshSlugText}
                    <br />
                    <br />
                    <strong>{dateOfBirth}</strong>
                  </div>
                </div>
                <div className="rightSide">
                  <motion.div variants={item} className="personText">
                    {lang !== true ? text : welshText}
                  </motion.div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="prevnext"
              variants={prevnextbuttons}
              initial="hidden"
              animate="visible"
              onClick={() =>
                (document.getElementById("myDIV").style = `
                transform: rotateY(180deg); 
                transition: 0.45s;
                content-visibility: hidden;

              `) &&
                setTimeout(() => {
                  setSlide(1);
                }, "450")
              }
            >
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <HiArrowCircleRight className="prevnext" />
              </motion.div>
            </motion.div>
          </>
        )}

        {slide === 1 && (
          <>
            <motion.div
              className="prevnext"
              variants={prevnextbuttons}
              initial="hidden"
              animate="visible"
              onClick={() =>
                (document.getElementById("myDIV2").style = `
                transform: rotateY(180deg); 
                transition: 0.45s;
                content-visibility: hidden;

              `) &&
                setTimeout(() => {
                  setSlide(0);
                }, "450")
              }
            >
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <HiArrowCircleLeft className="prevnext" />
              </motion.div>
            </motion.div>
            <div
              className="personBox"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {" "}
              <div className="personInfoBack" id="myDIV2">
                <div className="backLeftYTVid">
                  <div className="backLVid">
                    <iframe
                      src={youtubeVid}
                      className="youtubeEmbed"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen="true"
                    ></iframe>

                    {lang !== true ? backLContent : backLContentCym}
                  </div>
                </div>
                <div className="backRight">
                  <p className="backRightP">
                    {" "}
                    {lang !== true ? "Online Resources:" : "Adnoddau Ar-lein:"}
                  </p>
                  {links}
                </div>
              </div>
            </div>
            <motion.div
              className="prevnext"
              variants={prevnextbuttons}
              transition={{ delay: 2 }}
              initial="hidden"
              animate="visible"
            >
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <HiArrowCircleRight className="prevnextBlocked" />
              </motion.div>
            </motion.div>
          </>
        )}
      </div>
    </>
  );
};

export default PersonYTVid;
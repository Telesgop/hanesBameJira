import "./Person.css";
import React, { useState } from "react";
import { HiArrowCircleRight } from "react-icons/hi";
import { HiArrowCircleLeft } from "react-icons/hi";
import { motion } from "framer-motion";
import { LanguageContext } from "../../Helper/Context";
import { useContext } from "react";
import Copyright from "../Copyright/Copyright";
import { Link } from "react-router-dom";

const Person = ({
  text,
  welshText,
  linkResource,
  indivName,
  indivPic,
  backText,
  backWelshText,
  slugText,
  welshSlugText,
  resource,
  resourceOverlay,
  dateOfBirth,
  proposedResource,
  backLContent,
  backLContentCym,
  indivNameCym,
  links,
  quizButtonText,
  buttonLink,
  linkQuiz,
  quizButStyle,
  bgcolor,
  linksCym,
  backcardImg,
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
              className="prevnextblocked"
              variants={prevnextbuttons}
              transition={{ delay: 5 }}
              // initial="hidden"
              // animate="visible"
            >
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <HiArrowCircleLeft
                  className="prevnextblocked"
                  style={{ display: "none" }}
                />
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
                  {/* <div className="scroll">scroll!</div> */}
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
                <HiArrowCircleRight className="prevnextpulse" />
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
                <HiArrowCircleLeft className="prevnextpulse" />
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
                <div className="backLeft">
                  <div className="resourceBanner">
                    <p className="resourceText">RESOURCE & TASK</p>
                  </div>{" "}
                  <div
                    className="backLText"
                    style={{ backgroundColor: bgcolor }}
                  >
                    {proposedResource}
                    <a href={linkResource} className="resourceLi">
                      <img
                        src={backcardImg}
                        style={{
                          transform: "scale(0.5) ",
                          objectFit: "contain",
                        }}
                      ></img>
                    </a>
                    {lang !== true ? backLContent : backLContentCym}
                  </div>
                  <div className="overlayUnderText">{resourceOverlay}</div>
                </div>
                <div className="backRight">
                  <p className="backRightP">
                    {" "}
                    {lang !== true ? "Online Resources:" : "Adnoddau Ar-lein:"}
                  </p>
                  {lang !== true ? links : linksCym}
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
      <div className="backToSection">
        <div className="backToButton">Back to PS..</div>
      </div>
    </>
  );
};

export default Person;

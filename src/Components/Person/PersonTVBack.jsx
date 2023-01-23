import "./PersonTVBack.css";
import React, { useState } from "react";

import { HiArrowCircleRight } from "react-icons/hi";
import { HiArrowCircleLeft } from "react-icons/hi";
import { motion } from "framer-motion";
import { LanguageContext } from "../../Helper/Context";
import { useContext } from "react";

const PersonTVBack = ({
  text,
  welshText,
  indivName,
  indivPic,
  indivPic2,
  backText,
  backWelshText,
  slugText,
  welshSlugText,
}) => {
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
              transition={{ delay: 2 }}
              initial="hidden"
              animate="visible"
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
              <div className="personInfo">
                <div className="leftSide">
                  <div className="personName" variants={item}>
                    {indivName}
                  </div>
                  <div variants={item} className="imgBox">
                    <img
                      src={indivPic}
                      className="personImg"
                      alt={indivName}
                    ></img>
                  </div>
                  <div className="personShortSlug">
                    {lang !== true ? slugText : welshSlugText}
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
              onClick={() => setSlide(1)}
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
              onClick={() => setSlide(0)}
            >
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <HiArrowCircleLeft className="prevnext" />
              </motion.div>
            </motion.div>
            <div
              className="personBoxTV"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {" "}
              <div className="personInfo">
                <div className="leftTV">
                  <div className="tvWhole">
                    <div className="tvBase">
                      {" "}
                      <div className="youtubeDiv">
                        <iframe
                          src="https://www.youtube.com/embed/vHHIweUpdCw"
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="youtubeEmbed"
                        ></iframe>
                      </div>
                    </div>
                    <div className="tvStand"></div>
                    <div className="videoDescription">
                      Some info about the video here...
                    </div>
                  </div>
                </div>
                <div className="rightTV">
                  <p>
                    Here will be more internet links and stuff like that....
                  </p>
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

export default PersonTVBack;

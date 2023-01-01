import React from "react";
import "./PersonBack.css";
import blob1 from "../../Images/blob1.png";
import blob2 from "../../Images/blob2.png";
import { HiArrowCircleRight } from "react-icons/hi";
import { HiArrowCircleLeft } from "react-icons/hi";
import { motion } from "framer-motion";
import { LanguageContext } from "../../Helper/Context";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Person = ({ text, welshText, indivName, indivPic, indivPic2 }) => {
  const { lang, setLang } = useContext(LanguageContext);

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
        <motion.div
          className="prevnext"
          variants={prevnextbuttons}
          transition={{ delay: 1 }}
          initial="hidden"
          animate="visible"
        >
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <Link to="/6to9yo/example">
              <HiArrowCircleLeft className="prevnext" />
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          className="personBox2"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <div className="personInfo2">
            <motion.div variants={item} className="personText">
              BACK OF CARD
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="prevnext"
          variants={prevnextbuttons}
          transition={{ delay: 1 }}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          ></motion.div>
        </motion.div>
      </div>
      <div className="imageDiv">
        <img src={blob1} className="blob1" alt="test"></img>
      </div>
      <div className="imageDiv2">
        <img src={blob2} className="blob2" alt="test"></img>
      </div>
    </>
  );
};

export default Person;

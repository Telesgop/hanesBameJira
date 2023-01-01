import React from "react";
import "./Home.css";
import { LanguageContext } from "../../Helper/Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import blob1 from "../../Images/blob1.png";
import blob2 from "../../Images/blob2.png";
import Copyright from "../Copyright/Copyright";
import { AiOutlineProfile } from "react-icons/ai";

const Home = () => {
  const { lang, setLang } = useContext(LanguageContext);
  const introText = (
    <>
      To begin, choose an age group.
      <br /> <br />
      Alternatively, use the index page to view all individuals.{" "}
    </>
  );
  const container = {
    hidden: { y: 50 },
    visible: {
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3,
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
      <div className="ageText">
        <br></br>
        <br></br>
        {lang !== true ? introText : "I ddechrau, dewiswch grŵp oedran:"}
      </div>
      <motion.div
        className="ageGroups"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <Link to={"/6to9yo"}>
          <motion.div
            className="ageGroupIndiv"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            variants={item}
          >
            6-9
          </motion.div>
        </Link>

        <Link to={"/9to12yo"}>
          <motion.div
            className="ageGroupIndiv"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            variants={item}
          >
            9-12
          </motion.div>
        </Link>
        <Link to={"/12to15yo"}>
          <motion.div
            className="ageGroupIndiv"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            variants={item}
          >
            12-15
          </motion.div>
        </Link>
        <Link to={"/12to15yo"}>
          <motion.div
            className="ageGroupIndiv"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            variants={item}
          >
            ?
          </motion.div>
        </Link>
      </motion.div>
      <Copyright />
    </>
  );
};

export default Home;
import React from "react";
import "./Home.css";
import { LanguageContext } from "../../Helper/Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Copyright from "../Copyright/Copyright";

const Home = () => {
  const { lang, setLang } = useContext(LanguageContext);

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
        {lang !== true
          ? "To begin, choose an age group:"
          : "I ddechrau, dewiswch grŵp oedran:"}
      </div>
      <motion.div
        className="ageGroups"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <Link to={"/3to6yo"}>
          <motion.div
            className="ageGroupIndiv"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            variants={item}
            style={{ "background-color": "#FFCB77" }}
          >
            3-6
          </motion.div>
        </Link>
        <Link to={"/6to9yo"}>
          <motion.div
            className="ageGroupIndiv"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            variants={item}
            style={{ "background-color": "#CFE57D" }}
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
            style={{ "background-color": "#A2D6F9" }}
          >
            9-12
          </motion.div>
        </Link>
        <Link to={"/12to16yo"}>
          <motion.div
            className="ageGroupIndiv"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            variants={item}
            style={{ "background-color": "#FF686B" }}
          >
            12-16
          </motion.div>
        </Link>
      </motion.div>
      <Copyright />
    </>
  );
};

export default Home;

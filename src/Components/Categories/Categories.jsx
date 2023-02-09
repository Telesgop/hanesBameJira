import React from "react";
import "./Categories.css";
import { LanguageContext } from "../../Helper/Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Copyright from "../Copyright/Copyright";

const Categories = () => {
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
      <div className="ageTextCat">
        <h3 style={{ "font-weight": "bold" }}>
          {lang !== true ? "Choose a category:" : "Dewiswch grŵp oedran:"}
        </h3>
      </div>
      <motion.div
        className="ageGroupsCat"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <Link to={"/3to6yo"}>
          <motion.div
            className="ageGroupIndivCat"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            variants={item}
            style={{ "background-color": "#FFCB77" }}
          >
            <div className="colourCategory">
              <h3 className="colourCategoryH3">{lang ? "Melyn" : "Yellow"}</h3>
              {/* <p className="colourCategoryP"> Tailored for ages 3-6.</p> */}
            </div>
          </motion.div>
        </Link>
        <Link to={"/6to9yo"}>
          <motion.div
            className="ageGroupIndivCat"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            variants={item}
            transition={{ duration: 0.3 }}
            style={{ "background-color": "#CFE57D" }}
          >
            <div className="colourCategory">
              <h3 className="colourCategoryH3">{lang ? "Gwyrdd" : "Green"}</h3>
              {/* <p className="colourCategoryP"> Tailored for ages 6-9.</p> */}
            </div>
          </motion.div>
        </Link>

        <Link to={"/9to12yo"}>
          <motion.div
            className="ageGroupIndivCat"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            variants={item}
            transition={{ duration: 0.3 }}
            style={{ "background-color": "#A2D6F9" }}
          >
            <div className="colourCategory">
              <h3 className="colourCategoryH3">{lang ? "Glas" : "Blue"}</h3>
              {/* <p className="colourCategoryP"> Tailored for ages 9-12.</p> */}
            </div>
          </motion.div>
        </Link>
        <Link to={"/12to16yo"}>
          <motion.div
            className="ageGroupIndivCat"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            variants={item}
            style={{ "background-color": "#FF686B" }}
          >
            <div className="colourCategory">
              <h3 className="colourCategoryH3">{lang ? "Coch" : "Red"}</h3>
              {/* <p className="colourCategoryP"> Tailored for ages 12-16.</p> */}
            </div>
          </motion.div>
        </Link>
      </motion.div>
    </>
  );
};
export default Categories;

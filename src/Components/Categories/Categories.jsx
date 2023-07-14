import React from "react";
import "./Categories.css";
import { LanguageContext } from "../../Helper/Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Copyright from "../Copyright/Copyright";

const Categories = () => {
  document.body.style = "background: #f2f2f2;";

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
        <h1 className="categoriesH1">
          {lang !== true ? "Choose a category:" : "Dewiswch categori:"}
        </h1>
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
              <h3 className="colourCategoryH3">
                {lang ? "NOT DEVELOPED - DO NOT TRIAL" : "Progression Step 1"}
              </h3>
              <p className="colourCategoryP"> Dr Ganesh Subrahamanyan</p>
              <p className="colourCategoryP"> Sidoli's Ice Cream</p>
              <p className="colourCategoryP"> Betty Campbell</p>
              <p className="colourCategoryP"> Abram Wood</p>
              <p className="colourCategoryP"> Vernester Cyril</p>
              <p className="colourCategoryP"> John Ystumllyn</p>
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
              <h3 className="colourCategoryH3">
                {lang ? "NOT DEVELOPED - DO NOT TRIAL" : "Progression Step 2"}
              </h3>
              <p className="colourCategoryP"> Richard Parks</p>
              <p className="colourCategoryP"> Merthyr Tydfil Synagogue</p>
              <p className="colourCategoryP"> Lenn Lawrence</p>
              <p className="colourCategoryP"> Teleri Gray</p>
              <p className="colourCategoryP"> Fong Sui</p>
              <p className="colourCategoryP"> The Arandora Star</p>
              <p className="colourCategoryP"> 320th Battalion</p>
              <p className="colourCategoryP"> Dame Shirley Bassey</p>
              <p className="colourCategoryP"> The Windrush Generation</p>
              <p className="colourCategoryP"> Idris Phillips</p>
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
              <h3 className="colourCategoryH3">
                {lang ? "NOT DEVELOPED - DO NOT TRIAL" : "Progression Step 3"}
              </h3>
              <p className="colourCategoryP">Hans Lichtenstein</p>
              <p className="colourCategoryP">Penrhyn Castle</p>
              <p className="colourCategoryP">Colin Jackson</p>
              <p className="colourCategoryP">Iris Williams</p>
              <p className="colourCategoryP">Clive Sullivan</p>
              <p className="colourCategoryP">John Ystumllyn</p>
              <p className="colourCategoryP">Tiger Bay</p>
              <p className="colourCategoryP">Sidoli Ice Cream</p>
              <p className="colourCategoryP">Vernester Cyril</p>
              <p className="colourCategoryP">Patti Flynn</p>
              <p className="colourCategoryP">Isaac Blake</p>
              <p className="colourCategoryP">Joe Calzaghe</p>
              <p className="colourCategoryP">Dom James</p>
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
              <h3 className="colourCategoryH3">
                {lang ? "NOT DEVELOPED - DO NOT TRIAL" : "Progression Step 4"}
              </h3>
              <p className="colourCategoryP"> Elizabeth Campbell MBE</p>
              <p className="colourCategoryP"> Nigel Walker</p>
              <p className="colourCategoryP"> Dr Ganesh Subrahmanyam</p>
              <p className="colourCategoryP"> Kizzy Crawford</p>
              <p className="colourCategoryP"> Glenn Webbe</p>
              <p className="colourCategoryP"> Jason Mohammad</p>
              <p className="colourCategoryP"> Vaughan Gething</p>
              <p className="colourCategoryP"> Joe Erskine</p>
              <p className="colourCategoryP"> Paul Robeson</p>
              <p className="colourCategoryP"> Louisa BB Morgan</p>
              <p className="colourCategoryP"> Ashley Williams</p>
              <p className="colourCategoryP"> 1919 Race Riots</p>
            </div>
          </motion.div>
        </Link>
      </motion.div>
    </>
  );
};
export default Categories;

import React from "react";
import "./Navbar.css";
import { useContext } from "react";
import { LanguageContext } from "../../Helper/Context";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineProfile } from "react-icons/ai";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import wgLogo from "../../Images/wgLogo.png";

const Navbar = () => {
  const { lang, setLang } = useContext(LanguageContext);
  const [style, setStyle] = useState("noModal");

  let handlePress = () => {
    if (lang === true) {
      setLang(false);
    } else setLang(true);
  };
  let handleInfo = () => {
    if (style === "noModal") setStyle("modal");
    else if (style === "modal") setStyle("noModal");
  };
  return (
    <div className="navbar">
      <div className="navdiv1">
        <Link to={"/"}>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <button className="homebutton">
              <AiFillHome />
            </button>
          </motion.div>
        </Link>
        <Link to={"/index"}>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <button className="homebutton">
              <AiOutlineProfile />
            </button>
          </motion.div>
        </Link>
      </div>
      <div className="navdiv2">
        {" "}
        {lang !== true
          ? "The History and Contribution of Black, Asian and Ethnic Minorities in Wales"
          : "Hanes a chyfraniad Pobl Ddu, Asiaidd a Lleiafrifoedd Ethnig ym Gymru"}
      </div>
      <div className="navdiv3">
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <button className="langbutton" onClick={handlePress}>
            {lang === true && "Eng"}
            {lang !== true && "Cym"}
          </button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }}>
          <button className="infobutton" onClick={handleInfo}>
            {lang === true && "?"}
            {lang !== true && "?"}
          </button>
        </motion.div>
      </div>
      <div className={style}>
        <div className="innerModal">
          <motion.div className="innerText" onClick={() => setStyle("noModal")}>
            <ImCross className="crossImg" />
          </motion.div>{" "}
          <div className="innerTextInfo">
            {" "}
            <img className="logoWG" src={wgLogo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

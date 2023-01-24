import React from "react";
import "./Navbar.css";
import { useContext } from "react";
import { LanguageContext } from "../../Helper/Context";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { AiFillHome } from "react-icons/ai";
import { GrNotes } from "react-icons/gr";
import { BsPersonLinesFill } from "react-icons/bs";
import welshFlag from "../../Images/wales.png";
import engFlag from "../../Images/united-kingdom.png";

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
      <Link to={"/"}>
        <div className="navdiv2">
          {" "}
          {lang !== true
            ? "The History and Contribution of Black, Asian and Ethnic Minorities in Wales"
            : "Hanes a Chyfraniad Pobl Ddu, Asiaidd a Lleiafrifoedd Ethnig ym Gymru"}
        </div>
      </Link>
      <div className="menus">
        <Link to={"/"}>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <AiFillHome style={{ transform: "scale(1.5)" }} />
          </motion.div>
        </Link>
        <motion.div tabIndex="0" whileHover={{ scale: 1.2 }}>
          <div onClick={handleInfo} className="hoverNav">
            <GrNotes style={{ transform: "scale(1.3)" }} />
          </div>
        </motion.div>
        <Link to={"/index"}>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <BsPersonLinesFill style={{ transform: "scale(1.4)" }} />
          </motion.div>
        </Link>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <div onClick={handlePress} className="hoverNavCym" tabIndex="0">
            {lang === true && (
              <img className="translateImg" src={engFlag}></img>
            )}
            {lang !== true && (
              <img className="translateImg" src={welshFlag}></img>
            )}
          </div>
        </motion.div>
      </div>
      <div className={style}>
        <div className="innerModal">
          <motion.div className="innerText" onClick={() => setStyle("noModal")}>
            <ImCross className="crossImg" />
          </motion.div>{" "}
          <div className="innerTextInfo">
            <div className="notesH2">Notes</div>
            <div className="notesP">Here will be notes for teachers.</div>
            <div className="notesH2">Accessibility</div>
            <div className="notesP">
              It is our hope for the website to be easy to use and accessible to
              as many people as possible. To aid accessibility, it is possible
              to navigate the site using the keyboard and the Tab key.
            </div>
            <div className="notesH2">Attributions</div>
            <div className="notesP">
              Welsh and UK flag icons created by Freepik - Flaticon.
            </div>
            <div className="notesH2">Site Information</div>
            <div className="notesP">
              Website developed by Telesgop, funded by Welsh Government.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

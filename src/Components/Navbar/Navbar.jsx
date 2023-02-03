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
import { GiHamburgerMenu } from "react-icons/gi";
import welshFlag from "../../Images/wales.png";
import engFlag from "../../Images/united-kingdom.png";

const Navbar = () => {
  const { lang, setLang } = useContext(LanguageContext);
  const [style, setStyle] = useState("noModal");
  const [isOpen, setIsOpen] = useState(false);

  let handlePress = () => {
    if (lang === true) {
      setLang(false);
    } else setLang(true);
  };
  let handleInfo = () => {
    if (style === "noModal") setStyle("modal");
    else if (style === "modal") setStyle("noModal");
  };

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

  return (
    <div className="navbar">
      <div className="navLeft">
        <div>
          <Link to={"/"}>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <AiFillHome
                style={{ transform: "scale(1.5)", "padding-left": "30px" }}
              />
            </motion.div>
          </Link>
        </div>
      </div>
      <Link to={"/"}>
        <div className="navdiv2">
          {/* <h2>{lang !== true ? "Our Welsh History" : "Hanes Cymru Ni"}</h2> */}
        </div>
      </Link>
      <div className="menus">
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
        <motion.div tabIndex="0" whileHover={{ scale: 1.2 }}>
          <div
            // onClick={handleInfo}
            className="hoverNav"
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          >
            <GiHamburgerMenu
              style={{ transform: "scale(1.5)" }}
              className="burger"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        // className={style}
        className="modal"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{ type: "Inertia", stiffness: 25 }}
      >
        <div className="innerModal">
          <div className="innerText">
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              // onClick={() => setStyle("noModal")}
              onClick={() => setIsOpen((isOpen) => !isOpen)}
            >
              <ImCross className="crossImg" />
            </motion.div>
          </div>{" "}
          <div className="innerTextInfo">
            <div className="notesH2">Teacher Notes</div>
            <div className="notesH2">Index</div>
            <div className="notesH2">Accessibility</div>
            <div className="notesH2">Attributions</div>
            <div className="notesH2">Site Information</div>
          </div>
          <div className="cpyrght">
            Website developed by Telesgop. Funded by Welsh Government.
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;

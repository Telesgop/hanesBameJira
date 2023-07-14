import React from "react";
import "./Navbar.css";
import { useContext } from "react";
import { LanguageContext } from "../../Helper/Context";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { AiFillHome } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

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
    open: { opacity: 1, x: "0%" },
    closed: { opacity: 0, x: "100%" },
  };

  return (
    <div className="navbar">
      <div className="navLeft">
        <Link to={"/"}>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <AiFillHome
              style={{
                transform: "scale(1.5)",
                "margin-left": "30px",
                "margin-right": "10px",
              }}
            />
          </motion.div>
        </Link>
        <Link to={"/3to6yo"}>
          <motion.div
            className="categoryBut"
            style={{ "background-color": "#FFCB77", color: "#f2f2f2" }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {lang ? "CC1" : "PS1"}
          </motion.div>
        </Link>
        <Link to={"/6to9yo"}>
          <motion.div
            className="categoryBut"
            style={{ "background-color": "#CFE57D", color: "#f2f2f2" }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {" "}
            {lang ? "CC2" : "PS2"}
          </motion.div>
        </Link>
        <Link to={"/9to12yo"}>
          <motion.div
            className="categoryBut"
            style={{ "background-color": "#A2D6F9", color: "#f2f2f2" }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {" "}
            {lang ? "CC3" : "PS3"}
          </motion.div>
        </Link>
        <Link to={"/12to16yo"}>
          <motion.div
            className="categoryBut"
            style={{ "background-color": "#FF686B", color: "#f2f2f2" }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {" "}
            {lang ? "CC4" : "PS4"}
          </motion.div>
        </Link>
      </div>
      <Link to={"/"}>
        <div className="navdiv2">
          {/* <h2>{lang !== true ? "Our Welsh History" : "Hanes Cymru Ni"}</h2> */}
        </div>
      </Link>
      <div className="menus">
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <div
            onClick={handlePress}
            className="categoryButTranslate"
            tabIndex="0"
          >
            {lang ? "English" : "Cymraeg"}
          </div>
        </motion.div>

        <motion.div
          className="hoverNav"
          onClick={() => setIsOpen((isOpen) => !isOpen)}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <GiHamburgerMenu
            style={{ transform: "scale(1.5)" }}
            className="burger"
          />
        </motion.div>
      </div>

      <motion.div
        className="modal"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        exit={{ opacity: 0 }}
        transition={{ type: "spring", damping: 19 }}
      >
        <div className="innerModal">
          <div className="innerText">
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen((isOpen) => !isOpen)}
            >
              <ImCross className="crossImg" />
            </motion.div>
          </div>{" "}
          <div className="innerTextInfo">
            <Link to={"/Categories"}>
              <motion.h2
                className="notesH2"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
              >
                Sections
              </motion.h2>
            </Link>
            <Link to={"/Notes"}>
              <motion.h2
                className="notesH2"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
              >
                Teacher Notes
              </motion.h2>
            </Link>
            <Link to={"/Index"}>
              <motion.h2
                className="notesH2"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
              >
                {lang ? "Mynegai" : "Index"}
              </motion.h2>
            </Link>
            <Link to={"/Resources"}>
              <motion.h2
                className="notesH2"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
              >
                {lang ? "Ad Res" : "Additional Resources"}
              </motion.h2>
            </Link>
            <Link to={"/Accessibility"}>
              <motion.h2
                className="notesH2"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
              >
                {lang ? "Hygyrchedd" : "Accessibility"}
              </motion.h2>
            </Link>

            <Link to={"/Info"}>
              <motion.h2
                className="notesH2"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
              >
                Credits
              </motion.h2>
            </Link>
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

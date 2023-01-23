import React from "react";
import "./Navbar.css";
import { useContext } from "react";
import { LanguageContext } from "../../Helper/Context";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { ImCross } from "react-icons/im";

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
            <div>Home</div>
          </motion.div>
        </Link>
        <motion.div tabIndex="0" whileHover={{ scale: 1.2 }}>
          <div onClick={handleInfo} className="hoverNav">
            {lang === true && "Nodiadau"}
            {lang !== true && "Notes"}
          </div>
        </motion.div>
        <Link to={"/index"}>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <div>Index</div>
          </motion.div>
        </Link>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <div onClick={handlePress} className="hoverNav" tabIndex="0">
            {lang === true && "Eng"}
            {lang !== true && "Cym"}
          </div>
        </motion.div>
      </div>
      <div className={style}>
        <div className="innerModal">
          <motion.div className="innerText" onClick={() => setStyle("noModal")}>
            <ImCross className="crossImg" />
          </motion.div>{" "}
          <div className="innerTextInfo">
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur? Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
            quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut
            labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
            minima veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
            vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
            molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
            nulla pariatur?Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
            quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut
            labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
            minima veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
            vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
            molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
            nulla pariatur?Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
            quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut
            labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
            minima veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
            vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
            molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
            nulla pariatur?"{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

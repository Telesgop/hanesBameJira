import React from "react";
import "./Copyright.css";
import { LanguageContext } from "../../Helper/Context";
import { useContext } from "react";
import wgLogo from "../../Images/wgLogo.png";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineProfile } from "react-icons/ai";

const Copyright = () => {
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <>
      <div className="copyright">
        {" "}
        <a
          className="copyrightText"
          href="https://www.telesgop.co.uk/"
          target="_blank"
        >
          {lang !== true ? `Developed by Telesgop` : "Datblygwyd gan Telesgop"}
        </a>
      </div>

      <div className="wholeFooter">
        <div className="mobileFooter">
          <AiFillHome className="homeButton" />
        </div>
      </div>
    </>
  );
};

export default Copyright;

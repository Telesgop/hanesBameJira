import React from "react";
import "./Home.css";
import { LanguageContext } from "../../Helper/Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import map from "../../Images/map.png";
import Copyright from "../Copyright/Copyright";

const Home = () => {
  document.body.style = "background: #f2f2f2;";

  const { lang, setLang } = useContext(LanguageContext);
  const introParaEng = (
    <>
      <h1 className="OurWelshHistory">
        <span className="underlineNice">Our Welsh History</span>
      </h1>
      <h3>A website which celebrates the rich and diverse history of Wales.</h3>
      <h3 style={{ "font-weight": "normal" }}>
        The 'Our Welsh History' website has been designed specifically for the
        Curriculum for Wales working closely with teachers, educational experts
        and members of the Black, Asian, and Minority Ethnic community.
      </h3>
      <h3 style={{ "font-weight": "normal" }}>
        It provides a wealth of resources that will support teachers to teach
        Black, Asian, and Minority Ethnic histories and contributions as part of
        Welsh history in the new curriculum introduced in 2022.
      </h3>
      <h3 style={{ "font-weight": "normal" }}>
        The resources can be easily adapted to be used within a school's
        curriculum to support teachers and practitioners to be confident in the
        content that they are using. The variety of stories from across Wales
        will help learners to recognise the diverse story of Wales, to feel
        inspired by what they are being taught and to become ethically informed
        citizens of the world.
      </h3>
      <h3 style={{ "font-weight": "normal" }}>
        Dip in to the website and be inspired!
      </h3>
    </>
  );
  const introParaCym = (
    <>
      <h1 className="OurWelshHistory">
        <span className="underlineNice">Hanes Cymru Ni</span>
      </h1>
      <h3>Gwefan sy'n dathlu cyfoeth amrywiaeth hanes Cymru.</h3>
      <h3 style={{ "font-weight": "normal" }}>
        Mae gwefan ‘Ein Hanes Cymru Ni’ wedi cael ei chynllunio'n benodol ar
        gyfer Cwricwlwm Cymru gan gydweithio'n agos ag athrawon, arbenigwyr
        addysgol ac aelodau o'r gymuned Ddu, Asiaidd, a Lleiafrifoedd Ethnig.
      </h3>
      <h3 style={{ "font-weight": "normal" }}>
        Mae'n cynnig cyfoeth o adnoddau a fydd yn cefnogi athrawon i ddysgu am
        hanes a chyfraniad pobl Ddu, Asiaidd a Lleiafrifoedd Ethnig yn rhan o
        hanes Cymru yn y cwricwlwm newydd a gyflwynwyd yn 2022.
      </h3>
      <h3 style={{ "font-weight": "normal" }}>
        Mae'n hawdd addasu'r adnoddau i'w defnyddio'n rhan o gwricwlwm ysgol er
        mwyn cefnogi athrawon ac ymarferwyr i fod â hyder yn y cynnwys y maen
        nhw'n ei ddefnyddio. Bydd yr amrywiaeth o storïau o bob rhan o Gymru yn
        helpu dysgwyr i adnabod stori amrywiol Cymru, i gael eu hysbrydoli gan
        yr hyn sy'n cael ei addysgu iddyn nhw ac i ddod yn ddinasyddion moesegol
        wybodus y byd.
      </h3>
      <h3 style={{ "font-weight": "normal" }}>
        Edrychwch ar y wefan er mwyn cael eich ysbrydoli!
      </h3>
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
      <div className="introDiv">
        <div className="introDivL">
          <div className="introText">
            {" "}
            {lang !== true ? introParaEng : introParaCym}
          </div>
        </div>
        <div className="introDivR">
          <img src={map} className="introDivImg"></img>
        </div>
      </div>

      <div className="ageText">
        <Link to={"/Categories"}>
          <motion.h2
            className="ageTextBegin"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {lang ? "Dechrau" : "Begin"}
          </motion.h2>
        </Link>
      </div>
    </>
  );
};

export default Home;

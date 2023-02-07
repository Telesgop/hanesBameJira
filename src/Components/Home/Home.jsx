import React from "react";
import "./Home.css";
import { LanguageContext } from "../../Helper/Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Copyright from "../Copyright/Copyright";

const Home = () => {
  const { lang, setLang } = useContext(LanguageContext);
  const introParaEng = (
    <>
      <h1 className="OurWelshHistory">
        <span className="underlineNice">Our Welsh History</span>
      </h1>
      <h3>
        A website which celebrates the rich diverse history of ethnic and
        minority people in Wales.
      </h3>
      <h3 style={{ "font-weight": "normal" }}>
        On the website we look at the essential role that ethnic minorities have
        played in the history of our country. We shine a light on characters
        that have been influencial in our history, on important buildings as
        well as on some current individuals that are shaping the Wales of the
        future.
      </h3>
      <h3 style={{ "font-weight": "normal" }}>
        The website contains interesting facts, videos, podcasts and points for
        discussion. The Teacher Notes show how the website fits in to the new
        National Curriculum and contains weblinks for further research.
      </h3>
      <h3 style={{ "font-weight": "normal" }}>
        We very much hope the website will assist in bringing the multicultural
        history of Wales to life in classrooms across the country. Enjoy!
      </h3>
    </>
  );
  const introParaCym = (
    <>
      <h1 className="OurWelshHistory">
        <span className="underlineNice">Hanes Cymru Ni</span>
      </h1>
      <h3>
        {" "}
        Gwefan sy'n dathlu cyfoeth hanes pobl ethnig a lleiafrifol yng Nghymru.
      </h3>
      <h3 style={{ "font-weight": "normal" }}>
        Ar y wefan rydym yn edrych ar y rôl hanfodol mae pobl o gefndiroedd
        ethnig a lleiafrifol wedi chwarae yn hanes ein gwlad. Rydym yn taflu
        golau ar gymeriadau sydd wedi bod y allweddol yn ein hanes, ar adeiladau
        pwysig yn ogystal â rhai unigolion cyfoes sy'n siapio dyfodol Cymru.
      </h3>
      <h3 style={{ "font-weight": "normal" }}>
        Mae'r wefan yn cynnwys ffeithiau diddorol, fideos, podcastiau a
        phwyntiau trafod. Mae Nodiadau Athrawon ar gael sy'n dangos sut mae'r
        wefan yn cysylltu â'r Cwricwlwm Cenedlaethol yn ogystal â dolenni i
        wneud ymchwil pellach.
      </h3>
      <h3 style={{ "font-weight": "normal" }}>
        Hyderwn yn fawr y bydd y wefan yn gymorth i ddod a hanes
        aml-ddiwylliannol Cymru yn fyw mewn ystafelloedd dosbarth trwy'r wlad.
        Mwynhewch!
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
        <div className="introText">
          {" "}
          {lang !== true ? introParaEng : introParaCym}
        </div>
      </div>

      <div className="ageText">
        <Link to={"/Categories"}>
          <motion.h2
            className="ageTextBegin"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            Begin
          </motion.h2>
        </Link>
      </div>
    </>
  );
};

export default Home;

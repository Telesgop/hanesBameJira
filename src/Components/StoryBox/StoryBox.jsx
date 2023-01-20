import React from "react";
import "./StoryBox.css";
import { motion } from "framer-motion";
import { LanguageContext } from "../../Helper/Context";
import { useContext } from "react";

const StoryBox = ({ name, image, slug, welshSlug }) => {
  const { lang, setLang } = useContext(LanguageContext);

  const container = {
    hidden: { opacity: 1, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.5,
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
    <motion.div
      className="storyBox"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div>
        <p className="indivName">{name}</p>
        <div className="imgAndSlug">
          <img src={image} className="indivImage" alt={name}></img>
        </div>
        <div className="bottomDesc"> {lang !== true ? slug : welshSlug}</div>
      </div>
    </motion.div>
  );
};

export default StoryBox;

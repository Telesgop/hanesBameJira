import React from "react";
import "./StoryBox.css";
import { motion } from "framer-motion";
import { LanguageContext } from "../../Helper/Context";
import { useContext } from "react";

const StoryBoxDiaries = ({ name, image, slug, welshSlug }) => {
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
      transition={{ duration: 0.3 }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div>
        <h3 className="indivName">{name}</h3>
        <div className="imgAndSlugDiaries">
          <img src={image} className="indivImageDiaries" alt={name}></img>
        </div>
      </div>
    </motion.div>
  );
};

export default StoryBoxDiaries;

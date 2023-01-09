import React from "react";
import "./StoryBox.css";
import { motion } from "framer-motion";

const StoryBox = ({ name, image, slug }) => {
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
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div>
        <p className="indivName">{name}</p>
        <div className="imgAndSlug">
          <img src={image} className="indivImage" alt="A small image of"></img>
          <p className="indivSlug">{slug}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default StoryBox;

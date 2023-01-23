import React from "react";
import "./Home.css";
import { LanguageContext } from "../../Helper/Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Copyright from "../Copyright/Copyright";

const Home = () => {
  const { lang, setLang } = useContext(LanguageContext);

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
          This will be an introduction to the site. Here is some placeholder
          text: Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?
        </div>
      </div>
      <div className="ageText">
        <br></br>
        <br></br>
        {lang !== true
          ? "To begin, choose an age group:"
          : "I ddechrau, dewiswch grŵp oedran:"}
      </div>
      <motion.div
        className="ageGroups"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <Link to={"/3to6yo"}>
          <motion.div
            className="ageGroupIndiv"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            variants={item}
            style={{ "background-color": "#FFCB77" }}
          >
            3-6
          </motion.div>
        </Link>
        <Link to={"/6to9yo"}>
          <motion.div
            className="ageGroupIndiv"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            variants={item}
            style={{ "background-color": "#CFE57D" }}
          >
            6-9
          </motion.div>
        </Link>

        <Link to={"/9to12yo"}>
          <motion.div
            className="ageGroupIndiv"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            variants={item}
            style={{ "background-color": "#A2D6F9" }}
          >
            9-12
          </motion.div>
        </Link>
        <Link to={"/12to16yo"}>
          <motion.div
            className="ageGroupIndiv"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            variants={item}
            style={{ "background-color": "#FF686B" }}
          >
            12-16
          </motion.div>
        </Link>
      </motion.div>
      <Copyright />
    </>
  );
};

export default Home;

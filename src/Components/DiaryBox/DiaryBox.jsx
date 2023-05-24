import React, { lazy } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import "./DiaryBox.css";
import { HiArrowCircleRight } from "react-icons/hi";
import { HiArrowCircleLeft } from "react-icons/hi";

const DiaryBox = () => {
  const [page, setPage] = useState(0);
  const [bgColor, setBgColor] = useState("#f2f2f2");
  const [bgColor2, setBgColor2] = useState("black");

  function pageUpdate() {
    if (page < 2) {
      setPage(page + 1);
      setBgColor("black");
    } else if (page == 2) {
      setPage(page + 1);
      setBgColor2("#f2f2f2");
    }
  }
  function pageBack() {
    if (page >= 1) {
      setPage(page - 1);
      setBgColor2("black");
    } else {
      setPage(0);
      setBgColor("#f2f2f2");
    }
  }

  const container = {
    hidden: { opacity: 1, scale: 0.1 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };
  const prevnextbuttons = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="DiaryWholePage">
      <motion.div
        className="prevnext"
        variants={prevnextbuttons}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => pageBack()}
        >
          <HiArrowCircleLeft className="prevnext" style={{ color: bgColor }} />
        </motion.div>
      </motion.div>
      <motion.div
        className="DiaryFlipBook"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="DiaryFlipBookLeft">
          <div className="DiaryText">
            {page === 0 && (
              <>
                <h2 className="handwritten">Thursday, 24th of November </h2>
                <p>
                  Tired, today was a very long day in the laundry. I left this
                  house at 6:30am, I only had half an hour to eat my lunch and
                  then back to work until 8:00pm. I've never worked as hard in
                  my life! Washing, scrubbing, drying and ironing clothes all
                  day long! No energy to write any more!
                </p>
              </>
            )}
            {page === 1 && (
              <>
                <h2 className="handwritten">Monday, 26th of December </h2>
                <p>
                  {" "}
                  It was a special day here in Wales yesterday, Christmas Day.
                  Lots of houses are decorated and many people go around singing
                  carols. Welsh people are great singers! But things haven't
                  changed much in my life, unfortunately: work, work and more
                  work! But as Chi Mau always says, we have to work harder than
                  everyone else to build a solid foundation for our new life
                  here in Wales! I know he's right but I never thought it would
                  be as hard as this for us.
                </p>
              </>
            )}
            {page === 2 && (
              <>
                <h2 className="handwritten"> Wednesday, 22nd of February </h2>
                <p>
                  {" "}
                  I burnt myself badly today when ironing! I'm in pain but I've
                  had an ointment to rub into my hand. I'm sure that Ming Ming
                  understands that I'm injured because she's doing her best to
                  lift my spirits by doing mad things like trying to catch her
                  own tail. She's so funny.
                </p>
              </>
            )}
            {page === 3 && (
              <>
                <h2 className="diaryLOs">Your turn!</h2>
                <p className="diaryLOs">
                  In a diary, you put your thoughts and feelings on paper. You
                  can mention what's happened, what has happened or what's going
                  to happen. How about having a go at writing your own diary?
                  Something similar to the one above but discussing Fong Sui's
                  life 10 years after moving to Wales. What's changed, what's
                  stayed the same?
                </p>
              </>
            )}
          </div>
        </div>
        <div className="DiaryFlipBookSpine"></div>
        <div className="DiaryFlipBookRight">
          {" "}
          <div className="DiaryText">
            {page === 0 && (
              <>
                <h2 className="handwritten">Sunday, 4th of December </h2>
                <p>
                  I'm longing for home! It's Mum's birthday today, I hope she's
                  had a good day back in China. It feels as if she's further
                  away than ever today, for some reason. Everything is so
                  different here in Wales, the language, the food, the clothes
                  people wear. I sometimes feel that everyone is staring at me
                  as I walk to work. Some whisper to each other as I go by, I'm
                  sure they're talking about me. But perhaps that's to be
                  expected, as I look so different to everyone else living here!
                </p>
              </>
            )}
            {page === 1 && (
              <>
                <h2 className="handwritten">Monday, 23th of January </h2>
                <p>
                  {" "}
                  It's New Year's Day today, the beginning of the Year of the
                  Tiger! And such a great start to the year, there's no need to
                  work (but probably I'll have to do double the work tomorrow!)
                  and I've had a surprise from Chi Mau! A new member of our
                  family, Ming Ming the cat! She's so pretty, she has a black
                  and white coat and large, saucer-like eyes. Chi Mau says
                  she'll be great to catch mice; everyone has a job in this
                  house!
                </p>
              </>
            )}
            {page === 2 && (
              <>
                <h2 className="handwritten">Thursday, 20th of April </h2>
                <p>
                  It's a big day today! We're opening our own laundry here in
                  Swansea, the first of a thousand, Chi Mau said – we'll see
                  about that! I'm so proud of what we've done here in Wales,
                  it's been hard work, but I think it'll be worth it! At last,
                  the future looks a bit better!
                </p>
              </>
            )}
            {page === 3 && (
              <>
                <h2>Learning outcome: </h2>
                <p className="LOs">Able to write an imaginary diary</p>
                <h2 className="LOs">Success Criteria</h2>
                <p className="LOs">
                  Using spoken language, e.g. everyone has a job in this house!{" "}
                </p>
                <p className="LOs">
                  Using the past, present and future tenses of the verb, e.g. I
                  ran, I'm running, I will run{" "}
                </p>
                <p className="LOs">
                  Using interesting descriptions and short simple sentences,
                  e.g. Another hard day.
                </p>
                <p className="LOs">
                  Looking back at an event, e.g. I burnt myself badly today when
                  ironing.
                </p>
              </>
            )}
          </div>
        </div>
      </motion.div>
      <motion.div
        className="prevnext"
        variants={prevnextbuttons}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => pageUpdate()}
        >
          <HiArrowCircleRight
            className="prevnext"
            style={{ color: bgColor2 }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DiaryBox;

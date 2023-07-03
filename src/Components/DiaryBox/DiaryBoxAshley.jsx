import React, { lazy } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import "./DiaryBox.css";
import { HiArrowCircleRight } from "react-icons/hi";
import { HiArrowCircleLeft } from "react-icons/hi";

const DiaryBoxAshley = () => {
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
                <h2 className="handwritten">Friday, June 10th, 2016 </h2>
                <p>
                  I still can’t believe that I’m here in France, the whole thing
                  still feels like a dream. The hotel is great, the food is
                  fantastic and there’s plenty of things to interest us. I’m
                  looking forward to watching the game between France and
                  Romania tonight. We want to watch the whole game together on
                  the big screen, an opportunity for ‘more bonding’ as Chris
                  calls it! I better have a chat with a few before going to bed
                  tonight. There’s nothing worse than not being able to sleep
                  the night before a big game and tomorrow is going to be a huge
                  day for us all!
                </p>
              </>
            )}
            {page === 1 && (
              <>
                <h2 className="handwritten">Sunday, June 12th, 2016 </h2>
                <p>
                  I don’t have the words to describe the atmosphere yesterday,
                  before, during and after the game. It’s going to take a little
                  time for the dust to settle, I think! Safe to say that the
                  ‘Red Wall’ played their part in yesterday’s victory, but a
                  different challenge awaits us next!
                </p>
              </>
            )}
            {page === 2 && (
              <>
                <h2 className="handwritten"> Tuesday, June 14th, 2016 </h2>
                <p>
                  Practice went well today, everyone gelling and the new tactics
                  are starting to come to fruition. I’ll have to make sure I
                  drink more water from now on or I’ll be in trouble with the
                  physios!
                </p>
              </>
            )}
            {page === 3 && (
              <>
                <h2 className="diaryLOs">Your turn!</h2>
                <p className="diaryLOs">
                  You’ve read Ashley Williams’ imaginary diary for the first
                  games of the Euros in 2016.But the Welsh team went further in
                  the tournament, quite a bit further to tell the truth. How
                  about you carry on with this diary for the rest of the Euros
                  tournament, you may need to do a bit of research into what
                  happened and the dates in order to make it more authentic.
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
                <h2 className="handwritten">Saturday, June 11th, 2016 </h2>
                <p>
                  The big day as finally arrived. A lot of people say that
                  reaching the Euros is a success in itself for a small country
                  like Wales and it doesn’t matter if we lose! That’s complete
                  nonsense. This is an opportunity, a great opportunity for us
                  to make an impression and to show the rest of the world that
                  we are back at the highest international level, and here to
                  stay! There’s a lot of nervousness around the place but that’s
                  natural, and necessary to make sure that we all channel that
                  nervous energy into the effort on the field. It’s going to be
                  hot and we’ll need to make sure that everyone drinks enough
                  water during the game. Chris is going to make his speech
                  before leaving the hotel, but I will be responsible for
                  motivating the lads before we go out on the field. We’ll need
                  to ‘pitch’ the wording perfectly, I don’t want to wind some of
                  them up too much that we’re down to ten men within the first
                  minutes! No, I’ll have to think carefully about what I’m going
                  to say in the changing room!
                </p>
              </>
            )}
            {page === 1 && (
              <>
                <h2 className="handwritten">Monday, June 13th, 2016 </h2>
                <p>
                  Well, the circus has begun! From my experience playing against
                  England is a completely different experience to playing for
                  any other country. It’s not just the banter and the jokes
                  between the players but it’s also the attention given to the
                  game by the press. I will have to be very careful about what I
                  say on camera, things can often be taken out of context!
                </p>
              </>
            )}
            {page === 2 && (
              <>
                <h2 className="handwritten">Wednesday, June 15th, 2016 </h2>
                <p>
                  A day before the big game against the old enemy and the
                  tension is really starting to rise! The atmosphere around the
                  place is amazing. Welsh fans in their red shirts and bucket
                  hats everywhere singing and enjoying themselves. Hopefully we
                  won’t let them down tomorrow! There’s even more of an
                  expectation on us now as we have won the first game. Most of
                  us are used to dealing with tension before a big game but this
                  is on another level. I can’t wait now!
                </p>
              </>
            )}
            {page === 3 && (
              <>
                <h2>Learning Outcome: </h2>
                <p className="LOs">Able to write an imaginary diary</p>
                <h2 className="LOs">Success Criteria:</h2>
                <p className="LOs">Using spoken language e.g. wind some up </p>
                <p className="LOs">
                  Use the past, present and future tense of the verb e.g. I saw,
                  I see, I will see
                </p>
                <p className="LOs">
                  Using interesting descriptions and short simple sentences,
                  e.g. The circus has begun!
                </p>
                <p className="LOs">
                  Looking back at an event, e.g. practice went well today
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

export default DiaryBoxAshley;

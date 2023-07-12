import React, { lazy } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import "./DiaryBox.css";
import { HiArrowCircleRight } from "react-icons/hi";
import { HiArrowCircleLeft } from "react-icons/hi";
import { LanguageContext } from "../../Helper/Context";
import { useContext } from "react";

const DiaryBoxAshley = () => {
  const { lang, setLang } = useContext(LanguageContext);
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
                <h2 className="handwritten">
                  {" "}
                  {lang !== true
                    ? "Friday, June 10th, 2016"
                    : "Dydd Gwener, Mehefin 10fed, 2016  "}{" "}
                </h2>
                <p>
                  {lang !== true
                    ? "I still can’t believe that I’m here in France, the whole thing still feels like a dream. The hotel is great, the food is fantastic and there’s plenty of things to interest us. I’m looking forward to watching the game between France and Romania tonight. We want to watch the whole game together on the big screen, an opportunity for ‘more bonding’ as Chris calls it! I better have a chat with a few before going to bed tonight. There’s nothing worse than not being able to sleep the night before a big game and tomorrow is going to be a huge day for us all!"
                    : "Dwi’n dal i fethu credu ’mod i yma yn Ffrainc ac mae’r holl beth yn dal i deimlo fel breuddwyd. Mae’r gwesty ’ma’n wych, y bwyd yn ffantastig a digon o bethau i’n diddori ni. Dwi’n edrych ymlaen at wylio gêm Ffrainc a Romania heno ’ma. ’Dan ni am wylio’r gêm i gyd efo’n gilydd ar y sgrin fawr, cyfle am ‘fwy o fondio’ fel mae Chris yn ei alw fo! Byddai hi’n well i mi gael sgwrs efo ambell un cyn noswylio heno. Does dim byd gwaeth na methu cysgu y noson cyn gêm fawr ac mae fory’n mynd i fod yn ddiwrnod enfawr i ni i gyd!  "}{" "}
                </p>
              </>
            )}
            {page === 1 && (
              <>
                <h2 className="handwritten">
                  {" "}
                  {lang !== true
                    ? "Sunday, June 12th, 2016"
                    : "Dydd Sul, Mehefin 12fed, 2016 "}{" "}
                </h2>
                <p>
                  {lang !== true
                    ? "     I don’t have the words to describe the atmosphere yesterday, before, during and after the game. It’s going to take a little time for the dust to settle, I think! Safe to say that the ‘Red Wall’ played their part in yesterday’s victory, but a different challenge awaits us next!"
                    : "Does gen i ddim o’r geiriau i ddisgrifio’r awyrgylch ddoe, cyn, yn ystod ac ar ôl y gêm. Mae o’n mynd i gymryd ychydig o amser i’r llwch setlo, dwi’n meddwl! Saff dweud bod y ‘Wal Goch’ wedi chwarae ei rhan yn y fuddugoliaeth ddoe ond bydd her wahanol iawn yn ein disgwyl ni nesaf!  "}{" "}
                </p>
              </>
            )}
            {page === 2 && (
              <>
                <h2 className="handwritten">
                  {" "}
                  {lang !== true
                    ? "Tuesday, June 14th, 2016"
                    : "Dydd Mawrth, Mehefin 14eg, 2016 "}{" "}
                </h2>
                <p>
                  {lang !== true
                    ? "Practice went well today, everyone gelling and the new tactics are starting to come to fruition. I’ll have to make sure I drink more water from now on or I’ll be in trouble with the physios!"
                    : "Aeth yr ymarfer yn dda heddiw, pawb yn jelio a’r tactegau newydd yn dechrau dwyn ffrwyth. Bydd rhaid i mi wneud yn siŵr ’mod i’n yfed rhagor o ddŵr o hyn ymlaen neu mi fydda i o dan y lach y physios eto!  "}
                </p>
              </>
            )}
            {page === 3 && (
              <>
                <h2 className="LOs">
                  {" "}
                  {lang !== true ? " Your turn!" : "Eich tro chi! "}{" "}
                </h2>
                <p className="diaryLOs">
                  {lang !== true
                    ? " You’ve read Ashley Williams’ imaginary diary for the first games of the Euros in 2016. But the Welsh team went further in the tournament, quite a bit further to tell the truth. How about you carry on with this diary for the rest of the Euros tournament, you may need to do a bit of research into what happened and the dates in order to make it more authentic."
                    : "Rydych wedi darllen dyddiadur dychmygol Ashley Williams ar gyfer gemau cyntaf yr Ewros yn 2016. Ond aeth tîm Cymru’n bellach yn y twrnament, tipyn pellach a dweud y gwir. Beth am i chi gario ymlaen efo’r dyddiadur hwn ar gyfer gweddill Twrnament yr Ewros, efallai bydd angen i chi wneud ychydig o waith ymchwil i’r hyn a ddigwyddodd ac i’r union ddyddiadau er mwyn ei wneud yn fwy dilys.  "}{" "}
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
                <h2 className="handwritten">
                  {" "}
                  {lang !== true
                    ? "Saturday, June 11th, 2016"
                    : "Dydd Sadwrn, Mehefin 11eg, 2016 "}{" "}
                </h2>
                <p className="pAshley">
                  {lang !== true
                    ? " The big day has finally arrived. A lot of people say that reaching the Euros is a success in itself for a small country like Wales and it doesn’t matter if we lose! That’s complete nonsense. This is an opportunity, a great opportunity for us to make an impression and to show the rest of the world that we are back at the highest international level, and here to stay! There’s a lot of nervousness around the place but that’s natural, and necessary to make sure that we all channel that nervous energy into the effort on the field. It’s going to be hot and we’ll need to make sure that everyone drinks enough water during the game. Chris is going to make his speech before leaving the hotel, but I will be responsible for motivating the lads before we go out on the field. We’ll need to ‘pitch’ the wording perfectly, I don’t want to wind some of them up too much that we’re down to ten men within the first minutes! No, I’ll have to think carefully about what I’m going to say in the changing room!"
                    : "Mae’r diwrnod mawr wedi cyrraedd o’r diwedd. Mae lot o bobl yn dweud bod cyrraedd yr Ewros yn llwyddiant ynddo’i hun i wlad fach fel Cymru a does dim ots os ydan ni’n colli! Nonsens llwyr ydy hynny. Mae hwn yn gyfle, yn gyfle gwych i ni wneud argraff ac i ddangos i weddill y byd ein bod ni’n ôl ar y lefel ryngwladol uchaf, ac yma i aros! Mae lot o nerfusrwydd o gwmpas y lle ond mae hynny’n naturiol, a bydd angen gwneud yn siŵr bod pob un ohonon ni’n sianelu egni’r nerfusrwydd yna i ymdrech ar y cae. Mae hi’n mynd i fod yn boeth a bydd angen gwneud yn siŵr bod pawb yn yfed digon o ddŵr yn ystod y gêm. Mae Chris yn mynd i roi ei araith o cyn gadael y gwesty ond fi fydd yn gyfrifol am ysgogi’r hogia’ cyn i ni fynd allan ar y cae. Bydd angen ‘pitcho’r’ geiriad yn berffaith, dwi ddim isio weindio rhai i fyny’n ormodol fel ein bod ni i lawr i ddeg dyn yn y munudau cyntaf! Na, bydd rhaid i mi feddwl yn ofalus am be dwi’n mynd i’w ddweud yn yr ystafell newid! "}
                </p>
              </>
            )}
            {page === 1 && (
              <>
                <h2 className="handwritten">
                  {lang !== true
                    ? "Monday, June 13th, 2016"
                    : "Dydd Llun, Mehefin 13eg, 2016 "}
                </h2>
                <p>
                  {lang !== true
                    ? " Well, the circus has begun! From my experience playing against England is a completely different experience to playing for any other country. It’s not just the banter and the jokes between the players but it’s also the attention given to the game by the press. I will have to be very careful about what I say on camera, things can often be taken out of context!"
                    : "Wel, mae’r syrcas wedi dechrau! O’m profiad i, mae chwarae yn erbyn Lloegr yn brofiad hollol wahanol i chwarae yn erbyn unrhyw wlad arall. Nid yn unig y ‘banter’ a’r tynnu coes sydd rhwng y chwaraewyr ond y sylw sy’n cael ei roi i’r gêm gan y wasg. Bydd rhaid i mi fod yn ofalus iawn gyda be dwi’n ei ddweud ar gamera, yn aml bydd pethau’n cael eu cymryd allan o gyd-destun!  "}
                </p>
              </>
            )}
            {page === 2 && (
              <>
                <h2 className="handwritten">
                  {lang !== true
                    ? "Wednesday, June 15th, 2016"
                    : "Dydd Mercher, Mehefin 15fed, 2016"}
                </h2>
                <p>
                  {lang !== true
                    ? "A day before the big game against the old enemy and the tension is really starting to rise! The atmosphere around the place is amazing. Welsh fans in their red shirts and bucket hats everywhere singing and enjoying themselves. Hopefully we won’t let them down tomorrow! There’s even more of an expectation on us now as we have won the first game. Most of us are used to dealing with tension before a big game but this is on another level. I can’t wait now!"
                    : "Diwrnod cyn y gêm fawr yn erbyn yr hen elyn ac mae’r tensiwn yn dechra’ cynyddu go iawn! Mae’r awyrgylch o gwmpas y lle ’ma’n anhygoel. Ffans Cymru yn eu crysau coch a’u hetiau bwced ym mhob man yn canu ac yn mwynhau eu hunain. Gobeithio na wnawn ni mo’u siomi nhw yfory! Mae ’na fwy o ddisgwyliadau arnon ni erbyn hyn gan ein bod ni wedi ennill y gêm gynta’. Mae’r rhan fwya’ ohonon ni wedi arfer efo’r tensiwn cyn gêm fawr ond mae hyn ar lefel arall! Methu aros rŵan!           "}
                </p>
              </>
            )}
            {page === 3 && (
              <>
                <h2 className="LOsSC">
                  {lang !== true ? "Learning Outcome:" : "Deilliant dysgu:"}
                </h2>
                <p className="LOs">
                  {" "}
                  {lang !== true
                    ? "Able to write an imaginary diary"
                    : "Gallu ysgrifennu dyddiadur dychmygol"}
                </p>
                <h2 className="LOsSC">
                  {" "}
                  {lang !== true
                    ? "Success Criteria:"
                    : "Meini Prawf Llwyddiant:"}
                </h2>
                <p className="LOs">
                  {" "}
                  {lang !== true
                    ? "Using spoken language e.g. wind some up "
                    : "Defnyddio iaith lafar e.e. weindio rhai i fyny, jelio. "}
                </p>
                <p className="LOs">
                  {lang !== true
                    ? "Use the past, present and future tense of the verb e.g. I saw, I see, I will see"
                    : "Defnyddio amser gorffennol, presennol a dyfodol y ferf e.e. gwelais, dwi’n gweld, byddaf i’n gweld "}
                </p>
                <p className="LOs">
                  {lang !== true
                    ? "Using interesting descriptions and short simple sentences, e.g. The circus has begun!"
                    : "Defnyddio disgrifiadau diddorol a brawddegau syml byr, e.e. Mae’r syrcas wedi dechrau!"}
                </p>
                <p className="LOs">
                  {lang !== true
                    ? "Looking back at an event, e.g. practice went well today"
                    : "Edrych yn ôl ar ddigwyddiad, e.e. Aeth yr ymarfer yn dda heddiw. "}
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

import React, { lazy } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import "./DiaryBox.css";
import { HiArrowCircleRight } from "react-icons/hi";
import { HiArrowCircleLeft } from "react-icons/hi";
import { LanguageContext } from "../../Helper/Context";
import { useContext } from "react";

const DiaryBoxArandora = () => {
  const { lang, setLang } = useContext(LanguageContext);
  const [page, setPage] = useState(0);
  function pageUpdate() {
    if (page <= 2) {
      setPage(page + 1);
    } else {
      setPage(0);
    }
  }
  function pageBack() {
    if (page >= 1) {
      setPage(page - 1);
    } else {
      setPage(0);
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
          <HiArrowCircleLeft className="prevnext" />
        </motion.div>
      </motion.div>
      <motion.div
        className="DiaryFlipBook"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="DiaryFlipBookLeftAS">
          <div className="DiaryTextArandora">
            {page === 0 && (
              <>
                <div className="ASdiv">
                  <p className="ASp">
                    {lang
                      ? "Cafodd y llong SS Arandora Star ei hadeiladu i fod yn llong bleser ond yn ystod yr Ail Ryfel Byd, cafodd ei defnyddio i gario milwyr. Er mwyn ei pharatoi at ryfel, cafodd ei pheintio'n llwyd a chafodd drylliau a weiren bigog eu rhoi arni.   "
                      : "The SS Arandora Star was originally built to be a cruise ship, but during WWII she was used to carry soldiers. To prepare her for war, she was painted grey and had guns and barbed wire added."}
                  </p>
                  <img
                    src="https://www.dev.addysgop.co.uk/pdfs/AS1.png"
                    className="ASimg"
                  ></img>
                </div>
              </>
            )}
            {page === 1 && (
              <>
                <div className="ASdiv">
                  <p className="ASp">
                    {lang
                      ? "Ar 1 Gorffennaf 1940, cafodd 734 o garcharorion oedd yn Gymry o dras Eidalaidd eu rhoi ar yr SS Arandora Star, gyda 944 o garcharorion rhyfel eraill, er mwyn teithio i wersyll rhyfel yng Nghanada.    "
                      : "On July 1st 1940, 734 Welsh-Italian prisoners were put on the SS Arandora Star, along with 944 other prisoners of war, to travel to a war camp in Canada."}
                  </p>
                  <img
                    src="https://www.dev.addysgop.co.uk/pdfs/AS3.png"
                    className="ASimg"
                  ></img>
                </div>
              </>
            )}
            {page === 2 && (
              <>
                <div className="ASdiv">
                  <p className="ASp">
                    {lang
                      ? "Ar 2 Gorffennaf, dim ond diwrnod ar ôl i daith yr SS Arandora Star ddechrau, cafodd ei tharo gan dorpido Almaenig. Doedd yr SS Arandora Star ddim yn dangos symbol y Groes Goch Ryngwladol. Oherwydd hyn, doedd llongau eraill ddim yn gwybod ei bod hi'n cario sifiliaid ac na ddylen nhw saethu ati.   "
                      : "On 2nd July, just one day into the SS Arandora Star’s journey, she was struck by a German torpedo. The SS Arandora Star wasn’t showing the International Red Cross symbol. This meant other ships didn’t know she was carrying civilians and shouldn’t be fired at."}
                  </p>
                  <img
                    src="https://www.dev.addysgop.co.uk/pdfs/AS5.png"
                    className="ASimg"
                  ></img>
                </div>
              </>
            )}
            {page === 3 && (
              <>
                <div className="ASdiv2">
                  <p className="ASp">
                    {lang
                      ? "Roedd 53 o'r dynion yn Gymry o dras Eidalaidd; ddylen nhw ddim wedi bod ar y llong yn y lle cyntaf. Roedd yn drychineb ofnadwy.  "
                      : "53 of the men who died were Welsh-Italians who should never have been on the ship in the first place. It was a dreadful tragedy."}
                  </p>
                  <img
                    src="https://www.dev.addysgop.co.uk/pdfs/AS7.png"
                    className="ASimg"
                  ></img>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="DiaryFlipBookSpine"></div>
        <div className="DiaryFlipBookRight">
          {" "}
          <div className="DiaryTextArandora">
            {page === 0 && (
              <>
                <div className="ASdiv">
                  <p className="ASp">
                    {lang
                      ? "Yn ystod y rhyfel, penderfynodd Llywodraeth Prydain fod yn rhaid cadw llawer o Gymry o dras Eidalaidd (roedd eu teulu’n dod yn wreiddiol o’r Eidal) yn garcharorion rhyfel. Gwnaeth y llywodraeth hyn er bod eu teuluoedd wedi symud i Gymru o’r Eidal flynyddoedd cyn y rhyfel ac er eu bod nhw'n ddinasyddion Prydeinig!   "
                      : " During the war, the British Government kept many Welsh-Italians as prisoners of war, even though their families had moved to Wales years before the war and they were British citizens!"}
                  </p>
                  <img
                    src="https://www.dev.addysgop.co.uk/pdfs/AS2.png"
                    className="ASimg"
                  ></img>
                </div>
              </>
            )}
            {page === 1 && (
              <>
                <div className="ASdiv">
                  <p className="ASp">
                    {lang
                      ? "Dim ond 500 o bobl oedd i fod ar fwrdd yr SS Arandora Star, ond roedd 1,678 o ddynion ar ei bwrdd y diwrnod hwnnw. Roedd y llong yn beryglus oherwydd bod gormod o bobl arni, a doedd dim digon o fadau achub i bawb. "
                      : "The SS Arandora Star was only meant to hold 500 people, but 1678 men were on board that day. The ship was dangerously overcrowded, and there were not enough lifeboats for the number of people."}
                  </p>
                  <img
                    src="https://www.dev.addysgop.co.uk/pdfs/AS4.png"
                    className="ASimg"
                  ></img>
                </div>
              </>
            )}
            {page === 2 && (
              <>
                <div className="ASdiv">
                  <p className="ASp">
                    {lang
                      ? "Suddodd yr SS Arandora Star cyn pen munudau ac, oherwydd bod gormod ar y llong a dim digon o fadau achub, bu farw 800 o ddynion."
                      : "The SS Arandora Star sank in minutes and, because the ship was overcrowded and there weren’t enough lifeboats, 800 men died."}
                  </p>
                  <img
                    src="https://www.dev.addysgop.co.uk/pdfs/AS6.png"
                    className="ASimg"
                  ></img>
                </div>
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
          <HiArrowCircleRight className="prevnext" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DiaryBoxArandora;

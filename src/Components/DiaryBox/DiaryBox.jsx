import React, { lazy } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import "./DiaryBox.css";
import { HiArrowCircleRight } from "react-icons/hi";
import { HiArrowCircleLeft } from "react-icons/hi";
import { LanguageContext } from "../../Helper/Context";
import { useContext } from "react";

const DiaryBox = () => {
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
                    ? "Thursday, 24th of November"
                    : "Dydd Iau, Tachwedd 24ain "}
                </h2>
                <p>
                  {lang !== true
                    ? "Tired, today was a very long day in the laundry. I left this house at 6:30am, I only had half an hour to eat my lunch and then back to work until 8:00pm. I've never worked as hard in my life! Washing, scrubbing, drying and ironing clothes all day long! No energy to write any more!"
                    : "Wedi blino, roedd heddiw’n ddiwrnod hir iawn yn y ‘londri’. Gadewais y tŷ yma am 6:30am, dim ond hanner awr i fwyta fy nghinio ac wedyn ’nôl at fy ngwaith tan 8:00pm. Dwi erioed wedi gweithio mor galed yn fy mywyd! Golchi, sgwrio, sychu a smwddio dillad o fore gwyn tan nos! Dim egni i sgwennu rhagor! "}
                </p>
              </>
            )}
            {page === 1 && (
              <>
                <h2 className="handwritten">
                  {lang !== true
                    ? "Monday, 26th of December"
                    : "Dydd Llun, Rhagfyr 26ain"}{" "}
                </h2>
                <p>
                  {lang !== true
                    ? "It was a special day here in Wales yesterday, Christmas Day. Lots of houses are decorated and many people go around singing carols. Welsh people are great singers! But things haven't changed much in my life, unfortunately: work, work and more work! But as Chi Mau always says, we have to work harder than everyone else to build a solid foundation for our new life here in Wales! I know he's right but I never thought it would be as hard as this for us."
                    : "Diwrnod arbennig yma yng Nghymru ddoe, Dydd Nadolig. Mae llawer o’r tai wedi eu haddurno ac mae pobl yn mynd o amgylch yn canu carolau. Mae pobl Cymru yn wych am ganu! Ond dydy pethau ddim wedi newid llawer yn fy mywyd i yn anffodus: gwaith, gwaith a mwy o waith!  Ond fel mae Chi Mau wastad yn ei ddweud, mae'n rhaid gweithio’n galetach na phawb arall er mwyn adeiladu sylfaen gadarn i’n bywyd newydd ni yma yng Nghymru! Dwi’n gwybod mai fe sydd yn iawn, ond wnes i erioed feddwl y byddai hi mor anodd â hyn arnon ni."}{" "}
                </p>
              </>
            )}
            {page === 2 && (
              <>
                <h2 className="handwritten">
                  {lang !== true
                    ? "Wednesday, 22nd of February"
                    : "Dydd Mercher, Chwefror 22ain"}
                </h2>
                <p>
                  {lang !== true
                    ? "I burnt myself badly today when ironing! I'm in pain but I've had an ointment to rub into my hand. I'm sure that Ming Ming understands that I'm injured because she's doing her best to lift my spirits by doing mad things like trying to catch her own tail. She's so funny."
                    : "Wedi llosgi’n ddrwg y bore ’ma wrth smwddio! Dwi mewn poen ond wedi cael eli i’w roi ar fy llaw. Dwi’n siwr bod Ming Ming yn deall fy mod i wedi brifo achos mae hi’n trio ei gorau i godi fy nghalon i drwy wneud pethau gwirion fel trio dal ei chynffon ei hun. Mae hi mor ddoniol."}
                </p>
              </>
            )}
            {page === 3 && (
              <>
                <h2 className="diaryLOs">
                  {lang !== true ? "Your turn!" : "Eich tro chi! "}
                </h2>
                <p className="diaryLOs">
                  {lang !== true
                    ? " In a diary, you put your thoughts and feelings on paper. You can mention what's happened, what has happened or what's going to happen. How about having a go at writing your own diary? Something similar to the one above but discussing Fong Sui's life 10 years after moving to Wales. What's changed, what's stayed the same?"
                    : "Mewn dyddiadur, rydych chi’n rhoi eich meddyliau a’ch teimladau ar bapur. Gallwch sôn am bethau sydd wedi digwydd, yn digwydd neu’n mynd i ddigwydd. Beth am i chi roi cynnig ar ysgrifennu dyddiadur eich hun? Un tebyg i’r un uchod ond yn sôn am fywyd Fong Sui 10 mlynedd ar ôl symud i Gymru. Beth sydd wedi newid, beth sydd wedi aros yr un fath?"}
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
                  {lang !== true
                    ? "Sunday, 4th of December"
                    : "Dydd Sul, Rhagfyr 4ydd"}
                </h2>
                <p>
                  {lang !== true
                    ? "I'm longing for home! It's Mum's birthday today, I hope she's had a good day back in China. It feels as if she's further away than ever today, for some reason. Everything is so different here in Wales, the language, the food, the clothes people wear. I sometimes feel that everyone is staring at me as I walk to work. Some whisper to each other as I go by, I'm sure they're talking about me. But perhaps that's to be expected, as I look so different to everyone else living here!"
                    : "Hiraeth am adre! Mae hi’n ddiwrnod pen-blwydd Mam heddiw, gobeithio ei bod hi wedi cael diwrnod da ’nôl yn Tsieina. Mae’n teimlo ei bod hi’n bellach nag erioed heddiw, am ryw reswm. Mae pob dim mor wahanol yma yng Nghymru, yr iaith, y bwyd, sut mae pobl yn gwisgo. Dwi’n teimlo weithiau fel tasai pawb yn syllu arna i wrth i mi gerdded i’r gwaith. Mae rhai’n sibrwd wrth ei gilydd wrth i mi basio, dwi’n siŵr mai siarad amdana i maen nhw. Ond efallai fod hynny i’w ddisgwyl gan fy mod i’n edrych mor wahanol i bawb arall sy’n byw yma! "}
                </p>
              </>
            )}
            {page === 1 && (
              <>
                <h2 className="handwritten">
                  {" "}
                  {lang !== true
                    ? "Monday, 23rd of January"
                    : "Dydd Llun, Ionawr 23ain"}
                </h2>
                <p>
                  {lang !== true
                    ? "It's New Year's Day today, the beginning of the Year of the Tiger! And such a great start to the year, there's no need to work (but probably I'll have to do double the work tomorrow!) and I've had a surprise from Chi Mau! A new member of our family, Ming Ming the cat! She's so pretty, she has a black and white coat and large, saucer-like eyes. Chi Mau says she'll be great to catch mice; everyone has a job in this house!"
                    : "Mae Blwyddyn Newydd yn dechrau heddiw, Blwyddyn y Teigr! Ac am gychwyn grêt i’r flwyddyn, dim gwaith (ond mae’n siŵr y bydd angen gwneud dwbl yfory!) ac wedi cael syrpréis gan Chi Mau! Aelod newydd i’n teulu bach ni, Ming Ming y gath! Mae hi mor ddel, cot ddu a gwyn a llygaid mawr fel soseri. Mae Chi Mau yn dweud y bydd hi’n wych i ddal llygod; mae gan bawb ‘jobyn’ yn y tŷ ’ma!"}
                </p>
              </>
            )}
            {page === 2 && (
              <>
                <h2 className="handwritten">
                  {lang !== true
                    ? "Thursday, 20th of April"
                    : "Dydd Iau, Ebrill 20fed"}
                </h2>
                <p>
                  {lang !== true
                    ? "It's a big day today! We're opening our own laundry here in Swansea, the first of a thousand, Chi Mau said – we'll see about that! I'm so proud of what we've done here in Wales, it's been hard work, but I think it'll be worth it! At last, the future looks a bit better!"
                    : "Diwrnod mawr heddiw! Rydyn ni’n agor ein ‘londri’ ni ein hunain yma yn Abertawe, y cyntaf o fil, meddai Chi Mau – cawn ni weld am hynny! Dwi mor falch o’r hyn rydyn ni wedi’i wneud yma yng Nghymru, mae wedi bod yn waith caled ond dwi’n credu y bydd y cyfan yn werth chweil! O’r diwedd, mae’r dyfodol yn edrych ychydig yn well! "}
                </p>
              </>
            )}
            {page === 3 && (
              <>
                <h2 className="LOsSC">
                  {" "}
                  {lang !== true ? "Learning Outcome:" : "Deilliant dysgu: "}
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
                  {lang !== true
                    ? "Using spoken language, e.g. everyone has a job in this house!"
                    : "Defnyddio iaith lafar, e.e. mae gan bawb ‘jobyn’ yn y tŷ ’ma."}
                </p>
                <p className="LOs">
                  {lang !== true
                    ? "Using the past, present and future tenses of the verb, e.g. I ran, I'm running, I will run"
                    : "Defnyddio amser gorffennol, presennol a dyfodol y ferf, e.e. rhedais, rydw i’n rhedeg, byddaf yn rhedeg"}
                </p>
                <p className="LOs">
                  {lang !== true
                    ? "Using interesting descriptions and short simple sentences, e.g. Another hard day."
                    : "Defnyddio disgrifiadau diddorol a brawddegau syml byr, e.e. Diwrnod caled arall. "}
                </p>
                <p className="LOs">
                  {lang !== true
                    ? "  Looking back at an event, e.g. I burnt myself badly today when ironing."
                    : "Edrych yn ôl ar ddigwyddiad, e.e. Wedi llosgi’n ddrwg y bore ’ma wrth smwddio."}
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

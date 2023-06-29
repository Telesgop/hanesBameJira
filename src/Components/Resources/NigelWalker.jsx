import React from "react";
import "./Resources.css";
import { LanguageContext } from "../../Helper/Context";
import { useContext } from "react";
import nigelEng from "../../Images/nigelEng.png";
import nigelCym from "../../Images/nigelCym.png";
const NigelWalker = () => {
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <>
      <div className="resourcePage">
        <h1 className="resourceH1">
          {lang ? "Nigel Walker" : "Nigel Walker "}
        </h1>
        <p className="resourceP">
          <strong>
            {lang
              ? "“Efallai y bydd rhai pobl yn dweud y bydd Nigel Walker yn fodel rôl gwych i athletwyr ifanc du ym mhob camp. Anghofiwch y darn ‘du’. Mae Nigel Walker yn un o’r modelau rôl gorau y gallech chi ddod o hyd iddo i unrhyw athletwr ifanc, gwyn, du, rygbi, athletau, unrhyw gamp, unrhyw wlad, unrhyw hil.” Dyna ddywedodd cyn-Brif Weinidog Cymru, Rhodri Morgan adeg ymddeoliad Nigel Walker yn 1998. Dyma erthygl papur newydd ddychmygol am Nigel Walker yn ennill ei gap cyntaf i dîm rygbi Cymru.  "
              : `“Some people may say that Nigel Walker will be an excellent role model for young black athletes in all sports. Forget the ‘black’ part. Nigel Walker is one of the best role models you could find for any young athlete, white, black, rugby, athletics, any sport, any country, any race.” This is what the former First Minister of Wales, Rhodri Morgan, said when Nigel Walker retired from sport in 1998. This is an imaginary newspaper article about Nigel Walker winning his first cap for the Wales rugby team.`}
          </strong>{" "}
        </p>
        <div>
          {lang ? (
            <img
              src={nigelCym}
              style={{ height: "800px", width: "600px" }}
            ></img>
          ) : (
            <img
              src={nigelEng}
              style={{ height: "800px", width: "600px" }}
            ></img>
          )}
        </div>
        <div
          className="learningOutcomes"
          style={{ "background-color": "#FF686B" }}
        >
          <h2>{lang ? "Eich tro chi! " : "Your turn! "}</h2>
          <p className="resourceP">
            {lang
              ? "Beth am i chi ysgrifennu erthygl papur newydd neu adroddiad eich hun am y gêm a gafodd Nigel Walker yn erbyn Iwerddon i ennill ei gap cyntaf? Bydd angen i chi wneud ychydig o waith ymchwil er mwyn darganfod rhywfaint o ffeithiau am yr hyn a ddigwyddodd. Gallwch osod eich testun mewn colofnau a hefyd ychwanegu lluniau at y darn. "
              : "How about writing a newspaper article yourself about the Nigel Walker’s first-cap game against Ireland? You will need to do a bit of research to find out some facts about what happened. You can set your text in columns and also add images to the piece. "}
          </p>
          <p className="resourceP">
            {lang
              ? "Mae erthygl Papur Newydd yn rhoi gwybodaeth am ddigwyddiad: Beth sydd wedi digwydd? I bwy mae wedi digwydd? Ble ddigwyddodd hyn? Pryd ddigwyddodd hyn? Pam ddigwyddodd hyn? "
              : `A newspaper article provides information about an event: What has happened? 

            To whom has it happened to? 
            
            Where did this happen? 
            
            When did this happen? 
            
            Why did this happen? `}
          </p>

          <p className="resourceP">
            <strong>{lang ? "Deilliant Dysgu:" : "Learning Outcome:"}</strong>
            <br />{" "}
            {lang
              ? "Gallu ysgrifennu erthygl papur newydd "
              : "Able to write a newspaper article "}
          </p>
          <p className="resourceP">
            <strong>
              {lang ? "Meini Prawf Llwyddiant: " : "Success Criteria:"}
            </strong>
            <br />{" "}
            {lang
              ? "Pennawd bachog, e.e. Athletwr ar yr Asgell!  "
              : "A catchy headline, e.g. Athlete on the Wing! "}
            <br />
            {lang ? "Paragraffau byr " : "Short paragraphs "}
            <br />
            {lang
              ? "Mae angen i chi ddyfynnu geiriau rhywun, e.e. llygad dyst "
              : "You need to quote the words of someone, e.g. an eyewitness "}
            <br />
            {lang
              ? "Ysgrifennu yn y gorffennol "
              : "Writing in the past tense "}
            <br />
            {lang
              ? "Gallwch sôn am y digwyddiad yn nhrefn amser "
              : "You can say what happened in chronological order (the order it happened in time)  "}
          </p>
        </div>
      </div>
    </>
  );
};

export default NigelWalker;

import React from "react";
import "./Resources.css";
import { LanguageContext } from "../../Helper/Context";
import { useContext } from "react";

const JoeCalzaghe = () => {
  const { lang, setLang } = useContext(LanguageContext);
  document.body.style = "background: #f2f2f2;";

  return (
    <>
      <div className="resourcePage">
        <h1 className="resourceH1">
          {lang
            ? "Erthygl Ddychmygol mewn Papur Newydd – 6 Chwefror 2009 "
            : "Imaginary Newspaper Article – 6 February 2009"}
        </h1>
        <h1 className="resourceH1">
          {lang
            ? "‘Y Ddraig Eidalaidd’ yn Ymddeol o’r Sgwâr Bocsio"
            : "The Italian Dragon Retires from the Boxing Ring"}
        </h1>
        <p className="resourceP">
          {" "}
          {lang
            ? "Mae’r pencampwr bocsio Joe Calzaghe wedi cyhoeddi ei fod yn ymddeol ar ôl gyrfa hynod ddisglair.  Roedd gan y pencampwr byd, ‘Pride of Wales’, record ryfeddol yn y sgwâr. Ymladdodd mewn 46 gornest ac ennill pob un ohonyn nhw – yr unig focsiwr o Brydain i wneud hynny."
            : "The boxing champion Joe Calzaghe yesterday announced his retirement from the boxing ring after a spectacular career. The world champion, our ‘Pride of Wales’ had a remarkable record in the ring.  He fought 46 contests and won them all – the only boxer from Britain to achieve this."}
        </p>
        <p className="resourceP">
          {lang
            ? "“Mae’n bryd wynebu heriau eraill,” meddai Calzaghe, sy’n 36 oed, “dwi’n teimlo fy mod wedi cyflawni popeth posibl yn y sgwâr. Dwi’n falch ofnadwy o bopeth dwi wedi’i wneud ac yn ddiolchgar iawn i bawb sy wedi fy nghefnogi ar hyd y ffordd, gan gynnwys fy nheulu a’m hyfforddwyr. Mae llawer mwy gen i i'w gynnig, wrth gwrs – ond nid yn y sgwâr bocsio mwyach.”   "
            : "“It’s time to face other challenges,” said Calzaghe, who is 36 years old, “I feel as if I’ve achieved everything I can in the ring.  I am very proud of what I’ve achieved and extremely grateful to everyone who has supported me along the way, including my family and trainers. I have a lot more to offer of course – but not in the boxing ring any longer.”  "}
        </p>
        <p className="resourceP">
          {lang
            ? "Er bod Calzaghe yn destun balchder yng Nghymru, yn Llundain y cafodd ei eni, gyda’i dad yn dod o’r Eidal a’i fam yn dod o Gymru. Symudodd y teulu i Drecelyn, neu Newbridge, ger Cwmbrân pan oedd yn ddwy oed. Dechreuodd focsio pan oedd yn blentyn ifanc ac ymuno â Chlwb Bocsio Amatur Trecelyn.  Tra oedd yn yr ysgol, roedd yn dioddef bwlio – cafodd hyn effaith arno ac roedd yn teimlo’n unig ac yn fregus. Gadawodd yr ysgol heb sefyll ei arholiadau, ond ar ôl ennill sawl teitl bocsio  i fechgyn ysgol, roedd yn benderfynol o gyflawni pethau mawr.  "
            : "Although Wales was rightly proud of Calzaghe, he was born in London to an Italian father and Welsh mother. The family moved to Newbridge near Cwmbran when he was two years old.  He started boxing as a young child and joined Newbridge Amateur Boxing Club. At school he was bullied, something which affected him and left him feeling lonely and vulnerable. He left school without sitting exams – but with several schoolboy boxing titles to his name, he had a determination to achieve big things.   "}{" "}
        </p>
        <p className="resourceP">
          {lang
            ? "Bu Calzaghe yn focsiwr amatur llwyddiannus, yn ennill 110 gornest allan o 120 a nifer o deitlau. Ym mis Hydref 1993, wynebodd ei ornest broffesiynol gyntaf, a gorchfygu ei wrthwynebwr mewn un rownd!  Roedd Enzo, ei dad a’i hyfforddwr, yn ddylanwad mawr arno. "
            : "Calzaghe was a successful amateur boxer, winning 110 contests out of 120 and numerous titles. In Autumn 1993 he faced his first professional contest and beat his opponent in one round! Enzo, his and trainer was a great influence on him.  "}
        </p>
        <p className="resourceP">
          {lang
            ? "Ym mis Hydref 1997 ddaeth yn Bencampwr Byd am y tro cyntaf wrth faeddu Chris Eubank. Ym mis Mawrth 2006 enillodd ornest i gadw teitl uwch-ganol WBO (World Boxing Organisation) unwaith eto. Y flwyddyn ganlynol ym mis Tachwedd 2007 yn Stadiwm y Mileniwm yng Nghaerdydd, ychwanegodd goron uwch-ganol y WBA (World Boxing Association) a'r WBC (World Boxing Council) at goron y WBO. Daeth teitl arall eto yn 2008 wrth iddo ennill gornest yn yr adran is-drwm.  Enillodd ei ornest olaf – ar bwyntiau – yn erbyn Roy Jones Jr yn Madison Square Garden yn Efrog Newydd. Dri mis yn ddiweddarach ac mae wedi cyhoeddi mai hon fydd ei ornest olaf. Ymysg y 46 buddugoliaeth roedd 32 knockout. "
            : "In October 1997 he became WBO (World Boxing Organization) World Champion for the first time by defeating Chris Eubank, a title he defended for many years against many (20) challengers, as well as later adding the WBA (World Boxing Association), WBC (World Boxing Council) and the Ring titles to the WBO crown. A further title came in 2008 when he was victorious in the light heavyweight category. He won his last encounter – on points – against Roy Jones Jr in Madison Square Garden, New York. Three months later and he announces that there would be no more. Of his 46 victories, 32 were knockouts.   "}
        </p>
        <p className="resourceP">
          {lang
            ? "Yn ystod ei yrfa, enillodd Mr Calzaghe wobr Personoliaeth Chwaraeon Cymreig y Flwyddyn BBC Cymru dair gwaith, yn 2001, 2006 a 2007 ac yn 2007 coronwyd ef hefyd yn Bersonoliaeth Chwaraeon y Flwyddyn y BBC.   "
            : "During his career, Calzaghe won the BBC Cymru Wales Sports Personality of the Year award on three occasions, 2001, 2006 and 2007, and in 2007 he was also crowned BBC Sports Personality of the Year.    "}
        </p>
        <p className="resourceP">
          {lang
            ? "Efallai na chafodd Joe Calzaghe amser da gyda’i gyfoedion yn yr ysgol, ond aeth ymlaen i wireddu ei freuddwydion a bod yn ysbrydoliaeth i lawer dros y byd ac ennill y ffugenw 'Y Ddraig Eidalaidd' hefyd, “Rwy’n gobeithio fy mod wedi dangos i bobl ifanc eraill na all unrhyw un ddiffodd eich fflam.”   "
            : "Joe Calzaghe may not have had a happy time at school, but he went on to achieve his dreams and be an inspiration to many across the world, gaining him the nickname ‘The Italian Dragon’, “I hope that I’ve shown other young people that no one can extinguish your flame.”  "}
        </p>{" "}
        <div
          className="learningOutcomes"
          style={{ "background-color": "#FF686B" }}
        >
          <h2>{lang ? "Eich tro chi! " : "Your turn! "}</h2>
          <p className="resourceP">
            {lang
              ? "Dychmygwch eich bod wedi cael y dasg o gyfweld â Joe Calzaghe ar gyfer papur newydd cenedlaethol.    "
              : "Imagine you have been given the job of interviewing Joe Calzaghe for a national newspaper. "}
          </p>
          <p className="resourceP">
            {lang
              ? "Rydych yn gallu gofyn 5 cwestiwn yn unig. Beth fydden nhw?   "
              : "You can only ask 5 questions. What would they be? "}
          </p>
          <p className="resourceP">
            {lang
              ? "Sut ydych chi'n meddwl y byddai'n ateb? Cyfnewidiwch eich cwestiynau gyda ffrind ac ateb cwestiynau eich gilydd.  "
              : "What do you think he would answer? Swap questions with a friend and answer each others questions.  "}
          </p>

          <p className="resourceP">
            <strong>{lang ? "Deilliant Dysgu:" : "Learning Outcome:"}</strong>
            <br /> {lang ? "Gofyn cwestinau " : "Asking questions "}
          </p>
          <p className="resourceP">
            <strong>
              {lang ? "Meini Prawf Llwyddiant: " : "Success Criteria:"}
            </strong>
            <br />{" "}
            {lang
              ? "Gofyn cwestiynau diddorol  "
              : "Asks interesting questions"}
            <br />{" "}
            {lang
              ? "Gofyn cwestiynau am wahanol gyfnodau yn ei fywyd  "
              : "Questions asked cover different parts of his life "}
            <br />{" "}
            {lang
              ? "Defnyddio atalnodi cywir - prif lythrennau a marciau cwestiwn  "
              : "Use correct punctuation - capital letters and question marks "}
          </p>
        </div>
      </div>
    </>
  );
};

export default JoeCalzaghe;

import React from "react";
import "./Resources.css";
import { LanguageContext } from "../../Helper/Context";
import { useContext } from "react";

const Vaughan = () => {
  const { lang, setLang } = useContext(LanguageContext);
  document.body.style = "background: #f2f2f2;";

  return (
    <>
      <div className="resourcePage">
        <h1 className="resourceH1">
          {lang
            ? "Portread o Vaughan Gething "
            : "A portrait of Vaughan Gething "}
        </h1>

        <p className="resourceP">
          {lang
            ? "Mae Vaughan Gething yn wyneb cyfarwydd i nifer ohonom ni yma yng Nghymru gan ei fod yn aelod blaenllaw o’r cabinet yn y Senedd. O ganlyniad, mae’n gyfrifol am wneud nifer o benderfyniadau pwysig iawn sy’n effeithio ar fywydau pob un ohonom ni. Ond pwy yw’r gŵr y tu ôl i’r rôl bwysig yma, beth yw ei gefndir? "
            : "Vaughan Gething is a familiar face to many of us here in Wales as he is a leading member of the cabinet in Y Senedd. As a result he is responsible for making a number of very important decisions that affect all our lives. But who is the man behind this important role, what is his background?  "}
        </p>
        <p className="resourceP">
          {lang
            ? "Cafodd Vaughan ei eni yn Zambia yn Affrica. Roedd ei dad yn filfeddyg o Gymru a’i fam yn frodor o’r wlad honno. Pan oedd Vaughan yn ddwy oed, symudodd y teulu i sir Fynwy am gyfnod ond yn Dorset yn Lloegr y cafodd ei fagu.  "
            : "Vaughan was born in Zambia in Africa. His father was a vet from Wales and his mother was a native of that Zambia. When Vaughan was two years old the family moved to Monmouthshire for a while but he grew up in Dorset in England. "}{" "}
        </p>
        <p className="resourceP">
          {lang
            ? "Roedd hi’n amlwg o’i ddyddiau yn y brifysgol bod Vaughan Gething yn gallu ymdopi â chyfrifoldebau. Tra oedd yn y brifysgol yn Aberystwyth, cafodd ei ethol yn Llywydd Undeb Cenedlaethol Myfyrwyr Cymru, y cyntaf o dras ethnig i gael y rôl honno. Pan oedd yn llywydd, daeth yn enwog am ei areithiau angerddol. Ar ôl gadael y brifysgol, gweithiodd fel cyfreithiwr ac yna daeth yn bartner yn y cwmni cyfreithiol enwog Thompsons. Yn ystod y cyfnod hwn yn ei fywyd, daeth yn aelod o undebau GMB, UNSAIN ac Unite, ac ef oedd Llywydd ieuengaf erioed TUC Cymru. "
            : "It was clear from his university days that Vaughan Gething could handle responsibilities. While at Aberystwyth university he was made President of the National Student Union of Wales, the first of ethnic origin to do so, and in his role as president he became famous for his impassioned speeches. After leaving college he worked as a solicitor and then as a partner in the famous law firm Thompsons. During this period in his life he became a member of the GMB, UNSAIN and Unite unions, and he was the youngest ever President of TUC Cymru.   "}
        </p>
        <p className="resourceP">
          {lang
            ? "Yn y gorffennol, mae Vaughan wedi gwasanaethu fel cynghorydd sir, llywodraethwr ysgol a gwirfoddolwr gwasanaeth cymunedol – gan gefnogi myfyriwr â pharlys yr ymennydd a gofalu amdano. Roedd y nodwedd ofalgar yma yn ei gymeriad yn dangos ei fod yn berson sy’n barod iawn i helpu yn ei gymuned. Felly, y cam naturiol nesaf iddo oedd ymgeisio am sedd yn y Senedd. Yn 2011 daeth ei freuddwyd yn wir pan gafodd ei ethol yn Aelod o’r Senedd dros Dde Caerdydd a Phenarth. "
            : "In the past, Vaughan has served as a county councillor, school governor and community service volunteer - supporting and caring for a student with cerebral palsy. This caring trait in his character made it clear that he is someone who is very willing to help in his community. So the next natural step for him was to apply for the Senedd. In 2011 his dream came true when he was elected Member of Parliament for Cardiff South and Penarth.  "}
        </p>
        <p className="resourceP">
          {lang
            ? "Ym mis Rhagfyr 2018, penodwyd Vaughan Gething yn Weinidog Iechyd a Gwasanaethau Cymdeithasol ac ef oedd Gweinidog Iechyd Cymru drwy gyfnod pandemig Covid-19. Yn ystod y cyfnod cythryblus hwn, bu’n rhaid iddo wneud sawl penderfyniad anodd iawn. Roedd y rhain yn cynnwys penderfyniadau ar reolau hunanynysu Cymru a phenderfyniadau ynglŷn â chaniatáu cleifion i ddychwelyd o’r ysbytai i gartrefi gofal. Cafodd ei ganmol gan rai am ei arweiniad cryf ond cafodd ei feirniadu’n hallt gan eraill. "
            : "In December 2018 Vaughan Gething was appointed Minister for Health and Social Services and he was the Health Minister for Wales throughout the Covid-19 pandemic. During this turbulent period he had to make several very difficult decisions. These included when to impose self-isolation measures and overseeing the care home crisis. He was praised by some for his strong leadership but severely criticized by others."}
        </p>
        <p className="resourceP">
          {lang
            ? "Erbyn hyn, Vaughan Gething yw Gweinidog yr Economi. Mae ei adran yn cynnig cymorth a chyngor i helpu busnesau i sefydlu, i dyfu, neu i ddatblygu. "
            : "The Economy Minister is now Vaughan Gething who provides support and advice to help businesses set up, grow or develop. He continues to live in Cardiff with his wife, Michelle and they have one son. Vaughan loves cricket but doesn't play as much as he would like now. He is also a keen rugby and football fan. "}
        </p>
        <p className="resourceP">
          {lang
            ? "Mae Vaughan Gething wedi brwydro’n galed dros gydraddoldeb hiliol drwy gydol ei yrfa ac mae’n aelod pwysig ar sawl pwyllgor yn y Senedd. Ond o ganlyniad i’w rôl fel y Gweinidog Iechyd yn ystod y pandemig y bydd Vaughan Gething yn cael ei gofio fwyaf. Byddwn yn cofio’r effaith a gafodd ei benderfyniadau ar ein bywydau ni yn ystod un o’r cyfnodau anoddaf yn hanes y Gymru fodern.  "
            : "Vaughan Gething has fought hard for racial equality throughout his career and is an important member of several committees in the Senedd. But it is as a result of his role as Health Minister during the pandemic that Vaughan Gething will be remembered the most and the impact his decisions had on our lives in one of the most difficult periods in the history of modern Wales!  "}
        </p>
        <div
          className="learningOutcomes"
          style={{ "background-color": "#FF686B" }}
        >
          <h2>{lang ? "Eich tro chi! " : "Your turn! "}</h2>
          <p className="resourceP">
            {lang
              ? "Yn ystod ei yrfa, mae’n siŵr bod Vaughan Gething wedi gwneud cannoedd o areithiau, sgìl bwysig iawn i unrhyw wleidydd. Beth am i chi ysgrifennu araith ddychmygol i Vaughan Gething? Dewiswch chi ar ba bwnc fydd eich araith, yna meddyliwch beth fyddai ei farn ef am y pwnc hwnnw. "
              : `During his career Vaughan Gething must have made hundreds of speeches, a very important skill for any politician. Write an imaginary speech for Vaughan Gething. Choose a topic for the speech and imagine what his opinion would be about that topic. `}
          </p>
          <p className="resourceP">
            <strong>{lang ? "Deilliant Dysgu:" : "Learning Outcome:"}</strong>
            <br />{" "}
            {lang ? "Gallu ysgrifennu araith " : "Be able to write a speech "}
          </p>
          <p className="resourceP">
            <strong>
              {lang ? "Meini Prawf Llwyddiant: " : "Success Criteria:"}
            </strong>
            <br /> {lang ? "Cyfarch y gynulleidfa.  " : "Greet the audience."}
            <br />
            {lang
              ? " Egluro pwrpas yr araith ar y dechrau. "
              : "Explain the purpose of the speech at the beginning. "}
            <br />
            {lang
              ? "Mynegi eich barn yn glir. "
              : "Express your opinion clearly. "}
            <br />
            {lang
              ? " Rhoi rhesymau a ffeithiau i gefnogi eich barn. "
              : "Greet the audience. "}
            <br />
            {lang
              ? "Ailadrodd geiriau a phwyntiau allweddol. "
              : "Give reasons and facts to support your opinion. "}
            <br />
            {lang
              ? "Defnyddio cwestiynau rhethregol. "
              : "Repeat words and key points. "}
            <br />
            {lang
              ? "Cloi’r araith drwy ddiolch am y gwrandawiad. "
              : "Use rhetorical questions. Conclude the speech by thanking for the hearing. "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Vaughan;

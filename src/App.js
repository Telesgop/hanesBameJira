import { useEffect, useState, useRef } from "react";
import "./App.css";
import { FaVideo } from "react-icons/fa";
import "./Components/Person/Person.css";
import { motion, transform } from "framer-motion";
import strip from "./Images/asstrip.png";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import newspaper from "./Images/readallaboutit.png";
import italianDragon from "./Images/italianDragon.png";
import hans from "./Images/hans.png";
import colin from "./Images/colin.png";
import windrush from "./Images/windrush.png";
import vg from "./Images/vg.png";
import idris from "./Images/idrisBio.png";
import clive from "./Images/clive.png";
import louisa from "./Images/louisa.png";
import vip from "./Images/vipPass.png";
import castle from "./Images/castle.png";
import diary from "./Images/diary.png";
import nige from "./Images/nige.png";
import boxing from "./Images/boxing.png";
import ashleySmall from "./Images/ashleySmall.png";
import postcard from "./Images/postcardsmall.png";
import { LanguageContext } from "./Helper/Context";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import SixToNine from "./Components/SixToNine/SixToNine";
import Person from "./Components/Person/Person";
import PersonBack from "./Components/Person/PersonBack";
import NineToTwelve from "./Components/NineToTwelve/NineToTwelve";
import Index from "./Components/Index/Index";
import ThreeToSix from "./Components/ThreeToSix/ThreeToSix";
import TwelveToSixteen from "./Components/TwelveToSixteen/TwelveToSixteen";
import AnimCard from "./Components/AnimCard/AnimCard";
import api from "./api.json";
import nineApi from "./9to12.json";
import twelveApi from "./12to16.json";
import ScrollToTop from "./Components/ScrollToTop";
import dom from "./Podcasts/DomJames/domEng.mp3";
import domCym from "./Podcasts/DomJames/domCym.mp3";
import theo from "./Podcasts/TheoCabango/theoEng.mp3";
import emily from "./Podcasts/Emily/emilyEng.mp3";
import hanan from "./Podcasts/Hanan/hanan.wav";
import theoCym from "./Podcasts/TheoCabango/theoCym.mp3";
import emilyCym from "./Podcasts/Emily/emilyCym.mp3";
import mirainCym from "./Podcasts/Mirain/mirainCym.mp3";
import mirainEng from "./Podcasts/Mirain/mirainEng.mp3";
import Categories from "./Components/Categories/Categories";
import Notes from "./Components/Notes/Notes";
import Accessibility from "./Components/Accessibility/Accessibility";
import Info from "./Components/Info/Info";
import Quiz from "./Components/Quiz/Quiz";
import QuizData from "./Components/Quiz/QuizData";
import DiaryBox from "./Components/DiaryBox/DiaryBox";
import PersonYTVid from "./Components/Person/PersonYTVid";
import BettyQuiz from "./Components/Quiz/BettyQuiz";
import Resources from "./Components/Resources/Resources";
import CliveSullivanPortrait from "./Components/Resources/CliveSullivanPortrait";
import IdrisPhillips from "./Components/Resources/IdrisPhillips";
import JoeCalzaghe from "./Components/Resources/JoeCalzaghe";
import PenrhynCastle from "./Components/Resources/PenrhynCastle";
import ColinJackson from "./Components/Resources/ColinJackson";
import LennLawrence from "./Components/Resources/LennLawrence";
import LouisaBiog from "./Components/Resources/LouisaBiog";
import Windrush from "./Components/Resources/Windrush";
import ShirleyBassey from "./Components/Resources/ShirleyBassey";
import WilsonMonk from "./Components/Resources/WilsonMonk";
import Hans from "./Components/Resources/Hans";
import DiaryBoxArandora from "./Components/DiaryBox/DiaryBoxArandora";
import PersonPodcast from "./Components/Person/PersonPodcast";
import Vaughan from "./Components/Resources/Vaughan";
import DiaryBoxAshley from "./Components/DiaryBox/DiaryBoxAshley";
import NigelWalker from "./Components/Resources/NigelWalker";
import JoeErskine from "./Components/Resources/JoeErskine";

function useKey(key, cb) {
  const callbackRef = useRef(cb);

  useEffect(() => {
    callbackRef.current = cb;
  });

  useEffect(() => {
    function handle(event) {
      if (event.code === key) {
        callbackRef.current(event);
      }
    }

    document.addEventListener("keydown", handle);

    return () => document.removeEventListener("keydown", handle);
  }, [key]);
}

function App() {
  function handle1() {
    document.getElementById("PS1").click();
  }
  function handle2() {
    document.getElementById("PS2").click();
  }
  function handle3() {
    document.getElementById("PS3").click();
  }
  function handle4() {
    document.getElementById("PS4").click();
  }
  useKey("Digit1", handle1);
  useKey("Digit2", handle2);
  useKey("Digit3", handle3);
  useKey("Digit4", handle4);

  const [lang, setLang] = useState(false);
  return (
    <BrowserRouter basename="/hanesbame">
      <ScrollToTop />
      <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />

      <LanguageContext.Provider className="App" value={{ lang, setLang }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/6to9yo"
            element={<SixToNine id="page2"></SixToNine>}
          ></Route>
          <Route path="/3to6yo" element={<ThreeToSix></ThreeToSix>}></Route>
          <Route
            path="/12to16yo"
            element={<TwelveToSixteen></TwelveToSixteen>}
          ></Route>
          <Route
            path="/9to12yo"
            element={<NineToTwelve></NineToTwelve>}
          ></Route>
          <Route path="/12to12yo" element={<SixToNine></SixToNine>}></Route>
          <Route path="/back" element={<PersonBack></PersonBack>}></Route>
          <Route path="/Categories" element={<Categories />}></Route>
          <Route path="/Notes" element={<Notes />}></Route>
          <Route
            path="/Accessibility"
            element={<Accessibility></Accessibility>}
          ></Route>
          <Route path="/Info" element={<Info />}></Route>
          <Route path="/Quiz" element={<Quiz />}></Route>
          <Route path="/Resources" element={<Resources />}></Route>
          <Route
            path="9to12yo/Resources/CliveSullivan"
            element={<CliveSullivanPortrait bgColour={"#CFE57D"} />}
          ></Route>
          <Route
            path="6to9yo/Resources/IdrisPhillips"
            element={<IdrisPhillips />}
          ></Route>
          <Route
            path="12to16yo/Resources/JoeErskine"
            element={<JoeErskine />}
          ></Route>
          <Route
            path="9to12yo/Resources/Louisa"
            element={<LouisaBiog />}
          ></Route>
          <Route
            path="6to9yo/Resources/Windrush"
            element={<Windrush />}
          ></Route>
          <Route
            path="/6to9yo/Resources/LennLawrence"
            element={<LennLawrence />}
          ></Route>
          <Route
            path="6to9yo/Resources/ShirleyBassey"
            element={<ShirleyBassey />}
          ></Route>
          <Route
            path="6to9yo/Resources/WilsonMonk"
            element={<WilsonMonk />}
          ></Route>
          <Route
            path="9to12yo/Resources/ColinJackson"
            element={<ColinJackson />}
          ></Route>
          <Route
            path="9to12yo/Resources/JoeCalzaghe"
            element={<JoeCalzaghe />}
          ></Route>
          <Route
            path="9to12yo/Resources/PenrhynCastle"
            element={<PenrhynCastle />}
          ></Route>
          <Route path="9to12yo/Resources/Hans" element={<Hans />}></Route>
          <Route
            path="12to16yo/Resources/VaughanGething"
            element={<Vaughan />}
          ></Route>
          <Route
            path="12to16yo/Resources/NigelWalker"
            element={<NigelWalker />}
          ></Route>
          <Route
            path="6to9yo/Diaries/FongSui"
            element={<DiaryBox></DiaryBox>}
          ></Route>
          <Route
            path="12to16yo/Diaries/Ashley"
            element={<DiaryBoxAshley></DiaryBoxAshley>}
          ></Route>
          <Route
            path="6to9yo/Resources/ArandoraStarStrip"
            element={<DiaryBoxArandora></DiaryBoxArandora>}
          ></Route>
          <Route path="/RichardParksQuiz" element={<QuizData />}></Route>
          <Route path="/BettyQuiz" element={<BettyQuiz />}></Route>
          <Route
            path="/6to9yo/RichardParks"
            element={
              <PersonYTVid
                pscc={"/6to9yo"}
                psNum={"2"}
                backLContent={
                  "The experiences of another adventurer, Gerallt Wyn Jones."
                }
                backLContentCym={
                  "Fideo am brofiadau anturiaethwr arall, Gerallt Wyn Jones. "
                }
                quizButStyle={"showQuizBut"}
                indivName={"Richard Parks"}
                quizButtonText={"Try the quiz!"}
                linkQuiz={
                  "https://dev.addysgop.co.uk/hanesbame/RichardParksQuiz"
                }
                indivNameCym={"Richard Parks"}
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.gov.wales/st-david-awards/richard-parks "
                        className="resourceHref"
                        target="_blank"
                      >
                        A video about Richard Parks' St Davids awards nomination{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.walesonline.co.uk/news/wales-news/richard-parks-antarctic-fatherhood-dad-17659218"
                        className="resourceHref"
                        target="_blank"
                      >
                        An article about Richard Parks and his family{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.itv.com/news/wales/2022-03-14/the-pandemic-made-me-question-my-identity-and-my-value-to-the-world"
                        className="resourceHref"
                        target="_blank"
                      >
                        An article on Richard Park's identity{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.richardparks.co.uk/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Richard Parks official website{" "}
                      </a>
                    </li>

                    <li className="linkLi">
                      <a
                        href="https://www.richardparks.co.uk/team-quest-2020"
                        className="resourceHref"
                        target="_blank"
                      >
                        Blog from his website discussing his skiing adventure in
                        Antartica{" "}
                      </a>
                    </li>
                  </ul>
                }
                linksCym={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.llyw.cymru/gwobrau-dewi-sant/richard-parks"
                        className="resourceHref"
                        target="_blank"
                      >
                        Fideo am enwebiad gwobrau Dewi Sant Richard Parks
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.walesonline.co.uk/news/wales-news/richard-parks-antarctic-fatherhood-dad-17659218"
                        className="resourceHref"
                        target="_blank"
                      >
                        Erthygl am Richard Parks a’i deulu{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.itv.com/news/wales/2022-03-14/the-pandemic-made-me-question-my-identity-and-my-value-to-the-world"
                        className="resourceHref"
                        target="_blank"
                      >
                        Erthygl ar hunaniaeth Richard Parks{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.richardparks.co.uk/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Gwefan swyddogol Richard Parks{" "}
                      </a>
                    </li>

                    <li className="linkLi">
                      <a
                        href="https://www.richardparks.co.uk/team-quest-2020"
                        className="resourceHref"
                        target="_blank"
                      >
                        Blog oddi ar ei wefan yn disgrifio ei antur sgio yn
                        Antartica
                      </a>
                    </li>
                  </ul>
                }
                youtubeVid="https://www.youtube.com/embed/ZBmWbOYI8vk"
                youtubeVidCym={"https://www.youtube.com/embed/C2nPmzhAOrQ"}
                // indivPic={char1}
                text={
                  <ul>
                    <li>
                      Richard Parks was born on 14 August 1977, in Pontypridd to
                      a Jamaican mother and a Welsh father.
                    </li>
                    <li>
                      As a schoolboy Richard loved rugby, and he went on to play
                      rugby professionally.
                    </li>
                    <li>
                      Richard played for many clubs during his career, including
                      Pontypridd, Leeds, Perpignan and Newport Gwent Dragons. He
                      won many trophies!
                    </li>
                    <li>
                      {" "}
                      Richard represented Wales Sevens in the Rugby World Cup in
                      Argentina in 2001.{" "}
                    </li>
                    <li>Richard also won four caps playing for Wales.</li>
                    <li>
                      After being injured, Richard had to retire from rugby aged
                      31 in 2009.
                    </li>
                    <li>
                      He then reinvented himself as an extreme athlete – doing
                      very difficult and dangerous challenges.{" "}
                    </li>
                    <li>
                      In July 2011 Richard climbed the highest mountain on each
                      of the world’s seven continents and stood on all three
                      poles: the North Pole, the South Pole and the summit of
                      Everest! He completed this incredible journey within just
                      seven months.
                    </li>
                    <li>
                      In January 2014, Richard became the first Welshman, and
                      the fastest ever British person, to ski solo, without any
                      help from other people to the South Pole!
                    </li>
                    <li>
                      Richard Parks has also worked with the famous actor Will
                      Smith.{" "}
                    </li>
                    <li>
                      Richard proved that we are all capable of turning our
                      skills and abilities to do incredible things. He is an
                      inspirational figure to many – both in Wales and beyond.
                    </li>
                  </ul>
                }
                welshText={
                  <ul>
                    <li>
                      Ganwyd Richard Parks ym Mhontypridd ar 14 Awst 1977 i fam
                      o Jamaica a thad o Gymru.{" "}
                    </li>
                    <li>
                      Yn yr ysgol, roedd Richard yn chwaraewr rygbi medrus, yn
                      arbenigo yn chwarae safle blaenasgellwr ac aeth ymlaen i
                      chwarae rygbi’n broffesiynol.{" "}
                    </li>
                    <li>
                      Yn ystod ei yrfa rygbi, chwaraeodd Richard i Bontypridd
                      (gan ennill y Cwpan Principality), Leeds (gan ennill Cwpan
                      Powergen), Perpignan a Dreigiau Gwent Casnewydd.{" "}
                    </li>
                    <li>
                      Cynrychiolodd Richard Gymru yng Ngwpan y Byd Rygbi Saith
                      bob Ochr yn Yr Ariannin yn 2001.{" "}
                    </li>
                    <li>Enillodd Richard pedwar cap i Gymru hefyd. </li>
                    <li>
                      Yn dilyn anaf i’w ligamentau a phroblemau meddygol gyda’i
                      ysgwydd, ymddeolodd Richard o rygbi proffesiynol yn 31 oed
                      yn 2009.{" "}
                    </li>
                    <li>Yna ail-greodd ei hun fel athletwr eithafol. </li>
                    <li>
                      Ym mis Gorffennaf 2011, dringodd Richard y mynydd uchaf ym
                      mhob un o saith cyfandir y byd a safodd ar bob un o’r tri
                      phegwn (Pegwn y Gogledd, Pegwn y De a chopa Everest).
                      Cwblhaodd Richard y prawf anhygoel hwn o ddyfalbarhad a
                      chryfder mewn saith mis yn unig.{" "}
                    </li>
                    <li>
                      Ym mis Ionawr 2014, Richard oedd y Cymro cyntaf, a’r
                      person cyflymaf ym Mhrydain erioed, i sgïo ar ben ei hun,
                      heb gefnogaeth a heb gymorth, i Begwn y De.{" "}
                    </li>
                    <li>
                      Mae Richard Parks hefyd wedi gweithio gyda'r actor enwog
                      Will Smith.{" "}
                    </li>
                    <li>
                      Trwy ei gyflawniadau anhygoel – fel chwaraewr rygbi
                      proffesiynol ac fel athletwr eithafol – mae Richard Parks
                      wedi profi, er gwaethaf anawsterau a rhwystredigaethau,
                      ein bod i gyd yn gallu troi ein sgiliau a’n galluoedd i
                      wneud pethau eraill. Oherwydd yr agwedd hon o beidio byth
                      â rhoi fyny a’r penderfynoldeb i lwyddo gyda rhywbeth
                      newydd, mae Richard yn ysbrydoliaeth i gymaint o bobl –
                      yng Nghymru a thu hwnt.
                    </li>
                  </ul>
                }
                indivPic={
                  "https://www.richardparks.co.uk/files/2314/1140/2688/antartic-30.jpg"
                }
                backText={`Through his incredible achievements – as a professional rugby player and as an extreme athlete – Richard Parks proved that despite setbacks and frustrations, we are all capable of turning our skills and abilities to other things.  Because of his never-give-up attitude and determination to succeed at something new, Richard is an inspirational figure to many – both in Wales and beyond.   `}
                slugText={"The incredible athlete."}
                welshSlugText={"Yr athletwr anhygoel."}
                backWelshText={
                  "Trwy ei gyflawniadau anhygoel – fel chwaraewr rygbi proffesiynol ac fel athletwr eithafol – mae Richard Parks wedi profi, er gwaethaf anawsterau a rhwystredigaethau, ein bod i gyd yn gallu troi ein sgiliau a’n galluoedd i wneud pethau eraill.  Oherwydd yr agwedd hon o beidio byth â rhoi fyny a’r penderfynoldeb i lwyddo gyda rhywbeth newydd, mae Richard yn ysbrydoliaeth i gymaint o bobl – yng Nghymru a thu hwnt."
                }
                resource={api.slice(0, 1)}
              ></PersonYTVid>
            }
          ></Route>
          <Route
            path="/3to6yo/ShirleyBassey"
            element={<AnimCard indivName={"Shirley Bassey"} />}
          ></Route>
          <Route
            path="/3to6yo/SidoliIceCream"
            element={
              <AnimCard
                indivName={"Sidoli's Ice Cream"}
                sourceVid={"https://www.youtube.com/embed/19MmCWS2s6U"}
                sourceVidCym={"https://www.youtube.com/embed/HVU7HVg8-h0"}
              />
            }
          ></Route>
          <Route
            path="/3to6yo/HansLichtenstein"
            element={<AnimCard indivName={"Hans Lichtenstein"} />}
          ></Route>
          <Route
            path="/3to6yo/ArandoraStar"
            element={<AnimCard indivName={"The Arandora Star"} />}
          ></Route>
          <Route
            path="/3to6yo/TigerBay"
            element={<AnimCard indivName={"Tiger Bay"} />}
          ></Route>
          <Route
            path="/3to6yo/JohnYstumllyn"
            element={
              <AnimCard
                indivName={"John Ystumllyn"}
                sourceVid="https://www.youtube.com/embed/2llyk3-Lffk"
                sourceVidCym={"https://www.youtube.com/embed/1LMGniAE0Go"}
              />
            }
          ></Route>
          <Route
            path="/3to6yo/AbramWood"
            element={
              <AnimCard
                indivName={"Abram Wood"}
                sourceVid="https://www.youtube.com/embed/KA_5dmVTopI"
                sourceVidCym={"https://www.youtube.com/embed/q_8NtoaUIgY"}
              />
            }
          ></Route>
          <Route
            path="/3to6yo/BettyCampbell"
            element={
              <AnimCard
                indivName={"Betty Campbell"}
                sourceVid="https://www.youtube.com/embed/gikb903GUqM"
                sourceVidCym={"https://www.youtube.com/embed/UEcG_eEXRts"}
              />
            }
          ></Route>
          <Route
            path="/3to6yo/GaneshSubrahamanyan"
            element={
              <AnimCard
                indivName={"Dr Ganesh Subrahamanyan"}
                sourceVid="https://www.youtube.com/embed/qlN9J-DsxYM"
                sourceVidCym={"https://www.youtube.com/embed/2OOy40pWRPA"}
              />
            }
          ></Route>
          <Route
            path="/3to6yo/VernesterCyril"
            element={
              <AnimCard
                indivName={"Vernester Cyril"}
                sourceVid="https://www.youtube.com/embed/NEu7ctn7-8g"
                sourceVidCym={"https://www.youtube.com/embed/0m0Z_vGwVgA"}
              />
            }
          ></Route>

          <Route
            path="/12to16yo/NigelWalker"
            element={
              <Person
                pscc={"/12to16yo"}
                psNum={"4"}
                welshSlugText="Athletwr, chwaraewr rygbi a phrif weithredwr. "
                backcardImg={nige}
                linkResource="./../Resources/NigelWalker"
                resourceOverlay={
                  "An imaginary newspaper article about Nigel Walker."
                }
                resourceOverlayWelsh={
                  "Erthygl papur newydd dychmygol am Nigel Walker. "
                }
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.bbc.co.uk/sport/rugby-union/57835005"
                        className="resourceHref"
                        target="_blank"
                      >
                        BBC sports article on Nigel Walker's appointment as
                        performance director{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.itv.com/news/wales/2022-04-05/welsh-sporting-great-nigel-walker-on-values-success-and-life-in-1970s-cardiff"
                        className="resourceHref"
                        target="_blank"
                      >
                        Nigel Walker speaks on racism
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.walesonline.co.uk/sport/rugby/rugby-news/nigel-walker-interview-ive-joined-21710769"
                        className="resourceHref"
                        target="_blank"
                      >
                        Nigel Walker on his involvement with the WRU{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.walesonline.co.uk/sport/rugby/rugby-news/nigel-walker-interview-cult-hero-14987772"
                        className="resourceHref"
                        target="_blank"
                      >
                        Interview with Nigel Walker (2018)
                      </a>
                    </li>
                  </ul>
                }
                linksCym={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.bbc.co.uk/sport/rugby-union/57835005"
                        className="resourceHref"
                        target="_blank"
                      >
                        Erthygl BBC Sports am Nigel Walker yn cael ei benodi yn
                        gyfarwyddwr perfformiadau
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.itv.com/news/wales/2022-04-05/welsh-sporting-great-nigel-walker-on-values-success-and-life-in-1970s-cardiff"
                        className="resourceHref"
                        target="_blank"
                      >
                        Nigel Walker yn rhannu ei farn ar hiliaeth{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.walesonline.co.uk/sport/rugby/rugby-news/nigel-walker-interview-ive-joined-21710769"
                        className="resourceHref"
                        target="_blank"
                      >
                        Erthygl Wales Online{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.walesonline.co.uk/sport/rugby/rugby-news/nigel-walker-interview-cult-hero-14987772"
                        className="resourceHref"
                        target="_blank"
                      >
                        Cyfweliad â Nigel Walker (2018)
                      </a>
                    </li>
                  </ul>
                }
                resource={twelveApi.slice(1, 2)}
                indivName={"Nigel Walker"}
                indivNameCym={"Nigel Walker"}
                indivPic={
                  "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/4F4B/production/_119399202_cdf_300720_cf_nigel_walker_12.jpg"
                }
                bgcolor="#FF686B"
                text={
                  <ul>
                    <li>Nigel Walker was born in Cardiff on 15 June 1963. </li>
                    <li>
                      Nigel represented Great Britain and Northern Ireland at
                      the 1984 summer Olympics in the 110m hurdles.{" "}
                    </li>

                    <li>
                      Nigel holds the fastest non-winning time for the 200-metre
                      hurdles. At Cardiff in 1991, he ran 22.77 seconds.{" "}
                    </li>

                    <li>
                      When he failed the make the Olympic squad for the 1992
                      games in Barcelona, Nigel was persuaded to try rugby,
                      following a chance meeting with Mark Ring. Nigel joined
                      Cardiff RFC and, playing on the wing, he soon became a
                      crowd favourite at the Arms Park.{" "}
                    </li>

                    <li>
                      In a six-year career for the Blue and Blacks, Nigel played
                      121 games and scored 78 tries. On 6 March 1993, Nigel made
                      his Five Nations debut against Ireland. Nigel went on to
                      represent Wales 17 times scoring 12 tries – making his
                      final appearance for Wales against England on 21 February
                      1998. During his rugby career, Nigel also played for the
                      Barbarians.{" "}
                    </li>

                    <li>
                      In 2001, Nigel was appointed Head of Sport at BBC Wales.
                      In 2010, Walker became the National Director at the
                      English Institute of Sport (EIS). In 2018, celebrating
                      Black History Month in the UK, Walker was included in a
                      list of “100 Brilliant, Black and Welsh people”.{" "}
                    </li>

                    <li>
                      In Autumn 2021, Nigel left his role at the EIS to take up
                      the position of Performance Director at the Welsh Rugby
                      Union. Nigel Walker has also sat on the UK Sport Board
                      where he chaired its major events Panel.{" "}
                    </li>
                    <li>
                      In January 2023, he was appointed as the Acting CEO of the
                      Welsh Rugby Union following the resignation of Steve
                      Phillips.
                    </li>
                  </ul>
                }
                welshText={
                  <ul>
                    <li>
                      Ganwyd Nigel Walker yng Nghaerdydd ar 15 Mehefin 1963.{" "}
                    </li>
                    <li>
                      Cynrychiolodd Nigel Brydain Fawr a Gogledd Iwerddon yng
                      Ngemau Olympaidd yr haf Prydain Fawr a Gogledd Iwerddon ym
                      1984 yn y ras 110m dros y clwydi.{" "}
                    </li>

                    <li>
                      Gan Walker y mae’r amser heb ennill cyflymaf ar gyfer y
                      ras 200 metr dros y clwydi. Yng Nghaerdydd ym 1991,
                      rhedodd y ras mewn 22.77 eiliad.{" "}
                    </li>

                    <li>
                      Pan fethodd gyrraedd y garfan Olympaidd ar gyfer gemau
                      1992 yn Barcelona, perswadiwyd Nigel i roi cynnig ar
                      rygbi, yn dilyn cyfarfod ar hap gyda Mark Ring. Ymunodd
                      Nigel â Chlwb Rygbi Caerdydd ac, yn chwarae ar yr asgell,
                      daeth yn ffefryn gan y dorf ym Mharc yr Arfau yn gyflym
                      iawn.{" "}
                    </li>

                    <li>
                      Mewn gyrfa dros chwe blynedd i’r Gleision a’r Duon,
                      chwaraeodd Nigel 121 o gemau a sgorio 78 cais. Ar 6 Mawrth
                      1993, chwaraeodd Nigel ym Mhencampwriaeth y Pum Gwlad am y
                      tro cyntaf yn erbyn Iwerddon. Aeth Walker ymlaen i
                      gynrychioli Cymru 17 o weithiau gan sgorio 12 cais – gan
                      wneud ei ymddangosiad terfynol dros Gymru yn erbyn Lloegr
                      ar 21 Chwefror 1998. Yn ystod ei yrfa rygbi, chwaraeodd
                      Nigel i’r Barbariaid hefyd.{" "}
                    </li>

                    <li>
                      Yn 2001, penodwyd Nigel yn Bennaeth Chwaraeon BBC Cymru.
                      Yn 2010, gwnaed Nigel yn Gyfarwyddwr Cenedlaethol yr
                      English Institute of Sport (EIS). Yn 2018, wrth ddathlu
                      Mis Hanes Pobl Ddu yn y DU, cafodd Nigel ei gynnwys mewn
                      rhestr o “100 Brilliant, Black and Welsh people”.{" "}
                    </li>

                    <li>
                      Yn Nhymor yr Hydref 2021, gadawodd Nigel ei rôl yn yr EIS
                      i dderbyn swydd Cyfarwyddwr Perfformiad Undeb Rygbi Cymru.
                      Mae Nigel Walker wedi eistedd ar Fwrdd Chwaraeon y DU
                      hefyd, gan gadeirio’r Panel digwyddiadau mawr.{" "}
                    </li>
                  </ul>
                }
                backText={`Nigel Walker’s career path demonstrates how with perseverance, hard work and focus we can achieve our goals and use our abilities and skills to further our ambitions.  
  
                `}
                backWelshText={
                  "Mae llwybr gyrfa Nigel Walker yn dangos, gyda dyfalbarhad, gwaith caled a ffocws, y gallwn gyrraedd ein nodau a defnyddio ein galluoedd a’n sgiliau i gyflawni ein huchelgeisiau.  "
                }
                slugText={"Athlete, rugby player and high achiever."}
                resources={api}
              ></Person>
            }
          ></Route>
          <Route
            path="/12to16yo/GlennWebbe"
            element={
              <PersonPodcast
                pscc={"/12to16yo"}
                psNum={"4"}
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://jomec.co.uk/thecardiffian/2020/01/28/glenn-webbe-why-laughter-can-be-best-weapon-against-abuse/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Glenn Webbe on dealing with racism
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.walesonline.co.uk/sport/rugby/rugby-news/how-life-turned-out-glen-15213382"
                        className="resourceHref"
                        target="_blank"
                      >
                        Wales Online article on Glen Webbe's career{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.wru.wales/2019/05/webbe-recalls-historic-world-cup-treble/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Article on Webbe as the first black player at the Rugby
                        World Cup{" "}
                      </a>
                    </li>
                  </ul>
                }
                linksCym={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://jomec.co.uk/thecardiffian/2020/01/28/glenn-webbe-why-laughter-can-be-best-weapon-against-abuse/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Glenn Webbe yn son am ddelio â hiliaeth{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.walesonline.co.uk/sport/rugby/rugby-news/how-life-turned-out-glen-15213382"
                        className="resourceHref"
                        target="_blank"
                      >
                        Erthygl Wales Online ar yrfa Glen Webbe{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.wru.wales/2019/05/webbe-recalls-historic-world-cup-treble/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Erthygl am Webbe fel y chwaraewr du cyntaf yng Nghwpan
                        Rygbi y Byd
                      </a>
                    </li>
                  </ul>
                }
                resource={twelveApi.slice(0, 1)}
                indivName={"Glenn Webbe"}
                indivNameCym={"Glenn Webbe"}
                indivPic={
                  "https://ichef.bbci.co.uk/onesport/cps/624/cpsprodpb/DC57/production/_113170465_shutterstock_editorial_3156656a.jpg"
                }
                text={
                  <ul>
                    <li>
                      Glenn Webbe was born on 21 January 1962 in Cardiff. His
                      parents were part of the Windrush generation.{" "}
                    </li>
                    <li>
                      He attended Glan Ely Comprehensive School and won
                      recognition for his rugby, baseball and athletics skills.{" "}
                    </li>

                    <li>
                      Having joined Cardiff RFC, Glenn was advised to leave as
                      there were ‘cliques’ in the Cardiff team. So, aged 18,
                      Glenn agreed to play for Bridgend RFC. He played fourteen
                      seasons for the club.{" "}
                    </li>

                    <li>
                      On 12 June 1986, during Wales’ South Pacific tour, Glenn
                      made his international debut as a replacement against
                      Tonga.{" "}
                    </li>

                    <li>
                      He made his home debut in the 1987 Five Nations win
                      against England and was subsequently picked for
                      the inaugural World Cup in New Zealand.{" "}
                    </li>

                    <li>
                      At the world cup, Glenn played against Tonga and scored
                      two tries early in the match. However, he was knocked
                      unconscious as a result of a high tackle. Wales had
                      already used their two substitutions, so Glenn played on –
                      seemingly by instinct. He even scored a brilliant third
                      try, sprinting ninety metres and beating a number of
                      defenders in a 29-16 win for Wales.{" "}
                    </li>

                    <li>
                      Sent home on safety grounds, Glenn missed Wales’ third
                      place finish. He now says that he can’t remember the match
                      after the tackle – including his third try. Because of
                      exploits at the 1987 World Cup and his reputation for
                      being stoical and humorous, Glenn is often described as
                      “Wales’ first black icon”.{" "}
                    </li>

                    <li>
                      Glenn says he witnessed ‘very little racism’ during his
                      rugby career. But during a match at local rivals Maesteg,
                      Glenn was racially abused by a small number of spectators.
                      His reaction saw him being warmly cheered and applauded by
                      the crowd.{" "}
                    </li>
                  </ul>
                }
                welshText={
                  <ul>
                    <li>
                      Ganwyd Glenn Webbe ar 21 Ionawr 1962 yng Nghaerdydd. Roedd
                      ei rieni’n rhan o genhedlaeth Windrush.{" "}
                    </li>

                    <li>
                      Mynychodd Ysgol Gyfun Glan Ely a chafodd gydnabyddiaeth am
                      ei sgiliau rygbi, pêl-fasged ac athletau.{" "}
                    </li>

                    <li>
                      Ar ôl ymuno â Chlwb Rygbi Caerdydd, cynghorwyd Glenn i
                      adael am fod ‘clymbleidiau’ (cliques) yn nhîm Caerdydd.
                      Felly, yn 18 oed, cytunodd Glenn i chwarae i Glwb Rygbi
                      Pen-y-bont ar Ogwr. Chwaraeodd bedwar tymor ar ddeg i’r
                      clwb.{" "}
                    </li>

                    <li>
                      Ar 12 Mehefin 1986, yn ystod taith Cymru o Dde’r Môr
                      Tawel, chwaraeodd Glenn ei gêm ryngwladol gyntaf fel
                      eilydd yn erbyn Tonga.{" "}
                    </li>

                    <li>
                      Chwaraeodd ei gêm gartref gyntaf ym muddugoliaeth y Pum
                      Gwlad yn erbyn Lloegr ym 1987 ac o ganlyniad, cafodd ei
                      ddewis ar gyfer y Cwpan y Byd Cyntaf yn Seland Newydd.{" "}
                    </li>
                    <li>
                      Yng nghwpan y byd, chwaraeodd Glenn yn erbyn Tonga a
                      sgorio dau gais yn gynnar yn y gêm. Fodd bynnag, cafodd ei
                      daro’n anymwybodol o ganlyniad i dacl uchel. Roedd Cymru
                      eisoes wedi defnyddio eu dau eilydd, felly chwaraeodd
                      Glenn ymlaen – yn reddfol yn ôl pob golwg. Sgoriodd
                      drydydd cais gwych, gan redeg naw deg metr a churo nifer o
                      amddiffynwyr mewn buddugoliaeth o 29-16 i Gymru.{" "}
                    </li>

                    <li>
                      Collodd Glenn Cymru’n dod yn drydydd am iddo gael ei anfon
                      gartref ar sail diogelwch. Bellach, dywed nad yw’n gallu
                      cofio’r gêm ar ôl y dacl – yn cynnwys ei drydydd cais.
                      Oherwydd ei gampau yng Nghwpan y Byd 1987 a’i enw da am
                      fod yn stoicaidd ac yn ddoniol, mae Glenn yn cael ei
                      ddisgrifio’n aml fel “eicon du cyntaf Cymru”.{" "}
                    </li>

                    <li>
                      Dywed Glenn iddo weld ‘ychydig iawn o hiliaeth’ yn ystod
                      ei yrfa rygbi. Ond yn ystod gêm yn erbyn y tîm lleol,
                      Maesteg, dioddefodd Glenn gamdriniaeth hiliol gan nifer
                      fach o wylwyr. Arweiniodd ei ymateb ato’n cael ei
                      gymeradwyo’n wresog a’i ganmol gan y dorf.{" "}
                    </li>
                  </ul>
                }
                backText={`Hopefully, the racism Glenn experienced and the expectation that he would ‘play on’ despite suffering a head injury now belong firmly in the past.  
                `}
                slugText={"Wales' first rugby black icon."}
                welshSlugText={"Eicon rygbi du cyntaf Cymru."}
                backWelshText={
                  "Gobeithio bod yr hiliaeth a brofodd Glenn a’r disgwyliad y byddai’n ‘parhau i chwarae’ er gwaetha’r ffaith ei fod wedi dioddef anaf i’w ben, bellach yn wirioneddol yn y gorffennol."
                }
                backLContent={theo}
                overlayTextCym="Mel Owen yn cyfweld â'r chwaraewr rygbi Theo Cabango. "
                overlayText="Rugby player Theo Cabango and Mel Owen in discussion."
                bgImg={"podcastImgOverlay"}
                backLContentCym={theoCym}
              ></PersonPodcast>
            }
          ></Route>
          <Route
            path="/6to9yo/HananIssa"
            element={
              <PersonPodcast
                pscc={"/6to9yo"}
                psNum={"2"}
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.gov.wales/hate-hurts-wales"
                        className="resourceHref"
                        target="_blank"
                      >
                        Welsh Government site about hate crime (for teachers)
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.walesartsreview.org/hanan-issa-in-conversation/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Wales Art Review - Hanan Issa Interview{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://poetrywales.co.uk/hanan-issa-on-how-she-writes-a-poem/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Poetry Wales - Hanan Issa on how she writes a poem
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.literaturewales.org/our-projects/representing-wales-2020/representing-wales-cohort/hanan-issa/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Hanan Issa - Representing Wales interview
                      </a>
                    </li>
                  </ul>
                }
                linksCym={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.llyw.cymru/mae-casineb-yn-brifo-cymru"
                        className="resourceHref"
                        target="_blank"
                      >
                        Gwefan Llywodraeth Cymru am drosedd casineb (ar gyfer
                        athrawon)
                      </a>
                    </li>
                  </ul>
                }
                resource={twelveApi.slice(0, 1)}
                indivName={"Hanan Issa"}
                indivNameCym={"Hanan Issa"}
                indivPic={"https://www.dev.addysgop.co.uk/pdfs/hanan.png"}
                text={
                  <ul>
                    <li>
                      Hanan Issa is a Welsh-Iraqi poet, artist, and film-maker
                      from Cardiff.
                    </li>
                    <li>
                      In 2022, she was announced as the National Poet of Wales.
                    </li>

                    <li>She is the first Muslim National Poet of Wales.</li>

                    <li>
                      Hanan published her first book of poetry My Body Can House
                      Two Hearts, in 2019.
                    </li>

                    <li>
                      She has written a story for 'The Mab' - a collection of
                      stories about the Mabinogi and is also writing a
                      collection of stories for children called 'And I Hear
                      Dragons'
                    </li>

                    <li>
                      She has also written TV shows and has made a film called
                      ‘The Golden Apple’
                    </li>

                    <li>
                      Hanan grew up around a mix of languages, including Arabic
                      from her Iraqi family, and Welsh from her grandparents.
                    </li>

                    <li>
                      She recalls her Welsh grandparents reading poems to her
                      from a young age.
                    </li>
                    <li>
                      She says that being raised in Wales inspired her to become
                      a poet.
                    </li>
                    <li>
                      When discussing Wales, Hanan says that “poetry exists in
                      the bones of this country.” and that she wants to
                      encourage a more open sense of what ‘Welshness’ is.
                    </li>
                    <li>
                      Sadly, Hanan was sad but not surprised that when she was
                      made National Poet of Wales a small number of people made
                      racist comments.
                    </li>
                    <li>
                      Hanan hopes that during her time as National Poet of
                      Wales, women will see her success and know that they can
                      achieve it, too.
                    </li>
                  </ul>
                }
                welshText={
                  <ul>
                    <li>
                      Mae Hanan Issa yn fardd, yn artist ac mae hi’n gwneud
                      ffilmiau. Mae'n byw yng Nghaerdydd ac mae hi'n Gymraes o
                      dras Irac.
                    </li>

                    <li>
                      Yn 2022, cafodd hi ei gwneud yn Fardd Cenedlaethol Cymru.
                    </li>

                    <li>
                      Hi yw Mwslim cyntaf i fod yn Fardd Cenedlaethol Cymru.
                    </li>

                    <li>
                      Cyhoeddodd Hanan ei llyfr cyntaf o gerddi, My Body Can
                      House Two Hearts, yn 2019.
                    </li>

                    <li>
                      Mae hi wedi ysgrifennu stori ar gyfer ‘The Mab’ – casgliad
                      o storïau am y Mabinogi. Yn ogystal, mae hi'n ysgrifennu
                      casgliad o storïau i blant o'r enw ‘And I Hear Dragons’.
                    </li>
                    <li>
                      Hefyd, mae hi wedi ysgrifennu sioeau teledu ac wedi gwneud
                      ffilm o'r enw ‘The Golden Apple’.
                    </li>

                    <li>
                      Roedd Hanan yn clywed llawer o ieithoedd pan oedd hi'n
                      ferch fach, gan gynnwys Arabeg oddi wrth ei theulu o Irac,
                      a Chymraeg oddi wrth ei mam-gu a'i thad-cu.
                    </li>

                    <li>
                      Mae hi'n cofio clywed ei mam-gu a'i thad-cu sy'n siarad
                      Cymraeg yn darllen cerddi iddi pan oedd hi'n ferch fach.
                    </li>
                    <li>
                      Mae hi'n dweud bod cael ei magu yng Nghymru wedi ei
                      hysbrydoli hi i fod yn fardd.
                    </li>
                    <li>
                      Wrth drafod Cymru, mae Hanan yn dweud bod “barddoniaeth yn
                      esgyrn y wlad hon”, a'i bod hi eisiau annog pobl i feddwl
                      yn fwy agored am beth yw ‘Cymreictod’.
                    </li>
                    <li>
                      Yn anffodus, roedd Hanan yn drist ond heb ei synnu bod
                      nifer bach o bobl wedi dweud pethau hiliol pan gafodd hi
                      ei gwneud yn Fardd Cenedlaethol Cymru.
                    </li>
                    <li>
                      Yn ystod ei chyfnod fel Bardd Cenedlaethol Cymru, mae
                      Hanan yn gobeithio bydd menywod yn gweld ei llwyddiant ac
                      yn gwybod y gallan nhw fod yn llwyddiannus hefyd.
                    </li>
                  </ul>
                }
                w
                slugText={"The National Poet of Wales."}
                welshSlugText={"Bardd Cenedlaethol Cymru."}
                backLContent={hanan}
                overlayText="Hanan Isa talking about being a poet"
                overlayTextCym={"Hanan Issa yn trafod bod yn fardd."}
                bgImg={"ImgOverlayHanan"}
                backLContentCym={hanan}
              ></PersonPodcast>
            }
          ></Route>
          <Route
            path="/9to12yo/PenrhynCastle"
            element={
              <Person
                pscc={"/9to12yo"}
                psNum={"3"}
                resourceOverlay={
                  "Should you visit Penrhyn Castle? Argument for and against."
                }
                resourceOverlayWelsh="A ddylech chi ymweld â Chastell Penrhyn?"
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.nationaltrust.org.uk/visit/wales/penrhyn-castle-and-garden/penrhyn-castle-and-slave-trade-history"
                        className="resourceHref"
                        target="_blank"
                      >
                        Penrhyn Castle's Colonial History{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.nationaltrust.org.uk/visit/wales/penrhyn-castle-and-garden/history-of-penrhyn-castle-and-garden"
                        className="resourceHref"
                        target="_blank"
                      >
                        History of Penrhyn Castle
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://footsteps.bangor.ac.uk/images/sites/penrhyn-castle/virtual/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Virtual Tour of Penrhyn Castle{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.revisitinghistory.com/castles/wales/penrhyn-castle/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Interesting facts about Penrhyn Castle{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.blackhistorymonth.org.uk/article/section/history-of-slavery/the-welsh-slave-owner-and-anti-abolitionist-mp-richard-pennant/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Article about Richard Pennant{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://footsteps.bangor.ac.uk/en/location/penrhyn-castle"
                        className="resourceHref"
                        target="_blank"
                      >
                        Journey to the Past - Penrhyn Castle
                      </a>
                    </li>
                  </ul>
                }
                linksCym={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.nationaltrust.org.uk/cy/visit/wales/penrhyn-castle-and-garden/castell-penrhyn-a-hanes-fasnach-gaethwasiaeth"
                        className="resourceHref"
                        target="_blank"
                      >
                        Hanes trefedigaethol Castell Penrhyn{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://nationaltrust.org.uk/cy/visit/wales/penrhyn-castle-and-garden/hanes-castell-penrhyn-ar-ardd"
                        className="resourceHref"
                        target="_blank"
                      >
                        Hanes Castell Penrhyn{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://footsteps.bangor.ac.uk/images/sites/penrhyn-castle/virtual/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Taith rhithiol o Gastell Penrhyn
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.revisitinghistory.com/castles/wales/penrhyn-castle/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Ffeithiau diddorol am Gastell Penrhyn{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.blackhistorymonth.org.uk/article/section/history-of-slavery/the-welsh-slave-owner-and-anti-abolitionist-mp-richard-pennant/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Erthygl am Richard Pennant{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://footsteps.bangor.ac.uk/cy/location/penrhyn-castle"
                        className="resourceHref"
                        target="_blank"
                      >
                        Taith i'r Gorffennol - Castell Penrhyn{" "}
                      </a>
                    </li>
                  </ul>
                }
                backcardImg={castle}
                bgcolor={"#A2D6F9"}
                indivName={"Penrhyn Castle"}
                indivNameCym={"Castell Penrhyn"}
                linkResource={"./../Resources/PenrhynCastle"}
                resource={nineApi.slice(2, 1)}
                indivPic={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Penrhyn_Castle_Wales_015.jpg/640px-Penrhyn_Castle_Wales_015.jpg"
                }
                text={
                  <ul>
                    <li>
                      Penrhyn Castle in North Wales was built on a dark history:
                      the slave trade.
                    </li>
                    <li>
                      In the late 17th Century, Gifford Pennant from Flintshire
                      was given land in Jamaica when he moved there.
                    </li>
                    <li>
                      By the 1700’s, the Pennant family had returned to Britain.
                    </li>

                    <li>
                      When Richard Pennant, a descendant of Gifford Pennant,
                      became the 1st baron they were controlling their Jamaican
                      properties by letter.
                    </li>

                    <li>
                      The estate grew and the numbers of slaves increased.
                    </li>

                    <li>
                      By 1805, Richard Pennant owned nearly 1,000 enslaved
                      people across his four plantations in Jamaica.
                    </li>

                    <li>
                      Richard Pennant’s ignorance is recorded in his letters of
                      instruction to estate managers. He describes slaves as
                      ‘chattels’ (moveable property).
                    </li>

                    <li>
                      Despite his links to slavery, Richard Pennant was known as
                      ‘the Improver’, investing his fortune in his North Wales
                      estate.
                    </li>

                    <li>
                      Money from Jamaica funded roads, railways, schools and the
                      Penrhyn Quarry, once the largest slate quarry in the
                      world.
                    </li>

                    <li>
                      The slate industry throughout North Wales was mostly
                      financed through slavery.
                    </li>
                    <li>
                      In 1767, Richard Pennant became one of the two MPs for
                      Liverpool: the major slave trade port of the UK.{" "}
                    </li>
                    <li>
                      Pennant became part of a group of people who wanted to
                      keep the slave trade lawful as some people thought it
                      should be banned.
                    </li>
                    <li>
                      On 25th March 1807, Parliament outlawed buying and selling
                      slaves within the British empire.
                    </li>
                    <li>
                      Slavery itself was finally outlawed in all British
                      colonies between 1833 and 1838 and the building of Penrhyn
                      Castle ended.{" "}
                    </li>
                  </ul>
                }
                welshText={
                  <ul>
                    <li>
                      Adeiladwyd Castell godidog Penrhyn yng ngogledd Cymru ar
                      hanes tywyll: un o gamfanteisio, ffortiwn diwydiant siwgr
                      Jamaica a masnach gaethwasiaeth ar draws yr Iwerydd.{" "}
                    </li>
                    <li>
                      Ar ddiwedd yr 17eg Ganrif, fe wnaeth Gifford Pennant o Sir
                      y Fflint gaffael tir yn Jamaica.{" "}
                    </li>
                    <li>
                      Erbyn y 1700au, roedd y teulu Pennant wedi dychwelyd i
                      Brydain a phan ddaeth Richard Pennant yn farwn 1af
                      Penrhyn, roeddent yn rheoli eu heiddo Jamaicaidd trwy
                      lythyr.{" "}
                    </li>
                    <li>
                      Datblygodd yr ystâd a chynyddodd nifer y caethweision.
                      Erbyn 1805, roedd Richard Pennant, un o ddisgynyddion
                      Gifford, yn berchen ar bron 1,000 o bobl oedd yn
                      gaethweision ar draws ei pedair planhigfa yn Jamaica.{" "}
                    </li>
                    <li>
                      Mae anwybodaeth Richard Pennant wedi ei gofnodi yn ei
                      lythyr o gyfarwyddyd i’r rheolwyr ystadau. Disgrifir y
                      bobl oedd yn gaethweision fel ‘chattels’ (eiddo y gellir
                      ei symud).{" "}
                    </li>
                    <li>
                      Er gwaethaf ei gysylltiadau â chaethwasiaeth, roedd
                      Richard Pennant yn adnabyddus fel ‘the Improver’, yn
                      buddsoddi ei ffortiwn yn ei ystâd yng Ngogledd Cymru.{" "}
                    </li>
                    <li>
                      Ariannodd arian o Jamaica ffyrdd, rheilffyrdd, ysgolion a
                      Chwarel Penrhyn, y chwarel lechi fwyaf yn y byd ar un
                      adeg. Gellir dweud hefyd i’r diwydiant llechi yng Ngogledd
                      Cymru gael ei ariannu’n bennaf trwy gaethwasiaeth.{" "}
                    </li>
                    <li>
                      Ym 1767, daeth Richard Pennant yn un o ddau AS ar gyfer
                      Lerpwl: prif borthladd y fasnach gaethwasiaeth yn y DU.{" "}
                    </li>
                    <li>
                      Daeth Pennant yn rhan o rwydwaith grymus oedd o blaid
                      caethwasiaeth ac roedd ganddo gysylltiadau â bron bob un o
                      berchnogion absennol Prydeinig y planhigfeydd.{" "}
                    </li>
                    <li>
                      Er gwaethaf gwrthwynebiad gan y lobi o blaid
                      caethwasiaeth, yn cynnwys Richard Pennant, ar 25 Mawrth
                      1807, gwaharddodd y Senedd y fasnach gaethwasiaeth yn yr
                      ymerodraeth Brydeinig. Cafodd cludo caethweision i Jamaica
                      ei wahardd ym Mawrth 1808.{" "}
                    </li>
                    <li>
                      Gwaharddwyd caethwasiaeth yn holl drefedigaethau Prydain
                      rhwng 1833 a 1838 a daeth gwaith adeiladu Castell Penrhyn
                      i ben.{" "}
                    </li>
                  </ul>
                }
                backText={`The Pennant family received in today’s money £1.3 million for freeing 764 enslaved people in Jamaica.  It is money forever tarnished by the suffering caused by slavery.`}
                slugText={"The impressive castle and the slave trade."}
                welshSlugText={"Y castell a chaethwasiaeth."}
                backWelshText={
                  "Yn arian heddiw, derbyniodd y teulu Pennant £1.3 miliwn am ryddhau 764 o gaethweision yn Jamacia.  Mae’n arian sydd wedi ei lychwino am byth gan y dioddefaint a achoswyd gan gaethwasiaeth. "
                }
              ></Person>
            }
          ></Route>
          <Route
            path="/9to12yo/HansLichtenstein"
            element={
              <Person
                pscc={"/9to12yo"}
                psNum={"3"}
                backcardImg={hans}
                bgcolor={"#A2D6F9"}
                resourceOverlay={"An imaginary monologue."}
                resourceOverlayWelsh="Monolog dychmygol. "
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.aber.ac.uk/en/news/archive/2018/11/title-218626-en.html"
                        className="resourceHref"
                        target="_blank"
                      >
                        Was ‘Kindertransport’ a success?{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.bbc.co.uk/news/uk-wales-49349239"
                        className="resourceHref"
                        target="_blank"
                      >
                        From Berlin to Aberystwyth
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.bbc.co.uk/newsround/46877532"
                        className="resourceHref"
                        target="_blank"
                      >
                        What was Kindertransport? (Newsround){" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.theguardian.com/society/2019/apr/02/hans-lichtenstein-obituary"
                        className="resourceHref"
                        target="_blank"
                      >
                        Obituary to Hans Lichtenstein
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.countytimes.co.uk/news/17369270.llandrindod-wells-tributes-paid-inspirational-heroic-family-doctor-hans-lichtenstein/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Local news article following his death
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://forward.com/culture/461412/long-after-the-kindertransport-the-trauma-remained/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Hans' son writes on trauma of his move to Wales
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="http://drdeereallifesuperheroes.blogspot.com/2020/10/jewish-holocaust-survivor-hans.html"
                        className="resourceHref"
                        target="_blank"
                      >
                        Real Life Super Heroes - Hans Lichtenstein{" "}
                      </a>
                    </li>
                  </ul>
                }
                linksCym={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.aber.ac.uk/cy/news/archive/2018/11/title-218626-cy.html"
                        className="resourceHref"
                        target="_blank"
                      >
                        Oedd ‘Kindertransport’ yn lwyddiant?
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.bbc.co.uk/news/uk-wales-49349239"
                        className="resourceHref"
                        target="_blank"
                      >
                        O Berlin i Aberystwyth
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.bbc.co.uk/newsround/46877532"
                        className="resourceHref"
                        target="_blank"
                      >
                        Beth oedd Kindertransport? (Newsround)
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.theguardian.com/society/2019/apr/02/hans-lichtenstein-obituary"
                        className="resourceHref"
                        target="_blank"
                      >
                        Ysgrif goffa i Hans Lichenstein{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.countytimes.co.uk/news/17369270.llandrindod-wells-tributes-paid-inspirational-heroic-family-doctor-hans-lichtenstein/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Erthygl newyddion lleol yn dilyn ei farwolaeth{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://forward.com/culture/461412/long-after-the-kindertransport-the-trauma-remained/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Mab Hans yn ysgrifennu ar effaith niweidiol symud i
                        Gymru{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="http://drdeereallifesuperheroes.blogspot.com/2020/10/jewish-holocaust-survivor-hans.html"
                        className="resourceHref"
                        target="_blank"
                      >
                        Arwyr bywyd go iawn - Hans Lichtenstein{" "}
                      </a>
                    </li>
                  </ul>
                }
                linkResource={"./../Resources/Hans"}
                indivName={"Dr Hans Lichtenstein"}
                indivNameCym={"Dr Hans Lichtenstein"}
                indivPic={
                  "https://i.guim.co.uk/img/media/7c810c258320be244e1d7d4d721e8a171409c677/180_145_1240_744/master/1240.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=d36ac08cc3c44a21c37572bfc483bb4c"
                }
                resource={nineApi.slice(1, 2)}
                text={
                  <>
                    <ul>
                      <li>Hans Lichtenstein was born in Germany in 1928.</li>
                      <li>
                        Hitler was appointed chancellor of Germany on 30 January
                        1933.
                      </li>
                      <li>
                        Hitler and the Nazi Party hated ethnic minorities,
                        including Jewish people, and Jewish people were treated
                        very badly in Germany.
                      </li>

                      <li>
                        During Kristallnacht in 1938, many Jewish shops and
                        businesses were destroyed and looted.
                      </li>
                      <li>
                        The term Kristallnacht literally means Crystal Night and
                        refers to the broken glass which covered the floor after
                        the night of violence.{" "}
                      </li>
                      <li>
                        One of the shops that was destroyed belonged to Ruth and
                        Walter Lichtenstein, Hans's parents.
                      </li>

                      <li>
                        During Hitler’s time in power, brave people joined
                        together to rescue Jewish children. This rescue
                        operation was called ‘Kindertransport’ (Children’s
                        Transport).
                      </li>
                      <li>
                        Only children under 17 years old were allowed to enter
                        the UK which meant their parents could not come.{" "}
                      </li>
                      <li>
                        This meant a difficult decision for parents to let their
                        children travel to the UK on their own and live with a
                        foster family to avoid persecution.{" "}
                      </li>
                      <li>
                        One of the children that was rescued was Hans
                        Lichtenstein who arrived in Britain when he was just 12
                        years old.
                      </li>
                      <li>
                        Hans arrived in Britain when he was just 12 years old.
                      </li>
                      <li>
                        He studied medicine at Trinity College, Cambridge, and
                        then became a medical officer for the SAS (Special Air
                        Service) in Malaysia.
                      </li>

                      <li>
                        While in Malaysia, Hans met British nurse Beryl Rush and
                        they got married in 1956.
                      </li>

                      <li>
                        After their work in Malaysia, Hans and Beryl moved to
                        Llandrindod, where Hans worked as a much-respected GP (a
                        doctor) for 32 years.
                      </li>

                      <li>
                        When he retired, Hans helped to set up the Bracken Trust
                        in Llandrindod, which offers cancer support, counselling
                        and complementary therapies.{" "}
                      </li>
                      <li>
                        Hans later took up marathon running and paragliding, and
                        in his late 70s he could be seen soaring above Cwm Elan
                        near his home!
                      </li>
                      <li>Dr Hans Lichtenstein died aged 91 in March 2019. </li>
                    </ul>
                  </>
                }
                welshText={
                  <>
                    <ul>
                      <li>
                        Cafodd Hans Lichtenstein ei eni yn yr Almaen yn 1928.
                      </li>
                      <li>
                        Cafodd Hitler ei wneud yn Ganghellor yr Almaen ar 30
                        Ionawr 1933.
                      </li>
                      <li>
                        Roedd Hitler a'r Blaid Natsïaidd yn casáu lleiafrifoedd
                        ethnig, gan gynnwys yr Iddewon. Cafodd Iddewon eu trin
                        yn wael yn yr Almaen.
                      </li>
                      <li>
                        Yn ystod Kristallnacht yn 1938, cafodd llawer o siopau a
                        busnesau Iddewig eu dinistrio a'u hysbeilio.
                      </li>
                      <li>
                        Ystyr Kristallnacht yw Noson Grisial. Cafodd y noson yr
                        enw hwn oherwydd y gwydr wedi torri oedd dros y llawr i
                        gyd ar ôl y noson o drais.
                      </li>
                      <li>
                        Roedd Ruth a Walter Lichtenstein, rhieni Hans, yn
                        berchen un o'r siopau a gafodd eu dinistrio..
                      </li>
                      <li>
                        Yn ystod cyfnod Hitler mewn grym, daeth pobl ddewr at ei
                        gilydd er mwyn achub plant Iddewig. Yr enw ar eu cynllun
                        nhw i achub plant Iddewig oedd ‘Kindertransport’ (Cludo
                        Plant).
                      </li>
                      <li>
                        Dim ond plant o dan 17 oed oedd yn cael dod i mewn i'r
                        DU. Roedd hyn yn golygu nad oedd eu rhieni nhw'n cael
                        dod.
                      </li>
                      <li>
                        Felly, roedd yn rhaid i rieni wneud penderfyniad anodd,
                        gadael i'w plant deithio i'r DU ar eu pennau eu hunain a
                        byw gyda theulu maeth er mwyn osgoi cael eu herlid.
                      </li>
                      <li>
                        Roedd Hans Lichtenstein yn un o'r plant a gafodd ei
                        achub. Dim ond deuddeg oed oedd Hans pan gyrhaeddodd
                        Brydain.
                      </li>
                      <li>
                        Astudiodd Hans feddygaeth yng Ngholeg y Drindod,
                        Caergrawnt, ac yna daeth yn swyddog meddygol i'r SAS (y
                        Gwasanaeth Awyr Arbennig/Special Air Service) ym
                        Malaysia.
                      </li>
                      <li>
                        Pan oedd Hans ym Malaysia, cwrddodd â Beryl Rush, nyrs o
                        Brydain, a phriodon nhw yn 1956.
                      </li>
                      <li>
                        Ar ôl gweithio ym Malaysia, symudodd Hans a Beryl i
                        Landrindod. Gweithiodd Hans fel meddyg teulu uchel ei
                        barch yma am 32 o flynyddoedd.
                      </li>
                      <li>
                        Ar ôl ymddeol, helpodd Hans i sefydlu Ymddiriedolaeth
                        Bracken (Bracken Trust) yn Llandrindod, sy'n cynnig
                        cymorth canser, cwnsela a therapïau cyflenwol.{" "}
                      </li>
                      <li>
                        Yn ddiweddarach, dechreuodd Hans redeg marathonau a
                        pharagleidio. Pan oedd yn ei 70au hwyr, roedd i'w weld
                        yn hofran fry uwchben Cwm Elan ger ei gartref!
                      </li>
                      <li>
                        Gwnaeth Dr Hans Lichtenstein farw yn 91 oed ym mis
                        Mawrth 2019.
                      </li>
                    </ul>
                  </>
                }
                backText={`Dr Hans Lichtenstein lived a remarkable life. Being Jewish in Hitler’s Germany, Hans faced violence and intimidation.  On moving to Britain on the Kindertransport, Hans worked hard and fulfilled his dream of becoming a doctor – but he never stopped having new interests. `}
                slugText={"The Jewish boy who fled Germany."}
                welshSlugText={"Y bachgen Iddewig a ddihangodd o'r Almaen."}
                backWelshText={
                  "Cafodd Dr Hans Lichtenstein fywyd rhyfeddol. Yn Iddew yn yr Almaen Natsïaidd, wynebodd Hans drais a braw. Ar ôl symud i Brydain ar y Kindertransport, gweithiodd Hans yn galed a chyflawni ei freuddwyd o fod yn feddyg – ond ni wnaeth fyth rhoi’r gorau i gael diddordebau newydd. "
                }
              ></Person>
            }
          ></Route>
          <Route
            path="/6to9yo/MerthyrSynagogue"
            element={
              <PersonYTVid
                pscc={"/6to9yo"}
                psNum="2"
                backLContent={"Learn more about synagogues. "}
                backLContentCym="Dysgwch mwy am y synagog."
                overlayText={
                  <h2>
                    Learn more about synagogues <FaVideo />
                  </h2>
                }
                youtubeVid={
                  "https://www.youtube.com/embed/-KOxyZAgQEk?controls=0"
                }
                youtubeVidCym={"https://www.youtube.com/embed/1aLLCfQ7vCA"}
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.bbc.co.uk/bitesize/guides/zbm8jty/revision/1"
                        className="resourceHref"
                        target="_blank"
                      >
                        Practices in Judasim (Bitesize)
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.foundationforjewishheritage.com/merthyr-tydfil"
                        className="resourceHref"
                        target="_blank"
                      >
                        A description of the history of the synogogue{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://nation.cymru/news/merthyr-tydfil-synagogue-welsh-jewish-heritage-centre-lottery/"
                        className="resourceHref"
                      >
                        Article describing the project to preserve the building{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://jewishheritage.wales/"
                        className="resourceHref"
                      >
                        Jewish Heritage page on the synogogue
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://ahfund.org.uk/projects/former-merthyr-tydfil-synagogue/"
                        className="resourceHref"
                      >
                        An article about Merthyr Synogoue from Jewish Heritage
                        website.{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.youtube.com/embed/-KOxyZAgQEk"
                        className="resourceHref"
                      >
                        Interview about Merthyr Synagogue with Michael Mail
                      </a>
                    </li>
                  </ul>
                }
                linksCym={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.bbc.co.uk/bitesize/guides/zqs2dxs/revision/1"
                        className="resourceHref"
                        target="_blank"
                      >
                        Addoli mewn synagog (Bitesize)
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.foundationforjewishheritage.com/merthyr-tydfil"
                        className="resourceHref"
                        target="_blank"
                      >
                        Disgrifiad o hanes y synogog{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://nation.cymru/news/merthyr-tydfil-synagogue-welsh-jewish-heritage-centre-lottery/"
                        className="resourceHref"
                      >
                        Erthygl yn son am y project i ddiogelu'r adeilad{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://jewishheritage.wales/"
                        className="resourceHref"
                      >
                        Gwefan ‘Canolfan Treftadaeth Iddweig Cymru’
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://ahfund.org.uk/projects/former-merthyr-tydfil-synagogue/"
                        className="resourceHref"
                      >
                        Erthygl am Synagog Merthyr ar wefan 'Jewish Heritage'
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.youtube.com/embed/-KOxyZAgQEk"
                        className="resourceHref"
                      >
                        Cyfweliad am Synagog Merthyr gyda Michael Mail
                      </a>
                    </li>
                  </ul>
                }
                resource={api.slice(1, 2)}
                proposedResource={"Film the building with voice over."}
                indivName={"Merthyr Tydfil Synagogue"}
                indivNameCym={"Synagog Merthyr Tudful"}
                indivPic={
                  "https://upload.wikimedia.org/wikipedia/commons/7/78/The_Top_of_Church_Street%2C_Merthyr_Tydfil_%28geograph_4834858%29.jpg"
                }
                text={
                  <ul className="welshUl">
                    <li>
                      A synagogue is a building where Jewish people go to pray.{" "}
                    </li>
                    <li>
                      The Merthyr Synagogue was built in 1877 - the oldest
                      purpose-built Jewish building surviving in Wales.
                    </li>
                    <li>
                      A lot of Jewish people moved to Merthyr Tydfil when lots
                      of factories opened there. It became the largest town in
                      Wales!
                    </li>
                    <li>
                      It was designed by Charles Taylor, an architect, who lived
                      locally.
                    </li>
                    <li>
                      The Merthyr Synagogue is probably the only synagogue in
                      the world which has a Welsh dragon on it.
                    </li>
                    <li>
                      In 1960, the synagogue was painted by the well-known
                      artist, L. S. Lowry. The painting of the synagogue sold
                      for £277,000 in March 2022.
                    </li>
                    <li>
                      In 2019, the building was bought by the Foundation for
                      Jewish Heritage who are hoping to open it as a centre
                      where the public can learn about the synagogue and Jewish
                      people.
                    </li>
                    <li>They hope to open the centre by 2025.</li>
                    <li>
                      Buildings like these are very important to learn about our
                      history and the diverse people who live in Wales.
                    </li>
                  </ul>
                }
                welshText={
                  <ul className="welshUl">
                    <li>
                      Adeilad lle mae pobl Iddewig yn mynd i addoli yw synagog.
                    </li>
                    <li>
                      Adeiladwyd Synagog Merthyr ym 1877 - yr adeilad Iddewig
                      hynaf yng Nghymru.
                    </li>
                    <li>
                      Cafodd ei ddylunio gan Charles Taylor, pensaer, oedd yn
                      byw'n lleol.
                    </li>
                    <li>
                      Symudodd llawer o bobl Iddewig i Ferthyr Tudful pan
                      agorodd nifer o ffatrïoedd yno a datblygodd fel tref fwyaf
                      Cymru.
                    </li>
                    <li>
                      Mwy na thebyg mai Synagog Merthyr yw'r unig synagog yn y
                      byd sydd â draig Cymru arni.
                    </li>
                    <li>
                      Ym 1960, cafodd y synagog ei harlunio gan yr arlunydd
                      enwog, L. S. Lowry. Gwerthodd y darlun am £277,000 ym
                      Mawrth 2022.
                    </li>
                    <li>
                      Yn 2019, prynwyd yr adeilad gan y Sefydliad Treftadaeth
                      Iddewig sy'n gobeithio ei agor fel canolfan lle gall bobl
                      ddysgu am y synagog a phobl Iddewig.
                    </li>
                    <li>Mae nhw'n gobeithio agor y ganolfan erbyn 2025.</li>
                    <li>
                      Mae adeiladau fel hyn yn bwysig iawn i ddysgu am ein hanes
                      ac am yr amrywiaeth o bobl sydd yn byw yng Nhgymru.
                    </li>
                  </ul>
                }
                backText={`The Merthyr Synagogue is important because it is a symbol of how important the Jewish community has been to Wales and Welsh history. `}
                slugText={
                  "The oldest purpose-built Jewish building surviving in Wales."
                }
                backWelshText={
                  "Mae Synagog Merthyr yn bwysig am ei bod yn symbol o bwysigrwydd y gymuned Iddewig i Gymru ac i hanes Cymru."
                }
                welshSlugText={"Yr adeilad Iddewig pwysicaf yng Nghymru."}
              ></PersonYTVid>
            }
          ></Route>

          <Route
            path="/6to9yo/LennLawrence"
            element={
              <Person
                pscc={"/6to9yo"}
                psNum="2"
                backcardImg={newspaper}
                resourceOverlay={
                  "An imaginary newpaper article about Lenn Lawrence saving Swansea."
                }
                resourceOverlayWelsh={
                  "Erthygl papur newydd dychmygol am Lenn Lawrence yn achub Abertawe. "
                }
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.bbc.co.uk/news/uk-wales-44525608"
                        className="resourceHref"
                        target="_blank"
                      >
                        How Lenn Lawrence stopped Swansea from flooding{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.walesonline.co.uk/news/wales-news/brilliant-black-welsh-celebration-100-15173754"
                        className="resourceHref"
                        target="_blank"
                      >
                        Top 100 influential Black Welsh people - Lenn is No.39{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.peoplescollection.wales/sites/default/files/documents/The_Windrush_Project_booklet.pdf"
                        className="resourceHref"
                        target="_blank"
                      >
                        Windrush generation information including Lenn Lawrence{" "}
                      </a>
                    </li>
                  </ul>
                }
                linksCym={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.bbc.co.uk/news/uk-wales-44525608"
                        className="resourceHref"
                        target="_blank"
                      >
                        Sut lwyddodd Lenn Lawrence i achub Abertawe rhag boddi{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.walesonline.co.uk/news/wales-news/brilliant-black-welsh-celebration-100-15173754"
                        className="resourceHref"
                        target="_blank"
                      >
                        100 person du Cymraeg fwyaf dylanwadol - Lenn yw rhif 39{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.peoplescollection.wales/sites/default/files/documents/The_Windrush_Project_booklet.pdf"
                        className="resourceHref"
                        target="_blank"
                      >
                        Gwybodaeth ar y genhedlaeth Windrush gan gynnwys Lenn
                        Lawrence{" "}
                      </a>
                    </li>
                  </ul>
                }
                indivName={"Lenn Lawrence"}
                indivNameCym={"Lenn Lawrence"}
                bgcolor={"#CFE57D"}
                slugText={"The hero who saved Swansea."}
                resource={api.slice(3, 4)}
                linkResource="./../Resources/LennLawrence"
                welshSlugText={"Yr arwr achubodd Abertawe."}
                indivPic={
                  "https://blackhistorywales.org.uk/wp-content/uploads/2020/07/Screenshot-2020-07-09-at-07.56.04.png"
                }
                text={
                  <>
                    <ul>
                      <li>
                        Lenn Lawrence came to Wales from Jamaica as a part of
                        the Windrush generation in 1960 when he was 24.
                      </li>
                      <li>
                        He had to take poorly paid jobs working as a builder to
                        begin with and specialised in concrete.
                      </li>
                      <li>
                        One day a hole in one of the lock gates at Swansea docks
                        meant the city was in danger of flooding. He had to work
                        hard to fill it with concrete in a race against the
                        tide!
                      </li>
                      <li>
                        Lenn helped build the M4 motorway, the deep-water dock
                        for Marple ridgeway, Port Talbot town centre, the
                        Pontdrefen bridge and many more sites.
                      </li>
                      <li>
                        He was the first black carpenter and foreman for the
                        British Steel Corporation in Neath Port Talbot.
                      </li>
                      <li>
                        Being an ethnic minority in 1962 in Wales had it's
                        difficulties. It could be lonely and many people
                        experienced racism. This led Lenn and other members of
                        the community to start the Caribbean Friendship Society.
                        Together they met with the police, councillors and other
                        agencies.
                      </li>
                      <li>
                        Although the Caribbean Friendship Society didn't have
                        much money, Lenn and other members used their own money
                        to set up meetings in each other’s houses, in a shed at
                        the back of Corporation Road or at the Talbot pub.{" "}
                      </li>
                      <li>
                        In 1981, the Caribbean Friendship Society relocated to
                        Swansea and lasted until 1992, when it changed it's name
                        to the Swansea Bay Regional Equality Council.
                      </li>
                      <li>
                        Today the council still works to value the rights of
                        people.
                      </li>
                    </ul>
                    <p>
                      Through determination and a belief in treating people
                      fairly, Lenn Lawrence became widely respected as both
                      hardworking and for promoting the rights of people.
                    </p>
                  </>
                }
                welshText={
                  <ul>
                    <li>
                      Daeth Lenn Lawrence i Gymru o Jamaica, yn rhan o
                      genhedlaeth Windrush yn 1960 pan oedd yn 24 oed.
                    </li>
                    <li>
                      Roedd yn rhaid iddo gymryd gwaith oedd yn talu'n wael fel
                      adeiladwr, i ddechrau, ac arbenigodd ar goncrit.
                    </li>
                    <li>
                      Un diwrnod, roedd twll yn un o’r giatiau clo yn nociau
                      Abertawe, felly roedd perygl y byddai dŵr yn llifo dros y
                      ddinas. Roedd yn rhaid i Lenn weithio'n galed i'w lenwi â
                      choncrit, mewn ras yn erbyn y llanw!
                    </li>
                    <li>
                      Helpodd Lenn i adeiladu traffordd yr M4, y doc dŵr dwfn ar
                      gyfer Marple Ridgeway, canol tref Port Talbot, pont
                      Pontdrefen a llawer o fannau eraill.
                    </li>
                    <li>
                      Fe oedd y saer a'r fforman du cyntaf ar gyfer Corfforaeth
                      Dur Prydain yng Nghastell-nedd Port Talbot.
                    </li>
                    <li>
                      Roedd hi'n anodd bod yn lleiafrif ethnig yng Nghymru yn
                      1962. Gallai fod yn unig ac roedd nifer o bobl wedi profi
                      hiliaeth. Felly dechreuodd Lenn ac aelodau eraill o'r
                      gymuned Gymdeithas Cyfeillgarwch y Caribî. Gyda'i gilydd,
                      cawson nhw gyfarfodydd gyda'r heddlu, cynghorwyr ac
                      asiantaethau eraill.
                    </li>
                    <li>
                      Doedd dim llawer o arian gan Gymdeithas Cyfeillgarwch y
                      Caribî, felly defnyddiodd Lenn a'r aelodau eraill eu
                      harian eu hunain i drefnu cyfarfodydd yn nhai ei gilydd,
                      mewn sied yng nghefn Ffordd Corporation neu yn nhafarn y
                      Talbot.
                    </li>
                    <li>
                      Yn 1981, symudodd Cymdeithas Cyfeillgarwch y Caribî i
                      Abertawe. Daliodd i fynd tan 1992, pan newidiodd ei henw i
                      Gyngor Cydraddoldeb Rhanbarthol Bae Abertawe.
                    </li>
                    <li>
                      Heddiw, mae'r Cyngor yn dal i weithio er mwyn
                      gwerthfawrogi hawliau pobl.
                    </li>
                    <li>
                      Oherwydd bod Lenn Lawrence yn benderfynol ac yn credu mewn
                      trin pobl yn deg, roedd llawer o bobl yn ei barchu am
                      weithio'n galed ac am hybu hawliau pobl.
                    </li>
                  </ul>
                }
              ></Person>
            }
          ></Route>
          <Route
            path="/6to9yo/TeleriGray"
            element={
              <PersonYTVid
                pscc={"/6to9yo"}
                youtubeVidCym={"https://www.youtube.com/embed/3ZR3z0N2HMw"}
                psNum={"2"}
                backLContentCym={"Dysgwch mwy am ffordd o fyw y Romani. "}
                backLContent={
                  "Learn more about the Romani Gypsies way of life."
                }
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.flickr.com/photos/134286418@N02/22408268685"
                        className="resourceHref"
                        target="_blank"
                      >
                        Information about Teleri Gray{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.walesonline.co.uk/lifestyle/showbiz/history-month-challenges-stereotype-gypsies-2029120"
                        className="resourceHref"
                        target="_blank"
                      >
                        Article on racial stereotyping of travellers{" "}
                      </a>
                    </li>
                  </ul>
                }
                linksCym={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.flickr.com/photos/134286418@N02/22408268685"
                        className="resourceHref"
                        target="_blank"
                      >
                        Gwybodaeth am Teleri Gray{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.walesonline.co.uk/lifestyle/showbiz/history-month-challenges-stereotype-gypsies-2029120"
                        className="resourceHref"
                        target="_blank"
                      >
                        Erhygl am stereoteipio hiliol yn erbyn teithwyr{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.bbc.co.uk/cymrufyw/29667652"
                        className="resourceHref"
                        target="_blank"
                      >
                        Erthygl am ei theulu{" "}
                      </a>
                    </li>
                  </ul>
                }
                welshSlugText={"Y storïwr Romani."}
                overlayText={
                  <h2>
                    Learn more about the Romani Gypsies way of life <FaVideo />
                  </h2>
                }
                indivName={"Teleri Gray"}
                indivNameCym={"Teleri Gray"}
                proposedResource={
                  "Footage from tv programmes re: Romani people."
                }
                slugText={"The Romani storyteller."}
                resource={api.slice(4, 5)}
                indivPic={
                  "https://live.staticflickr.com/655/22408268685_a9ec39be94_b.jpg"
                }
                youtubeVid={"https://www.youtube.com/embed/ixW54ttBcGw"}
                text={
                  <>
                    <ul>
                      <li>
                        Teleri Gray is a Gypsy Romani storyteller and she is
                        helping people to remember and preserve their history.
                      </li>
                      <li>
                        Teleri talks about what life is like for Traveller
                        children and their families today.
                      </li>

                      <li>
                        Life can be very hard for Romani’s. They are not always
                        welcomed in communities because there are a lot of
                        untrue things said about them and people do not
                        understand the way they choose to live.{" "}
                      </li>
                      <li>Gypsies have lived in Wales for over 400 years.</li>

                      <li>
                        The Romani community has a rich, beautiful culture, and
                        has given Wales a lot to be proud of.
                      </li>
                      <li>
                        They are very fond of creating music, writing poetry,
                        storytelling and dancing.
                      </li>
                      <li>
                        Teleri’s ancestors were famous Romani musicians. Her
                        grandfather, her great- grandfather and her great great
                        grandfather played the harp. Teleri’s
                        great-great-grandfather John Roberts was known as the
                        Harpist of Wales (or Telynor Cymru). As famous
                        musicians, they traveled all over Wales, performing in
                        the homes of rich people.
                      </li>
                      <li>
                        Teleri and her sister are the only two Gypsy teachers in
                        Wales.
                      </li>
                      <li>
                        Today there are about 1092 travellers caravans in Wales.
                      </li>
                      <li>Wales has around 136 traveller sites.</li>
                    </ul>
                    <p>
                      {" "}
                      Many of the customs and traditions of the Romanis are
                      being forgotten.
                      <br /> Memories and documents are now being collected to
                      preserve their culture.
                    </p>
                  </>
                }
                welshText={
                  <>
                    <ul>
                      <li>
                        Mae Teleri Gray yn storïwraig Sipsi Romani ac mae hi'n
                        helpu pobl i gofio ac i gadw eu hanes.
                      </li>
                      <li>
                        Mae Teleri'n sôn am sut mae bywyd i blant a theuluoedd
                        Teithwyr heddiw.
                      </li>

                      <li>
                        Mae bywyd yn gallu bod yn anodd iawn i'r Romani.
                        Weithiau dydy cymunedau ddim yn rhoi croeso iddyn nhw
                        oherwydd bod llawer o bethau anghywir yn cael eu dweud
                        amdanyn nhw. Hefyd, dydy pobl ddim yn deall y ffordd
                        maen nhw'n dewis byw.
                      </li>
                      <li>
                        Mae sipsiwn yn byw yng Nghymru ers dros 400 mlynedd.{" "}
                      </li>

                      <li>
                        Mae gan y gymuned Romani ddiwylliant cyfoethog, hardd,
                        ac mae wedi rhoi llawer i Gymru fod yn falch ohono.
                      </li>
                      <li>
                        Maen nhw'n hoff iawn o greu cerddoriaeth, ysgrifennu
                        barddoniaeth, adrodd storïau a dawnsio.
                      </li>
                      <li>
                        Roedd cyndeidiau Teleri yn gerddorion Romani enwog.
                        Roedd ei thad-cu, ei hen dad-cu a'i hen hen dad-cu yn
                        canu'r delyn. Telynor Cymru oedd yr enw ar John Roberts,
                        hen hen dad-cu Teleri. Roedden nhw'n gerddorion enwog,
                        felly roedden nhw'n arfer teithio i bob rhan o Gymru.
                        Roedden nhw'n perfformio yng nghartrefi pobl gyfoethog.
                      </li>
                      <li>
                        Teleri a'i chwaer yw'r unig ddwy athrawes sy'n sipsiwn
                        yng Nghymru.
                      </li>
                      <li>
                        Heddiw mae tua 1092 o garafanau teithwyr yng Nghymru.{" "}
                      </li>
                      <li>Mae gan Gymru tua 136 o safleoedd i deithwyr. </li>
                    </ul>
                    <p>
                      {" "}
                      Mae pobl yn anghofio llawer o arferion a thraddodiadau'r
                      Romani.
                      <br /> Mae pobl yn casglu atgofion a dogfennau nawr er
                      mwyn cadw eu diwylliant nhw.
                    </p>
                  </>
                }
              ></PersonYTVid>
            }
          ></Route>
          <Route
            path="/6to9yo/FongSui"
            element={
              <Person
                pscc={"/6to9yo"}
                psNum={"2"}
                resourceOverlay={"The imaginary diary of Fong Sui."}
                resourceOverlayWelsh={"Dyddiadur dychmygol Fong Sui."}
                welshSlugText={"Y Tsïeiniaid yng Nghymru."}
                linkResource={"./../Diaries/FongSui"}
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.walesonline.co.uk/news/wales-news/new-project-reveals-tales-how-6289299"
                        className="resourceHref"
                        target="_blank"
                      >
                        Article describing Fong Sui's migration to Swansea{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://chineseinwales.org.uk/our-community/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Chinese in Wales website
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.walesonline.co.uk/whats-on/whats-on-news/you-can-celebrate-chinese-new-25985794"
                        className="resourceHref"
                        target="_blank"
                      >
                        Chinese New Year in Wales{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.youtube.com/watch?v=7YA9fwm4s8M"
                        className="resourceHref"
                        target="_blank"
                      >
                        Chinese New Year: BBC Teach{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.youtube.com/watch?v=5K3Tc5uN6ac"
                        className="resourceHref"
                        target="_blank"
                      >
                        An interview with Font Sui (contains emotional story){" "}
                      </a>
                    </li>
                  </ul>
                }
                linksCym={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.walesonline.co.uk/news/wales-news/new-project-reveals-tales-how-6289299"
                        className="resourceHref"
                        target="_blank"
                      >
                        Erthygl yn disgrifio mudiad Fong Sui i Abertawe{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://chineseinwales.org.uk/our-community/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Gwefan 'Chinese in Wales'{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.walesonline.co.uk/whats-on/whats-on-news/you-can-celebrate-chinese-new-25985794"
                        className="resourceHref"
                        target="_blank"
                      >
                        Y Flwyddyn Newydd Tseiniaidd yng Nghymru
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.youtube.com/watch?v=7YA9fwm4s8M"
                        className="resourceHref"
                        target="_blank"
                      >
                        Y Flwyddyn Newydd Tseiniaidd: BBC Teach
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.youtube.com/watch?v=5K3Tc5uN6ac"
                        className="resourceHref"
                        target="_blank"
                      >
                        Cyfweliad gyda Fong Sui (cynnwys emosiynol)
                      </a>
                    </li>
                  </ul>
                }
                bgcolor="#CFE57D"
                backcardImg={diary}
                proposedResource={
                  <a
                    href="https://www.dev.addysgop.co.uk/hanesbame/Diaries/FongSui"
                    style={{
                      display: "flex",
                      position: "absolute",
                      overflow: "hidden",
                    }}
                  ></a>
                }
                buttonLink={"/Diaries/FongSui"}
                indivName={"Fong Sui"}
                indivNameCym={"Fong Sui"}
                slugText={"The Chinese in Wales."}
                resource={api.slice(5, 6)}
                indivPic={
                  "https://i2-prod.walesonline.co.uk/incoming/article6289157.ece/ALTERNATES/s810/JS28547881.jpg"
                }
                text={
                  <>
                    <ul>
                      <li>
                        Many of today’s older Chinese people living in Wales
                        arrived as children and young adults during the 1940s -
                        1970s.
                      </li>
                      <li>
                        Many of those who came opened and worked in Chinese
                        restaurants whilst others opened their own laundries.
                      </li>
                      <li>
                        Fong Sui came to Wales from her home village in China
                        with her husband Chi Mau Chin.
                      </li>
                      <li>Life was very hard when Fong Sui arrived.</li>
                      <li>
                        She was put in a laundry, given just one meal a day and
                        ironed 100 garments each shift, where she often burnt
                        herself.
                      </li>
                      <li>
                        At the age of 18, she moved with her husband to Swansea
                        to run a laundry, one of the first Chinese laundries in
                        Swansea!{" "}
                      </li>
                      <li>They also opened a brand new restaurant. </li>
                      <li>
                        Fong Sui was working in the laundry by day, working in
                        the restaurant two nights a week, and raising four
                        children.
                      </li>
                      <li>Fong Sui now has 7 grandchildren.</li>
                    </ul>
                    <p>
                      {" "}
                      Fong Sui’s story is very similar to many young Chinese
                      girls arriving in Wales during the mid-20th century. Life
                      was very difficult but they worked very hard and made a
                      big difference in Wales.
                    </p>
                  </>
                }
                welshText={
                  <>
                    <ul>
                      <li>
                        Daeth llawer o'r Tsieineaid hŷn sy'n byw yng Nghymru
                        nawr i'n gwlad ni pan oedden nhw'n blant ac oedolion
                        ifanc yn ystod y 1940au a'r 1970au.
                      </li>
                      <li>
                        Penderfynodd llawer o'r Tsieineaid agor bwytai
                        Tsieineaidd a gweithio ynddyn nhw. Agorodd rhai eraill
                        eu golchdai eu hunain.
                      </li>
                      <li>
                        Daeth Fong Sui i Gymru o'i phentref yn China gyda'i gŵr,
                        Chi Mau Chin.
                      </li>
                      <li>
                        Roedd bywyd yn anodd iawn pan gyrhaeddodd Fong Sui.{" "}
                      </li>
                      <li>
                        Cafodd hi ei rhoi mewn golchdy, roedd hi'n cael un pryd
                        o fwyd y dydd yn unig ac roedd hi'n smwddio 100 o
                        ddillad bob shifft. Roedd hi'n aml yn llosgi ei hun.
                      </li>
                      <li>
                        Pan oedd hi'n 18 oed, symudodd hi gyda'i gŵr i Abertawe
                        i redeg golchdy, un o'r golchdai Tsieineaidd cyntaf yn
                        Abertawe!
                      </li>
                      <li>Hefyd, agoron nhw fwyty newydd sbon. </li>
                      <li>
                        Roedd Fong Sui yn gweithio yn y golchdy yn ystod y dydd,
                        roedd hi'n gweithio yn y bwyty ddwy noson yr wythnos, a
                        magodd hi bedwar o blant.
                      </li>
                      <li>Nawr mae Fong Sui yn fam-gu i saith o blant. </li>
                    </ul>
                    <p>
                      Mae stori Fong Sui yn debyg iawn i stori llawer o ferched
                      ifanc o Tsieina a gyrhaeddodd Gymru yn ystod canol yr
                      20fed ganrif. Roedd bywyd yn anodd iawn ond gweithion
                      nhw'n galed iawn a gwnaethon nhw wahaniaeth mawr yng
                      Nghymru.
                    </p>
                  </>
                }
              ></Person>
            }
          ></Route>
          <Route
            path="/6to9yo/ArandoraStar"
            element={
              <Person
                pscc={"/6to9yo"}
                psNum={"2"}
                resourceOverlay={
                  "A cartoon about the fate of the SS Arandora Star."
                }
                resourceOverlayWelsh={"Cartŵn am dynged yr SS Arandora Star. "}
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.cardiffcathedral.org.uk/remembering-the-arandora-star/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Cardiff Cathedral remembering the Arandora Star
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.youtube.com/watch?v=RcLcQbViMvY"
                        className="resourceHref"
                        target="_blank"
                      >
                        ITV news report of Arandora Star remembrance
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.youtube.com/watch?v=occyQT7LvI4"
                        className="resourceHref"
                        target="_blank"
                      >
                        BBC correpondent traces his reports on Arandora Star -
                        his grandfather was amongst the victims{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.bbc.co.uk/news/10485955"
                        className="resourceHref"
                        target="_blank"
                      >
                        BBC article commemorating 70th anniversary of tragedy{" "}
                      </a>
                    </li>
                  </ul>
                }
                linksCym={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.cardiffcathedral.org.uk/remembering-the-arandora-star/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Cadeirlan Caerdydd yn cofio yr 'Arandora Star'{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.youtube.com/watch?v=RcLcQbViMvY"
                        className="resourceHref"
                        target="_blank"
                      >
                        Adroddiad newyddion am goffadwriaeth yr Arandora Star{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.youtube.com/watch?v=occyQT7LvI4"
                        className="resourceHref"
                        target="_blank"
                      >
                        Darlledydd y BBC yn adrodd ar ei gyswllt personol i'r
                        Arandora Star
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.bbc.co.uk/news/10485955"
                        className="resourceHref"
                        target="_blank"
                      >
                        Erthygl BBC yn cofio 70 mlynedd ers y digwyddiad{" "}
                      </a>
                    </li>
                  </ul>
                }
                welshSlugText={"Trasiedi y llong â suddwyd."}
                backcardImg={strip}
                linkResource="./../Resources/ArandoraStarStrip"
                bgcolor="#CFE57D"
                indivName={"The Arandora Star"}
                indivNameCym={"The Arandora Star"}
                slugText={"The tragedy of the sunken ship."}
                resource={api.slice(6, 7)}
                indivPic={
                  "https://upload.wikimedia.org/wikipedia/commons/7/72/Arandora_Star_1940.jpg"
                }
                text={
                  <>
                    <ul>
                      <li>
                        The SS Arandora Star was built to be a cruise ship.
                      </li>
                      <li>
                        During World War Two, she was painted grey and guns were
                        added. The Arandora Star was then used to carry
                        soldiers.
                      </li>
                      <li>
                        On her last journey, in 1940, the ship carried prisoners
                        of war to camps in Canada.{" "}
                      </li>
                      <li>734 of the men onboard were Welsh Italian.</li>
                      <li>
                        These Italian men were declared “enemy aliens” by the
                        British government even though their families moved to
                        Wales decades before the war began!
                      </li>
                      <li>
                        The ship was also carrying too many passengers – there
                        were 1678 men on board but the ship should only have
                        taken 500!{" "}
                      </li>
                      <li>
                        On 2 July 1940, just one day into the journey, a German
                        torpedo hit The Arandora Star.
                      </li>

                      <li>
                        The ship was just off the coast of Ireland at the time.
                      </li>

                      <li>
                        The ship wasn’t displaying the International Red Cross
                        symbol – this would have told other ships that it was
                        carrying civilians on board, and therefore shouldn’t be
                        fired at.
                      </li>

                      <li>
                        The ship sank within minutes and more than 800 lives
                        were lost.
                      </li>

                      <li>
                        Lifeboats that could have been used to rescue some men
                        were blocked by heavy wire so people couldn’t get at
                        them. The barbed wire placed on deck also caused major
                        problems.{" "}
                      </li>
                    </ul>
                  </>
                }
                welshText={
                  <ul>
                    <li>
                      Cafodd yr SS Arandora Star ei hadeiladu i fod yn llong
                      bleser.{" "}
                    </li>
                    <li>
                      Yn ystod yr Ail Ryfel Byd, cafodd ei pheintio'n llwyd a
                      chafodd hi ddrylliau hefyd. Wedyn cafodd yr Arandora Star
                      ei defnyddio i gario milwyr.
                    </li>
                    <li>
                      Ar ei thaith olaf, yn 1940, roedd y llong yn cario
                      carcharorion rhyfel i wersylloedd yng Nghanada.
                    </li>
                    <li>
                      Roedd 734 o'r dynion ar ei bwrdd yn Gymry o dras
                      Eidalaidd.{" "}
                    </li>
                    <li>
                      Dywedodd llywodraeth Prydain mai “gelynion” oedd y dynion
                      Eidalaidd hyn er bod eu teuluoedd wedi symud i Gymru
                      ddegawdau cyn i'r rhyfel ddechrau!
                    </li>
                    <li>
                      Hefyd roedd y llong yn cario gormod o deithwyr – roedd
                      1678 o ddynion ar ei bwrdd ond dim ond 500 oedd i fod
                      arni!
                    </li>
                    <li>
                      Ar 2 Gorffennaf 1940, dim ond diwrnod ar ôl gadael, tarodd
                      torpedo Almaenig long yr Arandora Star.
                    </li>
                    <li>
                      Roedd y llong dafliad carreg o arfordir Iwerddon ar y
                      pryd.
                    </li>
                    <li>
                      Doedd y llong ddim yn dangos symbol y Groes Goch
                      Ryngwladol. Byddai’r symbol wedi dweud wrth longau eraill
                      ei bod hi'n cario sifiliaid ar ei bwrdd, ac felly na
                      ddylai neb saethu tuag ati.
                    </li>
                    <li>
                      Suddodd y llong cyn pen munudau a chafodd dros 800 o
                      fywydau eu colli.
                    </li>
                    <li>
                      Roedd hi'n amhosibl cyrraedd badau achub a allai fod wedi
                      achub rhai o'r dynion oherwydd bod weiars trwm o'u cwmpas
                      nhw. Hefyd, cododd problemau mawr oherwydd y weiren bigog
                      dros y dec.
                    </li>
                  </ul>
                }
              ></Person>
            }
          ></Route>
          <Route
            path="/6to9yo/320Battalion"
            element={
              <Person
                pscc={"/6to9yo"}
                psNum={"2"}
                resourceOverlay={
                  "A letter from Rosie to the mother of Wilson Monk."
                }
                resourceOverlayWelsh="Llythyr wrth mam Wilson Monk at Rosie. "
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="http://www.spanglefish.com/welshblackhistorystories/index.asp?pageid=711844"
                        className="resourceHref"
                        target="_blank"
                      >
                        Website about the 320th Barrage Batallion{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://cadw.gov.wales/learn/wales-rich-and-diverse-heritage/creative-responses/320th-barrage-balloon-battalion-1944"
                        className="resourceHref"
                        target="_blank"
                      >
                        Gov.wales blog about the 320th Barrage Batallion{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="http://www.lindahervieux.com/the-320th-blog/tag/320th+Barrage+Balloon+Battalion"
                        className="resourceHref"
                        target="_blank"
                      >
                        Info about specific members of the batallion
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.army.mil/article/119639/all_black_balloon_unit_served_with_distinction_on_d_day"
                        className="resourceHref"
                        target="_blank"
                      >
                        Description of the role of 320th batallion on D-Day{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.youtube.com/watch?v=-9dkEg8k2pk&t=7s"
                        className="resourceHref"
                        target="_blank"
                      >
                        Song dedicated to the 320th Barrage Batallion{" "}
                      </a>
                    </li>
                  </ul>
                }
                linksCym={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="http://www.spanglefish.com/welshblackhistorystories/index.asp?pageid=711844"
                        className="resourceHref"
                        target="_blank"
                      >
                        Gwefan am y 320fed Bataliwn{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://cadw.llyw.cymru/dysgu/treftadaeth-gyfoethog-ac-amrywiol-cymru/ymatebion-creadigol/320th-barrage-balloon-battalion?_gl=1*v3p5au*_ga*MjA2MDE1MzAzMy4xNjgzNjIyMzk3*_ga_B2BCVKM874*MTY4MzYyMjM5Ny4xLjAuMTY4MzYyMjM5Ny42MC4wLjA."
                        className="resourceHref"
                        target="_blank"
                      >
                        Blog gan Lywodraeth Cymru am y bataliwn{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="http://www.lindahervieux.com/the-320th-blog/tag/320th+Barrage+Balloon+Battalion"
                        className="resourceHref"
                        target="_blank"
                      >
                        Gwybodaeth am unigolion penodol ymysg y bataliwn{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.army.mil/article/119639/all_black_balloon_unit_served_with_distinction_on_d_day"
                        className="resourceHref"
                        target="_blank"
                      >
                        Disgrifiad o rôl hanfodol y bataliwn ar 'D-Day'{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.youtube.com/watch?v=Sv9msqoXA8Y"
                        className="resourceHref"
                        target="_blank"
                      >
                        Can a ysgrifennnwyd i gofio am y 320fed bataliwn{" "}
                      </a>
                    </li>
                  </ul>
                }
                welshSlugText={"Yr Americanwyr gafodd groeso yng Nghymru."}
                indivName={"320th Barrage Balloon Battalion "}
                indivNameCym={"320th Barrage Balloon Battalion "}
                linkResource={"./../Resources/WilsonMonk"}
                backcardImg={postcard}
                bgcolor={"#CFE57D"}
                slugText={"The Americans who found a welcome in Wales."}
                resource={api.slice(7, 8)}
                indivPic={
                  "https://images.squarespace-cdn.com/content/v1/55e4bcf2e4b01d0dc78c9848/1441893157537-7AL21O6U939POF0AYWGB/image-asset.jpeg"
                }
                text={
                  <>
                    <ul>
                      <li>
                        During World War Two, the 320th Barrage Balloon
                        Battalion, a unit of the 621 men from the US Army,
                        arrived in Pontypool.
                      </li>
                      <li>The men were all black.</li>
                      <li>
                        They were part of the 130,000 black US troops stationed
                        all over Britain who were helping fight against Germany
                        in the war.
                      </li>
                      <li>
                        The job of the Barrage Balloon Battalion was to raise
                        helium balloons over the invasion beaches to prevent
                        German airplanes from flying over the beaches.
                      </li>
                      <li>
                        At the time black people were being treated badly in
                        America. They were not allowed to eat and drink in the
                        same restaurants as white people.
                      </li>
                      <li>
                        These men found Wales a very different country to the
                        one they had come from and were glad to have a warm
                        welcome.
                      </li>
                      <li>
                        Wales had very different attitudes to America in the way
                        residents treated black people and the people of Wales
                        invited them into their houses.
                      </li>
                      <li>
                        One member of the 320th who found a welcome in Wales was
                        Wilson Caldwell Monk.
                      </li>
                      <li>
                        Before joining the army, he had worked as many jobs as
                        he could squeeze into a day. He mopped floors, delivered
                        pharmacy orders, sold salt-water taffy and waited on
                        tables in restaurants that would never serve a black man
                        like himself.
                      </li>
                      <li>
                        When Wilson Monk travelled to Wales, he met people like
                        Jessie Prior. She looked after Monk as if he was her son
                        and wrote to his own mother saying he was being looked
                        after in Wales.
                      </li>
                    </ul>
                    <p>
                      The people of Wales taught Monk that not everyone treated
                      black people badly.
                    </p>
                  </>
                }
                welshText={
                  <ul>
                    <li>
                      Yn ystod yr Ail Ryfel Byd, daeth 320fed Bataliwn “Barrage
                      Balloon”, uned o 621 o ddynion o Fyddin UDA, i Bont-y-pŵl.
                    </li>
                    <li>Roedd y dynion i gyd yn ddu. </li>
                    <li>
                      Roedden nhw'n rhan o'r 130,000 o filwyr du UDA a ddaeth i
                      Brydain pan oedd angen helpu i ymladd yn erbyn yr Almaen
                      yn y rhyfel.
                    </li>
                    <li>
                      Gwaith 320fed Bataliwn “Barrage Balloon” oedd codi balwnau
                      heliwm dros y traethau lle roedd milwyr yn glanio er mwyn
                      atal awyrennau'r Almaen rhag hedfan dros y traethau.
                    </li>
                    <li>
                      Ar y pryd, roedd pobl ddu yn America yn cael eu trin yn
                      wael. Doedden nhw ddim yn cael bwyta ac yfed yn yr un
                      bwytai â phobl wyn.
                    </li>
                    <li>
                      Gwelodd y dynion hyn fod Cymru yn wlad wahanol iawn i
                      America, ac roedden nhw'n falch iawn o gael croeso cynnes.
                    </li>
                    <li>
                      Roedd agweddau pobl Cymru'n wahanol iawn i agweddau pobl
                      America o ran sut roedd pobl Cymru'n trin pobl ddu. Cafodd
                      y milwyr du eu croesawu i gartrefi yng Nghymru.
                    </li>
                    <li>
                      Roedd Wilson Caldwell Monk yn un o'r 320fed Bataliwn a
                      gafodd groeso yng Nghymru.
                    </li>
                    <li>
                      Cyn ymuno â'r fyddin, roedd wedi bod yn gwneud llawer o
                      swyddi ac roedd yn gweithio drwy'r dydd. Roedd yn glanhau
                      lloriau, yn mynd â meddyginiaeth at gleifion, yn gwerthu
                      ‘salt-water taffy’ ac yn gweithio fel gweinydd mewn bwytai
                      lle na fyddai e fel dyn du byth yn cael bwyta.
                    </li>
                    <li>
                      Pan deithiodd Wilson Monk i Gymru, daeth i adnabod pobl
                      fel Jessie Prior. Gofalodd hi am Monk fel tasai'n fab
                      iddi, ac ysgrifennodd hi at fam Wilson i ddweud ei bod
                      hi'n gofalu amdano yng Nghymru.
                    </li>
                    <li>
                      Oherwydd pobl Cymru, dysgodd Monk nad oedd pawb yn trin
                      pobl ddu'n wael.
                    </li>
                  </ul>
                }
              ></Person>
            }
          ></Route>
          <Route
            path="/6to9yo/ShirleyBassey"
            element={
              <Person
                pscc={"/6to9yo"}
                psNum={"2"}
                resourceOverlay={
                  "A short story about Megan meeting Shirley Bassey."
                }
                resourceOverlayWelsh="Stori fer am Megan yn cwrdd â Shirley Bassey."
                bgcolor={"#CFE57D"}
                welshSlugText={"Y gantores fyd-enwog o Tiger Bay."}
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.digitalspy.com/showbiz/10-things-about/a186168/ten-things-you-never-knew-about-shirley-bassey/"
                        className="resourceHref"
                        target="_blank"
                      >
                        10 facts about Shirley Bassey{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.thefamouspeople.com/profiles/dame-shirley-veronica-bassey-2850.php"
                        className="resourceHref"
                        target="_blank"
                      >
                        Brief biography of Shirley Bassey{" "}
                      </a>
                    </li>
                  </ul>
                }
                linksCym={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.digitalspy.com/showbiz/10-things-about/a186168/ten-things-you-never-knew-about-shirley-bassey/"
                        className="resourceHref"
                        target="_blank"
                      >
                        10 ffaith am Shirley Bassey{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.thefamouspeople.com/profiles/dame-shirley-veronica-bassey-2850.php"
                        className="resourceHref"
                        target="_blank"
                      >
                        Bywgraffiad byr am Shirley Bassey{" "}
                      </a>
                    </li>
                  </ul>
                }
                indivName={"Dame Shirley Bassey OBE"}
                indivNameCym={"Y Fonesig Shirley Bassey OBE"}
                linkResource={"./../Resources/ShirleyBassey"}
                backcardImg={vip}
                slugText={"The world famous Welsh singer from Tiger Bay."}
                resource={api.slice(8, 9)}
                indivPic={
                  "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F75b621da-8fff-4cfb-ad8e-d63040e1f7a8.jpg?fit=scale-down&source=next&width=700"
                }
                text={
                  <>
                    <ul>
                      <li>
                        Shirley Bassey was one of the first black British
                        entertainers to become famous around the world.
                      </li>
                      <li>She was born in Tiger Bay, Cardiff in 1937.</li>
                      <li>
                        Her father was Nigerian and her mother was from Teeside.
                      </li>
                      <li>She loved singing as a child.</li>
                      <li>
                        After leaving school at 15 she worked in a factory.
                      </li>
                      <li>
                        She continued to sing in clubs in the evenings and
                        became well-known after performing in a Christmas show
                        in London in 1955.
                      </li>
                      <li>
                        In 1959, her song 'As I Love You' reached number 1 in in
                        the charts. The first ever number 1 single by a Welsh
                        artist.
                      </li>
                      <li>
                        Her powerful voice made her popular all over the world.
                      </li>
                      <li>
                        She became well-known for recording theme songs to James
                        Bond films - Goldfinger, Diamonds are Forever and
                        Moonraker.
                      </li>
                      <li>
                        Over her long career she has had 27 Top 40 hits in the
                        UK, including two number-ones and has sold over 135
                        million records.
                      </li>
                      <li>
                        In 1999 she was given the title Dame for services to the
                        arts.
                      </li>

                      <li>
                        In the same year she sang in the opening ceremony of the
                        Senedd building in Cardiff Bay.
                      </li>
                      <li>
                        She is well known for her glamorous style and at
                        Glastonbury Festival in 2007 she performed in wellington
                        boots with diamonds all over them!
                      </li>
                      <li>
                        She was the first female artist to have an album in the
                        charts during 7 decades.{" "}
                      </li>
                      <li>
                        She released her last album "I Owe It All To You" in
                        2020.{" "}
                      </li>
                    </ul>
                    <p>
                      {" "}
                      Dame Shirley Bassey came from a poor background but with
                      dedication and hard work became one of the most well-known
                      singers in the world.{" "}
                    </p>
                  </>
                }
                welshText={
                  <>
                    <ul>
                      <li>
                        Roedd Shirley Bassey yn un o'r diddanwyr du cyntaf o
                        Brydain i ddod yn enwog ledled y byd.
                      </li>
                      <li>Cafodd hi ei geni yn Tiger Bay, Caerdydd yn 1937.</li>
                      <li>
                        Roedd ei thad o Nigeria ac roedd ei mam o ardal Teeside
                        yng ngogledd Lloegr.
                      </li>
                      <li>Roedd hi'n dwlu ar ganu pan oedd hi'n blentyn. </li>
                      <li>
                        Ar ôl gadael yr ysgol pan oedd hi'n 15 oed, gweithiodd
                        hi mewn ffatri.
                      </li>
                      <li>
                        Roedd hi'n dal i ganu mewn clybiau gyda'r nos a daeth
                        hi'n adnabyddus ar ôl sioe Nadolig yn Llundain yn 1955.
                      </li>
                      <li>
                        Yn 1959, cyrhaeddodd ei chân 'As I Love You' rif 1 yn y
                        siartiau. Y sengl rhif 1 gyntaf erioed gan artist o
                        Gymru.
                      </li>
                      <li>
                        Roedd hi'n boblogaidd dros y byd i gyd oherwydd ei llais
                        pwerus.
                      </li>
                      <li>
                        Daeth hi'n enwog am recordio'r caneuon thema i ffilmiau
                        James Bond – Goldfinger, Diamonds Are Forever a
                        Moonraker.
                      </li>
                      <li>
                        Dros ei gyrfa hir, mae hi wedi cael 27 o ganeuon yn y 40
                        uchaf yn y DU, gan gynnwys dwy gân yn cyrraedd rhif 1 ac
                        mae hi wedi gwerthu dros 135 miliwn o recordiau.
                      </li>
                      <li>
                        Yn 1999 cafodd y teitl 'Y Fonesig' am ei gwasanaeth i'r
                        celfyddydau.
                      </li>

                      <li>
                        Yn yr un flwyddyn, canodd hi yn seremoni agor adeilad y
                        Senedd ym Mae Caerdydd.
                      </li>
                      <li>
                        Mae hi'n enwog am steil ei dillad ac yng Ngŵyl
                        Glastonbury yn 2007 perfformiodd hi mewn esgidiau glaw
                        gyda diemwntau drostyn nhw i gyd!
                      </li>
                      <li>
                        Hi oedd yr artist benywaidd cyntaf i gael albwm yn y
                        siartiau dros 7 degawd.
                      </li>
                      <li>
                        Rhyddhaodd hi ei halbwm diweddaraf "I Owe It All To You"
                        yn 2020.
                      </li>
                    </ul>
                    <p>
                      Daeth y Fonesig Shirley Bassey o gefndir tlawd ond gydag
                      ymroddiad a gwaith caled, daeth hi'n un o'r cantorion
                      mwyaf enwog yn y byd.
                    </p>
                  </>
                }
              ></Person>
            }
          ></Route>
          <Route
            path="/6to9yo/hair"
            element={
              <Person
                indivName={"Afro Hair"}
                indivNameCym={"Afro Hair"}
                proposedResource={"An interview with a hairdresser"}
                slugText={"Not developed yet"}
                resource={api.slice(9, 10)}
                indivPic={
                  "https://ichef.bbci.co.uk/images/ic/640x360/p08ng1wk.jpg"
                }
                text={
                  <ul>
                    <li>Not developed yet</li>
                  </ul>
                }
              ></Person>
            }
          ></Route>
          <Route
            path="/6to9yo/Windrush"
            element={
              <Person
                pscc={"/6to9yo"}
                psNum={"2"}
                bgcolor={"#CFE57D"}
                linkResource={"./../Resources/Windrush"}
                resourceOverlay={
                  "Find out more about the Windrush Generation in this informational piece."
                }
                resourceOverlayWelsh="Dysgwch mwy am y Genhedlaeth Windrush."
                backcardImg={windrush}
                welshSlugText={
                  "Y gweithwyr â  fu'n helpu ail-adeiladu Prydain."
                }
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.youtube.com/watch?v=QFRRpw6Qu4Q"
                        className="resourceHref"
                        target="_blank"
                      >
                        Senedd Cymru educational video about Windrush generation
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://senedd.wales/visit/exhibitions/past-exhibitions/windrush-cymru-celebrating-the-lives-and-journeys-of-a-generation/"
                        className="resourceHref"
                        target="_blank"
                      >
                        A collection of individual stories about those from the
                        Windrush Generation
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://racecouncilcymru.org.uk/windrush-generation-wales"
                        className="resourceHref"
                        target="_blank"
                      >
                        A description of the Windrush voyage itself{" "}
                      </a>
                    </li>

                    <li className="linkLi">
                      <a
                        href="https://racecouncilcymru.org.uk/windrush-cymru-elders"
                        className="resourceHref"
                        target="_blank"
                      >
                        The Windrush Cymru elders page{" "}
                      </a>
                    </li>

                    <li className="linkLi">
                      <a
                        href="https://www.youtube.com/watch?v=uzvjWIpFhQI"
                        className="resourceHref"
                        target="_blank"
                      >
                        Video on Windrush exhibition at Museum of Wales{" "}
                      </a>
                    </li>
                  </ul>
                }
                linksCym={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.youtube.com/watch?v=QFRRpw6Qu4Q"
                        className="resourceHref"
                        target="_blank"
                      >
                        Fideo addysgiadol Senedd Cymru am y genhedlaeth Windrush{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://senedd.wales/visit/exhibitions/past-exhibitions/windrush-cymru-celebrating-the-lives-and-journeys-of-a-generation/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Casgliad o straeon gan aelodau o genhedlaeth Windrush
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://racecouncilcymru.org.uk/windrush-generation-wales"
                        className="resourceHref"
                        target="_blank"
                      >
                        Disgrifiad o'r daith Windrush{" "}
                      </a>
                    </li>

                    <li className="linkLi">
                      <a
                        href="https://racecouncilcymru.org.uk/windrush-cymru-elders"
                        className="resourceHref"
                        target="_blank"
                      >
                        Tudalen y 'Windrush Elders'{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://racecouncilcymru.org.uk/windrush-cymru-elders"
                        className="resourceHref"
                        target="_blank"
                      >
                        Clip fideo am arddangosfa Windrush yn Amgueddfa Cymru{" "}
                      </a>
                    </li>
                  </ul>
                }
                indivName={"The Windrush Generation "}
                indivNameCym={"Y Genhedlaeth Windrush"}
                slugText={"The workers who helped rebuild Britain."}
                resource={api.slice(10, 11)}
                indivPic={
                  "https://www.peoplescollection.wales/sites/default/files/teaching/cover_0.jpg"
                }
                text={
                  <ul>
                    <li>
                      Between the years 1948 and 1971, many people came to the
                      UK from Caribbean countries.{" "}
                    </li>
                    <li>
                      They were called the Windrush Generation because the first
                      ship bringing them to Britain was called the MV Empire
                      Windrush.{" "}
                    </li>
                    <li>
                      They had been invited by the British Government to live
                      and work in the UK because there were not enough workers
                      in the country after World War Two.{" "}
                    </li>
                    <li>
                      The passengers who came on the Windrush had left their
                      friends and families back home to help rebuild Britain and
                      had fought for Britain during the war.{" "}
                    </li>
                    <li>
                      Many took up jobs in the National Health Service (NHS) and
                      in other sectors that were affected by a lack of people
                      who could work. {" "}
                    </li>
                    <li>
                      As the Caribbean was a part of the British Commonwealth at
                      that time, those who arrived here were automatically
                      ‘British subjects’ which meant they could permanently live
                      and work in the UK.  {" "}
                    </li>
                    <li>
                      Over the following decades, thousands of people came from
                      Commonwealth countries to Britain and many of them came to
                      live in Wales.{" "}
                    </li>
                    <li>
                      They often found that people treated them differently and
                      were unkind to them but the Windrush Generation made a
                      valuable and lasting contribution to life in Wales.{" "}
                    </li>
                    <li>
                      Caribbean migrants have become a vital part of Welsh
                      society and have transformed important aspects of Welsh
                      life.{" "}
                    </li>
                    <li>
                      There was a scandal in 2017 when people from the Windrush
                      Generation were deported or sent to detention centres.
                      This was because the British Government changed the rules
                      on what proof they needed that they were British Citizens.
                    </li>
                  </ul>
                }
                welshText={
                  <ul>
                    <li>
                      Rhwng blynyddoedd 1948 ac 1971, daeth llawer o bobl i'r DU
                      o wledydd y Caribî.
                    </li>
                    <li>
                      Cawson nhw'r enw ‘Cenhedlaeth Windrush’ oherwydd enw'r
                      llong gyntaf a ddaeth â nhw i Brydain oedd MV Empire
                      Windrush.
                    </li>
                    <li>
                      Roedden nhw wedi cael gwahoddiad gan Lywodraeth Prydain i
                      fyw a gweithio yn y Deyrnas Unedig oherwydd bod dim digon
                      o weithwyr yn y wlad ar ôl yr Ail Ryfel Byd.
                    </li>
                    <li>
                      Roedd y teithwyr a ddaeth ar y Windrush wedi gadael eu
                      ffrindiau a'u teulu gartref er mwyn helpu i ailadeiladu
                      Prydain. Roedd rhai wedi ymladd ar ochr Prydain yn ystod y
                      rhyfel.
                    </li>
                    <li>
                      Dechreuodd llawer ohonyn nhw weithio yn y Gwasanaeth
                      Iechyd Gwladol (y GIG) ac mewn sectorau eraill lle roedd
                      problemau oherwydd bod dim digon o bobl i weithio.
                    </li>
                    <li>
                      Gan fod Ynysoedd y Caribî yn rhan o'r Gymanwlad Brydeinig
                      ar y pryd hwnnw, roedd y rhai a gyrhaeddodd yma yn
                      ‘ddeiliaid Prydeinig’ yn awtomatig. Felly, roedden nhw'n
                      cael byw a gweithio yn y DU yn barhaol.
                    </li>
                    <li>
                      Dros y degawdau wedyn, daeth miloedd yn rhagor o bobl o'r
                      Gymanwlad i Brydain a daeth llawer ohonyn nhw i fyw yng
                      Nghymru.
                    </li>
                    <li>
                      Roedden nhw'n aml yn gweld bod pobl yn eu trin nhw'n
                      wahanol a'u bod nhw'n gas wrthyn nhw. Ond gwnaeth
                      Cenhedlaeth Windrush gyfraniad gwerthfawr a pharhaol i
                      fywyd yng Nghymru.
                    </li>
                    <li>
                      Mae mudwyr o'r Caribî wedi dod yn rhan hanfodol o
                      gymdeithas Cymru ac maen nhw wedi trawsnewid agweddau
                      pwysig ar fywyd Cymru.
                    </li>
                    <li>
                      Yn 2017 roedd sgandal pan gafodd cannoedd o bobl
                      Cenhedlaeth Windrush eu danfon yn ôl neu cael eu cadw mewn
                      canolfannau cadw. Roedd hyn oherwydd bod Llywodraeth
                      Prydain wedi newid y rheolau ar beth oedd eu hangen i
                      ddangos eu bod nhw'n ddeiliaid Prydeinig.
                    </li>
                  </ul>
                }
              ></Person>
            }
          ></Route>
          <Route
            path="/6to9yo/IdrisPhillips"
            element={
              <Person
                pscc={"/6to9yo"}
                psNum={"2"}
                resourceOverlay={"An imaginary biography of Idris Phillips."}
                resourceOverlayWelsh={"Bywgraffiad dychmygol Idris Phillips. "}
                welshSlugText={"Glowyr du yn cloddio am aur du."}
                quizButStyle={"dontShowQuizBut"}
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.walesonline.co.uk/news/wales-news/mixed-race-working-mines-suspicion-16186636"
                        className="resourceHref"
                        target="_blank"
                      >
                        Wales Online article documenting Phillips's struggle
                        being from the only mixed race family in his village{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.bbc.co.uk/programmes/p08t59ty"
                        className="resourceHref"
                        target="_blank"
                      >
                        BBC's 'Wales's Black Miners' report speaks to the family
                        of Idris Phillips{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.visionfountain.com/2019/10/04/idris-phillips-portrait-at-national-coal-mining-museum/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Portrait at National Coal Mining Museum
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.bbc.co.uk/news/uk-wales-54390217"
                        className="resourceHref"
                        target="_blank"
                      >
                        BBC article on the history of black coal miners in Wales{" "}
                      </a>
                    </li>
                  </ul>
                }
                linksCym={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.walesonline.co.uk/news/wales-news/mixed-race-working-mines-suspicion-16186636"
                        className="resourceHref"
                        target="_blank"
                      >
                        Erthygl yn trafod profiad Phillips fel yr unig deulu
                        aml-ethnig yn ei bentref
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.bbc.co.uk/programmes/p08t59ty"
                        className="resourceHref"
                        target="_blank"
                      >
                        Rhaglen ddogfen "Wales's Black Miner's" yn trafod bywyd
                        Idris Phillips gyda'i deulu
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.visionfountain.com/2019/10/04/idris-phillips-portrait-at-national-coal-mining-museum/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Portread yn yr Amgueddfa Cloddio Glo Gwladol{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.bbc.co.uk/news/uk-wales-54390217"
                        className="resourceHref"
                        target="_blank"
                      >
                        Erthygl am lowyr du yng Nghymru{" "}
                      </a>
                    </li>
                  </ul>
                }
                linkResource={"./../Resources/IdrisPhillips"}
                indivName={"Idris Phillips"}
                indivNameCym={"Idris Phillips"}
                bgcolor="#CFE57D"
                backcardImg={idris}
                slugText={"Black miners digging for black gold."}
                resource={api.slice(11, 12)}
                indivPic={
                  "https://ichef.bbci.co.uk/images/ic/640x360/p08t5ggx.jpg"
                }
                text={
                  <ul>
                    <li>
                      Idris Philips was the son of a sailor from the Caribbean
                      Island of St Lucia, and a white woman from Merthyr.{" "}
                    </li>
                    <li>
                      He was born in the early 1930s and had 10 brothers and
                      sisters.{" "}
                    </li>
                    <li>
                      He and his family suffered racism in the small village of
                      Senghenydd where they lived and people treated them
                      differently because of the colour of their skin.
                    </li>
                    <li>
                      They were the only mixed race family in the village.{" "}
                    </li>
                    <li>
                      At 14, like many others at his age at this time, Idris
                      began working in the mines.{" "}
                    </li>
                    <li>
                      About 200 black miners worked as Welsh miners from the
                      1800s onwards.{" "}
                    </li>
                    <li>
                      African Caribbean coal miners like Idris worked hard
                      underground with white British, European and Asian miners
                      but they were not treated equally.{" "}
                    </li>
                    <li>
                      While working at the Windsor Colliery, the manager refused
                      to let him work underground, stating that “the boys would
                      go on strike” if they had to work with him.{" "}
                    </li>
                    <li>
                      The racism Idris was faced with was not just in the mines.
                      "There was a policeman and he was always running up to me
                      and hitting me with his truncheon because he didn't like
                      black people," Idris said.{" "}
                    </li>
                    <li>
                      One of his proudest moments was organising the teams of
                      miners at the Aberfan disaster. Children from the school
                      were buried underground and the miners helped get them
                      out.{" "}
                    </li>
                    <li>
                      Idris’ story shows that despite hardship and unfairness,
                      great things can be achieved with determination.{" "}
                    </li>
                    <li>Sadly, Idris died recently of Covid.</li>
                  </ul>
                }
                welshText={
                  <ul>
                    <li>
                      Roedd Idris Phillips yn fab i forwr o St Lucia, ynys yn y
                      Caribî, a menyw wen o Ferthyr Tudful.
                    </li>
                    <li>
                      Cafodd ei eni ar ddechrau'r 1930au ac roedd ganddo 10
                      brawd a chwaer.{" "}
                    </li>
                    <li>
                      Dioddefodd Idris a'i deulu o hiliaeth ym mhentref bach
                      Senghennydd lle roedden nhw'n byw ac roedd pobl yn arfer
                      eu trin nhw'n wahanol oherwydd lliw eu croen.
                    </li>
                    <li>Nhw oedd yr unig deulu hil gymysg yn y pentref.</li>
                    <li>
                      Pan oedd Idris yn 14 oed, fel llawer o fechgyn eraill o'i
                      oedran ar y pryd hwnnw, dechreuodd weithio yn y pyllau
                      glo.
                    </li>
                    <li>
                      Gweithiodd tua 200 o lowyr du fel glowyr yng Nghymru o'r
                      1800au ymlaen.
                    </li>
                    <li>
                      Gweithiodd glowyr Affricanaidd Caribïaidd fel Idris yn
                      galed o dan ddaear gyda glowyr gwyn Prydeinig ac
                      Ewropeaidd a glowyr Asiaidd, ond doedden nhw ddim yn cael
                      eu trin yn gyfartal.
                    </li>
                    <li>
                      Pan oedd Idris yn gweithio yng Nglofa Windsor, gwrthododd
                      y rheolwr adael iddo weithio o dan ddaear, gan ddweud
                      “byddai'r bechgyn yn mynd ar streic” tasai rhaid iddyn nhw
                      weithio gydag e.
                    </li>
                    <li>
                      Wynebodd Idris hiliaeth mewn mannau eraill hefyd, nid dim
                      ond yn y pyllau glo. “Roedd plisman oedd bob amser yn
                      rhedeg ata i ac yn fy mwrw â'i bastwn oherwydd nad oedd
                      e'n hoffi pobl ddu,” meddai Idris.
                    </li>
                    <li>
                      Y peth roedd Idris fwyaf balch ohono oedd yr help roddodd
                      e wrth drefnu'r timau o lowyr adeg trychineb Aberfan.
                      Roedd plant yr ysgol wedi'u claddu o dan ddaear a helpodd
                      y glowyr i'w cael nhw allan.
                    </li>
                    <li>
                      Mae stori Idris yn dangos, er bod bywyd yn gallu bod yn
                      galed ac yn annheg, eich bod chi'n gallu cyflawni pethau
                      mawr os ydych chi'n benderfynol.
                    </li>
                    <li>Yn anffodus, bu farw Idris yn ddiweddar o Covid.</li>
                  </ul>
                }
              ></Person>
            }
          ></Route>
          <Route
            path="/9to12yo/ColinJackson"
            element={
              <Person
                pscc={"/9to12yo"}
                psNum={"3"}
                bgcolor={"#A2D6F9"}
                resourceOverlay={
                  "An imaginary interview between Jason Mohammed and Colin Jackson."
                }
                resourceOverlayWelsh="Sgwrs ddychmygol rhwng Jason Mohammed a Colin Jackson. "
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://olympics.com/en/athletes/colin-jackson"
                        className="resourceHref"
                        target="_blank"
                      >
                        Biography from the official Olympics website{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.factsnippet.com/site/facts-about-colin-jackson.html"
                        className="resourceHref"
                        target="_blank"
                      >
                        37 facts about Colin Jackson{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.walesonline.co.uk/sport/other-sport/athletics/colin-jackson-hid-homosexuality-secret-16517078"
                        className="resourceHref"
                        target="_blank"
                      >
                        Colin Jackson on his sexuality{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://meithrin.cymru/wp-content/uploads/2022/07/Colin-J-Terfynol.pdf"
                        className="resourceHref"
                        target="_blank"
                      >
                        Mudiad Ysgolion Meithrin information page{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.bbc.co.uk/whodoyouthinkyouare/past-stories/colin-jackson.shtml"
                        className="resourceHref"
                        target="_blank"
                      >
                        BBC Who Do You Think You Are - Colin Jackson{" "}
                      </a>
                    </li>
                  </ul>
                }
                linksCym={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://olympics.com/en/athletes/colin-jackson"
                        className="resourceHref"
                        target="_blank"
                      >
                        Bywgraffiad gan wefan swyddogol y Gemau Olympaidd{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.factsnippet.com/site/facts-about-colin-jackson.html"
                        className="resourceHref"
                        target="_blank"
                      >
                        37 ffaith am Colin Jackson{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.walesonline.co.uk/sport/other-sport/athletics/colin-jackson-hid-homosexuality-secret-16517078"
                        className="resourceHref"
                        target="_blank"
                      >
                        Colin Jackson ar ei rywioldeb{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://meithrin.cymru/wp-content/uploads/2022/07/Colin-J-Terfynol.pdf"
                        className="resourceHref"
                        target="_blank"
                      >
                        Taflen wybodaeth gan Mudiad Ysgolion Meithrin{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.bbc.co.uk/whodoyouthinkyouare/past-stories/colin-jackson.shtml"
                        className="resourceHref"
                        target="_blank"
                      >
                        BBC Who Do You Think You Are - Colin Jackson{" "}
                      </a>
                    </li>
                  </ul>
                }
                backcardImg={colin}
                indivName={"Colin Jackson CBE"}
                indivNameCym={"Colin Jackson CBE"}
                linkResource={"./../Resources/ColinJackson"}
                slugText={"The Olympic medallist."}
                welshSlugText={"Yr athletwr â medal Olympaidd."}
                resource={nineApi.slice(3, 4)}
                indivPic={
                  "https://ichef.bbci.co.uk/onesport/cps/624/cpsprodpb/2ED2/production/_95868911_gettyimages-1852091.jpg"
                }
                text={
                  <ul>
                    <li>
                      Colin Jackson was born on 18 February 1967, in Cardiff.{" "}
                    </li>
                    <li>
                      Colin is a gifted sportsman, who is very talented in a
                      number of sports. He played football and cricket for the
                      county as well as rugby and basketball for his school.
                    </li>
                    <li>
                      Colin Jackson won his first major medal, a silver, in the
                      110m hurdles, aged 19 at the 1986 Commonwealth Games.
                    </li>
                    <li>
                      Colin went on to win a silver medal at the 1988 Seoul
                      Olympic Games and won European and Commonwealth gold
                      medals in 1990.
                    </li>

                    <li>
                      Jackson set a world record of 12.91 seconds to become the
                      1993 World Champion, and went undefeated at the European
                      championships for 12 years in a row.
                    </li>

                    <li>He remains the 60m hurdles European record holder!</li>

                    <li>
                      During his illustrious career, Colin Jackson won
                      twenty-four medals at World, Olympic, Commonwealth and
                      European level.
                    </li>
                    <li>
                      It is little wonder that Jackson is today widely regarded
                      as Europe’s greatest-ever hurdler!
                    </li>

                    <li>
                      Asked in 2002 if being Welsh was important to him, Colin
                      replied: ‘I love being Welsh. It’s part of my identity.
                      What’s it give me? My laid-backness. My quiet
                      determination’.
                    </li>
                    <li>
                      The picture of Colin Jackson proudly draped in Y Ddraig
                      Goch, the flag of Wales, is a powerful image of Welsh
                      identity.{" "}
                    </li>
                    <li>
                      Now a television sports commentator and presenter, Colin
                      appeared on Strictly Come Dancing in 2005.
                    </li>
                    <li>
                      In 2017, aged 50, Colin Jackson, the stylish icon of Welsh
                      sport, came out as gay.{" "}
                    </li>
                  </ul>
                }
                welshText={
                  <ul>
                    <li>
                      Cafodd Colin Jackson ei eni ar 18 Chwefror 1967, yng
                      Nghaerdydd.{" "}
                    </li>
                    <li>
                      Roedd Colin yn dda iawn am wneud chwaraeon. Roedd yn
                      dalentog iawn mewn llawer o chwaraeon. Chwaraeodd
                      bêl-droed a chriced dros y sir a hefyd rygbi a phêl fasged
                      dros ei ysgol.
                    </li>
                    <li>
                      Enillodd Colin Jackson ei fedal fawr gyntaf, medal arian,
                      yn y ras 110m dros y clwydi, pan oedd yn 19 oed yng
                      Ngemau'r Gymanwlad yn 1986.
                    </li>
                    <li>
                      Wedyn, enillodd Colin fedal arian yng Ngemau Olympaidd
                      Seoul, 1988, ac enillodd fedalau aur ym mhencampwriaeth
                      Ewrop ac yng Ngemau'r Gymanwlad yn 1990.
                    </li>

                    <li>
                      Sefydlodd Jackson record byd o 12.91 eiliad i ddod yn
                      Bencampwr y Byd 1993 a chollodd e ddim un ras ym
                      mhencampwriaethau Ewrop am 12 mlynedd yn olynol.
                    </li>

                    <li>
                      Fe yw deiliad record Ewrop am y ras 60m dros y clwydi o
                      hyd!{" "}
                    </li>

                    <li>
                      Yn ystod ei yrfa lwyddiannus, enillodd Colin Jackson ddau
                      ddeg pedair o fedalau ar lefel Byd, Olympaidd, y Gymanwlad
                      ac Ewrop.
                    </li>
                    <li>
                      Does dim syndod bod pobl heddiw yn meddwl mai Jackson oedd
                      y rhedwr gorau erioed dros y clwydi yn Ewrop!
                    </li>

                    <li>
                      Pan ofynnodd rhywun iddo yn 2002 a oedd bod yn Gymro yn
                      bwysig iddo, atebodd Colin: “Dwi'n dwlu ar fod yn Gymro.
                      Mae'n rhan o'm hunaniaeth i. Beth mae bod yn Gymro wedi'i
                      roi i fi? Fy natur hamddenol. Fy mhenderfyniad tawel.”
                    </li>
                    <li>
                      Mae'r llun o Colin Jackson wedi'i lapio'n falch yn y
                      Ddraig Goch, baner Cymru, yn ddelwedd bwerus o hunaniaeth
                      Gymreig.
                    </li>
                    <li>
                      Erbyn hyn mae Colin yn sylwebydd ac yn gyflwynydd
                      chwaraeon ar y teledu. Ymddangosodd ar Strictly Come
                      Dancing yn 2005.
                    </li>
                    <li>
                      Yn 2017, pan oedd yn 50 oed, dywedodd Colin Jackson, eicon
                      llawn steil chwaraeon Cymru, ei fod yn hoyw.
                    </li>
                  </ul>
                }
              ></Person>
            }
          ></Route>
          <Route
            path="/9to12yo/IrisWilliams"
            element={
              <PersonYTVid
                pscc={"/9to12yo"}
                psNum={"3"}
                backLContent={"The beautiful voice of Iris Williams."}
                backLContentCym="Llais prydferth Iris Williams. "
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.thefreelibrary.com/Voice+of+the+Valleys%3B+Singer+Iris+Williams+is+still+proud+of+her...-a090780695"
                        className="resourceHref"
                        target="_blank"
                      >
                        Short biography{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.walesonline.co.uk/news/wales-news/iris-williams-owes-success-kindness-6535907"
                        className="resourceHref"
                        target="_blank"
                      >
                        Iris Williams on the quality of her foster care{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.walesonline.co.uk/news/wales-news/iris-williams-wales-always-great-1835966"
                        className="resourceHref"
                        target="_blank"
                      >
                        Iris Williams on Welsh identity{" "}
                      </a>
                    </li>
                  </ul>
                }
                linksCym={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.thefreelibrary.com/Voice+of+the+Valleys%3B+Singer+Iris+Williams+is+still+proud+of+her...-a090780695"
                        className="resourceHref"
                        target="_blank"
                      >
                        Bywgraffiad byr{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.walesonline.co.uk/news/wales-news/iris-williams-owes-success-kindness-6535907"
                        className="resourceHref"
                        target="_blank"
                      >
                        Iris Williams ar safon ei gofal maeth{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.walesonline.co.uk/news/wales-news/iris-williams-wales-always-great-1835966"
                        className="resourceHref"
                        target="_blank"
                      >
                        Iris Williams ar ei hunaniaeth Gymreig
                      </a>
                    </li>
                  </ul>
                }
                indivName={"Iris Williams OBE"}
                indivNameCym={"Iris Williams OBE"}
                youtubeVid="https://www.youtube.com/embed/Et70EtJ0Shg"
                youtubeVidCym={"https://www.youtube.com/embed/Et70EtJ0Shg"}
                slugText={"The jazz legend from South Wales."}
                welshSlugText={"Y gantores jazz chwedlonol o Dde Cymru. "}
                resource={nineApi.slice(4, 5)}
                indivPic={
                  "https://i2-prod.walesonline.co.uk/incoming/article1781243.ece/ALTERNATES/s615/iris-williams-61348596.jpg"
                }
                text={
                  <ul>
                    <li>
                      Iris Williams was born on 20 April 1944 in Rhydyfelin.
                    </li>
                    <li>
                      Her father was a black American GI posted to Wales during
                      World War Two and her mother, whom he met at a dance hall
                      in Pontypridd, gave her up for adoption.
                    </li>
                    <li>
                      She was brought up in a Children’s Home in Tonyrefail.{" "}
                    </li>
                    <li>
                      Iris’s career took off after she won a scholarship to the
                      Royal Welsh College of Music and Drama.
                    </li>

                    <li>
                      Iris Williams is now regarded as a jazz legend after a
                      glittering 40-year international jazz singing career. Her
                      hits include: ‘He Was Beautiful’ (1979) and ‘Pererin Wyf’
                      (1971) a Welsh-language version of ‘Amazing Grace’.
                    </li>

                    <li>
                      She won the Welsh talent contest Cân i Gymru (A Song for
                      Wales) in 1974 with the song ‘I gael Cymru’n Gymru Rydd’
                      (For a Free Wales).
                    </li>

                    <li>
                      Iris has sung with Bob Hope, for the Royal Variety
                      Performance and was one of the stars of the gala concert
                      to celebrate the opening of the National Assembly of Wales
                      in 1999.
                    </li>

                    <li>
                      In the New Year Honours list of 2004, Williams was
                      honoured with an OBE (Officer of the Order of the British
                      Empire) for her contribution to music, performing for
                      troops around the world.
                    </li>

                    <li>
                      In 2006, she performed at the Brecon Jazz Festival, and
                      was later admitted to the Gorsedd of Bards at the National
                      Eisteddfod of Wales.
                    </li>
                    <li>
                      Iris Williams became a foster care champion for Rhondda
                      Cynon Taf Council in 2014.{" "}
                    </li>

                    <li>She now lives in California in the USA.</li>
                  </ul>
                }
                welshText={
                  <ul>
                    <li>
                      Cafodd Iris Williams ei geni ar 20 Ebrill 1944 yn
                      Rhydfelen.
                    </li>
                    <li>
                      Roedd ei thad yn filwr ‘GI’ Americanaidd Du a ddaeth i
                      Gymru yn ystod yr Ail Ryfel Byd. Cwrddodd e â'i mam mewn
                      neuadd ddawns ym Mhontypridd. Penderfynodd mam Iris ei
                      rhoi hi i gael ei mabwysiadu.
                    </li>

                    <li>
                      Cafodd Iris ei magu mewn Cartref Plant yn Nhonyrefail.
                    </li>

                    <li>
                      Datblygodd gyrfa Iris ar ôl iddi ennill ysgoloriaeth i
                      Goleg Brenhinol Cerdd a Drama Cymru.
                    </li>

                    <li>
                      Erbyn hyn mae Iris Williams yn cael ei hystyried yn
                      gantores jazz chwedlonol. Cafodd yrfa ryngwladol
                      lwyddiannus dros 40 mlynedd yn canu jazz. Mae ei chaneuon
                      llwyddiannus yn cynnwys: ‘He Was Beautiful’ (1979) a
                      ‘Pererin Wyf’ (1971).
                    </li>

                    <li>
                      Enillodd hi gystadleuaeth Cân i Gymru yn 1974 gyda'r gân
                      ‘I gael Cymru’n Gymru Rydd’.
                    </li>

                    <li>
                      Mae Iris wedi canu gyda Bob Hope, ar gyfer y ‘Royal
                      Variety Performance’ ac roedd hi'n un o sêr y cyngerdd
                      gala i ddathlu agor Cynulliad Cenedlaethol Cymru yn 1999.
                    </li>

                    <li>
                      Yn rhestr Anrhydeddau'r Flwyddyn Newydd 2004, cafodd
                      Williams yr anrhydedd OBE (Officer of the Order of the
                      British Empire) am ei chyfraniad i gerddoriaeth ac am
                      berfformio i filwyr ledled y byd.
                    </li>
                    <li>
                      Yn 2006, perfformiodd hi yng Ngŵyl Jazz Aberhonddu ac
                      wedyn cafodd ei derbyn i Orsedd y Beirdd yn Eisteddfod
                      Genedlaethol Cymru.
                    </li>

                    <li>
                      Daeth Iris Williams yn hyrwyddwr gofal maeth i Gyngor
                      Rhondda Cynon Taf yn 2014.{" "}
                    </li>
                    <li>Erbyn hyn mae hi'n byw yn California yn UDA.</li>
                  </ul>
                }
              ></PersonYTVid>
            }
          ></Route>
          <Route
            path="/12to16yo/PaulRobeson"
            element={
              <PersonPodcast
                pscc={"/12to16yo"}
                welshSlugText="Yr Americanwr a safodd gyda'r glowyr. "
                psNum={"4"}
                indivName={"Paul Robeson"}
                bgImg={"podcastImgOverlay2"}
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://hwb.gov.wales/repository/resource/b21a2669-cd8c-4f09-87e4-bfb0bca4d51a/en"
                        className="resourceHref"
                        target="_blank"
                      >
                        Welsh Government website - information about the life of
                        Paul Robeson{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://cadw.gov.wales/paul-robesons-wales"
                        className="resourceHref"
                        target="_blank"
                      >
                        Welsh Government website - remembering Paul Robeson
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.youtube.com/watch?v=IWhQ_0y7Nds"
                        className="resourceHref"
                        target="_blank"
                      >
                        David Harewood (actor) talking about Paul Robeson{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.youtube.com/embed/9_QGfzeiNb0"
                        className="resourceHref"
                        target="_blank"
                      >
                        The Manic Street Preachers song - ‘Let Robeson Sing’
                      </a>
                    </li>
                  </ul>
                }
                linksCym={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://hwb.gov.wales/repository/resource/b21a2669-cd8c-4f09-87e4-bfb0bca4d51a/en"
                        className="resourceHref"
                        target="_blank"
                      >
                        Gwybodaeth am Paul Robeson ar Hwb
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://cadw.llyw.cymru/cymru-paul-robeson?_gl=1*1tm0k8q*_ga*MTI5NjUxMTQwOC4xNjY5MjIwMDkz*_ga_B2BCVKM874*MTY4MjQxNTc1OS4yLjAuMTY4MjQxNTc1OS42MC4wLjA."
                        className="resourceHref"
                        target="_blank"
                      >
                        Erthygl Cadw am Paul Robeson{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.youtube.com/watch?v=IWhQ_0y7Nds"
                        className="resourceHref"
                        target="_blank"
                      >
                        David Harewood (actor) yn trafod Paul Robeson{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.youtube.com/embed/9_QGfzeiNb0"
                        className="resourceHref"
                        target="_blank"
                      >
                        Cân y Manic Street Preachers - ‘Let Robeson Sing’
                      </a>
                    </li>
                  </ul>
                }
                indivNameCym={"Paul Robeson"}
                overlayText="Emily Pemberton and Mel Owen discuss Paul
                Robeson's life."
                overlayTextCym={"Emily Pemberton yn trafod Paul Robeson. "}
                backLContent={emily}
                backLContentCym={emilyCym}
                slugText={"The American who stood with the miners."}
                resource={nineApi.slice(5, 6)}
                indivPic={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/%22Paul_Robeson%2C_world_famous_Negro_baritone%2C_leading_Moore_Shipyard_%28Oakland%2C_CA%29_workers_in_singing_the_Star_Spangled_Ba_-_NARA_-_535874.jpg/640px-%22Paul_Robeson%2C_world_famous_Negro_baritone%2C_leading_Moore_Shipyard_%28Oakland%2C_CA%29_workers_in_singing_the_Star_Spangled_Ba_-_NARA_-_535874.jpg"
                }
                text={
                  <>
                    <ul>
                      <li>
                        Paul Robeson was born on 9 April 1898 in Princetown, New
                        Jersey, USA. Robeson’s father was born into slavery and
                        escaped as a teen.
                      </li>
                      <li>
                        Paul, an actor and singer, is perhaps best known for his
                        political activism, and said that his political
                        education started in the UK through his contact with
                        ordinary working people, particularly the miners of
                        South Wales.
                      </li>
                      <li>
                        Robeson also claimed that he saw clear similarities
                        between miners' lives and the lives of Black Americans.
                      </li>
                      <li>
                        Paul developed strong links to Wales after an accidental
                        meeting with Welsh miners in London, who were
                        petitioning the government for help with growing
                        unemployment. He led a Welsh choir in a rendition and
                        organised donations to fund their return to south Wales
                        on a train, complete with food and clothing.
                      </li>
                      <li>
                        Paul joined the miners on hunger marches in 1927 and
                        1928. In 1940, he starred in the movie Proud Valley –
                        about a black miner who moves to the Valleys.
                      </li>
                      <li>
                        In 1950, the US State Department cancelled Robeson’s
                        passport, meaning he could not leave the United States.
                        In the eyes of the US government, he was an enemy due to
                        his political activism.
                      </li>
                      <li>
                        In 1957, while still not able to travel out of the US,
                        Robeson was able to perform at the Miners’ Eisteddfod in
                        Porthcawl due to a new technology - the transatlantic
                        telephone link!
                      </li>
                      <li>
                        During his performance, Robeson could be heard saying:
                        “My warmest greetings to the people of my beloved Wales
                        and a special hello to the miners of South Wales at your
                        great festival. It is a privilege to be participating in
                        this historic festival. All the best to you as we strive
                        for a world where we can live abundant and dignified
                        lives.”
                      </li>
                      <li>
                        One year later, in July 1958, Robeson’s passport was
                        returned to him. In August 1958, Robeson returned to
                        Wales to attend the National Eisteddfod in Ebbw Vale!
                      </li>
                      <li>
                        On 23 January 1976, Paul Robeson died in Philadelphia,
                        the US.{" "}
                      </li>
                      <li>
                        In 2018, a biopic depicting his life was performed at
                        the National Eisteddfod in Cardiff Bay. The show was 60
                        years to the day since Paul addressed the Eisteddfod
                        festival in Ebbw Vale.{" "}
                      </li>
                    </ul>
                    <p>
                      Paul Robeson was blessed with a wonderful singing voice.
                      He was also fiercely moral – and believed in treating
                      people, whatever their skin colour, with respect and
                      fairness.{" "}
                    </p>
                  </>
                }
                welshText={
                  <>
                    <ul>
                      <li>
                        Cafodd Paul Robeson ei eni ar 9 Ebrill 1898 yn
                        Princetown, New Jersey, UDA. Cafodd tad Robeson ei eni
                        yn gaethwas a dihangodd pan oedd yn ei arddegau.
                      </li>
                      <li>
                        Roedd Paul yn athletwr naturiol ac yn bêl-droediwr
                        Americanaidd ond yn fwyaf adnabyddus oherwydd ei
                        weithredu gwleidyddol a ddechreuodd yn y Deyrnas Unedig
                        trwy gyswllt gyda phobl dosbarth gweithiol cyffredin, yn
                        enwedig glowyr De Cymru.
                      </li>
                      <li>
                        Honnai Robeson ei fod yn gweld tebygrwydd clir rhwng
                        bywydau'r glowyr a bywydau Americanwyr Du.
                      </li>
                      <li>
                        Datblygodd gysylltiadau cryf â Chymru ar ôl cwrdd â
                        glowyr o Gymru yn Llundain. Roedden nhw yno i geisio
                        cael help gan y llywodraeth. Arweiniodd Paul y canu gyda
                        chôr o Gymru a threfnu rhoddion er mwyn iddyn nhw allu
                        mynd yn ôl i dde Cymru ar y trên, gyda bwyd a dillad
                        hefyd.
                      </li>
                      <li>
                        Ymunodd Paul â'r glowyr ar orymdeithiau newyn yn 1927 a
                        1928. Yn 1940, Paul oedd y seren yn y ffilm Proud Valley
                        – am löwr du sy'n symud i'r Cymoedd.
                      </li>
                      <li>
                        Yn 1950, canslwyd pasbort Robeson gan yr US State
                        Department oedd yn golygu na allai adael UDA. Roedd yn
                        elyn, yn llygaid llywodraeth America, oherwydd ei
                        weithredu gwleidyddol.
                      </li>
                      <li>
                        Yn 1957, ac yntau yn dal ddim yn gallu gadael America,
                        fe berfformiodd Robeson yn Eisteddfod y Glowyr ym
                        Mhorthcawl trwy dechnoleg newydd sbon - y linc ffôn
                        trawsatlantig!
                      </li>
                      <li>
                        Yn ystod ei berfformiad gellir clywed Robeson yn dweud
                        “My warmest greetings to the people of my beloved Wales
                        and a special hello to the miners of South Wales at your
                        great festival. It is a privilege to be participating in
                        this historic festival. All the best to you as we strive
                        for a world where we can live abundant and dignified
                        lives.”
                      </li>
                      <li>
                        Blwyddyn yn ddiweddarach rhoddwyd pasbort Robeson yn ôl
                        iddo. Yn Awst 1958 dychwelodd Robeson i Gymru i fynd i'r
                        Eiseddfod Gendlaethol yng Nghlyn Ebwy.
                      </li>
                      <li>
                        Yn 2018, perfformiwyd Hwn yw fy Mrawd: Paul Robeson –
                        Arwr i Gymru, Arwr i’r Byd, drama gerdd yn darlunio ei
                        fywyd, yn yr Eisteddfod Genedlaethol ym Mae Caerdydd.
                        Cafodd y sioe ei llwyfannu 60 mlynedd i'r diwrnod ers i
                        Paul annerch yr Eisteddfod yng Nglyn Ebwy.
                      </li>
                      <li>
                        Ar 23 Ionawr 1976, gwnaeth Paul Robeson farw yn
                        Philadelphia, UDA.
                      </li>
                    </ul>
                    <p>
                      Roedd llais canu rhagorol gan Paul Robeson. Hefyd, roedd
                      yn ffyrnig o foesol – ac yn credu mewn trin pobl, beth
                      bynnag oedd eu cred a lliw eu croen, gyda pharch a
                      thegwch.{" "}
                    </p>{" "}
                  </>
                }
              ></PersonPodcast>
            }
          ></Route>
          <Route
            path="/9to12yo/Louisa"
            element={
              <Person
                welshSlugText="Y ddynes fu'n byw dros y byd. "
                pscc={"/9to12yo"}
                psNum={"3"}
                indivName={"Louisa BB Morgan"}
                indivNameCym={"Louisa BB Morgan"}
                bgcolor={"#FF686B"}
                backcardImg={louisa}
                resourceOverlay={" Louisa BB Morgan’s imaginary biography. "}
                resourceOverlayWelsh="Bywgraffiad dychmygol Louisa BB Morgan. "
                linkResource={"./../Resources/Louisa"}
                slugText={"The woman who lived all over the world."}
                resource={nineApi.slice(6, 7)}
                indivPic={
                  "https://m.media-amazon.com/images/M/MV5BZGRkNTgwM2YtZWUxNy00MDQzLWE5OTAtODU1MjVmYWE2ZjhiXkEyXkFqcGdeQXVyODIyODI5Mzc@._V1_.jpg"
                }
                text={
                  <ul>
                    <li>
                      Louisa St Bartholomew-Brown Morgan was born on 12 June
                      1951 in London.{" "}
                    </li>
                    <li>
                      Louisa went to Nigeria in 1960 and received a Catholic
                      school education – and enjoyed it very much.{" "}
                    </li>
                    <li>
                      Louisa studied: French & European Studies; Strategic
                      Studies; and Drama & Performance at university.{" "}
                    </li>
                    <li>
                      Louisa loves acting and singing and has worked hard to
                      establish her career.{" "}
                    </li>
                    <li>
                      For a while, she worked at CBS records in London, where
                      she met many famous people.{" "}
                    </li>
                    <li>
                      Louisa has lived all over the world. At one point, she
                      worked at the Embassy of Grenada, where she worked as a
                      PA/Translator.{" "}
                    </li>
                    <li>
                      She was then ‘poached’ to work for Hughes Aircrafts
                      Systems International, NATO Defence Contractors. It was
                      classified work, which because of the Official Secrets
                      Act, Louisa is forbidden to speak about.{" "}
                    </li>
                    <li>
                      Louisa believes that travel and education are ‘extremely
                      important’ in developing a person’s intellect and
                      broadening their understanding of life. Adding, ‘The
                      adage, “travel broadens the mind” is quite true. 
                      Travelling makes one see the world with different
                      eyes…Through exploring, you discover how fragile humans
                      are, and how delicate the world we live in is’.{" "}
                    </li>
                    <li>
                      Sadly, Louisa has experienced racism since moving to
                      Wales.  Not from local Welsh people, but English people
                      who had moved to the Builth area from the Midlands. They
                      used to say to me: “Why don’t you go back to where you
                      came from?”. I replied, “Why don’t you, you’re not from
                      Wales. The Welsh people are lovely. You’re just ignorant
                      English people’.{" "}
                    </li>
                    <li>
                      Regarding her Catholic education and faith, Louisa says:
                      ‘It binds me to my beliefs… It’s helped shape my life. It
                      continues to make me what I am today’.{" "}
                    </li>

                    <li>
                      Louisa has lived an interesting life – believing that a
                      person can grow and improve through hard work, travelling
                      the world and having strong faith.{" "}
                    </li>
                  </ul>
                }
                welshText={
                  <ul>
                    <li>
                      Cafodd Louisa St Bartholomew-Brown Morgan ei geni ar 12
                      Mehefin 1951 yn Llundain.
                    </li>
                    <li>
                      Aeth Louisa i Nigeria yn 1960, ac aeth i ysgol Gatholig -
                      a mwynhau yn fawr iawn.
                    </li>
                    <li>
                      Astudiodd Louisa: Ffrangeg ac Astudiaethau Ewropeaidd;
                      Astudiaethau Strategol; a Drama a Pherfformio yn y
                      brifysgol.
                    </li>
                    <li>
                      Mae Louisa yn dwlu ar actio a chanu ac mae hi wedi
                      gweithio'n galed i sefydlu ei gyrfa.
                    </li>
                    <li>
                      Am ychydig, gweithiodd yn CBS Records yn Llundain, lle
                      cafodd hi gyfarfod â llawer o enwogion.
                    </li>
                    <li>
                      Mae Louisa wedi byw dros y byd i gyd. Ar un adeg, roedd
                      hi'n gweithio yn Llysgenhadaeth Granada, lle roedd hi'n
                      gweithio fel Cynorthwyydd Personol/Cyfieithydd.
                    </li>
                    <li>
                      Wedyn, cafodd hi ei ‘photsio’ i weithio i gwmni Hughes
                      Aircrafts Systems International, Contractwyr Amddiffyn
                      NATO. Roedd yn waith cyfrinachol, ac oherwydd y Ddeddf
                      Cyfrinachau Swyddogol, dydy Louisa ddim yn cael siarad
                      amdano.
                    </li>
                    <li>
                      Mae Louisa yn credu bod teithio ac addysg yn ‘hynod
                      bwysig’ er mwyn datblygu deallusrwydd person ac ehangu ei
                      ddealltwriaeth o fywyd. Mae hi'n ychwanegu, ‘Mae'r
                      ymadrodd “mae teithio'n ehangu'r meddwl” yn hollol wir.
                      Mae teithio'n gwneud i rywun weld y byd â llygaid
                      gwahanol... Drwy deithio, rydych chi'n gweld pa mor agored
                      i niwed yw bodau dynol, a pha mor fregus yw'r byd lle
                      rydyn ni'n byw’.
                    </li>
                    <li>
                      Yn anffodus, mae Louisa wedi profi hiliaeth ers symud i
                      Gymru. Nid gan y Cymry lleol, ond gan Saeson a oedd wedi
                      symud i ardal Llanelwedd o ganolbarth Lloegr. ‘Bydden
                      nhw'n dweud wrtha i: “Pam nad ydych chi’n mynd yn ôl i'r
                      wlad y daethoch chi ohoni?”. Byddwn i'n ateb, “Pam dydych
                      chi ddim yn gwneud hynny? Nid Cymry ydych chi. Mae'r Cymry
                      yn hyfryd. Dim ond Saeson anwybodus ydych chi”’.
                    </li>
                    <li>
                      O ran ei haddysg a'i ffydd Gatholig, dywed Louisa: ‘Mae'n
                      fy nghlymu at fy nghredoau... Mae wedi helpu i lunio fy
                      mywyd. Mae'n dal i'm gwneud i'r person ydw i heddiw’.
                    </li>

                    <li>
                      Mae Louisa wedi byw bywyd diddorol – gan gredu bod person
                      yn gallu tyfu a gwella drwy waith caled, teithio'r byd a
                      bod â ffydd gref.
                    </li>
                  </ul>
                }
              ></Person>
            }
          ></Route>
          <Route
            path="/9to12yo/CliveSullivan"
            element={
              <Person
                pscc={"/9to12yo"}
                psNum={"3"}
                resourceOverlay={"A portrait of Clive Sullivan."}
                resourceOverlayWelsh="Portread o Clive Sullivan. "
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://wrl.wales/clive-sullivan-documentary-to-be-screened-by-bbc1-wales#:~:text=%E2%80%9CClive%20Sullivan%3A%20Rugby%20League%20Legend,the%20next%20generation%20of%20black"
                        className="resourceHref"
                        target="_blank"
                      >
                        Official Wales rugby league blog post about Clive
                        Sullivan{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.loverugbyleague.com/post/clive-sullivan-rugby-league-wales"
                        className="resourceHref"
                        target="_blank"
                      >
                        Article describing Clive Sullivan's remarkable journey
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.blackhistorymonth.org.uk/article/section/sporting-heroes/clive-sullivan-rugbys-first-black-captain/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Article on Clive Sullivan's rugby league career{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.youtube.com/watch?v=IeMc2KBrf3w"
                        className="resourceHref"
                        target="_blank"
                      >
                        'Imagine' by Alex Wharton. A tribute to Clive Sullivan{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://cadw.gov.wales/learn/wales-rich-and-diverse-heritage/creative-responses/clive-sullivan-1943-1985"
                        className="resourceHref"
                        target="_blank"
                      >
                        Biography of Clive Sullivan{" "}
                      </a>
                    </li>
                  </ul>
                }
                linksCym={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://wrl.wales/clive-sullivan-documentary-to-be-screened-by-bbc1-wales#:~:text=%E2%80%9CClive%20Sullivan%3A%20Rugby%20League%20Legend,the%20next%20generation%20of%20black"
                        className="resourceHref"
                        target="_blank"
                      >
                        Gwefan swyddogol Rygbi Cynghrair Cymru am Clive Sullivan
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.loverugbyleague.com/post/clive-sullivan-rugby-league-wales"
                        className="resourceHref"
                        target="_blank"
                      >
                        Erthygl yn disgrifio bywyd Clive Sullivan{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.blackhistorymonth.org.uk/article/section/sporting-heroes/clive-sullivan-rugbys-first-black-captain/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Erthygl am yrfa Clive Sullivan{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.youtube.com/watch?v=IeMc2KBrf3w"
                        className="resourceHref"
                        target="_blank"
                      >
                        'Imagine' gan Alex Wharton. Er cof am Clive Sullivan{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://cadw.gov.wales/learn/wales-rich-and-diverse-heritage/creative-responses/clive-sullivan-1943-1985"
                        className="resourceHref"
                        target="_blank"
                      >
                        Bywgraffiad byr o Clive Sullivan{" "}
                      </a>
                    </li>
                  </ul>
                }
                indivName={"Clive Sullivan"}
                indivNameCym={"Clive Sullivan"}
                backcardImg={clive}
                bgcolor={"#A2D6F9"}
                linkResource={"./../Resources/CliveSullivan"}
                welshSlugText={"Yr arwr a aeth i Hull."}
                slugText={"Hull's rugby league hero."}
                resource={nineApi.slice(7, 8)}
                indivPic={
                  "https://e2.365dm.com/20/10/2048x1152/skysports-anthony-sullivan_5116431.jpg"
                }
                text={
                  <ul>
                    <li>
                      Clive Sullivan was born on 9 April 1943 in Splott,
                      Cardiff.{" "}
                    </li>
                    <li>
                      Clive played rugby at school, but injuries led to him
                      having surgery on his knees, feet and shoulders.
                    </li>
                    <li>
                      Doctors feared he’d have issues with movement – and
                      thought a rugby career was unlikely.
                    </li>

                    <li>
                      In 1961, Clive joined the army and was posted to
                      Yorkshire.
                    </li>

                    <li>
                      Because he was Welsh, Clive was picked to play in rugby
                      match between different divisions of the army.
                    </li>

                    <li>
                      Fearful of being thrown out of the army, Clive didn’t
                      mention having suffered major injuries.
                    </li>

                    <li>
                      Intending to deliberately play badly, instinct took over
                      and Clive scored a long distance try without any
                      problems. 
                    </li>

                    <li>
                      He was soon offered a trial with Rugby League side, Hull,
                      Clive scored 3 tries and signed as a professional.
                    </li>

                    <li>
                      His constant knee problems required further operations.
                      Yet Clive played 352 games for Hull, scoring 250 tries,
                      and 213 games for Hull Kingston Rovers scoring 118 tries.
                    </li>

                    <li>In 1967, Clive made his debut for Great Britain.</li>
                    <li>
                      In 1972, Clive was made the captain of GB team and in the
                      World Cup that year they became world champions!{" "}
                    </li>
                    <li>
                      Scoring a try in GB’s 4 games, Sullivan scored a memorable
                      try to level 10-10 against Australia in the final, after
                      running the length of the field.{" "}
                    </li>
                    <li>Clive’s Great Britain career ended in 1973. </li>
                    <li>
                      In 1974, Clive was awarded an MBE for services to rugby
                      league.{" "}
                    </li>
                    <li>
                      Clive Sullivan died of cancer on 8 October 1985, aged just
                      42. The city of Hull named an approach road ‘Clive
                      Sullivan Way’ in his honour.{" "}
                    </li>
                    <li>
                      Clive Sullivan was the first black person to captain a
                      British national sports side. Plagued by injuries when a
                      young teenager, it is miraculous that Clive played
                      professional sport. But Clive’s success is testament to
                      his strong personality and steely determination.{" "}
                    </li>
                  </ul>
                }
                welshText={
                  <ul>
                    <li>
                      Cafodd Clive Sullivan ei eni ar 9 Ebrill 1943 yn Sblot,
                      Caerdydd.{" "}
                    </li>
                    <li>
                      Chwaraeodd Clive rygbi yn yr ysgol, ond oherwydd
                      anafiadau, cafodd lawdriniaeth ar ei bengliniau, ei draed
                      a'i ysgwyddau.
                    </li>
                    <li>
                      Roedd y meddygon yn ofni y byddai'n cael problemau wrth
                      symud – ac doedden nhw ddim yn meddwl y byddai Clive yn
                      gallu cael gyrfa yn chwarae rygbi.
                    </li>

                    <li>
                      Yn 1961, ymunodd Clive â'r fyddin a chafodd ei anfon i
                      swydd Efrog.
                    </li>

                    <li>
                      Oherwydd ei fod yn Gymro, cafodd Clive ei ddewis i chwarae
                      mewn gêm rygbi yn erbyn adrannau gwahanol o'r fyddin.
                    </li>

                    <li>
                      Gan ei fod yn ofni cael ei daflu allan o'r fyddin, soniodd
                      Clive ddim byd ei fod wedi dioddef anafiadau mawr.
                    </li>

                    <li>
                      Roedd Clive wedi meddwl chwarae'n wael yn fwriadol, ond
                      chwaraeodd yn dda yn reddfol, a sgorio cais o bellter heb
                      unrhyw broblemau.
                    </li>

                    <li>
                      Cyn hir, cafodd gynnig gêm brawf gyda thîm Rygbi'r
                      Cynghrair, Hull. Sgoriodd Clive dri chais a chafodd gynnig
                      i chwarae'n broffesiynol.
                    </li>

                    <li>
                      Roedd yn dioddef problemau gyda'i bengliniau o hyd, felly
                      cafodd ragor o lawdriniaethau. Eto i gyd, chwaraeodd Clive
                      352 o gemau dros Hull, gan sgorio 250 o geisiau, a 213 o
                      gemau dros Hull Kingston Rovers gan sgorio 118 o geisiau.
                    </li>

                    <li>
                      Yn 1967, chwaraeodd Clive am y tro cyntaf dros Brydain
                      Fawr.{" "}
                    </li>
                    <li>
                      Yn 1972, cafodd Clive ei wneud yn gapten tîm Prydain Fawr
                      ac yng Nghwpan y Byd y flwyddyn honno, daethon nhw'n
                      bencampwyr y byd!
                    </li>
                    <li>
                      Sgoriodd Clive gais ym mhedair gêm Prydain Fawr. Hefyd,
                      sgoriodd gais cofiadwy i gael y sgôr yn gyfartal 10-10 yn
                      erbyn Awstralia yn y rownd derfynol, ar ôl rhedeg hyd y
                      cae.
                    </li>
                    <li>Daeth gyrfa Clive dros Brydain Fawr i ben yn 1973. </li>
                    <li>
                      Yn 1974, cafodd Clive anrhydedd MBE am ei wasanaeth i
                      rygbi'r cynghrair.
                    </li>
                    <li>
                      Gwnaeth Clive Sullivan farw o ganser ar 8 Hydref 1985, dim
                      ond 42 oed oedd e. Enwodd dinas Hull ffordd ddynesu yn
                      ‘Clive Sullivan Way’ er anrhydedd iddo.
                    </li>
                    <li>
                      Clive Sullivan oedd y person du cyntaf i fod yn gapten ar
                      dîm chwaraeon cenedlaethol ym Mhrydain. Dioddefodd Clive
                      anafiadau pan oedd yn ei arddegau cynnar, felly mae'n
                      wyrth iddo chwarae rygbi'n broffesiynol. Ond mae
                      llwyddiant Clive yn dangos bod ganddo bersonoliaeth gref
                      a'i fod yn benderfynol o lwyddo.
                    </li>
                  </ul>
                }
              ></Person>
            }
          ></Route>
          <Route
            path="/9to12yo/JohnYstumllyn"
            element={
              <PersonYTVid
                pscc={"/9to12yo"}
                psNum={"3"}
                backLContent={"Clip courtesy of Cwmni Da Cyf."}
                backLContentCym={
                  "Diolch i Cwmni Da Cyf. am y clip.                  "
                }
                youtubeVid={"https://www.youtube.com/embed/AsDgYVYenG8"}
                youtubeVidCym={"https://www.youtube.com/embed/AsDgYVYenG8"}
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://cadw.gov.wales/learn/wales-rich-and-diverse-heritage/creative-responses/john-ystumllyn-c1738-1786"
                        className="resourceHref"
                        target="_blank"
                      >
                        Biography on Cadw Website{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.youtube.com/watch?v=NomyyXgCvgQ"
                        className="resourceHref"
                        target="_blank"
                      >
                        The Gardener' by Alex Wharton. A tribute to John
                        Ystumllun{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://friendsoffriendlesschurches.org.uk/story/john-ystumllyn/"
                        className="resourceHref"
                        target="_blank"
                      >
                        From Africa to Ynyscynhaearn
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.black-boy-inn.com/the-story-of-john-ystumllyn/"
                        className="resourceHref"
                        target="_blank"
                      >
                        History of the Black Boy Inn{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.northwaleschronicle.co.uk/news/20682874.criccieth-community-remembers-john-ystumllyn/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Local news article commemorating life of John Ystumllun{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://nation.cymru/news/hidden-black-history-queen-plants-rose-named-after-18th-century-welsh-horticulturist-john-ystumllyn/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Queen plants rose named after John Ystumllyn{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://gwallter.com/books/john-ystumllyn-an-african-in-18th-century-eifionydd.html"
                        className="resourceHref"
                        target="_blank"
                      >
                        Blog about John Ystumllyn{" "}
                      </a>
                    </li>
                  </ul>
                }
                linksCym={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://cadw.llyw.cymru/dysgu/treftadaeth-gyfoethog-ac-amrywiol-cymru/ymatebion-creadigol/john-ystumllyn-c1738-1786?_gl=1*14tbl2*_ga*NjQwMjYzMDcyLjE2ODM1Njc0MTk.*_ga_B2BCVKM874*MTY4MzU2NzQxOC4xLjEuMTY4MzU2NzkzMC42MC4wLjA."
                        className="resourceHref"
                        target="_blank"
                      >
                        Bywgraffiad o John Ystymullyn{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.youtube.com/watch?v=UT9nmucr_2c"
                        className="resourceHref"
                        target="_blank"
                      >
                        'Y Garddwr' gan Alex Wharton. Er cof am John Ystumllyn
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://friendsoffriendlesschurches.org.uk/story/john-ystumllyn/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Erthygl yn son am mudiad John Ystumllyn o Affrica i
                        Ynyscynhaearn{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.black-boy-inn.com/the-story-of-john-ystumllyn/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Hanes y 'Black Boy Inn'{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.northwaleschronicle.co.uk/news/20682874.criccieth-community-remembers-john-ystumllyn/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Erthygl newyddion lleol yn coffáu bywyd John Ystumllyn{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://nation.cymru/news/hidden-black-history-queen-plants-rose-named-after-18th-century-welsh-horticulturist-john-ystumllyn/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Y Frenhines yn plannu rhosyn wedi'i enwi ar ôl John
                        Ystumllyn{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://gwallter.com/books/john-ystumllyn-an-african-in-18th-century-eifionydd.html"
                        className="resourceHref"
                        target="_blank"
                      >
                        Blog am John Ystumllyn{" "}
                      </a>
                    </li>
                  </ul>
                }
                indivName={"John Ystumllyn"}
                indivNameCym={"John Ystumllyn"}
                slugText={"The 18th century slave who became a gardener."}
                welshSlugText={"Y caethwas a'r garddwr."}
                resource={nineApi.slice(8, 9)}
                indivPic={
                  "https://ichef.bbci.co.uk/news/976/cpsprodpb/FDB1/production/_121154946_johnystumllynpeople'scollection.png"
                }
                text={
                  <ul>
                    <li>
                      John Ystumllyn – who is also known by the names Jack Du or
                      Jack Black – was a gardener in the 18th century.{" "}
                    </li>
                    <li>
                      We do not know where John lived before he arrived in
                      Wales. It's possible came arrived as a victim of the
                      Atlantic slave trade when he was eight years of age.
                    </li>

                    <li>
                      This may mean that he came from the West Africa or the
                      West Indies.
                    </li>

                    <li>
                      Once in Wales, John came to live with the Wynn family as a
                      servant at their Ystumllyn estate in Criccieth.
                    </li>

                    <li>
                      Here, he was christened with the Welsh name John
                      Ystumllyn.
                    </li>

                    <li>
                      John was taught English and Welsh by the local people and
                      also learned how to be a gardener on the estate where he
                      became very good at his job.
                    </li>

                    <li>
                      John had his portrait painted when he was a young man and
                      it shows that he was very handsome!{" "}
                    </li>

                    <li>
                      John fell in love with a white local maid called Margaret
                      Gruffydd.
                    </li>

                    <li>
                      In 1768, when Margaret left for another job, John left his
                      gardening job to marry her. This may have been the first
                      mixed marriage in Wales!
                    </li>

                    <li>They had seven children, five of whom survived.</li>

                    <li>
                      John and Margaret worked as land stewards. Later, John
                      went back into the employment of the Wynn family. Ellis
                      Wynn gave him a large garden and cottage at Y Nhyra Isa to
                      say thank you for all his hard work.
                    </li>

                    <li>
                      John died in 1786; his wife, Margaret, lived for more than
                      forty years more.
                    </li>

                    <li>
                      Many years after his death, a small monument was built
                      near where John was buried in St Cynhaearn's Church.
                    </li>
                    <li>
                      Recently, Zehra Zaidi, the founder of We Too Built
                      Britain, approached the Chelsea flower show winner
                      Harkness Roses with the idea of creating a rose named
                      after John Ystumllyn. The beautiful rose is yellow,
                      symbolising friendship.{" "}
                    </li>
                    <li>
                      His grave at St Cynhaearn's Church, Ynyscynhaearn, was
                      made a Grade II listed building in 1999.{" "}
                    </li>
                    <li>
                      It was listed "as of special interest in commemorating a
                      slave in service in Wales in the later years of the C18,
                      who must have been well enough thought of that he was
                      provided with a handsome memorial".{" "}
                    </li>
                    <li>
                      The following poem (an englyn) is written on his memorial:{" "}
                      <br />
                      <br />
                      Yn India gynna'm ganwyd a nghamrau
                      <br />
                      Yng Nghymru'm bedyddiwyd
                      <br />
                      Wele'r fan dan lechan lwyd
                      <br />
                      Du oeraidd y'm daearwyd.
                      <br />
                      <br />
                      (translates to)
                      <br />
                      Born in India, to Wales I came
                      <br />
                      To be baptised
                      <br />
                      See this spot, a grey slate marks
                      <br />
                      My cold resting place.
                    </li>
                    <li>
                      John was earliest black person in Wales who we have
                      information about. John was a very likeable person. He
                      also is known to have not suffered much racial prejudice,
                      though locals did often express surprise at seeing a black
                      man for the first time.{" "}
                    </li>
                  </ul>
                }
                welshText={
                  <ul>
                    <li>
                      Roedd John Ystumllyn – sydd hefyd yn cael ei adnabod fel
                      Jack Du neu Jack Black – yn arddwr yn y 18fed ganrif.
                    </li>
                    <li>
                      Dydyn ni ddim yn gwybod ble roedd John yn byw cyn iddo
                      gyrraedd Cymru. Mae'n bosibl iddo gyrraedd fel un o
                      ddioddefwyr masnach gaethweision yr Iwerydd pan oedd yn
                      wyth oed.
                    </li>

                    <li>
                      Efallai fod hyn yn golygu ei fod wedi dod o Orllewin
                      Affrica neu India'r Gorllewin.
                    </li>

                    <li>
                      Ar ôl cyrraedd Cymru, daeth John i fyw gyda theulu Wynn
                      fel gwas ar Ystumllyn, eu hystâd yng Nghricieth.
                    </li>

                    <li>Yma, cafodd yr enw Cymraeg John Ystumllyn.</li>

                    <li>
                      Dysgodd John Gymraeg a Saesneg oddi wrth y bobl leol.
                      Hefyd, dysgodd sut i fod yn arddwr ar yr ystâd, a daeth yn
                      dda iawn wrth ei waith.
                    </li>

                    <li>
                      Peintiodd rhywun ddarlun o John pan oedd yn ddyn ifanc ac
                      mae'n dangos ei fod yn ddyn golygus iawn!
                    </li>

                    <li>
                      Cwympodd John mewn cariad â morwyn leol oedd yn wyn.
                      Margaret Gruffydd oedd ei henw hi.
                    </li>

                    <li>
                      Yn 1768, pan adawodd Margaret i gael swydd arall, gadawodd
                      John ei swydd fel garddwr er mwyn ei phriodi hi. Efallai
                      mai dyma'r briodas gymysg gyntaf yng Nghymru!
                    </li>

                    <li>
                      Cawson nhw saith o blant, a thyfodd pump ohonyn nhw'n
                      oedolion.{" "}
                    </li>

                    <li>
                      Gweithiodd John a Margaret fel stiwardiaid tir. Wedyn,
                      aeth John yn ôl i weithio i deulu Wynn. Rhoddodd Ellis
                      Wynn ardd fawr a thyddyn iddo yn Y Nhyra Isa er mwyn
                      diolch iddo am ei holl waith caled.
                    </li>

                    <li>
                      Gwnaeth John farw yn 1786; gwnaeth Margaret, ei wraig, fyw
                      am dros bedwar deg o flynyddoedd arall.
                    </li>

                    <li>
                      Flynyddoedd lawer ar ôl i John farw, cafodd cofeb fechan
                      ei chodi gerllaw lle roedd wedi'i gladdu yn Eglwys
                      Cynhaearn Sant.
                    </li>
                    <li>
                      Yn ddiweddar, aeth Zehra Zaidi, sylfaenydd We Too Built
                      Britain, at gwmni Harkness Roses, sydd wedi ennill yn sioe
                      flodau Chelsea, gyda'r syniad o greu rhosyn wedi'i enwi ar
                      ôl John Ystumllyn. Mae'r rhosyn hardd yn felyn, yn symbol
                      o gyfeillgarwch.
                    </li>
                    <li>
                      Cafodd bedd John yn Eglwys Cynhaearn Sant, Ynyscynhaearn,
                      ei wneud yn adeilad rhestredig Gradd II yn 1999.
                    </li>
                    <li>
                      Cafodd ei restru "fel un o ddiddordeb arbennig mewn coffáu
                      caethwas mewn gwasanaeth yng Nghymru ym mlynyddoedd olaf y
                      18G y mae'n rhaid fod coffa da amdano i dderbyn cofeb mor
                      olygus".
                    </li>
                    <li>
                      Ar y gofeb mae’r englyn yma - <br />
                      <br />
                      Yn India gynna'm ganwyd a nghamrau
                      <br />
                      Yng Nghymru'm bedyddiwyd
                      <br />
                      Wele'r fan dan lechan lwyd
                      <br />
                      Du oeraidd y'm daearwyd.
                      <br />
                    </li>
                    <li>
                      John oedd y person du cynharaf yng Nghymru rydyn ni'n
                      gwybod rhywbeth amdano. Roedd John yn berson hoffus iawn.
                      Hefyd mae'n debyg na ddioddefodd lawer o ragfarn hiliaeth,
                      er bod pobl leol yn aml yn synnu o weld dyn du am y tro
                      cyntaf.
                    </li>
                  </ul>
                }
              ></PersonYTVid>
            }
          ></Route>
          <Route
            path="/9to12yo/TigerBay"
            element={
              <Person
                pscc={"/9to12yo"}
                psNum={"3"}
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.youtube.com/watch?v=2Bx5mU2JOps"
                        className="resourceHref"
                        target="_blank"
                      >
                        Archive film of Tiger Bay
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.cardiffbay.co.uk/history/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Our History - Cardiff Bay{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.bbc.co.uk/wales/history/sites/themes/society/tiger_bay.shtml"
                        className="resourceHref"
                        target="_blank"
                      >
                        BBC Wales History - Tiger Bay{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://severnestuarypartnership.org.uk/explore-the-estuary/exploring-guide/cardiff-bay/#:~:text=The%20name%20'Tiger%20Bay'%20was,of%20foreign%20and%20Welsh%20culture."
                        className="resourceHref"
                        target="_blank"
                      >
                        History of Cardiff Bay area{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.tigerbay.org.uk/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Official website of Tiger Bay{" "}
                      </a>
                    </li>
                  </ul>
                }
                linksCym={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.youtube.com/watch?v=2Bx5mU2JOps"
                        className="resourceHref"
                        target="_blank"
                      >
                        Ffilm archif o Tiger Bay
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.cardiffbay.co.uk/history/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Ein Hanes - Bae Caerdydd{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.bbc.co.uk/wales/history/sites/themes/society/tiger_bay.shtml"
                        className="resourceHref"
                        target="_blank"
                      >
                        BBC Hanes Cymru - Tiger Bay{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://severnestuarypartnership.org.uk/explore-the-estuary/exploring-guide/cardiff-bay/#:~:text=The%20name%20'Tiger%20Bay'%20was,of%20foreign%20and%20Welsh%20culture."
                        className="resourceHref"
                        target="_blank"
                      >
                        Hanes ardal Bae Caerdydd{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.tigerbay.org.uk/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Gwefan swyddogol Tiger Bay{" "}
                      </a>
                    </li>
                  </ul>
                }
                indivName={"Tiger Bay"}
                indivNameCym={"Tiger Bay"}
                resourceOverlay={"/"}
                slugText={"The bustling multi-ethnic community in Cardiff Bay."}
                welshSlugText={"Y gymuned aml-ddiwylliannol yng Nghaerdydd."}
                resource={nineApi.slice(9, 10)}
                indivPic={
                  "https://www.peoplescollection.wales/sites/default/files/images/2014/February/ah_50_34.jpg?itok=SN4XskT2"
                }
                text={
                  <ul>
                    <li>
                      Tiger Bay is one of the UK’s oldest multi-ethnic
                      communities.
                    </li>
                    <li>
                      The site grew massively due to the Industrial Revolution
                      just over 200 years ago.
                    </li>
                    <li>
                      Coal-mining brought many people to Cardiff to work on the
                      docks.
                    </li>

                    <li>
                      As coal production increased, so did the population.
                    </li>

                    <li>
                      At one point, Tiger Bay’s community had people from over
                      50 countries settling in the area around the docks!
                    </li>

                    <li>
                      These communities included many such as Somali, Yemeni,
                      Greek, African, Afro- Caribbean, Chinese, Arab, and South
                      Asian sailors and sea-merchants.
                    </li>

                    <li>
                      Together these different communities made essential
                      contributions to Cardiff’s wealth and achievements and
                      brought different cultural influences that can still be
                      seen today.
                    </li>

                    <li>
                      Tiger Bay had a reputation as a tough and dangerous area;
                      but locals who lived and stayed in the area described it
                      as a friendly place!
                    </li>
                    <li>
                      However, the economic decline in the 1960s and 1970s led
                      to a large amount of unemployment in Tiger Bay.{" "}
                    </li>
                    <li>
                      By the 1970s and 1980s the area was demolished and
                      redeveloped.{" "}
                    </li>
                    <li>
                      Many famous people from diverse backgrounds came from
                      Tiger Bay including Shirley Bassey, Betty Campbell, Billy
                      Boston and Colin Dixon.{" "}
                    </li>
                  </ul>
                }
                welshText={
                  <ul>
                    <li>Tiger Bay yw un o gymunedau aml ethnig hynaf y DU.</li>
                    <li>
                      Tyfodd y safle'n enfawr oherwydd y Chwyldro Diwydiannol
                      ychydig dros 200 mlynedd yn ôl.
                    </li>
                    <li>
                      Oherwydd y diwydiant glo, daeth llawer o bobl i Gymru i
                      weithio yn y dociau.
                    </li>

                    <li>
                      Cafodd mwy a mwy o lo ei gynhyrchu, felly tyfodd y
                      boblogaeth hefyd.{" "}
                    </li>

                    <li>
                      Ar un adeg, roedd cymuned Tiger Bay yn cynnwys pobl o dros
                      50 o wledydd a oedd wedi dod i fyw yn yr ardal o gwmpas y
                      dociau!
                    </li>

                    <li>
                      Yn y cymunedau hyn roedd morwyr a masnachwyr môr a oedd
                      wedi dod o Somalia, Yemen, Groeg, Affrica, China, De Asia,
                      a rhai Affricanaidd Caribïaidd ac Arabaidd.
                    </li>

                    <li>
                      Gyda'i gilydd, gwnaeth y cymunedau hyn gyfraniad hanfodol
                      i gyfoeth Caerdydd a'r pethau a gyflawnodd y ddinas.
                      Daethon nhw â dylanwadau diwylliannol sydd i'w gweld o hyd
                      heddiw.
                    </li>

                    <li>
                      Roedd gan Tiger Bay enw drwg fel ardal arw a pheryglus,
                      ond i'r bobl leol a ddaeth i fyw yn yr ardal ac aros yno,
                      roedd yn lle cyfeillgar!
                    </li>
                    <li>
                      Ond roedd llawer o bobl yn ddi-waith yn Tiger Bay yn ystod
                      dirywiad economaidd y 1960au a'r 1970au.
                    </li>
                    <li>
                      Erbyn y 1970au a'r 1980au, cafodd yr ardal ei bwrw i lawr
                      a'i hailddatblygu.
                    </li>
                    <li>
                      Daeth llawer o bobl enwog o gefndiroedd amrywiol o Tiger
                      Bay gan gynnwys Shirley Bassey, Betty Campbell, Billy
                      Boston a Colin Dixon.
                    </li>
                  </ul>
                }
              ></Person>
            }
          ></Route>
          <Route
            path="/6to9yo/SidoliIceCream"
            element={
              <PersonYTVid
                pscc={"/6to9yo"}
                psNum={"2"}
                overlayText={
                  <h2>
                    Have a look how Sidoli Ice Cream is made today
                    <FaVideo />
                  </h2>
                }
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.sidolis-icecream.co.uk/about/the-sidolis-story/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Sidoli's Ice Cream offical website{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.walesonline.co.uk/news/wales-news/sidoli-story-tale-love-travel-1845764"
                        className="resourceHref"
                        target="_blank"
                      >
                        Story of Sidoli's migration from Italy{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://historypoints.org/index.php?page=sidoli-ice-cream-factory-ebbw-vale"
                        className="resourceHref"
                        target="_blank"
                      >
                        Sidoli's ice cream factory in Ebbw Vale{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="http://news.bbc.co.uk/local/northeastwales/hi/people_and_places/history/newsid_8878000/8878979.stm"
                        className="resourceHref"
                        target="_blank"
                      >
                        Celebrating 100 years of Sidoli's Ice Cream in Rhyl{" "}
                      </a>
                    </li>
                  </ul>
                }
                linksCym={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.sidolis-icecream.co.uk/about/the-sidolis-story/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Gwefan swyddogol Hufen iâ Sidoli{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.walesonline.co.uk/news/wales-news/sidoli-story-tale-love-travel-1845764"
                        className="resourceHref"
                        target="_blank"
                      >
                        Hanes teulu Sidoli yn mudo i Gymru{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://historypoints.org/index.php?page=sidoli-ice-cream-factory-ebbw-vale"
                        className="resourceHref"
                        target="_blank"
                      >
                        Ffatri hufen iâ yn Ebbw Vale{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="http://news.bbc.co.uk/local/northeastwales/hi/people_and_places/history/newsid_8878000/8878979.stm"
                        className="resourceHref"
                        target="_blank"
                      >
                        Dathlu 100 mlynedd o Hufen iâ Sidoli yn Rhyl{" "}
                      </a>
                    </li>
                  </ul>
                }
                indivName={"Sidoli Ice Cream"}
                indivNameCym={"Hufen Iâ Sidoli"}
                slugText={"The story of the award-winning ice cream."}
                welshSlugText={"Stori'r hufen iâ arbennig o'r Eidal."}
                backLContent={
                  "Have a look how Sidoli Ice Cream is made today. "
                }
                backLContentCym={
                  "Sut mae hufen iâ Sidoli yn cael ei wneud heddiw. "
                }
                youtubeVid="https://www.youtube.com/embed/xTRwVpwUvVw"
                youtubeVidCym="https://www.youtube.com/embed/xTRwVpwUvVw"
                resource={nineApi.slice(10, 11)}
                indivPic={
                  "https://i2-prod.walesonline.co.uk/incoming/article17960109.ece/ALTERNATES/s1200c/0_RM_180320_Sidoli_IceCream_020.jpg"
                }
                text={
                  <ul>
                    <li>
                      More than 100 years ago, Italian immigrants established a
                      café culture and a Welsh-Italian tradition that is still
                      thriving today. The Sidoli family is one of these
                      families.
                    </li>
                    <li>
                      The Sidoli ice cream business was founded by Benedetto
                      “Ben” Sidoli in 1922.{" "}
                    </li>

                    <li>
                      Aged only 12 he followed in the footsteps of his brother,
                      Bert, by coming to Wales to find a job.{" "}
                    </li>

                    <li>
                      The brothers began by selling the lemon drink
                      Sarsaparilla, as well as coffee and tea, to thirsty local
                      miners.{" "}
                    </li>

                    <li>
                      Their first café was in Cwm selling traditional Italian
                      ice cream.{" "}
                    </li>

                    <li>
                      In order to make the ice cream they had to buy large
                      blocks of ice which came from Cardiff and arrived by train
                      at 6am. Everything they made with this ice had to be sold
                      that day or it would go to waste. Years later they would
                      purchase a freezer which made the work so much easier to
                      both make and store.{" "}
                    </li>

                    <li>
                      Ben married and moved to Ebbw Vale where he opened a shop.{" "}
                    </li>

                    <li>
                      Ben and Bert were excellent businessmen and were clever in
                      marketing their ice cream. Trade was very good and even
                      during World War 2, when ice cream was banned as it was
                      considered a luxury item, Sidoli’s made ice cream for the
                      American soldiers who had the provisions and equipment
                      needed to make it.{" "}
                    </li>

                    <li>
                      As Ben was Italian though, he was considered a threat to
                      British security in the war, even though he had lived in
                      Wales for over twenty years. He was immediately imprisoned
                      with thousands of other Italian nationals on the Isle of
                      Man until the war was over.{" "}
                    </li>

                    <li>
                      After the war, production of the ice cream continued and
                      Sidoli’s started making lollies as well as ice cream.{" "}
                    </li>

                    <li>
                      In 1992, the company opened its first ice cream parlour at
                      the Garden Festival Wales which was a huge success.{" "}
                    </li>

                    <li>
                      A year later Sidoli’s won its first of many awards – The
                      Ice Cream Alliance Silver Challenge Cup.{" "}
                    </li>
                    <li>The Sidoli brand is now a household name.</li>
                    <li>
                      Sidoli’s ice cream today is made with nearly the same
                      original recipe that Ben used back in 1922. There are
                      currently 45 flavours in their ice cream range.{" "}
                    </li>
                  </ul>
                }
                welshText={
                  <ul>
                    <li>
                      Dros gan mlynedd yn ôl, daeth mewnfudwyr o'r Eidal i
                      Gymru. Dechreuon nhw ddiwylliant caffi a thraddodiad
                      Cymreig-Eidalaidd sy'n dal i fynd heddiw. Mae teulu Sidoli
                      yn un o'r teuluoedd hyn.
                    </li>
                    <li>
                      Cafodd busnes hufen iâ Sidoli ei ddechrau gan Benedetto
                      “Ben” Sidoli yn 1922.
                    </li>

                    <li>
                      Pan oedd yn 12 oed yn unig, dilynodd ôl traed Bert, ei
                      frawd, drwy ddod i Gymru i chwilio am swydd.
                    </li>

                    <li>
                      I ddechrau, roedd y ddau frawd yn gwerthu Sarsaparilla,
                      diod lemwn, a hefyd coffi a the, i lowyr lleol sychedig.
                    </li>

                    <li>
                      Roedd eu caffi cyntaf yng Nghwm yn gwerthu hufen iâ
                      Eidalaidd traddodiadol.
                    </li>

                    <li>
                      Er mwyn gwneud yr hufen iâ, roedd yn rhaid iddyn nhw brynu
                      blociau mawr o iâ a oedd yn dod o Gaerdydd ac yn cyrraedd
                      ar y trên am 6 y bore. Roedd yn rhaid gwerthu popeth
                      roedden nhw'n ei wneud gyda'r iâ hwn y diwrnod hwnnw, neu
                      byddai'n mynd yn ofer. Flynyddoedd yn ddiweddarach, bydden
                      nhw'n prynu rhewgell. Wedyn roedd gwneud a storio'r hufen
                      iâ yn llawer haws.
                    </li>

                    <li>Priododd Ben a symud i Lyn Ebwy lle agorodd siop. </li>

                    <li>
                      Roedd Ben a Bert yn ddynion busnes ardderchog ac roedden
                      nhw'n glyfar wrth farchnata eu hufen iâ. Roedd busnes yn
                      dda iawn, a hyd yn oed yn ystod yr Ail Ryfel Byd, pan
                      gafodd hufen iâ ei wahardd oherwydd ei fod yn eitem
                      foethus, gwnaeth y brodyr Sidoli hufen iâ i'r milwyr
                      Americanaidd. Roedd y bwydydd a’r offer ganddyn nhw i'w
                      wneud.
                    </li>

                    <li>
                      Ond, oherwydd mai Eidalwr oedd Ben, roedd yn cael ei
                      ystyried yn fygythiad i ddiogelwch Prydain yn ystod y
                      rhyfel, er ei fod yn byw yng Nghymru ers dros ugain
                      mlynedd. Cafodd ei garcharu'n syth gyda miloedd o Eidalwyr
                      eraill ar Ynys Manaw tan ddiwedd y rhyfel.
                    </li>

                    <li>
                      Ar ôl y rhyfel, aeth Sidoli's ati i gynhyrchu hufen iâ
                      eto. Hefyd dechreuon nhw wneud lolipops yn ogystal â hufen
                      iâ.
                    </li>

                    <li>
                      Yn 1992, agorodd y cwmni ei barlwr hufen iâ cyntaf yng
                      Ngŵyl Gardd Cymru. Roedd yn llwyddiant enfawr.
                    </li>

                    <li>
                      Flwyddyn yn ddiweddarach, enillodd Sidoli's y gyntaf o
                      lawer o wobrau – Cwpan Her Arian y Cynghrair Hufen Iâ (The
                      Ice Cream Alliance Silver Challenge Cup).
                    </li>
                    <li>Erbyn hyn, mae brand Sidoli yn gyfarwydd i bawb. </li>
                    <li>
                      Heddiw, mae hufen iâ Sidoli yn cael ei wneud gyda'r un
                      rysáit, bron, â'r rysáit gwreiddiol roedd Ben yn ei
                      ddefnyddio yn ôl yn 1922. Ar hyn o bryd, maen nhw'n
                      gwerthu 45 blas o hufen iâ.
                    </li>
                  </ul>
                }
              ></PersonYTVid>
            }
          ></Route>
          <Route
            path="/9to12yo/IsaacBlake"
            element={
              <PersonYTVid
                pscc={"/9to12yo"}
                psNum={"3"}
                youtubeVidCym="https://www.youtube.com/embed/MDjyYMf5HNk"
                backLContent={"Find out more about Gypsy Jazz! "}
                backLContentCym="Dysgwch mwy am Gypsy Jazz!"
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://newtown.org.uk/discover-newtown/newtown-heritage-trail/john-roberts"
                        className="resourceHref"
                        target="_blank"
                      >
                        Information about John Roberts the Romani Harpist
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://eriac.org/members/isaac-blake/"
                        className="resourceHref"
                        target="_blank"
                      >
                        European Roma Institute for Arts and Culture{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="http://betweenthelinesart.com/project/isaac-blake/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Information on Isaac Blake's Career{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://orcid.org/0000-0001-7134-8838"
                        className="resourceHref"
                        target="_blank"
                      >
                        Blog on Isaac Blake's projects amongst traveller
                        communities{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.romaniarts.co.uk/portfolio-item/isaac-blake-2/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Romani Culture and Arts offical website - Isaac Blake
                      </a>
                    </li>
                  </ul>
                }
                linksCym={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://newtown.org.uk/discover-newtown/newtown-heritage-trail/john-roberts"
                        className="resourceHref"
                        target="_blank"
                      >
                        Gwybodaeth am John Roberts y Telynor Romani{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://eriac.org/members/isaac-blake/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Gwybodaeth am Isaac Blake fel aelod o ERIAC{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="http://betweenthelinesart.com/project/isaac-blake/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Gwybodaeth am yrfa Isaac Blake{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://orcid.org/0000-0001-7134-8838"
                        className="resourceHref"
                        target="_blank"
                      >
                        Blog am brosiectau Isaac Blake ymysg cymunedau o
                        deithwyr
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.romaniarts.co.uk/portfolio-item/isaac-blake-2/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Gwybodaeth am Isaac Blake ar wefan Diwylliant a
                        Chelfyddydau Romani{" "}
                      </a>
                    </li>
                  </ul>
                }
                indivName={"Isaac Blake"}
                youtubeVid={"https://www.youtube.com/embed/jvbI_RvP3Ic"}
                indivNameCym={"Isaac Blake"}
                slugText={"A Romani in Wales."}
                welshSlugText={"Romani yng Nghymru."}
                proposedResource={""}
                resource={nineApi.slice(11, 12)}
                indivPic={
                  "https://www.araart.cz/AraArt/media/static-media/21b555c9-32f8-495c-8337-3cac9a75d031@w400.png"
                }
                text={
                  <ul>
                    <li>
                      Isaac Blake is a proud gay Gypsy from Wales. He was born
                      in Bromsgrove in 1959 and grew up on a number of Gypsy and
                      Traveller caravan sites including Cardiff's Shirenewton
                      site - a council-run site. It has 55 individual pitches
                      which has about 300 residents.
                    </li>
                    <li>
                      Those living on the site were often verbally abused and
                      stereotypically judged. “Gypsy kids”, Isaac remembers,
                      were put in special classes at school regardless of their
                      ability. The children needed 'a thick skin and low
                      expectations'.
                    </li>

                    <li>
                      Isaac has grown up to challenge the stereotypes; winning a
                      scholarship to attend dance theatre course at Trinity
                      Laban Conservatoire of Music and Dance before enrolling at
                      the celebrated Martha Graham School in New York to enhance
                      his skills.{" "}
                    </li>
                    <li>
                      Today, Isaac is director of the Romani Cultural and Arts
                      Company, and works as a movement coach at the Royal Welsh
                      College of Music and Drama in Cardiff.
                    </li>
                    <li>
                      Isaac Blake is following on the rich cultural legacy of
                      the Romani community, which includes sharing his knowledge
                      and teaching with the Romani community.
                    </li>
                    <li>
                      Isaac has worked hard in supporting LGBTQI Romani and
                      Traveller rights in UK, Europe and beyond.
                    </li>
                    <li>
                      Gypsies were once a regular sight in Wales, they travelled
                      from community to community and provided an important
                      source of labour.
                    </li>
                    <li>
                      They also shared their artistic talent, such as musical
                      traditions, which enriched the culture of Wales.
                    </li>
                    <li>
                      John Roberts was a Romany gypsy harpist who lived in
                      Newtown. He formed The Cambrian Minstrels with his 9 sons
                      - they were the first truly Welsh Romany orchestra.
                    </li>

                    <li>
                      Another example is John Wood Jones, the great-grandson of
                      the legendary, Abram Wood. John became resident harpist at
                      Llanover Court, near Abergavenny and also taught blind
                      children and others with mobility issues to play the harp.
                      He even played at Buckingham Palace for Queen Victoria.
                    </li>

                    <li>
                      The rich legacy of Romani arts and culture is therefore
                      varied and colourful. It includes poetry, Gypsy Jazz, the
                      triple harp and traditional dancing.
                    </li>
                  </ul>
                }
                welshText={
                  <ul>
                    <li>
                      Mae Isaac Blake yn Sipsi hoyw balch o Gymru. Ganed ef yn
                      Bromsgrove yn 1959 a cafodd ei fagu ar nifer o safleoedd
                      carafan Sipsi a Theithwyr gan gynnwys safle Shirenewton
                      yng Nghaerdydd - safle wedi'i redeg gan y cyngor. Mae 55
                      llain neu le unigol. Mae tua 300 o bobl yn byw yno.
                    </li>
                    <li>
                      Roedd rhai pobl yn galw enwau ar y Romani a oedd yn byw ar
                      y safle yn aml. Roedd pobl yn eu barnu nhw gyda
                      stereoteipiau. Mae Isaac yn cofio sut roedd “plant
                      sipsiwn” yn cael eu rhoi mewn dosbarthiadau arbennig yn yr
                      ysgol, beth bynnag oedd eu gallu nhw. Roedd ar y plant
                      angen “croen trwchus a disgwyliadau isel”.
                    </li>
                    <li>
                      Mae Isaac wedi tyfu i herio'r stereoteipiau. Enillodd
                      ysgoloriaeth i ddilyn cwrs theatr dawns yng Ngholeg
                      Cerddoriaeth a Dawns Trinity Laban. Wedyn cofrestrodd yn
                      Ysgol Martha Graham, ysgol enwog yn Efrog Newydd i wella
                      ei sgiliau.
                    </li>
                    <li>
                      Heddiw, Isaac yw cyfarwyddwr Cwmni Diwylliannol a
                      Chelfyddydau Romani ac mae'n gweithio fel hyfforddwr symud
                      yng Ngholeg Brenhinol Cerdd a Drama Cymru yng Nghaerdydd.
                    </li>
                    <li>
                      Mae Isaac Blake yn dilyn etifeddiaeth ddiwylliannol
                      gyfoethog y gymuned Romani, sy'n cynnwys rhannu ei
                      wybodaeth â'r gymuned Romani.
                    </li>
                    <li>
                      Mae Isaac wedi gweithio'n galed yn cefnogi hawliau LGBTQI
                      Romani a Theithwyr yn y DU, Ewrop a thu hwnt.
                    </li>
                    <li>
                      Roedd sipsiwn i'w gweld yn rheolaidd yng Nghymru ers
                      talwm. Roedden nhw'n teithio o gymuned i gymuned ac ar
                      gael i weithio am gyfnod byr.
                    </li>
                    <li>
                      Hefyd, roedden nhw'n rhannu eu talent artistig, fel
                      traddodiadau cerddorol, gan gyfoethogi diwylliant Cymru.
                    </li>
                    <li>
                      Ffurfiodd John Roberts gerddorfa The Cambrian Minstrels
                      gyda'i 9 mab – nhw oedd y gerddorfa gyntaf o Romani
                      Cymreig.
                    </li>
                    <li>
                      Mae John Wood Jones yn enghraifft arall. Fe oedd gor-ŵyr
                      Abram Wood, y cerddor chwedlonol. Daeth John yn delynor
                      preswyl yn Llys Llanofer, ger y Fenni. Hefyd, roedd yn
                      dysgu plant dall a rhai eraill oedd yn methu symud yn dda
                      i ganu'r delyn. Chwaraeodd John ym Mhalas Buckingham
                      Palace i'r Frenhines Victoria, hyd yn oed.
                    </li>
                    <li>
                      Felly mae etifeddiaeth gyfoethog celfyddydau a diwylliant
                      Romani yn amrywiol ac yn lliwgar. Mae'n cynnwys
                      barddoniaeth, Jazz Sipsiwn, y delyn deires a dawnsio
                      traddodiadol.
                    </li>
                  </ul>
                }
              ></PersonYTVid>
            }
          ></Route>
          <Route
            path="/9to12yo/PattiFlynn"
            element={
              <PersonYTVid
                pscc={"/9to12yo"}
                psNum={"3"}
                indivName={"Patti Flynn"}
                indivNameCym={"Patti Flynn"}
                backLContent={
                  "The unveiling of a purple plaque for Patti Flynn."
                }
                backLContentCym="Dad-orchuddio plac porffor ar gyfer Patty Flynn. "
                welshSlugText={"Cantores, actores, model ac ymgyrchydd."}
                slugText={"Jazz singer, author, model and social activist."}
                youtubeVid="https://www.youtube.com/embed/g3y5JJQdanI"
                youtubeVidCym={"https://www.youtube.com/embed/g3y5JJQdanI"}
                resource={nineApi.slice(11, 12)}
                indivPic={
                  "https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Patti_Flynn.jpg/220px-Patti_Flynn.jpg"
                }
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.walesonline.co.uk/news/wales-news/patti-flynn-cardiff-tiger-bay-18923700"
                        className="resourceHref"
                        target="_blank"
                      >
                        Patti Flynn's obituary{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://blackhistorywales.org.uk/our-team/patti-flynn/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Black History Wales - blog post on Patti Flynn{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.bbc.co.uk/news/uk-wales-65039113"
                        className="resourceHref"
                        target="_blank"
                      >
                        An article on first black woman to be awarded the Purple
                        Plaque{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.bbc.co.uk/news/uk-wales-54130745"
                        className="resourceHref"
                        target="_blank"
                      >
                        BBC article on life and death of Patti Flynn{" "}
                      </a>
                    </li>
                  </ul>
                }
                linksCym={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.walesonline.co.uk/news/wales-news/patti-flynn-cardiff-tiger-bay-18923700"
                        className="resourceHref"
                        target="_blank"
                      >
                        Ysgrif Goffa i Patti Flynn{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://blackhistorywales.org.uk/our-team/patti-flynn/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Hanes Du Cymru - blog ar Patti Flynn{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.bbc.co.uk/news/uk-wales-65039113"
                        className="resourceHref"
                        target="_blank"
                      >
                        Erthygl ar y menyw du cyntaf i gael Plac Porffor
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.bbc.co.uk/news/uk-wales-54130745"
                        className="resourceHref"
                        target="_blank"
                      >
                        Erthygl BBC ar fywyd Patti Flynn{" "}
                      </a>
                    </li>
                  </ul>
                }
                text={
                  <ul>
                    <li>
                      Patricia Maude Young was born in Cardiff in 1937 and was
                      the youngest child of seven to Wilmott George Young and
                      Beatrice Young.  
                    </li>

                    <li>
                      Her father was Jamaican and a merchant seaman, he arrived
                      in Cardiff in the 1920s; Patti’s mother was from
                      Cardiff.  
                    </li>

                    <li>
                      During World War Two, Patti’s father died when his boat
                      was hit by a torpedo and her brothers also died in the
                      same war.
                    </li>

                    <li>
                      When a young girl, and living in Bute Town (also known as
                      Tiger Bay) Patti loved music and singing – especially
                      jazz.
                    </li>

                    <li>
                      Patti became a successful jazz singer, author, radio
                      actress, model and social activist.
                    </li>

                    <li>
                      She also co-founded the Bute Town Bay Jazz Festival.{" "}
                    </li>

                    <li>
                      Patti campaigned bravely for 26 years to have a monument
                      for black and ethnic minority soldiers who died in
                      conflict after losing her father and brothers in World War
                      Two.
                    </li>

                    <li>This monument was erected in 2019!</li>
                    <li>
                      Patti Flynn wrote the words on the face of the monument.
                    </li>
                    <li>
                      In 2019, Patti was honoured with the Ethnic Minority Welsh
                      Women Achievement Association’s (EMWWAA) Lifetime
                      Achievement Award.   
                    </li>
                    <li>
                      She was also a founder and patron of Black History
                      Wales.  
                    </li>
                    <li>
                      On 10 September 2020, Patti died after a short battle with
                      cancer, she was aged 83. 
                    </li>
                    <li>
                      Patti loved music ever since she was a girl and she grew
                      up to be a successful singer.  Patti also believed that
                      people who were Black, Asian and from an ethnic minority
                      background who fought courageously for Britain during the
                      wars should be honoured.  It is thanks to Patti and others
                      like her that there are monuments now in Wales which
                      recognise their bravery.   
                    </li>
                  </ul>
                }
                welshText={
                  <ul>
                    <li>
                      Cafodd Patricia Maude Young ei geni yng Nghaerdydd yn
                      1937. Hi oedd y plentyn ieuengaf o saith i Wilmott George
                      Young a Beatrice Young.  
                    </li>

                    <li>
                      Roedd ei thad yn dod o Jamaica ac roedd yn forwr
                      masnachol. Cyrhaeddodd Gaerdydd yn y 1920au. Roedd mam
                      Patti yn dod o Gaerdydd.
                    </li>

                    <li>
                      Yn ystod yr Ail Ryfel Byd, gwnaeth tad Patti farw pan
                      gafodd ei long ei tharo gan dorpido. Hefyd cafodd ei
                      brodyr hi eu lladd yn yr un rhyfel.
                    </li>

                    <li>
                      Pan oedd hi'n ferch fach, ac yn byw yn Butetown (mae Tiger
                      Bay yn enw arall ar yr ardal), roedd Patti'n dwlu ar
                      gerddoriaeth a chanu – jazz yn enwedig.
                    </li>

                    <li>
                      Daeth Patti yn llwyddiannus fel cantores jazz, awdur,
                      actores radio, model a gweithredwraig gymdeithasol.
                    </li>

                    <li>
                      Hefyd roedd hi'n un o'r rhai a sefydlodd Ŵyl Jazz Bae
                      Butetown (Butetown Bay Jazz Festival).
                    </li>

                    <li>
                      Ymgyrchodd Patti yn ddewr am 26 o flynyddoedd i gael cofeb
                      i'r milwyr du a'r milwyr o leiafrifoedd ethnig a wnaeth
                      farw mewn rhyfeloedd ar ôl colli ei thad a'i brodyr yn yr
                      Ail Ryfel Byd.
                    </li>

                    <li>Cafodd y gofeb hon ei chodi yn 2019! </li>
                    <li>Geiriau Patti Flynn sydd ar wyneb y gofeb. </li>
                    <li>
                      Yn 2019, cafodd Patti ei hanrhydeddu gyda Gwobr Cyflawniad
                      Oes Cymdeithas Cymraësau o Leiafrifoedd Ethnig (Ethnic
                      Minority Welsh Women Achievement Association’s
                      (EMWWAA)).   
                    </li>
                    <li>
                      Hefyd roedd hi'n sylfaenydd ac yn noddwr Hanes Pobl Dduon
                      Cymru (Black History Wales).
                    </li>
                    <li>
                      Ar 10 Medi 2020, gwnaeth Patti farw ar ôl brwydr fer â
                      chanser; roedd hi'n 83 oed.
                    </li>
                    <li>
                      Roedd Patti'n dwlu ar gerddoriaeth ers pan oedd hi’n ferch
                      fach a thyfodd i fod yn gantores lwyddiannus. Hefyd, roedd
                      Patti yn credu bod yn rhaid cofio ac anrhydeddu pobl a
                      oedd yn Ddu, yn Asiaidd ac o gefndir lleiafrifoedd ethnig
                      a ymladdodd yn ddewr dros Brydain yn ystod y rhyfeloedd.
                      Diolch i Patti ac i bobl eraill fel hi, nawr mae cofebau
                      yng Nghymru sy'n cydnabod ei dewrder.
                    </li>
                  </ul>
                }
              ></PersonYTVid>
            }
          ></Route>

          <Route
            path="/9to12yo/VernesterCyril"
            element={
              <PersonYTVid
                pscc={"/9to12yo"}
                psNum={"3"}
                youtubeVid={"https://www.youtube.com/embed/NZGvt4WbN3g"}
                backLContent="Interview with a hairdresser specialising in braiding. "
                backLContentCym={
                  "Cyfweliad â steilydd gwallt sy'n arbenigo mewn plethu. "
                }
                youtubeVidCym={"https://www.youtube.com/embed/SlPA829fDak"}
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.walesonline.co.uk/news/wales-news/underappreciated-serious-issue-hair-discrimination-22489203"
                        className="resourceHref"
                        target="_blank"
                      >
                        Article about hair discrimination
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://chwaraeteg.com/projects/wonderful-welsh-women/vernesta-cyril/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Article on Cyril's 2006 Midwife of the Year award{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.futuregenerations.wales/news/black-history-month-i-felt-that-if-we-sit-and-watch-the-television-and-shout-when-we-see-injustice-it-doesnt-help-anyone-if-you-go-out-and-put-your-head-above-the-parapet-then-a/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Black History Month blog on Cyril{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.bbc.co.uk/news/uk-wales-58765457"
                        className="resourceHref"
                        target="_blank"
                      >
                        Windrush stories - Vernester Cyril{" "}
                      </a>
                    </li>
                  </ul>
                }
                linksCym={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.walesonline.co.uk/news/wales-news/underappreciated-serious-issue-hair-discrimination-22489203"
                        className="resourceHref"
                        target="_blank"
                      >
                        Erthygl am wahaniaethu ar sail gwallt{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://chwaraeteg.com/merched-gwych-o-gymru/vernesta-cyril/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Erthygl am wobr Bydwraig y Flwyddyn 2006{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.futuregenerations.wales/cy/news/mis-hanes-pobl-dduon-roeddwn-in-teimlo-os-ydyn-nin-eistedd-ac-yn-gwylior-teledu-ac-yn-gweiddi-pan-rydyn-nin-gweld-anghyfiawnder-nid-ywn-helpu-unrhyw-un-os-ewch-chi-allan-a-rhoi-e/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Mis Hanes Du - blog am Vernester Cyril{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.bbc.co.uk/news/uk-wales-58765457"
                        className="resourceHref"
                        target="_blank"
                      >
                        Storiau Windrush - Vernester Cyril{" "}
                      </a>
                    </li>
                  </ul>
                }
                indivName={"Vernester Cyril OBE"}
                indivNameCym={"Vernester Cyril OBE"}
                slugText={"The nurse from the Caribbean."}
                welshSlugText={"Y nyrs o'r Caribî."}
                proposedResource={"Possible interview with nurse."}
                resource={nineApi.slice(11, 12)}
                indivPic={
                  "https://www.peoplescollection.wales/sites/default/files/styles/item_detail/public/images/2015/November/bay213.jpg"
                }
                text={
                  <ul>
                    <li>
                      Vernester Cyril was born in St Lucia, an island in the
                      Caribbean, where she recited poetry and learned about
                      famous British writers.
                    </li>

                    <li>
                      In March 1962, Vernester travelled by ship to Great
                      Britain. On arriving, Vernester was shocked by how cold it
                      was!
                    </li>

                    <li>
                      Vernester was determined to make a new life in the UK –
                      and she immediately looked for work.
                    </li>

                    <li>
                      Vernester felt sad when some people stared at her and made
                      funny faces. But Vernester was tough. If people wrongly
                      behaved like that, then that was their problem!
                    </li>

                    <li>
                      Vernester worked in many jobs, she worked in a factory,
                      then a nursing home.
                    </li>

                    <li>She then trained as a nurse, then as a midwife.</li>

                    <li>
                      Vernester easily passed her exams and received the Best
                      Promising Midwife award.
                    </li>

                    <li>
                      Vernester worked as a midwife for over 30 years, and was
                      promoted several times!
                    </li>
                    <li>
                      She delivered and assisted at the births of over 500
                      babies.{" "}
                    </li>
                    <li>
                      Vernester loved being a midwife. She was also proud of her
                      Caribbean heritage, and educated herself – and others – in
                      the cultural traditions of black people.{" "}
                    </li>
                    <li>
                      A nursing sister told her off for wearing her hair in the
                      Afro hairstyle: Vernester told her to look at books and
                      see how people wore their hair in the Caribbean and
                      Africa.{" "}
                    </li>
                    <li>
                      Sadly, Vernester encountered racism from some patients
                      too. Race equality laws did not yet exist in Britain. But
                      Vernester always challenged discrimination and promoted
                      racial equality.{" "}
                    </li>
                    <li>
                      For Vernester’s tireless work, she was awarded an OBE from
                      the Queen at Buckingham Palace in 1999.{" "}
                    </li>
                    <li>
                      Vernester fulfilled her dream of coming to Great Britain
                      and becoming a nurse. She also worked hard to teach people
                      to be kinder and more tolerant of each other – teaching
                      them that the colour of someone’s skin is not important.{" "}
                    </li>
                  </ul>
                }
                welshText={
                  <ul>
                    <li>
                      Cafodd Vernester Cyril ei geni yn St Lucia, ynys yn y
                      Caribî, lle roedd hi'n arfer adrodd barddoniaeth a dysgu
                      am ysgrifenwyr enwog o Brydain.
                    </li>

                    <li>
                      Ym mis Mawrth 1962, teithiodd Vernester ar long i Brydain
                      Fawr. Ar ôl cyrraedd, cafodd Vernester sioc oherwydd ei
                      bod hi mor oer!
                    </li>

                    <li>
                      Roedd Vernester yn benderfynol o wneud bywyd newydd yn y
                      DU – ac aeth hi i chwilio am waith yn syth.
                    </li>

                    <li>
                      Roedd Vernester yn teimlo'n drist pan oedd rhai pobl yn
                      syllu arni ac yn tynnu wynebau doniol. Ond roedd Vernester
                      yn galed. Os oedd pobl yn ymddwyn yn anghywir fel yna, eu
                      problem nhw oedd hi!
                    </li>

                    <li>
                      Cafodd Vernester sawl swydd; gweithiodd hi mewn ffatri,
                      yna mewn cartref nyrsio.
                    </li>

                    <li>Wedyn hyfforddodd hi fel nyrs, wedyn fel bydwraig. </li>

                    <li>
                      Pasiodd Vernester ei harholiadau'n hawdd ac enillodd wobr
                      am y Fydwraig Fwyaf Addawol.
                    </li>

                    <li>
                      Gweithiodd Vernester fel bydwraig am dros 30 mlynedd, a
                      chafodd ddyrchafiad sawl gwaith!
                    </li>
                    <li>Helpodd hi famau i eni dros 500 o fabanod.</li>
                    <li>
                      Roedd Vernester yn dwlu ar fod yn fydwraig. Hefyd, roedd
                      hi'n falch o'i threftadaeth o'r Caribî. Addysgodd hi ei
                      hun – a phobl eraill – am draddodiadau diwylliannol pobl
                      ddu.
                    </li>
                    <li>
                      Dywedodd chwaer nyrsio y drefn wrthi am wisgo ei gwallt yn
                      arddull Affro: Dywedodd Vernester wrthi am edrych ar
                      lyfrau a gweld sut roedd pobl yn gwisgo eu gwallt yn y
                      Caribî ac yn Affrica.
                    </li>
                    <li>
                      Yn anffodus, roedd rhai cleifion yn ymddwyn yn hiliol tuag
                      at Vernester hefyd. Doedd dim deddfau cydraddoldeb hiliol
                      ym Mhrydain eto ar y pryd. Ond roedd Vernester yn herio
                      gwahaniaethu bob amser ac yn hyrwyddo cydraddoldeb hiliol.
                    </li>
                    <li>
                      Oherwydd gwaith diflino Vernester, cafodd anrhydedd OBE
                      oddi wrth y Frenhines ym Mhalas Buckingham yn 1999.
                    </li>
                    <li>
                      Gwireddodd Vernester ei breuddwyd o ddod i Brydain Fawr a
                      bod yn nyrs. Hefyd, gweithiodd hi'n galed i ddysgu pobl i
                      fod yn fwy caredig a mwy goddefgar tuag at ei gilydd – gan
                      eu dysgu nhw nad yw lliw croen rhywun yn bwysig.
                    </li>
                  </ul>
                }
              ></PersonYTVid>
            }
          ></Route>
          <Route
            path="/9to12yo/DomJames"
            element={
              <PersonPodcast
                pscc={"/9to12yo"}
                psNum={"3"}
                bgImg={"podcastImgOverlayDom"}
                indivName={"Dom James"}
                indivNameCym={"Dom James"}
                slugText={"Rapper and radio presenter."}
                welshSlugText={"Rapiwr a chyflwynydd radio."}
                overlayText="Dom James and Mel Owen in discussion."
                overlayTextCym={"Mel Owen yn cyfweld â Dom James. "}
                resource={nineApi.slice(12, 13)}
                indivPic={
                  "https://ichef.bbci.co.uk/news/976/cpsprodpb/DBCD/production/_124296265_33020262_1243885189076260_6186539543915659264_n-1.jpg"
                }
                backLContent={dom}
                backLContentCym={domCym}
                text={
                  <ul>
                    <li>
                      Dom James is from Cardiff and attended Ysgol Gyfun
                      Plasmawr.{" "}
                    </li>

                    <li>
                      He's a musician who currently presents a weekly Welsh
                      language music programme on Radio Cymru.{" "}
                    </li>

                    <li>
                      He is a regular contributor to S4C's online channel Hansh
                      and has a large social media following.{" "}
                    </li>

                    <li>
                      He is also a rapper and started collaborating with Lloyd
                      Lewis in 2017.{" "}
                    </li>

                    <li>Dom is passionate about creating Welsh rap. </li>

                    <li>
                      Dom and Lloyd Lewis sang with Sage Todz in the Tafwyl
                      Festival in 2022.{" "}
                    </li>

                    <li>
                      Their single 'Pwy sy'n Galw?' generated a great response
                      when it was played on Huw Stephens radio programme.{" "}
                    </li>

                    <li>
                      In 2023, Dom James, Lloyd Lewis and their producer Don
                      topped the Miwsig poll of musicians that were going to be
                      making waves in the Welsh music scene.{" "}
                    </li>
                    <li>Dom is known for his strong Welsh identity. </li>
                  </ul>
                }
                welshText={
                  <ul>
                    <li>
                      Mae Dom James yn dod o Gaerdydd ac aeth i Ysgol Gyfun
                      Plasmawr.
                    </li>

                    <li>
                      Mae'n gerddor ac ar hyn o bryd mae'n cyflwyno rhaglen
                      gerddoriaeth Gymraeg bob wythnos ar Radio Cymru.
                    </li>

                    <li>
                      Mae'n cyfrannu'n gyson i Hansh, sianel ar-lein S4C, ac mae
                      llawer o bobl yn ei ddilyn ar y cyfryngau cymdeithasol.
                    </li>

                    <li>
                      Hefyd, mae'n rapiwr a dechreuodd gydweithio â Lloyd Lewis
                      yn 2017.
                    </li>

                    <li>Mae Dom yn angerddol am greu rap Cymraeg. </li>

                    <li>
                      Canodd Dom a Lloyd Lewis gyda Sage Todz yng Ngŵyl Tafwyl
                      yn 2022.
                    </li>

                    <li>
                      Cafodd eu sengl 'Pwy sy'n Galw?' ymateb gwych pan gafodd
                      ei chwarae ar raglen radio Huw Stephens.
                    </li>

                    <li>
                      Yn 2023, roedd Dom James, Lloyd Lewis a'u cynhyrchydd Don
                      ar frig rhestr Miwsig o gerddorion a oedd yn mynd i fod yn
                      ddylanwadol yn y sin gerddoriaeth Gymraeg a Chymreig.
                    </li>
                    <li>
                      Mae Dom yn adnabyddus am ei falchder o fod yn Gymro.
                    </li>
                  </ul>
                }
              ></PersonPodcast>
            }
          ></Route>
          <Route
            path="/9to12yo/JoeCalzaghe"
            element={
              <Person
                pscc={"/9to12yo"}
                psNum={"3"}
                bgcolor={"#A2D6F9"}
                resourceOverlay={
                  "An imaginary newspaper report about Calzaghe."
                }
                resourceOverlayWelsh="Erthygl papur newydd dychmygol am Calzaghe."
                backcardImg={italianDragon}
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.youtube.com/watch?v=lvR89jxwnyU"
                        className="resourceHref"
                        target="_blank"
                      >
                        In conversation with Calzaghe and clips of him fighting{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.youtube.com/watch?v=GiKNhC-erso"
                        className="resourceHref"
                        target="_blank"
                      >
                        Clips from his 5 'notable wins'{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://welsh-sports-hall-of-fame.wales/az/joe-calzaghe/"
                        className="resourceHref"
                        target="_blank"
                      >
                        General information about him{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.ringtv.com/120339-calzaghe-through-the-years/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Timeline of Calzaghe's career{" "}
                      </a>
                    </li>
                  </ul>
                }
                linksCym={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.youtube.com/watch?v=lvR89jxwnyU"
                        className="resourceHref"
                        target="_blank"
                      >
                        Sgwrs gyda Calzaghe a chlipiau ohono'n ymladd.{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.youtube.com/watch?v=GiKNhC-erso"
                        className="resourceHref"
                        target="_blank"
                      >
                        Clips o'i 5 prif buddugoliaeth{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://welsh-sports-hall-of-fame.wales/az/joe-calzaghe/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Gwybodaeth cyffredinol amdano{" "}
                      </a>
                    </li>
                  </ul>
                }
                indivName={"Joe Calzaghe"}
                indivNameCym={"Joe Calzaghe"}
                linkResource={"./../Resources/JoeCalzaghe"}
                resource={twelveApi.slice(2, 3)}
                slugText={"The undefeated boxing world champion."}
                welshSlugText={"Pencampwr bocsio diguro'r byd."}
                indivPic={
                  "https://upload.wikimedia.org/wikipedia/commons/a/a5/JoeCalzaghe-July2007.jpg"
                }
                text={
                  <ul>
                    <li>
                      Joe Calzaghe was born in 1972 in London, to an Italian
                      (Sardinian) father and a Welsh mother.
                    </li>
                    <li>
                      Joe joined his first boxing club, Newbridge Amateur Boxing
                      Club at ten-years-old. 
                    </li>

                    <li>
                      Joe was the target of regular verbal bullying as a
                      teenager – which left him feeling isolated. Calzaghe later
                      admitted that he ‘never recovered from the abuse’ and left
                      school without sitting any of his GCSEs.
                    </li>

                    <li>
                      After a successful amateur boxing career: winning 110 of
                      120 amateur contests, in October 1993, Joe boxed
                      professionally for the first time – and defeated his
                      opponent in one round. It was the start of a glittering
                      career.
                    </li>

                    <li>
                      In October 1997, Joe won the WBO (World Boxing
                      Organization) super-middleweight title – he retained the
                      title in March 2006.
                    </li>

                    <li>
                      In November 2007, Joe retained the WBO and The Ring
                      super-middleweight titles and also won the WBA and World
                      Boxing Council super-middleweight titles.
                    </li>

                    <li>
                      In November 2008, he retained The Ring light-heavyweight
                      title after a gruelling contest!
                    </li>

                    <li>
                      Three months later, on 5 February 2009, Joe announced his
                      retirement from professional boxing. Calzaghe became one
                      of only fifteen world champions to retire as an undefeated
                      world champion.
                    </li>

                    <li>
                      Joe was often called ‘the Pride of Wales’ and the ‘Italian
                      Dragon’.
                    </li>
                    <li>
                      During his professional career, Joe had 46 professional
                      fights. He won them all: 32 by knockout, and 14 by
                      decision. It is a remarkable record.{" "}
                    </li>
                    <li>
                      Calzaghe was the first person to be awarded the Freedom of
                      Caerphilly County Borough, in 2009.{" "}
                    </li>
                    <li>
                      He was given the honour of a CBE in the 2008 Queen's
                      Birthday Honours.{" "}
                    </li>
                    <li>
                      After retiring from boxing he appeared on the show
                      Strictly Come Dancing!{" "}
                    </li>
                    <li>
                      Joe Calzaghe was bullied at school, it left him feeling
                      vulnerable and lonely. But Joe was determined to make a
                      success of his life and through hard work, determination
                      and by believing in himself, Joe achieved his dream and
                      became an inspiration to many around the world.{" "}
                    </li>
                  </ul>
                }
                welshText={
                  <ul>
                    <li>
                      Cafodd Joe Calzaghe ei eni yn 1972 yn Llundain i dad o'r
                      Eidal (Sardinia) a mam o Gymru.
                    </li>
                    <li>
                      Ymunodd Joe â'i glwb bocsio cyntaf, Clwb Bocsio Amatur
                      Pontnewydd pan oedd yn ddeg oed.
                    </li>

                    <li>
                      Pan oedd Joe yn ei arddegau, dioddefodd fwlio geiriol cas
                      yn rheolaidd – felly, roedd yn teimlo'n unig. Yn
                      ddiweddarach, cyfaddefodd Calzaghe nad oedd ‘wedi gallu
                      dod dros y cam-drin geiriol’. Gadawodd yr ysgol heb sefyll
                      unrhyw un o'i arholiadau TGAU.
                    </li>

                    <li>
                      Ar ôl gyrfa lwyddiannus fel bocsiwr amatur: ennill 110 o
                      120 o ornestau amatur, ym mis Hydref 1993, bocsiodd Joe yn
                      broffesiynol am y tro cyntaf – a churo'r bocsiwr arall
                      mewn un rownd. Dyma ddechrau gyrfa lwyddiannus iawn.
                    </li>

                    <li>
                      Ym mis Hydref 1997, enillodd Joe deitl uwch bwysau canol y
                      WBO (World Boxing Organization) – cadwodd e'r teitl ym mis
                      Mawrth 2006.
                    </li>

                    <li>
                      Ym mis Tachwedd 2007, cadwodd Joe deitlau uwch bwysau
                      canol y WBO a The Ring. Hefyd, enillodd deitlau uwch
                      bwysau canol y WBA a Chyngor Bocsio'r Byd.
                    </li>

                    <li>
                      Ym mis Tachwedd 2008, cadwodd deitl pwysau go-drwm ar ôl
                      gornest galed!
                    </li>

                    <li>
                      Dri mis yn ddiweddarach, ar 5 Chwefror 2009, cyhoeddodd
                      Joe ei fod yn ymddeol o focsio proffesiynol. Daeth
                      Calzaghe yn un o bymtheg pencampwr byd yn unig i ymddeol
                      heb gael ei guro.
                    </li>

                    <li>
                      Roedd Joe yn aml yn cael ei alw'n ‘Balchder Cymru / The
                      Pride of Wales’ a'r ‘Ddraig Eidalaidd / Italian Dragon’
                    </li>
                    <li>
                      Yn ystod ei yrfa broffesiynol, ymladdodd Joe 46 o ornestau
                      proffesiynol. Enillodd bob un ohonyn nhw: 32 drwy lorio
                      (knock out) a 14 drwy benderfyniad y dyfarnwyr. Mae hi'n
                      record ryfeddol.
                    </li>
                    <li>
                      Calzaghe oedd y person cyntaf i gael Rhyddid Bwrdeistref
                      Sir Caerffili, yn 2009.
                    </li>
                    <li>
                      Cafodd anrhydedd CBE yn Anrhydeddau Pen-blwydd y Frenhines
                      yn 2008.
                    </li>
                    <li>
                      Ar ôl ymddeol o focsio, ymddangosodd ar y sioe Strictly
                      Come Dancing!
                    </li>
                    <li>
                      Cafodd Joe Calzaghe ei fwlio yn yr ysgol, felly roedd yn
                      teimlo'n fregus ac yn unig. Ond roedd Joe yn benderfynol o
                      lwyddo yn ei fywyd. Drwy waith caled, bod yn benderfynol a
                      chredu ynddo ei hun, gwireddodd Joe ei freuddwyd a daeth
                      yn ysbrydoliaeth i lawer o bobl ledled y byd.
                    </li>
                  </ul>
                }
              ></Person>
            }
          ></Route>
          <Route
            path="/12to16yo/JasonMohammad"
            element={
              <PersonPodcast
                welshSlugText={"Newyddiadurwr a chyflwynydd teledu a radio. "}
                bgImg={"podcastImgOverlay3"}
                pscc={"/12to16yo"}
                psNum="4"
                overlayText="Presenter Mirain Iwerydd talks about her experiences."
                overlayTextCym={
                  "Mirain Iwerydd yn siarad am ei phrofiadau fel cyflwynydd. "
                }
                backLContent={mirainEng}
                backLContentCym={mirainCym}
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.walesonline.co.uk/lifestyle/tv/jason-mohammads-wife-huge-bbc-24630224"
                        className="resourceHref"
                        target="_blank"
                      >
                        Wales Online article about Jason Mohammad{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.bbc.co.uk/programmes/profiles/4msqlXLpFWdFmjTJZ07yygn/more-about-jason"
                        className="resourceHref"
                        target="_blank"
                      >
                        BBC Radio Wales piece on Jason Mohammad including clips
                        of his work{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.s4c.cymru/en/press/post/53136/s4c-announce-jason-mohammad-as-ambassador/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Press statement by S4C including Jason Mohammad as one
                        of the channel's faces
                      </a>
                    </li>
                  </ul>
                }
                linksCym={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.walesonline.co.uk/lifestyle/tv/jason-mohammads-wife-huge-bbc-24630224"
                        className="resourceHref"
                        target="_blank"
                      >
                        Erthygl Wales Online am fywyd Jason Mohammad{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.bbc.co.uk/programmes/profiles/4msqlXLpFWdFmjTJZ07yygn/more-about-jason"
                        className="resourceHref"
                        target="_blank"
                      >
                        Darn BBC Radio Cymru am Jason Mohammad sy'n cynnwys
                        clipiau o'i waith
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.s4c.cymru/cy/y-wasg/post/53136/s4c-yn-cyhoeddi-jason-mohammad-fel-un-o-wynebaur-sianel/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Datganiad i'r wasg gan S4C yn cyflwyno Jason Mohammad
                        fel un o wynebau'r sianel
                      </a>
                    </li>
                  </ul>
                }
                indivName={"Jason Mohammad"}
                indivNameCym={"Jason Mohammad"}
                resource={twelveApi.slice(3, 4)}
                slugText={"Newsreader, Television and Radio presenter."}
                indivPic={
                  "https://i2-prod.walesonline.co.uk/incoming/article24630322.ece/ALTERNATES/s1200/0_S4C-TV-PAGES.jpg"
                }
                text={
                  <ul>
                    <li>
                      Jason (born 17 September 1973) is a well-known radio and
                      television presenter for the BBC, most notably for news
                      and sports coverage.
                    </li>
                    <li>
                      Born in Cardiff to a Pakistani father and Welsh mother,
                      Jason - a practicing Muslim - went to Swansea University
                      to study Welsh and Politics before then gaining a
                      postgraduate diploma in broadcast journalism.{" "}
                    </li>

                    <li>
                      Jason’s first work in radio was at Singleton Hospital for
                      The Abertawe Bro Morgannwg University Health Board.{" "}
                    </li>

                    <li>
                      Jason then began work at BBC Cymru Wales in 1997 as a
                      reporter for BBC Wales Today.{" "}
                    </li>

                    <li>
                      His career has seen him become an anchor on Wales on
                      Saturday, host of the BBC sports programme, Final Score,
                      presenter of the Scrum V specials on BBC Two Wales and
                      presenter of the BBC Radio Two programme Good Morning
                      Sunday.{" "}
                    </li>

                    <li>
                      Jason was part of the BBC’s broadcasting crew at the Rio
                      2016 Summer Olympics, has covered snooker for the BBC and
                      hosted on BBC Radio Five Live. He has also been an
                      occasional presenter of Match of the Day and Match of the
                      Day 2, and has hosted some of the BBC's live coverage of
                      the RBS Six Nations.{" "}
                    </li>

                    <li>Jason is also in great demand as a public speaker. </li>

                    <li>
                      As one of the best-known presenters in the UK Jason was
                      listed as being one of the top ten earners at the BBC in
                      2019.{" "}
                    </li>
                  </ul>
                }
                welshText={
                  <ul>
                    <li>
                      Mae Jason, a gafodd ei eni ar 17 Medi 1973, yn gyflwynydd
                      radio a theledu adnabyddus i'r BBC. Mae'n cyflwyno
                      rhaglenni newyddion a chwaraeon yn bennaf.
                    </li>
                    <li>
                      Cafodd Jason ei eni yng Nghaerdydd i dad o Pakistan a mam
                      o Gymru. Aeth Jason, sy'n Fwslim, i Brifysgol Abertawe i
                      astudio Cymraeg a Gwleidyddiaeth cyn mynd wedyn i ennill
                      diploma ôl-raddedig mewn newyddiaduraeth ddarlledu.
                    </li>

                    <li>
                      Roedd gwaith cyntaf Jason ar y radio yn Ysbyty Singleton
                      ar gyfer Bwrdd Iechyd Prifysgol Abertawe Bro Morgannwg.
                    </li>

                    <li>
                      Wedyn, dechreuodd Jason ei waith yn BBC Cymru Wales yn
                      1997 fel gohebydd i raglen Wales Today ar BBC Wales.
                    </li>

                    <li>
                      Yn ystod ei yrfa, mae wedi bod yn brif gyflwynydd ar Wales
                      on Saturday, ac ar Final Score, rhaglen chwaraeon y BBC.
                      Mae wedi cyflwyno rhaglenni arbennig Scrum V ar BBC 2
                      Cymru ac yn gyflwynydd Good Morning Sunday, rhaglen ar
                      Radio 2 y BBC.
                    </li>

                    <li>
                      Roedd Jason yn rhan o griw darlledu'r BBC yng Ngemau
                      Olympaidd Rio 2016, mae wedi cyflwyno snwcer i'r BBC ac yn
                      gyflwynydd ar BBC Radio Five Live. Hefyd mae wedi cyflwyno
                      Match of the Day a Match of the Day 2 bob hyn a hyn. Mae
                      wedi cyflwyno rhai o gemau rygbi byw Cystadleuaeth Chwe
                      Gwlad RBS.
                    </li>

                    <li>
                      Hefyd, mae galw mawr am Jason fel siaradwr cyhoeddus.{" "}
                    </li>

                    <li>
                      Fel un o'r cyflwynwyr mwyaf adnabyddus yn y DU, cafodd
                      Jason ei restru fel un o'r deg person sy'n ennill y
                      cyflogau uchaf yn y BBC yn 2019.
                    </li>
                  </ul>
                }
              ></PersonPodcast>
            }
          ></Route>
          <Route
            path="/12to16yo/1919RaceRiots"
            element={
              <PersonYTVid
                welshSlugText={"Y terfysgoedd a gododd gywilydd ar Gymru. "}
                pscc={"/12to16yo"}
                youtubeVidCym="https://www.youtube.com/embed/4APrn1JpUI8"
                youtubeVid="https://www.youtube.com/embed/Un8fkdzGsKw"
                psNum={"4"}
                overlayText=""
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://hwb.gov.wales/repository/resource/aaa2e3a7-65b1-4488-845e-7368c3016cde"
                        className="resourceHref"
                        target="_blank"
                      >
                        Hwb resource on 1919 riots{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://hwb.gov.wales/api/storage/33927bd8-b92b-471d-896b-2dbca2391c57/Newspaper%20reports.pdf?preview=true"
                        className="resourceHref"
                        target="_blank"
                      >
                        Newspaper reports
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.cardiff1919.wales/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Graphic Novel about the 1919 riots{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.walesonline.co.uk/news/wales-news/race-riots-cardiff-1919-butetown-16428953"
                        className="resourceHref"
                        target="_blank"
                      >
                        Wales Online article{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.blackpast.org/global-african-history/events-global-african-history/britain-s-1919-race-riots/#:~:text=The%201919%20race%20riots%20in%20Great%20Britain%20%E2%80%99s,periods%20of%20racial%20upheaval%20in%20the%2020th%20century."
                        className="resourceHref"
                        target="_blank"
                      >
                        Wider consideration of the riots beyond Cardiff{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://blog.nationalarchives.gov.uk/from-cardiff-to-the-caribbean-the-1919-race-riots/"
                        className="resourceHref"
                        target="_blank"
                      >
                        National Archives Blog{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.bbc.co.uk/news/uk-wales-48611603"
                        className="resourceHref"
                        target="_blank"
                      >
                        People voicing their opinions on the incident trying to
                        conclude what actually happened{" "}
                      </a>
                    </li>
                  </ul>
                }
                linksCym={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://hwb.gov.wales/repository/resource/aaa2e3a7-65b1-4488-845e-7368c3016cde"
                        className="resourceHref"
                        target="_blank"
                      >
                        Adnodd Hwb am Derfysgoedd 1919{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://hwb.gov.wales/api/storage/63280f52-c125-45d6-a000-1d5f5209a3a9/Erthyglau%20papur%20newydd.pdf"
                        className="resourceHref"
                        target="_blank"
                      >
                        Erthyglau papur newydd
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.cardiff1919.wales/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Nofel graffeg am Derfysgoedd 1919{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.walesonline.co.uk/news/wales-news/race-riots-cardiff-1919-butetown-16428953"
                        className="resourceHref"
                        target="_blank"
                      >
                        Erthygl Wales Online{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.blackpast.org/global-african-history/events-global-african-history/britain-s-1919-race-riots/#:~:text=The%201919%20race%20riots%20in%20Great%20Britain%20%E2%80%99s,periods%20of%20racial%20upheaval%20in%20the%2020th%20century."
                        className="resourceHref"
                        target="_blank"
                      >
                        Darlun ehangach o'r terfysgoedd tu hwnt i Gaerdydd{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://blog.nationalarchives.gov.uk/from-cardiff-to-the-caribbean-the-1919-race-riots/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Blog gan The National Archives{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.bbc.co.uk/news/uk-wales-48611603"
                        className="resourceHref"
                        target="_blank"
                      >
                        Pobl yn lleisio eu barn ar y ddigwyddiad gan geisio dod
                        i wybod beth yn union ddigwyddodd
                      </a>
                    </li>
                  </ul>
                }
                indivName={"1919 Race Riots"}
                indivNameCym={"1919 Race Riots"}
                // resource={twelveApi.slice(3, 4)}
                slugText={"The race riots that shamed Wales."}
                indivPic={
                  "https://i2-prod.walesonline.co.uk/incoming/article16433006.ece/ALTERNATES/s810/0_AMR_WOL_140619_13.jpg"
                }
                text={
                  <ul>
                    <li>
                      In 1919, Race Riots took place across South Wales which
                      targeted black and ethnic communities. Similar riots took
                      place in dock towns across the UK - including Glasgow and
                      Liverpool.
                    </li>
                    <li>
                      Several factors led to unrest leading up to the riots:
                      <ul>
                        <li>
                          At the end of the First World War, the return home of
                          a large number of troops meant there were too many men
                          competing for available jobs, especially among the
                          seamen.
                        </li>
                        <li>
                          Some people felt that people from other countries –
                          ‘foreigners’ - were ‘stealing’ jobs, despite these
                          communities helping to keep the docks working whilst
                          Britain was at war.{" "}
                        </li>

                        <li>
                          Fear about the lack of housing - a lack of materials
                          and labour caused by the war meant places to live in
                          were hard to find.
                        </li>

                        <li>
                          Indian seamen were hired at a much lower rate than
                          their white co-workers and had to put up with much
                          poorer working and living conditions. They were
                          unfairly blamed for white workers getting a lower wage
                          too.
                        </li>

                        <li>
                          Racism also motivated hostility towards these
                          settlers. 
                        </li>
                      </ul>
                    </li>
                    <li>
                      Along with African, Afro-Caribbean, Chinese and Arab
                      sailors, South Asians were also targeted.
                    </li>
                    <li>
                      Through the intensive press coverage, the 1919 race riots
                      were the first time many people became aware that there
                      were black and minority ethnic people living in Britain,
                      including those who had lived and worked here for many
                      years and served in the war.
                    </li>
                    <li>
                      In Newport, tensions sparked after it was claimed a black
                      man made an insulting remark to a white woman. It was
                      reported that a mob of white people began attacking
                      non-white members of the community at random.
                    </li>

                    <li>
                      Many suffered vandalisation of their homes and properties.
                      In Newport, the South Wales Argus reported that ‘White
                      mobs wrecked so many properties that the town looked as if
                      it had suffered an air raid’. Included in these properties
                      were Chinese laundries and a Greek lodging house.
                    </li>

                    <li>
                      While white crowds destroyed properties, of the 30 people
                      arrested during the riots, 27 were black.
                    </li>

                    <li>
                      In Cardiff, clashes took place on 11 June 1919 between
                      white soldiers returning from the Great War and local
                      Butetown (Tiger Bay) men of mainly Yemeni, Somali and
                      Afro-Caribbean backgrounds.
                    </li>

                    <li>
                      A newspaper article from 1919 reported that: “It is
                      understood that the Government is prepared to send troops
                      to affected areas if the police are unable to control the
                      riots. There have now been four deaths in Cardiff, and
                      many were injured.”
                    </li>
                    <li>
                      The riots lasted for four days, spreading out into
                      Grangetown and parts of the city centre.{" "}
                    </li>
                    <li>
                      The 1919 Race Riots are an incredibly shocking but
                      important part of Welsh history that should be remembered.
                      However, there are currently no plaques or memorials
                      dedicated to remembering the riots in Wales.{" "}
                    </li>
                  </ul>
                }
                welshText={
                  <ul>
                    <li>
                      O fis Ionawr i fis Awst 1919, digwyddodd terfysgoedd
                      ffyrnig yn Tiger Bay yng Nghaerdydd. Y targed oedd
                      cymunedau du ac ethnig.
                    </li>
                    <li>
                      Roedd nifer o ffactorau yn gyfrifol am y terfysgoedd:{" "}
                      <ul>
                        <li>
                          Ar ddiwedd y Rhyfel Byd Cyntaf, daeth llawer iawn o
                          filwyr adref, felly roedd gormod o ddynion yn cystadlu
                          am y swyddi a oedd ar gael yn nociau Caerdydd, yn
                          enwedig ymysg y morwyr.
                        </li>
                        <li>
                          Roedd rhai pobl yn teimlo bod pobl o wledydd eraill –
                          ‘tramorwyr’ – yn ‘dwyn’ swyddi er bod y cymunedau hyn
                          wedi helpu i gadw'r dociau i weithio tra oedd Prydain
                          yn rhyfela.
                        </li>

                        <li>
                          Hefyd, roedd pobl yn poeni am ddiffyg tai – oherwydd y
                          rhyfel, roedd diffyg deunyddiau a llafur, felly roedd
                          hi'n anodd dod o hyd i le i fyw. Cododd y tensiwn o
                          achos hyn.
                        </li>

                        <li>
                          Roedd morwyr o India yn cael eu cyflogi am lawer llai
                          o arian na'u cydweithwyr gwyn ac roedd rhaid iddyn nhw
                          ddioddef amodau gweithio a byw llawer gwaeth. Cawson
                          nhw eu beio ar gam hefyd am fod gweithwyr gwyn yn cael
                          cyflog is hefyd.
                        </li>

                        <li>
                          Roedd hiliaeth yn cymell dicter tuag at y mewnfudwyr
                          hyn hefyd.
                        </li>

                        <li>
                          Gwnaeth pedwar gweithiwr o leiafrifoedd ethnig farw yn
                          yr ymosodiadau treisgar hyn.
                        </li>
                      </ul>
                    </li>

                    <li>
                      Torrodd y tensiynau yn derfysgoedd yng Nghaerdydd, a
                      digwyddodd terfysgoedd eraill mewn trefi porthladd eraill
                      fel Glasgow yn yr Alban. Gwelodd dinasoedd yn Lloegr
                      derfysgoedd hefyd, fel Llundain, South Shields, Hull a
                      Lerpwl.
                    </li>
                    <li>
                      Ynghyd â morwyr Affricanaidd, Affricanaidd Caribïaidd,
                      Tsieineaidd ac Arabaidd, roedd rhai o Dde Asia yn darged
                      hefyd.
                    </li>

                    <li>
                      Drwy'r sylw mawr yn y wasg, terfysgoedd hil 1919 oedd y
                      tro cyntaf i lawer o bobl sylweddoli bod pobl ddu ac o
                      leiafrifoedd ethnig yn byw ym Mhrydain, gan gynnwys rhai a
                      oedd yn byw a gweithio yma ers llawer o flynyddoedd ac
                      wedi ymladd yn y rhyfel.
                    </li>

                    <li>
                      Yng Nghasnewydd, taniodd tensiynau ar ôl i rywun honni bod
                      dyn du wedi dweud pethau sarhaus wrth ddynes wen.
                      Adroddwyd bod tyrfa o bobl wyn wedi dechrau ymosod ar hap
                      ar aelodau heb fod yn wyn o'r gymuned.
                    </li>

                    <li>
                      Cafodd cartrefi ac eiddo llawer o bobl eu fandaleiddio.
                      Yng Nghasnewydd, adroddodd papur newydd South Wales Argus
                      bod ‘tyrfaoedd o bobl wyn wedi dinistrio cymaint o eiddo
                      fel bod y dref yn edrych fel petai wedi dioddef cyrch
                      bomio’. Roedd golchdai Tsieineaidd a llety Groegaidd
                      wedi'u cynnwys yn yr eiddo hwn.
                    </li>

                    <li>
                      Er mai tyrfaoedd o bobl wyn ddinistriodd yr eiddo, pobl
                      ddu oedd 27 o’r 30 o bobl a arestiwyd yn ystod y
                      terfysgoedd.
                    </li>
                    <li>
                      Yng Nghaerdydd, digwyddodd gwrthdaro ar 11 Mehefin 1919
                      rhwng milwyr gwyn a oedd yn dod yn ôl o'r Rhyfel Mawr a
                      dynion lleol o Butetown (Tiger Bay) a oedd yn dod yn
                      bennaf o gefndir Yemen, Somalia ac
                      Affricanaidd-Caribïaidd.
                    </li>
                    <li>
                      Adroddodd erthygl papur newydd yn 1919 fel hyn: “Rydyn
                      ni'n deall bod y Llywodraeth yn barod i anfon milwyr i'r
                      ardaloedd sydd wedi'u heffeithio os nad yw'r heddlu'n
                      gallu rheoli'r terfysgoedd. Erbyn hyn mae pedwar person
                      wedi marw yng Nghaerdydd, a llawer wedi'u hanafu.”
                    </li>
                    <li>
                      Parhaodd y terfysgoedd am bedwar diwrnod, gan estyn allan
                      i Grangetown a rhannau o ganol y ddinas.
                    </li>
                    <li>
                      Mae Terfysgoedd Hil 1919 yn rhan frawychus o hanes Cymru
                      ond maen nhw'n bwysig a dylen ni eu cofio nhw. Fodd
                      bynnag, ar hyn o bryd does dim placiau neu gofebion sy'n
                      coffáu’r terfysgoedd yng Nghymru.
                    </li>
                  </ul>
                }
              ></PersonYTVid>
            }
          ></Route>
          <Route
            path="/12to16yo/KizzyCrawford"
            element={
              <PersonYTVid
                pscc={"/12to16yo"}
                youtubeVidCym="https://www.youtube.com/embed/PnUErgWxB_c"
                psNum={"4"}
                backLContent="A clip of Kizzy singing."
                backLContentCym={"Clip o Kizzy yn canu. "}
                welshSlugText="Y gyfansoddwraig a'r gantores. "
                overlayText={"Kizzy Crawford performing 'The Starling'"}
                youtubeVid={"https://www.youtube.com/embed/g3-eFdI9ZTY"}
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="http://www.kizzymerielcrawford.com/#about"
                        className="resourceHref"
                        target="_blank"
                      >
                        Kizzy Crawford's personal website
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.test.bbc.co.uk/programmes/profiles/1xvLV8vfWGVwm6F641sVRdl/kizzy-crawford"
                        className="resourceHref"
                        target="_blank"
                      >
                        Her performance at the Hay Festival and a written piece
                        about her{" "}
                      </a>
                    </li>
                  </ul>
                }
                linksCym={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="http://www.kizzymerielcrawford.com/cymraeg"
                        className="resourceHref"
                        target="_blank"
                      >
                        Gwefan Kizzy Crawford{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.bbc.co.uk/programmes/profiles/2lq8vb199Rf4Q3fJLJJsGlw/kizzy-crawford"
                        className="resourceHref"
                        target="_blank"
                      >
                        Perfformiad yng Ngŵyl y Gelli a darn ysgrifenedig amdani
                      </a>
                    </li>
                  </ul>
                }
                indivName={"Kizzy Crawford"}
                indivNameCym={"Kizzy Crawford"}
                proposedResource={"Interview of podcast with Kizzy herself?"}
                resource={twelveApi.slice(4, 5)}
                slugText={"The singer songwriter."}
                indivPic={
                  "https://ents24.imgix.net/image/000/158/543/f362a1cbe3eb9d638603c935c57a9f81ee7bd0bf.jpg?auto=format&crop=faces&w=1920&h=1920"
                }
                text={
                  <ul>
                    <li>
                      Born in 1996 in Oxford, Kizzy grew up in Merthyr Tydfil.
                      She has Bajan heritage – her father’s family are from
                      Barbados.{" "}
                    </li>
                    <li>
                      Kizzy began writing songs at the age of thirteen. She
                      sings in both English and Welsh, using traditional and
                      modern sources. She has said that the Welsh language is
                      very important to her.
                    </li>

                    <li>Kizzy has a sister, Eädyth, who is also a singer </li>

                    <li>
                      Together with many radio and TV appearances, Kizzy has
                      performed live at various festivals, including
                      Glastonbury!{" "}
                    </li>

                    <li>
                      Her music was also used to welcome the US President to the
                      NATO Summit in Wales.
                    </li>

                    <li>
                      Kizzy wrote her song 'Caer o Feddyliau' to give women an
                      anthem and a voice, to celebrate themselves as strong
                      Welsh women, and to “break free from the chains of
                      centuries of patriarchy and misogyny.”
                    </li>

                    <li>
                      In 2016, several of her compositions were selected as part
                      of the WJEC A Level Music Syllabus - her music sat in the
                      contemporary section alongside the Manic Street Preachers,
                      Gruff Rhys & The Super Furry Animals.
                    </li>

                    <li>
                      She performed at the Euro 16 Welsh team homecoming gig at
                      Cardiff City Football Stadium alongside the Manic Street
                      Preachers.
                    </li>

                    <li>
                      In November 2021, Kizzy Crawford released her first
                      self-recorded/produced/mixed and debut Welsh Album "Rhydd"
                      with Sain Records.
                    </li>

                    <li>
                      Outside of her music career, Kizzy played a supporting
                      role as PC Emma Jones in the award-winning BBC drama
                      Keeping Faith.
                    </li>

                    <li>At the age of 26 Kizzy was diagnosed with autism.</li>

                    <li>
                      Kizzy said that her autism diagnosis has helped her
                      understand and know herself better, and that she’s excited
                      to explore it in her music.
                    </li>

                    <li>
                      In ‘Kizzy Crawford, Autism and Me’, a radio documentary
                      broadcast by BBC Radio Wales, Kizzy explores her autism
                      diagnosis and looks into why girls are usually diagnosed
                      later than boys.
                    </li>

                    <li>
                      Kizzy has stated that growing up, she had no examples of
                      Black or mixed-race musicians in the Welsh music scene,
                      and that she wants to inspire other mixed-race girls in
                      Wales.
                    </li>
                  </ul>
                }
                welshText={
                  <ul>
                    <li>
                      Ganwyd Kizzy yn Rhydychen yn 1996, ond cafodd hi ei magu
                      ym Merthyr Tudful. Mae teulu ei thad yn dod o Barbados.
                    </li>
                    <li>
                      Dechreuodd hi ysgrifennu caneuon pan oedd hi'n 13 oed. Mae
                      hi'n canu yn Gymraeg ac yn Saesneg, gan ddefnyddio
                      ffynonellau traddodiadol a modern. Mae hi wedi dweud bod
                      yr iaith Gymraeg yn bwysig iawn iddi hi.
                    </li>

                    <li>
                      Mae Kizzy’n ymddangos yn aml ar y radio a'r teledu, hefyd
                      mae hi wedi perfformio'n fyw mewn llawer o wyliau, gan
                      gynnwys Glastonbury!
                    </li>

                    <li>
                      Cafodd ei cherddoriaeth hefyd ei defnyddio i groesawu
                      Arlywydd UDA i Uwchgynhadledd NATO yng Nghymru.{" "}
                    </li>

                    <li>
                      Ysgrifennodd Kizzy ei chân 'Caer o Feddyliau' i roi anthem
                      a llais i fenywod, iddyn nhw ddathlu eu hunain fel menywod
                      cryf o Gymru, ac i “dorri'n rhydd o gadwyni canrifoedd o
                      batriarchaeth a chasineb at fenywod.”
                    </li>

                    <li>Mae gan Kizzy chwaer, Eädyth, sy'n canu hefyd.</li>

                    <li>
                      Enillodd Kizzy wobr Canwr-Gyfansoddwr Gwreiddiol Arts
                      Connect yn 2012. O ganlyniad, gweithiodd hi gydag Amy
                      Wadge gan gynnwys recordio Starling, ei sengl gyntaf.
                      Cafodd yr EP Temporary Zone ei ryddhau ym mis Rhagfyr
                      2013.
                    </li>

                    <li>
                      Yn ogystal ag ymddangos yn aml ar y radio a'r teledu yng
                      Nghymru yn ystod 2013, mae Kizzy wedi perfformio'n fyw
                      mewn llawer o wyliau cerddorol.
                    </li>

                    <li>
                      Perfformiodd Crawford pan ddaeth tîm Ewros 16 Cymru yn ôl
                      adre, mewn gig yn Stadiwm Tîm Pêl-droed Caerdydd, wrth
                      ochr y Manic Street Preachers.
                    </li>

                    <li>
                      Yn 2016, cafodd nifer o'i chyfansoddiadau eu dewis yn rhan
                      o Faes Llafur TGAU Safon Uwch Cerddoriaeth – roedd ei
                      cherddoriaeth yn yr adran gyfoes wrth ochr y Manic Street
                      Preachers, Gruff Rhys a'r Super Furry Animals.
                    </li>

                    <li>
                      Cafodd Kizzy ei gwahodd i berfformio ac i drafod y fraint
                      honno yn fyw ar raglen Woman's Hour BBC Radio 4.  
                    </li>

                    <li>
                      Yn ogystal â chanu mae Kizzy wedi actio a chwaraeodd rôl
                      gynorthwyol fel PC Emma Jones yn Keeping Faith, y ddrama
                      gan y BBC sydd wedi ennill gwobrau.
                    </li>

                    <li>
                      Yn 2018, arwyddodd Crawford gyda Freestyle Records a
                      rhyddhau ei halbwm cyntaf "The Way I Dream" yn 2019.
                    </li>

                    <li>
                      Ym mis Tachwedd 2021, rhyddhaodd Crawford "Rhydd", ei
                      Halbwm Cymraeg cyntaf y mae hi wedi'i
                      hunanrecordio/cynhyrchu/cymysgu gyda Recordiau Sain.
                    </li>
                    <li>
                      Pan oedd Kizzy yn 26 oed, cafodd hi ddiagnosis
                      awtistiaeth.
                    </li>
                    <li>
                      Dywedodd Kizzy fod ei diagnosis awtistiaeth wedi ei helpu
                      i’w deall ei hun ac i’w hadnabod ei hun yn well, a'i bod
                      hi'n teimlo'n llawn cyffro wrth archwilio hyn yn ei
                      cherddoriaeth.
                    </li>
                    <li>
                      Yn ‘Kizzy Crawford, Autism and Me’, rhaglen ddogfen ar BBC
                      Radio Wales, mae Kizzy yn edrych ar ei diagnosis
                      awtistiaeth ac yn ymchwilio i pam mae merched yn cael
                      diagnosis yn ddiweddarach na bechgyn fel arfer.
                    </li>
                    <li>
                      Mae Kizzy wedi dweud, pan oedd hi'n tyfu i fyny, nad oedd
                      ganddi unrhyw enghreifftiau o gerddorion Du neu hil gymysg
                      yn y sin gerddoriaeth yng Nghymru, a'i bod hi eisiau
                      ysbrydoli merched eraill o hil gymysg yng Nghymru.
                    </li>
                  </ul>
                }
              ></PersonYTVid>
            }
          ></Route>
          <Route
            path="/12to16yo/AshleyWilliams"
            element={
              <Person
                welshSlugText={"Cyn-gapten Pêldroed Cymru."}
                pscc={"/12to16yo"}
                psNum={"4"}
                buttonLink={"/Diaries/Ashley"}
                linkResource={"./../Diaries/Ashley"}
                indivName={"Ashley Williams"}
                backcardImg={ashleySmall}
                resourceOverlay={"The imaginary diary of Ashley Williams."}
                resourceOverlayWelsh="Dyddiadur dychmygol Ashley Williams. "
                bgcolor={"#FF686B"}
                indivNameCym={"Ashley Williams"}
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.skysports.com/football/news/11095/12199145/ashley-williams-former-wales-and-swansea-captain-announces-retirement"
                        className="resourceHref"
                        target="_blank"
                      >
                        Sky news article on his retirement{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.bbc.co.uk/sport/football/55896323"
                        className="resourceHref"
                        target="_blank"
                      >
                        BBC Sport Wales article discussing his future{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.wales247.co.uk/was-ashley-williams-wales-greatest-ever-captain"
                        className="resourceHref"
                        target="_blank"
                      >
                        Article discussing his legacy as Wales' best ever
                        captain{" "}
                      </a>
                    </li>
                  </ul>
                }
                linksCym={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.skysports.com/football/news/11095/12199145/ashley-williams-former-wales-and-swansea-captain-announces-retirement"
                        className="resourceHref"
                        target="_blank"
                      >
                        Erthygl Sky News pan gyhoeddodd ei fod yn ymddeol{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.bbc.co.uk/sport/football/55896323"
                        className="resourceHref"
                        target="_blank"
                      >
                        Erthygl BBC Sports Wales yn trafod am ei ddyfodol{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.wales247.co.uk/was-ashley-williams-wales-greatest-ever-captain"
                        className="resourceHref"
                        target="_blank"
                      >
                        Erthygl 'Was Ashley Williams Wales' Greatest Ever
                        Captain? Gan Wales 247
                      </a>
                    </li>
                  </ul>
                }
                resource={twelveApi.slice(5, 6)}
                slugText={"The Welsh football star."}
                indivPic={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/AUT_vs._WAL_2016-10-06_%28127%29.jpg/800px-AUT_vs._WAL_2016-10-06_%28127%29.jpg?20161110161214"
                }
                text={
                  <ul>
                    <li>
                      Ashley Williams was born in 1985 in Wolverhampton. He is
                      of Afro-Jamaican descent through his father and of Welsh
                      descent through his mother.
                    </li>

                    <li>
                      At 16, he was released as a youth player from West
                      Bromwich Albion to begin his career with Hednesford Town
                      and then Stockport County.{" "}
                    </li>

                    <li>
                      In November 2007, Williams won both the inaugural
                      North-West League Two Player of the Year Award and the
                      North-West Player of the Year Award.{" "}
                    </li>

                    <li>
                      Williams, whilst captain of Stockport, made his
                      international debut for Wales.{" "}
                    </li>
                    <li>
                      On playing for Wales, Williams said: “I don’t just play
                      for Wales – I consider myself Welsh”{" "}
                    </li>
                    <li>
                      In March 2008, Williams signed for Swansea City on loan.{" "}
                    </li>

                    <li>
                      After helping Swansea win the League One title and, with
                      it, promotion the second tier of English football for the
                      first time in 24 years, the move was made permanent for a
                      reported £400,000, a club record transfer fee at the time.{" "}
                    </li>

                    <li>
                      The defender impressed during his first season at
                      Championship level, eventually going on to be named Wales
                      Footballer of the Year in November 2009. Williams also
                      picked up the Clubman of the Year award at the same event.{" "}
                    </li>
                    <li>
                      In 2010, Williams set up the charity WillsWorld with his
                      wife Vanessa. The charity hopes to help those in need,
                      particularly under-privileged children.{" "}
                    </li>
                    <li>
                      Ashley Williams is a Patron of Street Football Wales,
                      which helps people aged 16 and above who face social
                      exclusion, as well as being a Patron for the Ethan Perkins
                      Trust, a charity that provides grants to children in South
                      Wales who are diagnosed with brain tumours.{" "}
                    </li>
                    <li>
                      The 2010–11 season saw Swansea and Williams gain promotion
                      to the Premier League via a play-off final win at Wembley.{" "}
                    </li>

                    <li>
                      Williams was named in the Championship PFA Team of the
                      Year for the second consecutive season.{" "}
                    </li>

                    <li>
                      The season also saw him equal and surpass a club record of
                      106 consecutive matches, previously jointly held by Andy
                      Legg and Gilbert Beech.{" "}
                    </li>

                    <li>
                      In 2016, Williams joined Everton on a three-year contract
                      for a £12 million transfer fee and then moved to Stoke
                      City in 2018 and Bristol City 2019.{" "}
                    </li>

                    <li>
                      The highlight of Ashley Williams’ career was captaining
                      Wales to the semi-final of UEFA Euro 2016. It was Wales'
                      first major tournament for more than half a century. Held
                      in France, Williams headed the equalising goal, against
                      Belgium in the quarter-finals as Wales eventually won 3–1
                      to progress to the semi-finals for the first time in their
                      international football history.{" "}
                    </li>

                    <li>Williams retired in 2021 aged 36. </li>

                    <li>
                      Williams is one of Wales’ biggest footballing stars and
                      earned 86 caps for Wales and scored two goals with his
                      last cap coming in June 2019.{" "}
                    </li>
                    <li>
                      Since retiring, Williams has enjoyed being a pundit for
                      BBC Sport and Sky Sports, whilst also working at a
                      grassroots level helping young players in Wales after
                      receiving his coaching badges.{" "}
                    </li>
                  </ul>
                }
                welshText={
                  <ul>
                    <li>
                      Cafodd Ashley Williams ei eni yn 1985 yn Wolverhampton.
                      Mae o dras Affricanaidd-Jamaicaidd drwy ei dad ac o dras
                      Gymreig drwy ei fam.
                    </li>

                    <li>
                      Pan oedd yn 16 oed, cafodd ei ryddhau fel chwaraewr ifanc
                      o West Bromwich Albion i ddechrau ei yrfa gyda Hednesford
                      Town ac yna Stockport County.
                    </li>

                    <li>
                      Ym mis Tachwedd 2007, enillodd Williams Wobr Chwaraewr y
                      Flwyddyn Ail Gynghrair Gogledd-orllewin Lloegr, a Gwobr
                      Chwaraewr y Flwyddyn Gogledd-orllewin Lloegr.
                    </li>

                    <li>
                      Tra oedd Williams yn gapten Stockport, chwaraeodd yn ei
                      gêm ryngwladol gyntaf dros Gymru.
                    </li>
                    <li>
                      Wrth sôn am chwarae dros Gymru, meddai Williams: “Nid
                      chwarae dros Gymru yn unig dwi – dwi'n ystyried fy hunan
                      yn Gymro”.{" "}
                    </li>
                    <li>
                      Ym mis Mawrth 2008, arwyddodd Williams i Ddinas Abertawe
                      ar fenthyg.{" "}
                    </li>

                    <li>
                      Ar ôl helpu Abertawe i ennill teitl y Gynghrair Gyntaf
                      (League One), a hefyd, dyrchafiad i ail haen pêl-droed
                      Lloegr am y tro cyntaf mewn 24 blynedd, cafodd aros yn
                      barhaol yn Abertawe. Mae'n debyg i'r clwb dalu £400,000,
                      record am ffi drosglwyddo ar y pryd.
                    </li>

                    <li>
                      Chwaraeodd yr amddiffynnwr yn dda yn ystod ei dymor cyntaf
                      yn y Bencampwriaeth. Yn y pen draw, cafodd ei enwi'n
                      Bêl-droediwr y Flwyddyn yng Nghymru ym mis Tachwedd 2009.
                      Hefyd, enillodd Williams wobr Dyn Clwb y Flwyddyn yn yr un
                      achlysur.
                    </li>
                    <li>
                      Yn 2010, sefydlodd Williams yr elusen WillsWorld gyda
                      Vanessa, ei wraig. Mae'r elusen yn gobeithio helpu’r rhai
                      mewn angen, yn enwedig plant difreintiedig.{" "}
                    </li>
                    <li>
                      Mae Ashley Williams yn Noddwr elusen Street Football
                      Wales, sy'n helpu pobl 16 oed a hŷn sy'n wynebu allgáu
                      cymdeithasol. Hefyd, mae’n Noddwr i Ymddiriedolaeth Ethan
                      Perkins, elusen sy'n rhoi grantiau i blant yn Ne Cymru
                      sy'n cael diagnosis tiwmor yr ymennydd.{" "}
                    </li>
                    <li>
                      Yn nhymor 2010–11 cafodd Abertawe a Williams ddyrchafiad i
                      Uwch Gynghrair Lloegr drwy ennill rownd derfynol y gemau
                      ail gyfle yn Wembley. 
                    </li>

                    <li>
                      Cafodd Williams ei enwi yn Nhîm y Flwyddyn y
                      Bencampwriaeth gan Gymdeithas y Pêl-droedwyr proffesiynol
                      am yr ail dymor yn olynol.
                    </li>

                    <li>
                      Hefyd yn y tymor hwnnw, curodd record y clwb o 106 gêm yn
                      ddi-dor. Andy Legg a Gilbert Beech oedd yn arfer bod â'r
                      record ar y cyd.
                    </li>

                    <li>
                      Yn 2016, ymunodd Williams â thîm Everton ar gontract tair
                      blynedd gyda ffi trosglwyddo gwerth £12 miliwn ac yna
                      symudodd i Stoke City yn 2018 a Bristol City yn 2019.
                    </li>

                    <li>
                      Uchafbwynt gyrfa Ashley Williams oedd bod yn gapten ar dîm
                      Cymru a gyrhaeddodd rowndiau cynderfynol Euros UEFA yn
                      2016. Hwn oedd twrnamaint mawr cyntaf Cymru ers dros
                      hanner canrif. Cafodd y twrnamaint ei gynnal yn Ffrainc.
                      Peniodd Williams y gôl a ddaeth â Chymru yn gyfartal yn
                      erbyn Gwlad Belg yn y chwarteri wrth i Gymru ennill 3-1 yn
                      y pen draw a symud ymlaen i'r gemau cynderfynol am y tro
                      cyntaf yn eu hanes pêl-droed rhyngwladol.
                    </li>

                    <li>Ymddeolodd Williams yn 2021, yn 36 oed. </li>

                    <li>
                      Mae Williams yn un o sêr pêl-droed mwyaf Cymru. Enillodd
                      86 o gapiau dros Gymru a sgorio dwy gôl, gyda'i gap olaf
                      ym mis Mehefin 2019.
                    </li>
                    <li>
                      Ers ymddeol, mae Williams yn mwynhau bod yn sylwebydd i
                      Chwaraeon y BBC a Sky Sports, a hefyd mae'n gweithio ar
                      lawr gwlad yn helpu chwaraewyr ifanc yng Nghymru ar ôl
                      cael ei fathodynnau hyfforddi.{" "}
                    </li>
                  </ul>
                }
              ></Person>
            }
          ></Route>
          <Route
            path="/12to16yo/JoeErskine"
            element={
              <Person
                pscc={"/12to16yo"}
                psNum={"4"}
                welshSlugText="Y bocsiwr dawnus o Butetown. "
                bgcolor={"#FF686B"}
                linkResource={"./../Resources/JoeErskine"}
                backcardImg={boxing}
                resourceOverlay={"Is boxing safe?"}
                resourceOverlayWelsh={"Yw bocsio'n ddiogel?"}
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.boxingnewsonline.net/joe-erskine-too-small-to-be-great/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Article on his life{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.walesonline.co.uk/news/local-news/day-cardiff-said-farewells-legend-1935179"
                        className="resourceHref"
                        target="_blank"
                      >
                        Remembrance article on Wales Online{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.youtube.com/watch?v=8Q_EWAi0puo"
                        className="resourceHref"
                        target="_blank"
                      >
                        Video of fight against Henry Cooper{" "}
                      </a>
                    </li>
                  </ul>
                }
                linksCym={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.boxingnewsonline.net/joe-erskine-too-small-to-be-great/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Erthygl am ei fywyd{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.walesonline.co.uk/news/local-news/day-cardiff-said-farewells-legend-1935179"
                        className="resourceHref"
                        target="_blank"
                      >
                        Erthygl cofiant ar Wales Online{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.youtube.com/watch?v=8Q_EWAi0puo"
                        className="resourceHref"
                        target="_blank"
                      >
                        Fideo o ornest yn erbyn Henry Cooper{" "}
                      </a>
                    </li>
                  </ul>
                }
                indivName={"Joe Erskine"}
                indivNameCym={"Joe Erskine"}
                resource={twelveApi.slice(6, 7)}
                slugText={"The gifted boxer from Butetown."}
                indivPic={
                  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/joe-erskine-keystone.jpg"
                }
                text={
                  <>
                    <ul>
                      <li>
                        Joseph Erskine (born 26 January 1934), a boxer from the
                        Butetown district of Cardiff, was a former British and
                        British Empire heavyweight boxing champion.
                      </li>
                      <li>He was one of the most gifted boxers of his day.</li>

                      <li>
                        Erskine was born in January 1934 in Cardiff's dockland
                        district, Tiger Bay. His mother was Welsh and his father
                        Jamaican.
                      </li>

                      <li>
                        As a schoolboy he won various titles with the Victoria
                        ABC and was an ABA heavyweight champion in 1953.
                      </li>

                      <li>
                        At the age of 19 Erskine was an Amateur Boxing
                        Association Champion, Inter-Services Champion, and
                        British Army Champion.
                      </li>
                      <li>
                        He began fighting as a professional in 1954 and was
                        trained by Freddie Elvin.
                      </li>
                      <li>
                        Boxing rivals included the American boxer Willie
                        Pastrano, Welsh boxer Dick Richardson, German Karl
                        Mildenberger, Jack Bodell (a British future champion)
                        and the legendary Henry Cooper, who he fought 5 times.
                      </li>
                      <li>
                        From August 1956 to June 1958 Erskine held the British
                        heavyweight title. He won 45 of his 54 professional
                        bouts (13 knockouts), losing 8, with one draw.
                      </li>

                      <li>
                        His last fight was against Billy Walker on 27 October
                        1964. He lost the ten-round bout on points.
                      </li>
                    </ul>
                    <p>
                      Erskine was 5ft 11inches and weighed under 200lbs. As a
                      small heavyweight, he outmanoeuvred rather than
                      overpowered his opponents. His determination however, and
                      his strong belief in himself, made him a fierce opponent.
                    </p>
                  </>
                }
                welshText={
                  <>
                    <ul>
                      <li>
                        Roedd Joseph Erskine, a gafodd ei eni ar 26 Ionawr 1934,
                        yn focsiwr o ardal Butetown yng Nghaerdydd.
                      </li>
                      <li>
                        Roedd yn un o focswyr mwyaf talentog ei ddydd ac yn
                        gyn-bencampwr bocsio pwysau trwm Prydain ac Ymerodraeth
                        Prydain.
                      </li>

                      <li>
                        Cafodd Erskine ei eni ym mis Ionawr 1934 yn Tiger Bay,
                        ardal y dociau yng Nghaerdydd. Roedd ei fam yn Gymraes
                        a'i dad yn dod o Jamaica.
                      </li>

                      <li>
                        Fel bachgen ysgol, enillodd wahanol deitlau gyda Chlwb
                        Bocsio Amatur Victoria ac roedd yn bencampwr pwysau trwm
                        ABA yn 1953.
                      </li>

                      <li>
                        Pan oedd yn 19 oed, roedd Erskine yn Bencampwr y
                        Gymdeithas Bocsio Amatur, yn Bencampwr y Lluoedd Arfog,
                        ac yn Bencampwr Byddin Prydain.
                      </li>
                      <li>
                        Dechreuodd ymladd yn broffesiynol yn 1954 a chafodd ei
                        hyfforddi gan Freddie Elvin.
                      </li>
                      <li>
                        Bocsiodd yn erbyn dynion fel Willie Pastrano o America,
                        Dick Richardson o Gymru, Karl Mildenberger o'r Almaen,
                        Jack Bodell (a fyddai'n dod yn bencampwr Prydain) a'r
                        chwedlonol Henry Cooper o Loegr, ymladdon nhw 5 gwaith.
                      </li>
                      <li>
                        O fis Awst 1956 i fis Mehefin 1958, Erskine oedd â
                        theitl pwysau trwm Prydain. Enillodd 45 o'i 54 o
                        ornestau proffesiynol (13 drwy lorio), colli 8, gydag un
                        yn gyfartal.
                      </li>

                      <li>
                        Roedd ei ornest olaf yn erbyn Billy Walker ar 27 Hydref
                        1964. Collodd yr ornest ddeg rownd ar bwyntiau.
                      </li>
                    </ul>
                    <p>
                      Roedd Erskine yn 5 troedfedd 11 modfedd (1 metr 80 cm) ac
                      roedd yn pwyso o dan 200 pwys (bron i 91 kg). Fel ymladdwr
                      pwysau trwm bach, roedd yn gallu symud yn gyflym o afael
                      ei wrthwynebwyr, yn hytrach na'u trechu nhw. Ond oherwydd
                      ei fod yn benderfynol ac yn credu'n gryf ynddo ei hun,
                      roedd yn wrthwynebydd ffyrnig.
                    </p>
                  </>
                }
              ></Person>
            }
          ></Route>
          <Route
            path="/12to16yo/ElizabethCampbell"
            element={
              <PersonYTVid
                pscc={"/12to16yo"}
                psNum={"4"}
                youtubeVid={"https://www.youtube.com/embed/y0Lg1LF65JY"}
                youtubeVidCym={"https://www.youtube.com/embed/ifn0X_DGXZs"}
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.bbc.co.uk/newsround/58732219"
                        className="resourceHref"
                        target="_blank"
                      >
                        Newsround article about the statue of her in Cardiff{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.bbc.co.uk/programmes/profiles/1p7r3fkpsWTbQ9shCFh1QXc/betty-campbell"
                        className="resourceHref"
                        target="_blank"
                      >
                        Hidden Heroines article by the BBC with videos about
                        Betty Campbell{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://blackhistorywales.org.uk/black-history-wales-press-release-mrs-betty-campbell-mbe-monument/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Press release - History of Welsh Black People{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.itv.com/news/wales/2021-09-29/who-was-betty-campbell-and-why-is-a-statue-of-her-being-unveiled-in-cardiff"
                        className="resourceHref"
                        target="_blank"
                      >
                        Article on Betty Campbell and uncovering her statue
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://meithrin.cymru/wp-content/uploads/2023/02/Betty_Campbell.pdf"
                        className="resourceHref"
                        target="_blank"
                      >
                        Mudiad Ysgolion Meithrin information sheet{" "}
                      </a>
                    </li>
                  </ul>
                }
                linksCym={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.bbc.co.uk/newsround/58732219"
                        className="resourceHref"
                        target="_blank"
                      >
                        Erthygl Newsround am y cerflun ohoni yng Nghaerdydd{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.bbc.co.uk/programmes/articles/54j56MQDcCvvnsNlyy8JVPn/adnoddau-dysgu"
                        className="resourceHref"
                        target="_blank"
                      >
                        Erthygl Merched Mawreddog y BBC gyda fideos am Betty
                        Campbell
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://blackhistorywales.org.uk/black-history-wales-press-release-mrs-betty-campbell-mbe-monument/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Datganiad i'r wasg Hanes Pobl Duon Cymru{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.itv.com/news/wales/2021-09-29/who-was-betty-campbell-and-why-is-a-statue-of-her-being-unveiled-in-cardiff"
                        className="resourceHref"
                        target="_blank"
                      >
                        Erthygl am bwy oedd Betty Campbell a dad-orchuddio'r
                        cerflun{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://meithrin.cymru/wp-content/uploads/2023/02/Betty_Campbell.pdf"
                        className="resourceHref"
                        target="_blank"
                      >
                        Taflen ffeithiau Mudiad Ysgolion Meithrin{" "}
                      </a>
                    </li>
                  </ul>
                }
                indivName={`Elizabeth "Betty" Campbell MBE `}
                indivNameCym={`Elizabeth "Betty" Campbell MBE `}
                proposedResource={
                  <a href={"https://dev.addysgop.co.uk/hanesbame/BettyQuiz"}>
                    <motion.div
                      // className={quizButStyle}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <h3 className="quizH2">Try the Quiz!</h3>
                    </motion.div>
                  </a>
                }
                resource={twelveApi.slice(7, 8)}
                slugText={"Wales' First black headteacher."}
                welshSlugText={"Pennaeth du cyntaf Cymru."}
                backLContent="An interview with Natalie Jones."
                indivPic={"https://dev.addysgop.co.uk/pdfs/betty2.png"}
                text={
                  <ul>
                    <li>
                      Betty was born in Butetown in Cardiff on the 6th of
                      November 1934.{" "}
                    </li>
                    <li>
                      {" "}
                      Her mother, Nora, was Welsh Barbadian and her father,
                      Simon, had come to the UK from Jamaica when he was 15. He
                      fought for Britain in World War II and was killed.
                    </li>

                    <li>
                      At school, Betty was top of her class. She won a
                      scholarship to the Lady Margaret High School for Girls in
                      Cardiff and wanted to be a teacher from a young age,
                      despite one of her teachers saying it was unlikely to
                      happen because she was a black, working class girl. This
                      made her cry but also made her want to try even harder.{" "}
                    </li>

                    <li>
                      In 1960 she applied to Cardiff Teacher Training College
                      and was one of only six female students to be allowed to
                      attend.{" "}
                    </li>

                    <li>
                      Betty’s first teaching post was in Llanrumney but she soon
                      returned to Butetown, getting a job at Mount Stuart
                      Primary School, where she taught for 28 years.{" "}
                    </li>

                    <li>
                      It was at this school that Betty became Wales’ first black
                      headteacher. There were very few black teachers at this
                      time in Wales.{" "}
                    </li>

                    <li>
                      Betty felt that it was important to tell the children
                      about black culture and black history as part of their
                      education so she taught them about slavery and the system
                      of apartheid which operated at the time in South Africa.{" "}
                    </li>

                    <li>
                      Betty helped to create Black History Month and also taught
                      a series of workshops on Butetown's citizens and their
                      countries of origin.{" "}
                    </li>

                    <li>
                      Betty became known outside Wales as an important authority
                      on education and she put into practice new ideas on how to
                      teach children.{" "}
                    </li>

                    <li>
                      Her school became important as a good example of
                      multicultural teaching.{" "}
                    </li>

                    <li>
                      Betty was very passionate about the different communities
                      and their history within Cardiff docks. She served as a
                      Butetown councillor to try and help the people.{" "}
                    </li>

                    <li>
                      In 2003, Betty was awarded an MBE for services to
                      education and community life. She was also honoured by
                      Unison Cymru’s Black Members’ group in 2015 with a
                      lifetime achievement award for her contribution to black
                      history and Welsh education.{" "}
                    </li>

                    <li>
                      A statue was erected for her in Cardiff following the a
                      public vote. It is the first statue of a female named
                      woman to be erected in Wales.{" "}
                    </li>
                  </ul>
                }
                welshText={
                  <ul>
                    <li>
                      Cafodd Betty ei geni yn Butetown, Caerdydd, ar 6 Tachwedd
                      1934.
                    </li>
                    <li>
                      Roedd Nora, ei mam, yn Gymraes o dras Barbados. Roedd
                      Simon, ei thad, wedi dod i'r DU o Jamaica pan oedd yn 15
                      oed. Ymladdodd dros Brydain yn yr Ail Ryfel Byd a cafodd
                      ei ladd.
                    </li>

                    <li>
                      Yn yr ysgol, Betty oedd disgybl gorau ei dosbarth.
                      Enillodd ysgoloriaeth i Ysgol Uwchradd y Fonesig Margaret
                      i Ferched yng Nghaerdydd. Roedd hi eisiau bod yn athrawes
                      o'r adeg pan oedd hi'n ferch fach. Ond dywedodd un o'i
                      hathrawon wrthi nad oedd hi’n meddwl y byddai hynny’n
                      digwydd oherwydd mai merch ddu o'r dosbarth gweithiol oedd
                      hi. Gwnaeth hyn i Betty grio ond hefyd gwnaeth iddi eisiau
                      trio hyd yn oed yn galetach.
                    </li>

                    <li>
                      Yn 1960 gwnaeth hi gais i Goleg Hyfforddi Athrawon
                      Caerdydd. Hi oedd un o chwe myfyrwraig yn unig i gael
                      gwneud cwrs yno.
                    </li>

                    <li>
                      Roedd swydd ddysgu gyntaf Betty yn Llanrhymni ond cyn hir,
                      daeth yn ôl i Butetown. Cafodd swydd yn Ysgol Gynradd
                      Mount Stuart, lle dysgodd hi am 28 o flynyddoedd.
                    </li>

                    <li>
                      Yn yr ysgol hon daeth Betty yn bennaeth du cyntaf Cymru.
                      Ychydig bach iawn o athrawon du oedd yng Nghymru ar yr
                      adeg hon.
                    </li>

                    <li>
                      Roedd Betty yn teimlo ei bod hi'n bwysig bod y plant yn
                      gwybod am ddiwylliant pobl dduon a hanes pobl dduon fel
                      rhan o'u haddysg. Felly roedd hi'n eu dysgu nhw am
                      gaethwasiaeth a’r system apartheid a oedd yn Ne Affrica ar
                      y pryd.
                    </li>

                    <li>
                      Helpodd Betty i greu Mis Hanes Pobl Dduon a hefyd dysgodd
                      hi gyfres o weithdai am bobl Butetown a'r gwledydd roedden
                      nhw wedi dod ohonyn nhw'n wreiddiol.
                    </li>

                    <li>
                      Daeth Betty yn adnabyddus y tu allan i Gymru fel awdurdod
                      pwysig ar addysg. Defnyddiodd hi lawer o syniadau newydd
                      am sut i addysgu plant.
                    </li>

                    <li>
                      Daeth ei hysgol hi'n bwysig fel enghraifft dda o addysgu
                      amlddiwylliannol.
                    </li>

                    <li>
                      Roedd Betty yn teimlo'n angerddol am y gwahanol gymunedau
                      a'u hanes yn nociau Caerdydd. Gwasanaethodd hi fel
                      cynghorydd yn Butetown er mwyn ceisio helpu'r bobl.
                    </li>

                    <li>
                      Yn 2003, cafodd Betty anrhydedd MBE am ei gwasanaeth i
                      addysg a bywyd y gymuned. Hefyd, cafodd hi anrhydedd gan
                      grŵp Aelodau Duon Unsain Cymru yn 2015. Rhoddon nhw wobr
                      cyflawniad oes iddi am ei chyfraniad i hanes pobl dduon ac
                      addysg yng Nghymru.
                    </li>

                    <li>
                      Cafodd cerflun ohoni ei osod yng Nghaerdydd yn dilyn
                      pleidlais cyhoeddus. Hwn oedd y cerflun cyntaf o fenyw
                      sy'n cael ei enwi i gael ei osod yng Nghymru.
                    </li>
                  </ul>
                }
              ></PersonYTVid>
            }
          ></Route>
          <Route
            path="/12to16yo/GaneshSubrahmanyam"
            element={
              <PersonYTVid
                pscc={"/12to16yo"}
                psNum={"4"}
                welshSlugText="Y doctor o'r India."
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.nhsrho.org/news/reflections-of-south-asian-heritage-month/"
                        className="resourceHref"
                        target="_blank"
                      >
                        NHS article on South Asian heritage{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.bbc.co.uk/programmes/p01gtkgp"
                        className="resourceHref"
                        target="_blank"
                      >
                        Dr Ganesh on 'The Real Indian Doctor' BBC programme{" "}
                      </a>
                    </li>
                  </ul>
                }
                linksCym={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.nhsrho.org/news/reflections-of-south-asian-heritage-month/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Erthygl am South Asian Heritage Month gan yr NHS{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.bbc.co.uk/programmes/p01gtkgp"
                        className="resourceHref"
                        target="_blank"
                      >
                        Dr Ganesh ar raglen 'The Real Indian Doctors' ar BBC{" "}
                      </a>
                    </li>
                  </ul>
                }
                indivName={"Dr Ganesh Subrahmanyam"}
                indivNameCym={"Dr Ganesh Subrahmanyam"}
                resource={twelveApi.slice(8, 9)}
                youtubeVid="https://www.bbc.co.uk/programmes/p0b4kn0p/player"
                youtubeVidCym={
                  "https://www.bbc.co.uk/programmes/p0b4kn0p/player"
                }
                slugText={"The Indian Doctor."}
                indivPic={
                  "https://ichef.bbci.co.uk/images/ic/240x135/p0b6ksrg.jpg"
                }
                text={
                  <ul>
                    <li>
                      People who immigrated from South Asia in the 1950s were
                      very important to the success of the NHS.{" "}
                    </li>
                    <li>
                      They continued to be important to healthcare in the years
                      that followed.{" "}
                    </li>

                    <li>
                      The NHS began in 1948 and there was a need for many
                      doctors to look after people. But there was a shortage of
                      medical people in Britain because of World War II.
                    </li>

                    <li>
                      Britain advertised in India (a former colony) for help,
                      offering good pay and adventure.{" "}
                    </li>
                    <li>
                      A large number of medical people came from India to
                      Britain to work in the NHS. They were a part of the
                      Windrush Generation.
                    </li>

                    <li>
                      Dr Ganesh Subrahmanyam was one of the first Indian doctors
                      to arrive in Wales.{" "}
                    </li>

                    <li>
                      He was immediately accepted into the Welsh community and
                      rose to the challenge of treating diseases that were very
                      different to that of India.{" "}
                    </li>

                    <li>
                      He was part of the medical team at the Aberfan disaster.{" "}
                    </li>

                    <li>
                      By the 1960s, 18,000 more Indian doctors came to Britain
                      to help a struggling NHS on the verge of collapse.{" "}
                    </li>

                    <li>
                      Second generation Asians are very important in the medical
                      world today: A quarter of all medical students in the UK
                      have South Asian heritage; Many are employed in care
                      homes; A third of all pharmacists are South Asian.{" "}
                    </li>
                    <li>
                      In 2003, 73% of doctors in the Rhondda Valley were Asian.{" "}
                    </li>

                    <li>
                      South Asian medical staff, alongside their other
                      colleagues, worked tirelessly through the pandemic,
                      despite being at higher risk of catching Covid.
                    </li>
                  </ul>
                }
                welshText={
                  <ul>
                    <li>
                      Roedd y bobl a fewnfudodd o Asia yn y 1950au yn bwysig
                      iawn i lwyddiant y GIG (NHS).
                    </li>
                    <li>
                      Roedden nhw'n dal i fod yn bwysig i ofal iechyd yn y
                      blynyddoedd wedi hynny.
                    </li>

                    <li>
                      Daeth nifer mawr o bobl feddygol o India i Brydain i
                      weithio yn y GIG. Roedd rhain yn rhan o'r Genhedlaeth
                      Windrush.
                    </li>

                    <li>
                      Hysbysebodd Prydain am help yn India (un o'r hen
                      drefedigaethau), gan gynnig tâl da ac antur.
                    </li>
                    <li>
                      Daeth nifer mawr o bobl feddygol o India i Brydain i
                      weithio yn y GIG. Roeddent yn ran o'r Genhedlaeth
                      Windrush.
                    </li>

                    <li>
                      Roedd Dr Ganesh Subrahmanyam yn un o'r meddygon Indiaidd
                      cyntaf i gyrraedd Cymru.
                    </li>

                    <li>
                      Cafodd ei dderbyn yn syth i'r gymuned Gymreig a dechrau
                      wynebu'r her o drin clefydau a oedd yn wahanol iawn i rai
                      India.
                    </li>

                    <li>
                      Roedd yn rhan o'r tîm meddygol adeg trychineb Aberfan.
                    </li>

                    <li>
                      Erbyn y 1960au, daeth 18,000 yn rhagor o feddygon Indiaidd
                      i Brydain i helpu'r GIG a oedd mewn trafferth. Roedd y
                      gwasanaeth ar fin dymchwel.
                    </li>

                    <li>
                      Mae pobl Asiaidd ail genhedlaeth yn bwysig iawn yn y byd
                      meddygol heddiw: Mae chwarter yr holl fyfyrwyr meddygol yn
                      y DU o dras De Asia; Mae llawer yn gweithio mewn cartrefi
                      gofal; Mae traean yr holl fferyllyddion o dras De Asia.
                    </li>
                    <li>
                      Yn 2003, roedd 73% y meddygon yng Nghwm Rhondda yn
                      Asiaidd.
                    </li>

                    <li>
                      Gweithiodd staff meddygol De Asiaidd, wrth ochr eu
                      cydweithwyr eraill, yn galed iawn drwy'r pandemig, er bod
                      mwy o risg iddyn nhw ddal Covid.
                    </li>
                  </ul>
                }
              ></PersonYTVid>
            }
          ></Route>
          <Route
            path="/12to16yo/VaughanGething"
            element={
              <Person
                pscc={"/12to16yo"}
                psNum={"4"}
                welshSlugText="Gwleidydd Llafur Cymraeg. "
                resourceOverlay={"A portrait of Vaughan Gething."}
                resourceOverlayWelsh="Portread o Vaughan Gething. "
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.vaughangething.wales/en/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Vaughan Gething's personal website{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.gov.wales/vaughan-gething-ms#15220"
                        className="resourceHref"
                        target="_blank"
                      >
                        Government Website - Biography and information about his
                        job{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.youtube.com/watch?v=UBXgI934lkg"
                        className="resourceHref"
                        target="_blank"
                      >
                        Vaughan Gething talking about racial stereotypes and
                        being a black politician in Wales
                      </a>
                    </li>
                  </ul>
                }
                linksCym={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.vaughangething.wales/cy/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Gwefan personol Vaughan Gething{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.llyw.cymru/vaughan-gething-as"
                        className="resourceHref"
                        target="_blank"
                      >
                        Gwefan y Llywodraeth - Bywgraffiad a gwybodaeth am ei
                        swydd
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.youtube.com/watch?v=UBXgI934lkg"
                        className="resourceHref"
                        target="_blank"
                      >
                        Vaughan Gething yn siarad am sterioteipiau o hiliaeth a
                        bod yn wleidydd du yng Nghymru
                      </a>
                    </li>
                  </ul>
                }
                indivName={"Vaughan Gething"}
                indivNameCym={"Vaughan Gething"}
                linkResource={"./../Resources/VaughanGething"}
                bgcolor={"#FF686B"}
                backcardImg={vg}
                resource={twelveApi.slice(9, 10)}
                slugText={"Welsh Labour politician."}
                indivPic={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Vaughan_Gething.jpg/800px-Vaughan_Gething.jpg"
                }
                text={
                  <ul>
                    <li>
                      Vaughan Gething was born on 15 March 1974, in Zambia.
                    </li>
                    <li>
                      His father, a white Welsh vet, met his mother who is a
                      black Zambian when he moved to Zambia.{" "}
                    </li>
                    <li>
                      When he was two years old, he moved to Monmouthshire,
                      Wales with his family and then they moved again to Dorset,
                      England, where Gething was brought up.{" "}
                    </li>
                    <li>Vaughan joined the Labour Party when he was 17. </li>
                    <li>
                      He studied law at Aberystwyth where he became the first
                      Black president of the National Union of Students Wales.{" "}
                    </li>
                    <li>
                      He went on to train as a solicitor in Cardiff in 2001,
                      with the trade union solicitors Thompsons. He specialised
                      in employment law and became a partner in Thompsons in
                      2007.{" "}
                    </li>
                    <li>
                      Gething is a strong supporter of the trade union movement.{" "}
                    </li>
                    <li>
                      Between 2001 and 2003, Gething was the chair of Right to
                      Vote – a project which aimed to encourage more
                      participation from black and minority ethnic communities
                      in Welsh public life.{" "}
                    </li>
                    <li>
                      In 2008, at the age of 34, Vaughan became the youngest
                      President of Wales' Trade Union Congress. He also became
                      the first black President in the role.
                    </li>

                    <li>
                      Vaughan became a councillor for Butetown, Cardiff as the
                      Welsh Labour candidate for the Cardiff South and Penarth
                      constituency in the Senedd.{" "}
                    </li>

                    <li>
                      Following the 2016 election, Gething was promoted to the
                      Welsh Cabinet as Cabinet Secretary for Health, Well-being
                      and Sport. The position was then renamed as Minister for
                      Health and Social Services.
                    </li>
                    <li>
                      In May 2021, Gething was appointed as a Minister for the
                      Economy.
                    </li>
                  </ul>
                }
                welshText={
                  <ul>
                    <li>
                      Cafodd Vaughan Gething ei eni ar 15 Mawrth 1974, yn
                      Zambia.
                    </li>
                    <li>
                      Cwrddodd ei dad, milfeddyg gwyn o Aberogwr, â'i fam sy'n
                      fenyw ddu o Zambia, yn y wlad honno.
                    </li>
                    <li>
                      Pan oedd yn ddwy oed, symudodd i Sir Fynwy, Cymru gyda'i
                      deulu, ac yna symudon nhw eto i Dorset, Lloegr, lle cafodd
                      Gething ei fagu.{" "}
                    </li>
                    <li>Ymunodd Vaughan â'r Blaid Lafur pan oedd yn 17 oed.</li>

                    <li>
                      Astudiodd y gyfraith yn Aberystwyth a daeth yn llywydd Du
                      cyntaf Undeb Cenedlaethol Myfyrwyr Cymru.
                    </li>

                    <li>
                      Wedyn, aeth i hyfforddi fel cyfreithiwr yng Nghaerdydd yn
                      2001, gyda chwmni Thompsons, cyfreithwyr yr undebau
                      llafur. Arbenigodd ar gyfraith cyflogaeth a daeth yn
                      bartner yn Thompsons yn 2007.
                    </li>

                    <li>
                      Yn 2008, pan oedd yn 34 oed, Vaughan oedd y person ifancaf
                      i fod yn Llywydd Cyngres Undebau Llafur Cymru (Wales TUC).
                      Hefyd, fe oedd y person hil gymysg cyntaf yn y rôl.
                    </li>

                    <li>
                      Daeth Vaughan yn gynghorydd dros Butetown, Caerdydd, ac yn
                      ymgeisydd Llafur Cymru dros etholaeth De Caerdydd a
                      Phenarth yn y Senedd. 
                    </li>
                    <li>
                      Ar ôl etholiad 2016, rhoddodd Carwyn Jones, y Prif
                      Weinidog ddyrchafiad i Gething i Gabinet Senedd Cymru fel
                      Ysgrifennydd y Cabinet dros Iechyd, Llesiant a Chwaraeon.
                      Wedyn cafodd y swydd enw newydd, felly nawr Gething yw’r
                      Gweinidog dros Iechyd a Gwasanaethau Cymdeithasol.
                    </li>
                    <li>
                      Ym mis Mai 2021, cafodd Gething ei benodi'n Weinidog yr
                      Economi.
                    </li>
                  </ul>
                }
              ></Person>
            }
          ></Route>

          <Route path="/index" element={<Index />}></Route>
        </Routes>
      </LanguageContext.Provider>
    </BrowserRouter>
  );
}

export default App;

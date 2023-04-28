import { useState } from "react";
import "./App.css";
import "./Components/Person/Person.css";
import { motion } from "framer-motion";

import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { LanguageContext } from "./Helper/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import theo from "./Podcasts/TheoCabango/theoEng.mp3";
import emily from "./Podcasts/Emily/emilyEng.mp3";
import domCym from "./Podcasts/DomJames/domCym.mp3";
import theoCym from "./Podcasts/TheoCabango/theoCym.mp3";
import emilyCym from "./Podcasts/Emily/emilyCym.mp3";
import Categories from "./Components/Categories/Categories";
import Notes from "./Components/Notes/Notes";
import Accessibility from "./Components/Accessibility/Accessibility";
import Info from "./Components/Info/Info";
import Quiz from "./Components/Quiz/Quiz";
import PersonQuiz from "./Components/Person/PersonQuiz";
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
import Windrush from "./Components/Resources/Windrush";
import ShirleyBassey from "./Components/Resources/ShirleyBassey";
import WilsonMonk from "./Components/Resources/WilsonMonk";
import Hans from "./Components/Resources/Hans";

function App() {
  const [lang, setLang] = useState(false);
  return (
    <BrowserRouter basename="/hanesbame">
      <ScrollToTop />
      <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />

      <LanguageContext.Provider className="App" value={{ lang, setLang }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/6to9yo" element={<SixToNine></SixToNine>}></Route>
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
            path="/Resources/CliveSullivanPortrait"
            element={<CliveSullivanPortrait bgColour={"#CFE57D"} />}
          ></Route>
          <Route
            path="/Resources/IdrisPhillips"
            element={<IdrisPhillips />}
          ></Route>
          <Route path="/Resources/Windrush" element={<Windrush />}></Route>
          <Route
            path="/Resources/LennLawrence"
            element={<LennLawrence />}
          ></Route>
          <Route
            path="/Resources/ShirleyBassey"
            element={<ShirleyBassey />}
          ></Route>
          <Route path="/Resources/WilsonMonk" element={<WilsonMonk />}></Route>
          <Route
            path="/Resources/ColinJackson"
            element={<ColinJackson />}
          ></Route>
          <Route
            path="/Resources/JoeCalzaghe"
            element={<JoeCalzaghe />}
          ></Route>
          <Route
            path="/Resources/PenrhynCastle"
            element={<PenrhynCastle />}
          ></Route>
          <Route path="/Resources/Hans" element={<Hans />}></Route>
          <Route
            path="/Diaries/FongSui"
            element={<DiaryBox></DiaryBox>}
          ></Route>
          <Route path="/RichardParksQuiz" element={<QuizData />}></Route>
          <Route path="/BettyQuiz" element={<BettyQuiz />}></Route>
          <Route
            path="/6to9yo/RichardParks"
            element={
              <Person
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
                        href="https://www.richardparks.co.uk/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Richard Parks Official Site
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.youtube.com/watch?v=5bcC14ay-iY"
                        className="resourceHref"
                        target="_blank"
                      >
                        Mind Over Mountain | Richard Parks on Mount Everest
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.youtube.com/watch?v=9COyDnyB_ag"
                        className="resourceHref"
                        target="_blank"
                      >
                        Richard Parks - Welsh Sports Hall of Fame
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.youtube.com/watch?v=0EjCPnLAn6I"
                        className="resourceHref"
                        target="_blank"
                      >
                        Richard Parks: The Big Interview
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.itv.com/news/wales/2022-03-14/the-pandemic-made-me-question-my-identity-and-my-value-to-the-world"
                        className="resourceHref"
                        target="_blank"
                      >
                        Richard Parks: ‘The pandemic made me question my
                        identity and my value to the world’
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.visitwales.com/things-do/adventure-and-activities/discover-richard-parks-epic-wales"
                        className="resourceHref"
                        target="_blank"
                      >
                        Richard Parks: Epic Welsh adventures
                      </a>
                    </li>
                  </ul>
                }
                proposedResource={
                  "Emily Pemberton to interview Richard Parks? Or Podcast "
                }
                // indivPic={char1}
                text={
                  <ul>
                    <li>Richard Parks was born in Pontypridd.</li>
                    <li>
                      His mother, Lee, was Jamaican, and his father, Derek, was
                      Welsh.
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
                    <li>Richard also won 4 caps playing for Wales.</li>
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
                      o Jamaica, Lee, a thad o Gymru, Derek Parks.{" "}
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
                      bob Ochr yn Ariannin yn 2001.{" "}
                    </li>
                    <li>Enillodd Richard 4 cap i Gymru hefyd. </li>
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
                  "https://www.richardparks.co.uk/files/7715/4383/2077/Richard_banner_mobile.png"
                }
                backText={`Through his incredible achievements – as a professional rugby player and as an extreme athlete – Richard Parks proved that despite setbacks and frustrations, we are all capable of turning our skills and abilities to other things.  Because of his never-give-up attitude and determination to succeed at something new, Richard is an inspirational figure to many – both in Wales and beyond.   `}
                slugText={"Rugby player and extreme athlete."}
                backWelshText={
                  "Trwy ei gyflawniadau anhygoel – fel chwaraewr rygbi proffesiynol ac fel athletwr eithafol – mae Richard Parks wedi profi, er gwaethaf anawsterau a rhwystredigaethau, ein bod i gyd yn gallu troi ein sgiliau a’n galluoedd i wneud pethau eraill.  Oherwydd yr agwedd hon o beidio byth â rhoi fyny a’r penderfynoldeb i lwyddo gyda rhywbeth newydd, mae Richard yn ysbrydoliaeth i gymaint o bobl – yng Nghymru a thu hwnt."
                }
                welshSlugText={"Chwaraewr rygbi ac athletwr eithafol."}
                resource={api.slice(0, 1)}
              ></Person>
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
              />
            }
          ></Route>
          <Route
            path="/3to6yo/AbramWood"
            element={
              <AnimCard
                indivName={"Abram Wood"}
                sourceVid="https://www.youtube.com/embed/KA_5dmVTopI"
              />
            }
          ></Route>
          <Route
            path="/3to6yo/BettyCampbell"
            element={
              <AnimCard
                indivName={"Betty Campbell"}
                sourceVid="https://www.youtube.com/embed/gikb903GUqM"
              />
            }
          ></Route>
          <Route
            path="/3to6yo/GaneshSubrahamanyan"
            element={
              <AnimCard
                indivName={"Dr Ganesh Subrahamanyan"}
                sourceVid="https://www.youtube.com/embed/qlN9J-DsxYM"
              />
            }
          ></Route>
          <Route
            path="/3to6yo/VernesterCyril"
            element={
              <AnimCard
                indivName={"Vernester Cyril"}
                sourceVid="https://www.youtube.com/embed/NEu7ctn7-8g"
              />
            }
          ></Route>

          <Route
            path="/12to16yo/NigelWalker"
            element={
              <Person
                resource={twelveApi.slice(1, 2)}
                indivName={"Nigel Walker"}
                indivNameCym={"Nigel Walker"}
                indivPic={
                  "https://i.dailymail.co.uk/1s/2019/04/15/23/12319446-0-image-m-55_1555369161657.jpg"
                }
                text={
                  <ul>
                    <li>Nigel Walker was born in Cardiff on 15 June 1963. </li>
                    <li>
                      Nigel represented Great Britain and Northern Ireland at
                      the 1984 summer Olympics in the 110m hurdles.{" "}
                    </li>

                    <li>
                      Walker holds the fastest non-winning time for the
                      200-metre hurdles. At Cardiff in 1991, he ran 22.77
                      seconds.{" "}
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
                      his Five Nations debut against Ireland. Walker went on to
                      represent Wales 17 times scoring 12 tries – making his
                      final appearance for Wales against England on 21 February
                      1998. During his rugby career, Nigel also played for the
                      Barbarians.{" "}
                    </li>

                    <li>
                      In 2001, Nigel was appointed Head of Sport at BBC Wales.
                      In 2010, Walker became the National Director at the
                      English Institute of Sport. In 2018, celebrating Black
                      History Month in the UK, Walker was included in a list of
                      “100 Brilliant, Black and Welsh people”.{" "}
                    </li>

                    <li>
                      In Autumn 2021, Nigel left his role at the EIS to take up
                      the position of Performance Director at the Welsh Rugby
                      Union. Nigel Walker has also sat on the UK Sport Board
                      where he chaired its major events Panel.{" "}
                    </li>
                  </ul>
                }
                backLContent={"Factfile and discussion topics."}
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
                      rhedodd hi mewn 22.77 eiliad.{" "}
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
                      Yn 2010, gwnaed Walker yn Gyfarwyddwr Cenedlaethol yr
                      English Institute of Sport. Yn 2018, wrth ddathlu Mis
                      Hanes Pobl Ddu yn y DU, cafodd Walker ei gynnwys mewn
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
                welshSlugText={
                  "Athletwr, chwaraewr rygbi ac un sydd wedi cyflawni cryn dipyn."
                }
                slugText={"Athlete, rugby player and high achiever."}
                resources={api}
              ></Person>
            }
          ></Route>
          <Route
            path="/12to16yo/GlennWebbe"
            element={
              <Person
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.bbc.co.uk/news/uk-wales-64717463"
                        className="resourceHref"
                        target="_blank"
                      >
                        Glenn Webbe: Black Welsh rugby star humbled by
                        documentary
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.bbc.co.uk/programmes/m001jhdl"
                        className="resourceHref"
                        target="_blank"
                      >
                        VIDEO - Glenn Webbe - Legends of Welsh Sport
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
                slugText={"Wales’ first black icon."}
                welshSlugText={"Eicon du cyntaf Cymru."}
                backWelshText={
                  "Gobeithio bod yr hiliaeth a brofodd Glenn a’r disgwyliad y byddai’n ‘parhau i chwarae’ er gwaetha’r ffaith ei fod wedi dioddef anaf i’w ben, bellach yn wirioneddol yn y gorffennol."
                }
                backLContent={
                  <>
                    <audio controls>
                      <source src={theo} type="audio/mpeg" />
                    </audio>
                    <p>Podcast: Theo Cabango and Mel Owen in discussion.</p>
                  </>
                }
                backLContentCym={
                  <audio controls>
                    <source src={theoCym} type="audio/mpeg" />
                  </audio>
                }
              ></Person>
            }
          ></Route>
          <Route
            path="/9to12yo/PenrhynCastle"
            element={
              <Person
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.nationaltrust.org.uk/visit/wales/penrhyn-castle-and-garden/history-of-penrhyn-castle-and-garden"
                        className="resourceHref"
                        target="_blank"
                      >
                        History of Penrhyn Castle - National Trust
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.blackhistorymonth.org.uk/article/section/history-of-slavery/the-welsh-slave-owner-and-anti-abolitionist-mp-richard-pennant/"
                        className="resourceHref"
                        target="_blank"
                      >
                        The Welsh slave owner and anti-abolitionist MP Richard
                        Pennant - Black History Month
                      </a>
                    </li>
                  </ul>
                }
                indivName={"Penrhyn Castle"}
                indivNameCym={"Castell Penrhyn"}
                proposedResource={
                  <a href="https://www.dev.addysgop.co.uk/hanesbame/Resources/PenrhynCastle">
                    Should people refuse to visit Penrhyn Castle?
                  </a>
                }
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
                      When Richard Pennant became 1st baron of Penrhyn, they
                      were controlling their Jamaican properties by letter.
                    </li>

                    <li>
                      The estate grew and the numbers of slaves increased.
                    </li>

                    <li>
                      By 1805, Richard Pennant owned nearly 1,000 enslaved
                      people across his 4 plantations in Jamaica.
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
                      Erbyn 1805, roedd Richard Pennant yn berchen ar bron 1,000
                      o bobl oedd yn gaethweision ar draws ei 4 planhigfa yn
                      Jamaica.{" "}
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
                backText={`The Pennant family received in today’s money £1.3 million for freeing 764 enslaved people in Jamacia.  It is money forever tarnished by the suffering caused by slavery.`}
                slugText={
                  "The impressive castle and it's links to the slave trade."
                }
                welshSlugText={
                  "Y castell trawiadol a’i gysylltiadau â chaethwasiaeth."
                }
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
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.theguardian.com/society/2019/apr/02/hans-lichtenstein-obituary"
                        className="resourceHref"
                        target="_blank"
                      >
                        Hans Lichtenstein Obituary
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.countytimes.co.uk/news/17369270.llandrindod-wells-tributes-paid-inspirational-heroic-family-doctor-hans-lichtenstein/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Tributes paid to 'inspirational', 'heroic' family doctor
                        Hans Lichtenstein
                      </a>
                    </li>
                  </ul>
                }
                indivName={"Hans Lichtenstein"}
                indivNameCym={"Hans Lichtenstein"}
                proposedResource={
                  <a href="https://www.dev.addysgop.co.uk/hanesbame/Resources/Hans">
                    Hans Lichtenstein monologue
                  </a>
                }
                indivPic={
                  "https://i.guim.co.uk/img/media/7c810c258320be244e1d7d4d721e8a171409c677/180_145_1240_744/master/1240.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=d36ac08cc3c44a21c37572bfc483bb4c"
                }
                resource={nineApi.slice(1, 2)}
                text={
                  <>
                    <ul>
                      <li>
                        Hitler was appointed chancellor of Germany on 30 January
                        1933.
                      </li>
                      <li>
                        Hitler hated ethnic minorities, including the Jews, and
                        Jews were treated very badly in Germany.
                      </li>

                      <li>
                        During Kristallnacht in 1938, many Jewish shops and
                        businesses were destroyed and looted.
                      </li>

                      <li>
                        One of the shops that was destroyed belonged to Ruth and
                        Walter Lichtenstein.
                      </li>

                      <li>
                        During Hitler’s time in power, brave people joined
                        together to rescue Jewish children. This rescue
                        operation was called ‘Kindertransport’ (Children’s
                        Transport).
                      </li>
                      <li>
                        One of the children that was rescued was Ruth and
                        Walter’s son, Hans Lichtenstein!
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
                    <p>
                      Dr Hans Lichtenstein lived a long, hard life. After moving
                      to Britain, he fulfilled his dream of becoming a doctor.{" "}
                    </p>
                  </>
                }
                welshText={
                  <ul>
                    <li>
                      Ar 30 Ionawr 1933, penodwyd Adolf Hitler yn ganghellor
                      newydd yr Almaen. Roedd Hitler yn casáu’r Iddewon ac yn
                      fuan iawn roeddent yn cael eu herlid, eu poenydio a’u
                      gormesu.{" "}
                    </li>
                    <li>
                      Yn ystod ‘Kristallnacht’ (‘Noson Grisial’) ar 9-10
                      Tachwedd 1938, dinistriwyd llawer o siopau a busnesau
                      Iddewig.
                    </li>
                    <li>
                      Ar ôl Kristallnacht, daeth rhai pobl ynghyd i achub plant
                      Iddewig o’r Almaen ac ardaloedd eraill oedd wedi eu rheoli
                      gan y Natsïaid. Galwyd yr ymgais hon i’w hachub yn
                      ‘Kindertransport’ (Trafnidiaeth Plant). Roedd Hans
                      Lichtenstein ymysg y rheiny gafodd eu hachub.{" "}
                    </li>
                    <li>
                      Ar ôl cyrraedd Prydain, cafodd Hans, oedd yn 12 oed, ei
                      addysgu yn Ysgol fawreddog Gordonstoun.{" "}
                    </li>
                    <li>
                      Astudiodd Hans feddygaeth yng Ngholeg y Drindod,
                      Caergrawnt, a chwblhau ei hyfforddiant meddygol yn ysbyty
                      Guy’s yn Llundain.{" "}
                    </li>
                    <li>
                      Roedd yn rhaid i Hans wneud Gwasanaeth Milwrol (ymuno â’r
                      fyddin, y llynges neu’r llu awyr) aeth ag ef i Malaya (sef
                      Malaysia erbyn hyn), lle’r oedd, yn ystod yr argyfwng
                      cenedlaethol, yn swyddog meddygol ar gyfer yr SAS oedd yn
                      cael eu hedmygu’n fawr.{" "}
                    </li>
                    <li>
                      Ym Malaysia, helpodd Hans i sefydlu’r gofal meddygol
                      cyntaf ar gyfer pobl frodorol Malaysia, yr Orang
                      Asli.  Cyfarfu â Beryl Rush hefyd, sef nyrs o Brydain, ac
                      fe briododd y ddau yn Kuala Lumpur ym 1956.{" "}
                    </li>
                    <li>
                      Ymgartrefodd Hans a Beryl yn Llandrindod yn y pen draw,
                      lle gweithiodd Hans fel meddyg teulu uchel iawn ei barch
                      am 32 o flynyddoedd.{" "}
                    </li>
                    <li>
                      Yn ystod ei ymddeoliad, helpodd Hans i sefydlu
                      Ymddiriedolaeth Bracken yn Llandrindod, sydd yn cynnig
                      cymorth, cwnsela a therapïau cyflenwol canser.{" "}
                    </li>
                    <li>
                      Yn hwyrach yn ei fywyd, dechreuodd Hans redeg marathonau a
                      pharagleidio, ac yn ei 70au hwyr, gellid ei weld yn hedfan
                      uwchlaw Cwm Elan ger ei gartref.{" "}
                    </li>
                    <li>
                      Bu farw Dr Hans Lichtenstein ym Mawrth 2019 yn 91 oed.{" "}
                    </li>
                  </ul>
                }
                backText={`Dr Hans Lichtenstein lived a remarkable life.  Being Jewish in Hitler’s Germany, Hans faced violence and intimidation.  On moving to Britain on the Kindertransport, Hans worked hard and fulfilled his dream of becoming a doctor – but he never stopped having new interests. `}
                slugText={"The boy who fled from Nazi Germany."}
                welshSlugText={"Y bachgen wnaeth ffoi o’r Almaen Natsïaidd."}
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
                youtubeVid={"https://www.youtube.com/embed/SJttEt3idYI"}
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.foundationforjewishheritage.com/merthyr-tydfil"
                        className="resourceHref"
                        target="_blank"
                      >
                        Merthyr Synagogue - Foundation for Jewish Heritage
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.youtube.com/watch?v=5bcC14ay-iY"
                        className="resourceHref"
                      >
                        Merthyr Synagogue History - Welsh Jewish Heritage Centre
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://ahfund.org.uk/projects/former-merthyr-tydfil-synagogue/"
                        className="resourceHref"
                      >
                        Saving and Restoring the Oldest Surviving Synagogue in
                        Wales
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
                      A synagogue is a building were Jewish people go to pray.{" "}
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
                      history and the many people who live in Wales.
                    </li>
                  </ul>
                }
                welshText={
                  <ul className="welshUl">
                    <li>Adeiladwyd Synagog Merthyr ym 1877.</li>
                    <li>
                      Cafodd ei ddylunio gan Charles Taylor, pensaer, oedd yn
                      byw’n lleol.
                    </li>
                    <li>
                      Symudodd llawer o bobl Iddewig i Ferthyr Tudful pan
                      agorodd nifer o ffatrïoedd yno a datblygodd fel tref fwyaf
                      Cymru.
                    </li>
                    <li>
                      Ffurfiodd y bobl Iddewig gynulleidfa, grŵp i weddïo gyda’i
                      gilydd, ym 1848.
                    </li>
                    <li>
                      Pan oedd llai o waith yn y ffatrïoedd, gadawodd llawer o
                      Iddewon Merthyr i chwilio swyddi rhywle arall.
                    </li>
                    <li>
                      Mwy na thebyg mai Synagog Merthyr yw’r unig synagog yn y
                      byd sydd â draig Cymru arni.
                    </li>
                    <li>
                      Ym 1960, cafodd y synagog ei harlunio gan yr arlunydd
                      enwog, L. S. Lowry. Gwerthodd y darlun am £277,000 ym
                      Mawrth 2022.
                    </li>
                    <li>
                      Yn 2019, prynwyd yr adeilad gan y Sefydliad Treftadaeth
                      Iddewig.
                    </li>
                    <li>
                      Yn 2021, roedd yn rhaid iddynt atgyweirio’r adeilad i’w
                      wneud yn ddiogel ac i’w ddiogelu rhag y tywydd.
                    </li>
                    <li>
                      Gobaith y Sefydliad Treftadaeth Iddewig yw agor yr adeilad
                      fel Canolfan Traftadaeth Iddewig erbyn 2025.
                    </li>
                    <li>
                      Cred Michael Mail o’r Sefydliad Treftadaeth Iddewig fod yr
                      adeilad yn bwysig iawn am mai dyma’r ‘adeilad Iddewig
                      pwrpasol hynaf sydd wedi goroesi yng Nghymru’.
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
                welshSlugText={
                  "Yr adeilad Iddewig pwrpasol hynaf sydd wedi goroesi yng Nghymru."
                }
              ></PersonYTVid>
            }
          ></Route>

          <Route
            path="/6to9yo/LennLawrence"
            element={
              <Person
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.bbc.co.uk/news/uk-wales-44525608"
                        className="resourceHref"
                        target="_blank"
                      >
                        Windrush: How Lenn Lawrence stopped Swansea from
                        flooding
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.peoplescollection.wales/items/965656"
                        className="resourceHref"
                        target="_blank"
                      >
                        An Interview with Lenn Lawrence
                      </a>
                    </li>
                  </ul>
                }
                indivName={"Lenn Lawrence"}
                indivNameCym={"Lenn Lawrence"}
                proposedResource={
                  <a href="https://www.dev.addysgop.co.uk/hanesbame/Resources/LennLawrence">
                    Newspaper article{" "}
                  </a>
                }
                slugText={"The man who stopped Swansea from drowning."}
                resource={api.slice(3, 4)}
                indivPic={
                  "https://blackhistorywales.org.uk/wp-content/uploads/2020/07/Screenshot-2020-07-09-at-07.56.04.png"
                }
                text={
                  <ul>
                    <li>
                      Lenn Lawrence came to Wales from Jamaica when he was 24 as
                      a part of the Windrush generation.
                    </li>
                    <li>
                      He had to take poorly paid jobs working as a builder to
                      begin with and specialised in concrete.
                    </li>
                    <li>
                      One day when he was working in Swansea a hole in the wall
                      was in danger of flooding from a hole in one of the lock
                      gates at the docks. He had to work hard to fill it with
                      concrete in a race against the tide!
                    </li>
                    <li>
                      Lenn helped build the M4 motorway, the deep-water dock for
                      Marple ridgeway, Port Talbot town centre, the Pontdrefen
                      bridge and many more sites.
                    </li>
                    <li>
                      He was first black carpenter and foreman for the British
                      Steel Corporation in Neath Port Talbot.
                    </li>
                    <li>
                      Being an ethnic minority in 1962 in Wales was difficult
                      and this led Lenn and other members of the community to
                      start the Caribbean Friendship Society. Together they met
                      with the police, councillors and other agencies.
                    </li>
                    <li>
                      Although the Caribbean Friendship Society didn't have much
                      money, Lenn and other members used their own money to set
                      up meetings in each other’s houses, in a shed at the back
                      of Corporation Road or at the Talbot pub.{" "}
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
                    <li>
                      Though determination and a belief in treating people
                      fairly, Lenn Lawrence became widely respected as both
                      hardworking and for promoting the rights of people.
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
                indivName={"Teleri Gray"}
                indivNameCym={"Teleri Gray"}
                proposedResource={
                  "Footage from tv programmes re: Romani people."
                }
                slugText={"Romani Storyteller."}
                resource={api.slice(4, 5)}
                indivPic={
                  "https://live.staticflickr.com/655/22408268685_a9ec39be94_b.jpg"
                }
                youtubeVid={"https://www.youtube.com/embed/ixW54ttBcGw"}
                text={
                  <>
                    <ul>
                      <li>
                        Teleri Gray is a Romani storyteller and she is helping
                        people to remember and preserve the Traveller’s history.{" "}
                      </li>
                      <li>
                        Teleri talks about what life is like for Traveller
                        children and their families today.
                      </li>

                      <li>
                        Life can be very hard for Romani’s. They are not always
                        welcomed in communities because there are a lot of false
                        things said about them and people do not understand the
                        way they choose to live.{" "}
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
                    </p>
                    <p>
                      {" "}
                      Memories and documents are now being collected to preserve
                      their culture.
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
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://chineseinwales.org.uk/our-community/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Chinese In Wales Organisation
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.huckmag.com/art-and-culture/growing-up-behind-the-counter-of-a-chinese-takeaway-in-wales/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Growing up behind the counter of a Chinese takeaway in
                        Wales
                      </a>
                    </li>
                  </ul>
                }
                proposedResource={
                  <a href="https://www.dev.addysgop.co.uk/hanesbame/Diaries/FongSui">
                    Imagined diary entries{" "}
                  </a>
                } // quizButtonText={"Diary Entries"}
                buttonLink={"/Diaries/FongSui"}
                indivName={"Fong Sui"}
                indivNameCym={"Fong Sui"}
                slugText={"First Generation Chinese in Wales."}
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
                        restaurants whilst others opened their own launderettes.
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
                      <li>Fong Sui is now a grandmother of seven children.</li>
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
              ></Person>
            }
          ></Route>
          <Route
            path="/6to9yo/ArandoraStar"
            element={
              <Person
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.liverpoolmuseums.org.uk/stories/maritime-tales-tragedy-of-arandora-star"
                        className="resourceHref"
                        target="_blank"
                      >
                        The Tragedy of the Arandora Star - National Museums
                        Liverpool
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.warthmillsproject.com/stories/tragedy-of-the-arandora-star/"
                        className="resourceHref"
                        target="_blank"
                      >
                        The Tragedy of the SS Arandora Star - The Warth Mills
                        Project
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.cardiffcathedral.org.uk/remembering-the-arandora-star/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Remembering the Arandora Star - Cardiff Cathedral
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://arandorastar.online/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Arandora Star Online
                      </a>
                    </li>
                  </ul>
                }
                proposedResource={"Interview  with Nick Servini? "}
                indivName={"The Arandora Star"}
                indivNameCym={"The Arandora Star"}
                slugText={
                  "The ship sunk by a German torpedo killing Welsh Italians."
                }
                resource={api.slice(6, 7)}
                indivPic={
                  "https://upload.wikimedia.org/wikipedia/commons/7/72/Arandora_Star_1940.jpg"
                }
                text={
                  <ul>
                    <li>The SS Arandora Star was built to be a cruise ship.</li>
                    <li>
                      During World War Two, she was painted grey and guns were
                      added. The Arandora Star was then used to carry soldiers.
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
                      were 1678 men on board but the ship should only have taken
                      500!{" "}
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
                      The ship sank within minutes and more than 800 lives were
                      lost.
                    </li>

                    <li>53 Welsh Italians died.</li>

                    <li>
                      Lifeboats that could have been used to rescue some men
                      were blocked by heavy wire so people couldn’t get at them.
                      The barbed wire placed on deck also caused major problems.{" "}
                    </li>

                    <li>This was a dreadful tragedy.</li>
                  </ul>
                }
              ></Person>
            }
          ></Route>
          <Route
            path="/6to9yo/320Battalion"
            element={
              <Person
                indivName={"320th Barrage Balloon Battalion "}
                indivNameCym={"320th Barrage Balloon Battalion "}
                proposedResource={
                  <a href="https://www.dev.addysgop.co.uk/hanesbame/Resources/WilsonMonk">
                    A letter from Jessie Prior..{" "}
                  </a>
                }
                slugText={"A unit of the 621 men from the US Army."}
                resource={api.slice(7, 8)}
                indivPic={
                  "https://images.squarespace-cdn.com/content/v1/55e4bcf2e4b01d0dc78c9848/1441893157537-7AL21O6U939POF0AYWGB/image-asset.jpeg"
                }
                text={
                  <ul>
                    <li>
                      During World War Two, the 320th Barrage Balloon Battalion,
                      a unit of the 621 men from the US Army, arrived in
                      Pontypool.
                    </li>
                    <li>The men were all black African Americans.</li>
                    <li>
                      They were part of the 130,000 black US troops stationed
                      all over Britain who were helping fight against Germany in
                      the war.
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
                      These men found Wales a very different country to the one
                      they had come from and were glad to have a warm welcome.
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
                      Before joining the army, he had worked as many jobs as he
                      could squeeze into a day. He mopped floors, delivered
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
                    <li>
                      The people of Wales taught Monk that not everyone treated
                      black people badly.
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
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://cardiffyouthcouncil.com/dame-shirley-bassey/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Shirley Bassey - Cardiff Youth Council
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.britannica.com/biography/Shirley-Bassey"
                        className="resourceHref"
                        target="_blank"
                      >
                        Shirley Bassey - Encyclopedia Britannica
                      </a>
                    </li>
                  </ul>
                }
                indivName={"Dame Shirley Bassey"}
                indivNameCym={"Y Fonesig Shirley Bassey"}
                proposedResource={
                  <a href="https://www.dev.addysgop.co.uk/hanesbame/Resources/ShirleyBassey">
                    A night to remember!{" "}
                  </a>
                }
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
                      <li>She was born in Tiger Bay, Cardiff.</li>
                      <li>
                        Her father was Nigerian and her mother was from Teeside.
                      </li>
                      <li>She loved singing as a child.</li>
                      <li>
                        After leaving school at 15 she worked in a factory.
                      </li>
                      <li>
                        She continued to sing in clubs in the evenings and
                        became well-known after in a Christmas show in London in
                        1955.
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
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://senedd.wales/visit/exhibitions/past-exhibitions/windrush-cymru-celebrating-the-lives-and-journeys-of-a-generation/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Windrush Cymru: celebrating the lives and journeys of a
                        generation
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://racecouncilcymru.org.uk/windrush-generation-wales"
                        className="resourceHref"
                        target="_blank"
                      >
                        Windrush Generation Wales - Race Council Cymru
                      </a>
                    </li>

                    <li className="linkLi">
                      <a
                        href="https://www.iwa.wales/agenda/2018/06/windrush-and-wales/?gclid=Cj0KCQjw2cWgBhDYARIsALggUhrSm8AiB_KvwqEG5ooZXtOM9uvG6JpyPwmZZDN68vShQiwGG_wUoQQaAkgzEALw_wcB"
                        className="resourceHref"
                        target="_blank"
                      >
                        Windrush and Wales - Institute of Welsh Affairs
                      </a>
                    </li>
                  </ul>
                }
                indivName={"The Windrush Generation "}
                indivNameCym={"The Windrush Generation "}
                proposedResource={
                  <a href="https://www.dev.addysgop.co.uk/hanesbame/Resources/Windrush">
                    Who are the Windrush Generation?
                  </a>
                }
                slugText={"Not developed yet"}
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
                      boat bringing them to Britain was called the MV Empire
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
                      Over the following decades, thousands more Commonwealth
                      people came to Britain and many of them came to live in
                      Wales.{" "}
                    </li>
                    <li>
                      They often encountered found that people treated them
                      differently and were unkind to them but the Windrush
                      Generation made a valuable and lasting contribution to
                      life in Wales.{" "}
                    </li>
                    <li>
                      Caribbean migrants have become a vital part of Welsh
                      society and have transformed important aspects of Welsh
                      life.{" "}
                    </li>
                    <li>
                      In 2017 there was a scandal when hundreds of the Windrush
                      generation were told they would have to leave the country
                      because they didn’t have proof they were British subjects.{" "}
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
                quizButStyle={"dontShowQuizBut"}
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.bbc.co.uk/programmes/p08t59ty"
                        className="resourceHref"
                        target="_blank"
                      >
                        Wales's Black Miners
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.visionfountain.com/2019/10/04/idris-phillips-portrait-at-national-coal-mining-museum/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Idris Phillips’ Portrait at National Coal Mining Museum
                      </a>
                    </li>
                  </ul>
                }
                indivName={"Idris Phillips"}
                indivNameCym={"Idris Phillips"}
                proposedResource={
                  <a href="https://www.dev.addysgop.co.uk/hanesbame/Resources/IdrisPhillips">
                    Imaginary Biography
                  </a>
                }
                slugText={"Black gold."}
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
                    <li>Idris had 10 brothers and sisters. </li>
                    <li>
                      He and his family suffered racism in the small village
                      where they lived and people treated them differently
                      because of the colour of their skin.{" "}
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
                  </ul>
                }
              ></Person>
            }
          ></Route>
          <Route
            path="/9to12yo/ColinJackson"
            element={
              <Person
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://olympics.com/en/athletes/colin-jackson"
                        className="resourceHref"
                        target="_blank"
                      >
                        Colin Jackson Olymic Biography
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.welshathletics.org/en/page/colin-jackson"
                        className="resourceHref"
                        target="_blank"
                      >
                        Colin Jackson - Welsh Athletics
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.theguardian.com/world/2017/sep/02/colin-jackson-phenomenal-athlete-who-came-out-at-50"
                        className="resourceHref"
                        target="_blank"
                      >
                        Colin Jackson: phenomenal athlete who came out at 50
                      </a>
                    </li>
                  </ul>
                }
                indivName={"Colin Jackson"}
                indivNameCym={"Colin Jackson"}
                proposedResource={
                  <a href="https://www.dev.addysgop.co.uk/hanesbame/Resources/ColinJackson">
                    Imagined interview{" "}
                  </a>
                }
                slugText={"The Olympic medal winner."}
                resource={nineApi.slice(3, 4)}
                indivPic={
                  "https://ichef.bbci.co.uk/onesport/cps/624/cpsprodpb/2ED2/production/_95868911_gettyimages-1852091.jpg"
                }
                text={
                  <ul>
                    <li>Colin Jackson was born in Cardiff.</li>
                    <li>
                      Colin was a gifted sportsman, whose was very talented in
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
              ></Person>
            }
          ></Route>
          <Route
            path="/9to12yo/IrisWilliams"
            element={
              <Person
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://blackhistorywales.org.uk/resources/resource/iris-williams-obe/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Iris Williams - Black History Wales{" "}
                      </a>
                    </li>
                  </ul>
                }
                indivName={"Iris Williams"}
                indivNameCym={"Iris Williams"}
                proposedResource={
                  "Footage of TV interview of Iris with Matthew Rhys."
                }
                slugText={"The jazz legend from Wales."}
                resource={nineApi.slice(4, 5)}
                indivPic={
                  "https://i2-prod.walesonline.co.uk/incoming/article1781243.ece/ALTERNATES/s615/iris-williams-61348596.jpg"
                }
                text={
                  <ul>
                    <li>
                      Iris Williams was born on 20 April 1944. She was born in
                      Rhydyfelin and brought up in a Children’s Home in
                      Tonyrefail.{" "}
                    </li>
                    <li>
                      Her father was a black American GI posted to Wales during
                      World War Two and her mother, whom he met at a dance hall
                      in Pontypridd, gave her up for adoption.
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
              ></Person>
            }
          ></Route>
          <Route
            path="/12to16yo/PaulRobeson"
            element={
              <Person
                indivName={"Paul Robeson"}
                indivNameCym={"Paul Robeson"}
                backLContent={
                  <>
                    <audio controls>
                      <source src={emily} type="audio/mpeg" />
                    </audio>
                    <p>
                      Podcast: Emily Pemberton and Mel Owen discussing Paul
                      Robesons's life.
                    </p>
                  </>
                }
                backLContentCym={
                  <audio controls>
                    <source src={emilyCym} type="audio/mpeg" />
                  </audio>
                }
                slugText={"The American singer who joined the miners strike."}
                resource={nineApi.slice(5, 6)}
                indivPic={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/%22Paul_Robeson%2C_world_famous_Negro_baritone%2C_leading_Moore_Shipyard_%28Oakland%2C_CA%29_workers_in_singing_the_Star_Spangled_Ba_-_NARA_-_535874.jpg/640px-%22Paul_Robeson%2C_world_famous_Negro_baritone%2C_leading_Moore_Shipyard_%28Oakland%2C_CA%29_workers_in_singing_the_Star_Spangled_Ba_-_NARA_-_535874.jpg"
                }
                text={
                  <ul>
                    <li>
                      Paul Robeson was born on 9 April 1898 in Princetown, New
                      Jersey, the US.{" "}
                    </li>
                    <li>
                      A natural athlete and American footballer; Paul also had
                      an impressive singing voice. He became a bass-baritone
                      concert artist, stage and film actor.{" "}
                    </li>
                    <li>
                      Paul is also famed for his political activism. He moved to
                      the UK to escape racism in the US, and developed strong
                      links to Wales after meeting Welsh miners in London who
                      were petitioning the government for help. He led a Welsh
                      choir in a rendition and organised donations to fund their
                      return to south Wales on a train, complete with food and
                      clothing.{" "}
                    </li>
                    <li>
                      After the Gresford Colliery Disaster, Paul contributed
                      proceeds of his concert in Caernarfon to the fund for the
                      orphans and children of the dead. It was an important
                      moral and political gesture.{" "}
                    </li>
                    <li>
                      Paul joined the miners on hunger marches in 1927 and 1928.
                      In 1940, he starred in the movie Proud Valley – about a
                      black miner who moves to the Valleys.{" "}
                    </li>
                    <li>
                      Paul said of Wales: ‘[It was there] I first understood the
                      struggles of white and negro together – when I went down
                      into the coal mine in the Rhondda Valley, [and] lived
                      amongst them’.{" "}
                    </li>
                    <li>
                      In 2018, Hwn yw fy Mrawd: Paul Robeson - Arwr i Gymru,
                      Arwr i’r Byd, a biopic depicting his life was performed at
                      the National Eisteddfod in Cardiff Bay. The show was 60
                      years to the day since Paul addressed the Eisteddfod
                      festival in Ebbw Vale.
                    </li>
                    <li>
                      On 23 January 1976, Paul Robeson died in Philadelphia, the
                      US.{" "}
                    </li>
                    <li>
                      Paul Robeson was blessed with a wonderful singing voice.
                      He was also fiercely moral – and believed in treating
                      people, whatever their creed and skin colour, with respect
                      and fairness.{" "}
                    </li>
                  </ul>
                }
              ></Person>
            }
          ></Route>
          <Route
            path="/9to12yo/Louisa"
            element={
              <Person
                indivName={"Louisa BB Morgan"}
                indivNameCym={"Louisa BB Morgan"}
                proposedResource={"Factfile with discussion points."}
                slugText={"The lady who's lived all around the world."}
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
                      Returning to Nigeria in 1960, Louisa received a Catholic
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
                      ‘It binds me to my beliefs…It’s helped shape my life. It
                      continues to make me what I am today’.{" "}
                    </li>

                    <li>
                      Louisa has lived an interesting life – believing that a
                      person can grow and improve through hard work, travelling
                      the world and having strong faith.{" "}
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
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.africansinyorkshireproject.com/clive-sullivan.html"
                        className="resourceHref"
                        target="_blank"
                      >
                        Clive Sullivan - Britain's First Black Rugby Captain
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.youtube.com/watch?v=0Z9hvtk3wbc"
                        className="resourceHref"
                        target="_blank"
                      >
                        VIDEO - The Story of the RLWC1972 Final and the Iconic
                        Clive Sullivan
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.hullfc.com/club/history-stats/hall-of-fame/clive-sullivan"
                        className="resourceHref"
                        target="_blank"
                      >
                        Hall of Fame - Hull FC
                      </a>
                    </li>
                  </ul>
                }
                indivName={"Clive Sullivan"}
                indivNameCym={"Clive Sullivan"}
                proposedResource={
                  <a href="https://www.dev.addysgop.co.uk/hanesbame/Resources/CliveSullivanPortrait">
                    Portrait of Clive Sullivan Worksheet
                  </a>
                }
                slugText={"The rugby league legend."}
                resource={nineApi.slice(7, 8)}
                indivPic={
                  "https://e2.365dm.com/20/10/2048x1152/skysports-anthony-sullivan_5116431.jpg"
                }
                text={
                  <ul>
                    <li>Clive Sullivan was born in Splott, Cardiff.</li>
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
                      World Cup that year they become world champions!{" "}
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
              ></Person>
            }
          ></Route>
          <Route
            path="/9to12yo/JohnYstumllyn"
            element={
              <PersonYTVid
                youtubeVid={"https://www.youtube.com/embed/96yE8N_f35o"}
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://friendsoffriendlesschurches.org.uk/story/john-ystumllyn/"
                        className="resourceHref"
                        target="_blank"
                      >
                        John Ystumllyn: From Africa to Ynyscynhaearn
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://cadw.gov.wales/learn/wales-rich-and-diverse-heritage/creative-responses/john-ystumllyn-c1738-1786"
                        className="resourceHref"
                        target="_blank"
                      >
                        John Ystumllyn - Cadw
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.theguardian.com/uk-news/2021/oct/21/new-rose-named-after-one-of-britains-first-known-black-gardeners-john-ystumllyn"
                        className="resourceHref"
                        target="_blank"
                      >
                        New rose named after one of UK’s first documented black
                        gardeners
                      </a>
                    </li>
                  </ul>
                }
                indivName={"John Ystumllyn"}
                indivNameCym={"John Ystumllyn"}
                slugText={"The 18th century slave who became a gardener."}
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
                      This may mean that he came from the West Africa or
                      the West Indies.
                    </li>

                    <li>
                      Once in Wales, John came to live with the Wynn family as a
                      servant at their Ystumllyn estate in Criccieth.
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
                      Recently, Zehra Zaidi, the founder of We Too Built
                      Britain, approached the Chelsea flower show winner
                      Harkness Roses with the idea of creating a rose named
                      after John Ystumllyn. The beautiful rose is yellow,
                      symbolising friendship.{" "}
                    </li>
                    <li>
                      His grave at St Cynhaearn's Church, Ynyscynhaearn, was
                      made a Grade II listed building  in 1999.{" "}
                    </li>
                    <li>
                      It was listed "as of special interest in commemorating a
                      slave in service in Wales in the later years of the C18,
                      who must have been well enough thought of that he was
                      provided with a handsome memorial".{" "}
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
              ></PersonYTVid>
            }
          ></Route>
          <Route
            path="/9to12yo/TigerBay"
            element={
              <Person
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.tigerbay.org.uk/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Tiger Bay and the World{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.bbc.co.uk/wales/history/sites/themes/society/tiger_bay.shtml"
                        className="resourceHref"
                        target="_blank"
                      >
                        Tiger Bay - BBC Wales
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.theguardian.com/commentisfree/2017/mar/07/multiculturalism-ethnic-diversity-butetown-cardiff"
                        className="resourceHref"
                        target="_blank"
                      >
                        The town that pioneered multiculturalism
                      </a>
                    </li>
                  </ul>
                }
                indivName={"Tiger Bay"}
                indivNameCym={"Tiger Bay"}
                proposedResource={"Factfile with discussion."}
                slugText={"The bustling multi-ethnic community in Cardiff Bay."}
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
              ></Person>
            }
          ></Route>
          <Route
            path="/9to12yo/SidoliIceCream"
            element={
              <Person
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.sidolis-icecream.co.uk/about/the-sidolis-story/"
                        className="resourceHref"
                        target="_blank"
                      >
                        The Sidoli's Story
                      </a>
                    </li>
                  </ul>
                }
                indivName={"Sidoli Ice Cream"}
                indivNameCym={"Hufen Iâ Sidoli"}
                proposedResource={"Interview with family member."}
                slugText={"The story of the award-winning ice cream."}
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
              ></Person>
            }
          ></Route>
          <Route
            path="/9to12yo/IsaacBlake"
            element={
              <PersonYTVid
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.romaniarts.co.uk/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Romani Cultural and Arts Company{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://eriac.org/members/isaac-blake/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Isaac Blake profile - ERIAC
                      </a>
                    </li>
                  </ul>
                }
                indivName={"Isaac Blake"}
                youtubeVid={"https://www.youtube.com/embed/jvbI_RvP3Ic"}
                indivNameCym={"Isaac Blake"}
                slugText={"A Romani in Wales following tradition."}
                proposedResource={""}
                resource={nineApi.slice(11, 12)}
                indivPic={
                  "https://www.araart.cz/AraArt/media/static-media/21b555c9-32f8-495c-8337-3cac9a75d031@w400.png"
                }
                text={
                  <ul>
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
                      John Roberts formed The Cambrian Minstrels with his 9 sons
                      – they were the first truly Welsh Romani orchestra.
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

                    <li>
                      Isaac Blake grew up on Cardiff’s Shirenewton site – a
                      council-run collection of 55 individual pitches which has
                      about 300 residents.
                    </li>

                    <li>
                      Those living on the site were often verbally abused and
                      stereotypically judged. “Gypsy kids”, Isaac remembers,
                      were put in special classes at school regardless of their
                      ability. The children needed ‘a thick skin and low
                      expectations’.
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
                  </ul>
                }
              ></PersonYTVid>
            }
          ></Route>
          <Route
            path="/9to12yo/PattiFlynn"
            element={
              <Person
                indivName={"Patti Flynn"}
                indivNameCym={"Patti Flynn"}
                slugText={""}
                proposedResource={""}
                resource={nineApi.slice(11, 12)}
                indivPic={
                  "https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Patti_Flynn.jpg/220px-Patti_Flynn.jpg"
                }
                text={
                  <ul>
                    <li>
                      Patricia Maude Young was born in Cardiff and was the
                      youngest child of seven to Wilmott George Young and
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
              ></Person>
            }
          ></Route>
          <Route
            path="/9to12yo/PattiFlynn"
            element={
              <Person
                indivName={"Patti Flynn"}
                indivNameCym={"Patti Flynn"}
                slugText={""}
                proposedResource={""}
                resource={nineApi.slice(11, 12)}
                indivPic={
                  "https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Patti_Flynn.jpg/220px-Patti_Flynn.jpg"
                }
                text={
                  <ul>
                    <li>
                      Patricia Maude Young was born in Cardiff and was the
                      youngest child of seven to Wilmott George Young and
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
              ></Person>
            }
          ></Route>
          <Route
            path="/9to12yo/VernesterCyril"
            element={
              <Person
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://chwaraeteg.com/projects/wonderful-welsh-women/vernesta-cyril/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Vernester Cyril - Chwarae Teg
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.southwalesargus.co.uk/news/1017285.midwife-gets-national-recognition/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Midwife gets national recognition{" "}
                      </a>
                    </li>
                  </ul>
                }
                indivName={"Vernester Cyril"}
                indivNameCym={"Vernester Cyril"}
                slugText={
                  "The nurse from the Carribean who made a difference in Wales."
                }
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
              ></Person>
            }
          ></Route>
          <Route
            path="/9to12yo/DomJames"
            element={
              <Person
                indivName={"Dom James"}
                indivNameCym={"Dom James"}
                slugText={"The Welsh rapper."}
                resource={nineApi.slice(12, 13)}
                indivPic={
                  "https://ichef.bbci.co.uk/news/976/cpsprodpb/DBCD/production/_124296265_33020262_1243885189076260_6186539543915659264_n-1.jpg"
                }
                backLContent={
                  <>
                    <audio controls>
                      <source src={dom} type="audio/mpeg" />
                    </audio>
                    <p>Podcast: Dom James and Mel Owen in discussion</p>
                  </>
                }
                backLContentCym={
                  <audio controls>
                    <source src={domCym} type="audio/mpeg" />
                  </audio>
                }
                text={
                  <ul>
                    <li>Text to be inserted - podcast on next page</li>
                  </ul>
                }
              ></Person>
            }
          ></Route>
          <Route
            path="/9to12yo/JoeCalzaghe"
            element={
              <Person
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://joecalzaghe.com/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Joe Calzaghe Official Site
                      </a>
                    </li>
                  </ul>
                }
                indivName={"Joe Calzaghe"}
                indivNameCym={"Joe Calzaghe"}
                proposedResource={
                  <a href="https://www.dev.addysgop.co.uk/hanesbame/Resources/JoeCalzaghe">
                    Imagined newspaper article
                  </a>
                }
                resource={twelveApi.slice(2, 3)}
                slugText={"The undefeated boxing world champion."}
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
                      retirement from professional boxing. By doing this,
                      Calzaghe became one of only fifteen world champions to
                      retire as an undefeated world champion.
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
              ></Person>
            }
          ></Route>
          <Route
            path="/12to16yo/JasonMohammad"
            element={
              <Person
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.bbc.co.uk/programmes/b01mzk7b"
                        className="resourceHref"
                        target="_blank"
                      >
                        Jason Mohammad - BBC Radio Wales
                      </a>
                    </li>
                  </ul>
                }
                indivName={"Jason Mohammad"}
                indivNameCym={"Jason Mohammad"}
                proposedResource={"Interview with Mirain Iwerydd."}
                resource={twelveApi.slice(3, 4)}
                slugText={
                  "Newsreader, Television Presenter and Radio Presenter."
                }
                indivPic={
                  "https://i2-prod.walesonline.co.uk/incoming/article24630322.ece/ALTERNATES/s1200/0_S4C-TV-PAGES.jpg"
                }
                text={
                  <ul>
                    <li>
                      Jason is a well-known radio and television presenter for
                      the BBC, most notably for news and sports coverage.{" "}
                    </li>
                    <li>
                      Born in Cardiff to a Pakistani father and Welsh mother,
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
                      Saturday, host of the BBC sports programme, Final Score.
                      presenter of the Scrum V specials on BBC Two Wales and
                      presenter of the BBC Radio Two programme Good Morning
                      Sunday.{" "}
                    </li>

                    <li>
                      Jason was part of the BBC’s broadcasting crew at the Rio
                      2016 Summer Olympics, has covered snooker for the BBC and
                      hosted on BBC Radio Five Live. He has also been an
                      occasional presenter of Match of the Day and Match of the
                      Day 2, and has hosted some of the BBC’s live coverage of
                      the RBS Six Nations.{" "}
                    </li>

                    <li>Jason is also in great demand as a public speaker. </li>

                    <li>
                      As one of the best-known presenters in the UK Jason was
                      listed as being one of the top ten earners at the BBC in
                      2019.{" "}
                    </li>
                  </ul>
                }
              ></Person>
            }
          ></Route>
          <Route
            path="/12to16yo/KizzyCrawford"
            element={
              <Person
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="http://www.kizzymerielcrawford.com/#about"
                        className="resourceHref"
                        target="_blank"
                      >
                        Kizzy Crawford Official Site
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.bbc.co.uk/programmes/profiles/1xvLV8vfWGVwm6F641sVRdl/kizzy-crawford"
                        className="resourceHref"
                        target="_blank"
                      >
                        Kizzy Crawford - BBC Wales Horizons
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://kizzycrawford.bandcamp.com/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Kizzy Crawford - Bandcamp
                      </a>
                    </li>
                  </ul>
                }
                indivName={"Kizzy Crawford"}
                indivNameCym={"Kizzy Crawford"}
                proposedResource={"Interview of podcast with Kizzy herself?"}
                resource={twelveApi.slice(4, 5)}
                slugText={"Award-winning Welsh singer / songwriter."}
                indivPic={
                  "https://ents24.imgix.net/image/000/158/543/f362a1cbe3eb9d638603c935c57a9f81ee7bd0bf.jpg?auto=format&crop=faces&w=1920&h=1920"
                }
                text={
                  <ul>
                    <li>
                      Born in 1996 in Oxford, Kizzy grew up in Merthyr Tydfil.
                      She has Bajan heritage – her father’s family are from
                      Barbados.{" "}
                    </li>
                    <li>
                      She began writing songs at the age of thirteen. She sings
                      in both English and Welsh, using traditional and modern
                      sources.{" "}
                    </li>

                    <li>At the age of 26 Kizzy was diagnosed with autism. </li>

                    <li>Kizzy has a sister, Eädyth, who is also a singer. </li>

                    <li>
                      Kizzy won the Arts Connect Original Singer-Songwriter
                      prize in 2012 resulting in work with Amy Wadge including
                      recording her first single Starling. Her EP Temporary
                      Zone was released in December 2013.{" "}
                    </li>

                    <li>
                      Together with many radio and TV appearances in Wales
                      during 2013, Kizzy has performed live at various
                      festivals.{" "}
                    </li>

                    <li>
                      In 2014 she performed at Glastonbury on the BBC
                      Introducing stage and has since performed at several other
                      high-profile festivals.{" "}
                    </li>

                    <li>
                      Crawford performed at the Euro 16 Welsh team homecoming
                      gig at Cardiff City Football Stadium alongside the Manic
                      Street Preachers.{" "}
                    </li>

                    <li>
                      Her music was used to welcome the US President to the NATO
                      Summit in Wales.{" "}
                    </li>

                    <li>
                      In 2016, several of her compositions were selected as part
                      of the WJEC A Level Music Syllabus - her music sat in the
                      contemporary section alongside The Manics, Gruff Rhys &
                      The Super Furry Animals.{" "}
                    </li>

                    <li>
                      Kizzy was invited to perform and discuss that accolade
                      live on Woman's Hour  for BBC Radio 4.  {" "}
                    </li>

                    <li>
                      She played a supporting role as PC Emma Jones in the
                      award-winning BBC drama Keeping Faith.{" "}
                    </li>

                    <li>
                      In 2018, Crawford signed to Freestyle Records and released
                      her debut album "The Way I Dream" in 2019.{" "}
                    </li>

                    <li>
                      In November 2021, Crawford released her first
                      self-recorded/produced/mixed and debut Welsh Album "Rhydd"
                      with Sain Records.{" "}
                    </li>
                  </ul>
                }
              ></Person>
            }
          ></Route>
          <Route
            path="/12to16yo/AshleyWilliams"
            element={
              <Person
                proposedResource={"With Ben Cabango? Or with Ashley himself?"}
                indivName={"Ashley Williams"}
                indivNameCym={"Ashley Williams"}
                resource={twelveApi.slice(5, 6)}
                slugText={
                  "Former professional footballer and captain of Wales."
                }
                indivPic={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/AUT_vs._WAL_2016-10-06_%28127%29.jpg/800px-AUT_vs._WAL_2016-10-06_%28127%29.jpg?20161110161214"
                }
                text={
                  <ul>
                    <li>
                      Ashley Williams was born in Wolverhampton. He is of
                      Afro-Jamaican descent through his father and of Welsh
                      descent through his mother.{" "}
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
                      The 2010–11 season saw Swansea and Williams gain promotion
                      to the Premier League via a play-off final win at
                      Wembley. {" "}
                    </li>

                    <li>
                      Williams was named in the Championship PFA Team of the
                      Year for the second consecutive season.{" "}
                    </li>

                    <li>
                      The season also saw him equal and surpass a club record of
                      106 consecutive matches, previously jointly held by Andy
                      Legg and Gilbert Beech.{" "}
                    </li>

                    <li>
                      In 2016, Williams joined Everton on a three-year contract
                      for a £12 million transfer fee and then moved to Stoke
                      City in 2018 and Bristol City 2019.{" "}
                    </li>

                    <li>
                      The highlight of Ashley Williams’ career was captaining
                      Wales to the semi-final of UEFA Euro 2016. It was Wales'
                      first major tournament for more than half a century. Held
                      in France, Williams headed the equalising goal,
                      against Belgium in the quarter-finals as Wales eventually
                      won 3–1 to progress to the semi-finals for the first time
                      in their international football history.{" "}
                    </li>

                    <li>Williams retired in 2021 aged 36. </li>

                    <li>
                      Williams is one of Wales’ biggest footballing stars and
                      earned 86 caps for Wales and scored two goals with his
                      last cap coming in June 2019.{" "}
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
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.boxingnewsonline.net/joe-erskine-too-small-to-be-great/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Joe Erskine - Too Small to be Great
                      </a>
                    </li>
                  </ul>
                }
                indivName={"Joe Erskine"}
                indivNameCym={"Joe Erskine"}
                resource={twelveApi.slice(6, 7)}
                proposedResource={"Factfile and discussion topics."}
                slugText={
                  "Erskine was one of the most gifted British boxers of his day."
                }
                indivPic={
                  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/joe-erskine-keystone.jpg"
                }
                text={
                  <>
                    <ul>
                      <li>
                        Joseph Erskine, a boxer from the Butetown district of
                        Cardiff, was a former British and British Empire
                        heavyweight boxing champion.
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
              ></Person>
            }
          ></Route>
          <Route
            path="/12to16yo/ElizabethCampbell"
            element={
              <Person
                quizButtonText={"Try the quiz!"}
                linkQuiz={"https://dev.addysgop.co.uk/hanesbame/BettyQuiz"}
                links={
                  <ul>
                    <li className="linkLi">
                      <a
                        href="https://www.100welshwomen.wales/100-women/betty_campbell/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Betty Campbell - 100 Welsh Women{" "}
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.bbc.co.uk/programmes/profiles/1p7r3fkpsWTbQ9shCFh1QXc/betty-campbell"
                        className="resourceHref"
                        target="_blank"
                      >
                        BBC Hidden Heroines - Betty Campbell
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://cadw.gov.wales/learn/wales-rich-and-diverse-heritage/creative-responses/betty-campbell-1934-2017"
                        className="resourceHref"
                        target="_blank"
                      >
                        Cadw - Betty Campbell
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.theguardian.com/uk-news/2021/sep/29/wales-honours-betty-campbell-first-black-headteacher"
                        className="resourceHref"
                        target="_blank"
                      >
                        Wales honours Betty Campbell, country’s first black
                        headteacher
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.meiccymru.org/black-history-month-betty-campbell/"
                        className="resourceHref"
                        target="_blank"
                      >
                        Meic: Black History Month – Betty Campbell
                      </a>
                    </li>
                  </ul>
                }
                indivName={"Elizabeth Campbell"}
                indivNameCym={"Elizabeth Campbell"}
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
                slugText={"Wales' First Black Headteacher."}
                indivPic={
                  "https://ichef.bbci.co.uk/news/976/cpsprodpb/13CF5/production/_98314118_bettyclean.jpg"
                }
                text={
                  <ul>
                    <li>
                      Betty was born in Butetown in Cardiff on the 6th of
                      November 1934.{" "}
                    </li>
                    <li>
                      {" "}
                      Her mother, Nora, was Welsh Barbadian and her father,
                      Simon, had come to the UK from Jamaica when he was 15, was
                      killed in World War II. With the death of her father, the
                      family struggled with money and life was hard.{" "}
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
                      education so she taught them about slavery and the system
                      of apartheid which operated at the time in South Africa.{" "}
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
                      After she died, a statue of her was put up in Cardiff.{" "}
                    </li>
                  </ul>
                }
              ></Person>
            }
          ></Route>
          <Route
            path="/12to16yo/GaneshSubrahmanyam"
            element={
              <Person
                indivName={"Ganesh Subrahmanyam"}
                indivNameCym={"Ganesh Subrahmanyam"}
                resource={twelveApi.slice(8, 9)}
                proposedResource={
                  "Interview with the Dr himself or Dr Rini Chatterjee – 2nd second generation GP based in Merthyr."
                }
                slugText={"The Indian Doctor."}
                indivPic={
                  "https://ichef.bbci.co.uk/images/ic/240x135/p0b6ksrg.jpg"
                }
                text={
                  <ul>
                    <li>
                      People who immigrated from Asia in the 1950s were very
                      important to the success of the NHS.{" "}
                    </li>
                    <li>
                      They continued to be important to healthcare in the years
                      that followed.{" "}
                    </li>

                    <li>
                      The NHS began in 1948 and there was a need for many
                      doctors to look after people. But there was a shortage of
                      medical people in Britain because of World War 2.{" "}
                    </li>

                    <li>
                      Britain advertised in India (a former colony) for help,
                      offering good pay and adventure.{" "}
                    </li>
                    <li>
                      A large number of medical people came from India to
                      Britain to work in the NHS.{" "}
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
                      In 2003, 73% of doctors in the Rhonda Valley were Asian.{" "}
                    </li>

                    <li>
                      South Asian medical staff, alongside their other
                      colleagues, worked tirelessly through the pandemic,
                      despite being at higher risk of catching Covid.
                    </li>
                  </ul>
                }
              ></Person>
            }
          ></Route>
          <Route
            path="/12to16yo/VaughanGething"
            element={
              <Person
                indivName={"Vaughan Gething"}
                indivNameCym={"Vaughan Gething"}
                proposedResource={
                  "Interview with school children about his career as a politician and the challenges he has faced. OR podcast with Emily Pemberton."
                }
                resource={twelveApi.slice(9, 10)}
                slugText={"The Welsh Labour Politician."}
                indivPic={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Vaughan_Gething.jpg/800px-Vaughan_Gething.jpg"
                }
                text={
                  <ul>
                    <li>
                      Vaughan Gething was born in Zambia  where his father,
                      a white Welsh vet from Ogmore-by-Sea, met his mother who
                      is a Black Zambian.{" "}
                    </li>
                    <li>
                      When he was two years old, he moved to Monmouthshire,
                      Wales with his family and then they moved again to Dorset,
                      England, where Gething was brought up.{" "}
                    </li>
                    <li>Vaughan joined the Labour Party when he was 17. </li>
                    <li>
                      He read law at Aberystwyth where he became the first Black
                      president of the National Union of Students Wales.{" "}
                    </li>

                    <li>
                      He went on to train as a solicitor in Cardiff in 2001,
                      with the trade union solicitors Thompsons. He specialised
                      in employment law and became a partner in Thompsons in
                      2007.{" "}
                    </li>

                    <li>
                      In 2008, at the age of 34, Vaughan became the youngest
                      President of Wales TUC. He also became the first mixed
                      race person in the role.{" "}
                    </li>

                    <li>
                      Vaughan became a councillor for Butetown, Cardiff as the
                      Welsh Labour candidate for the Cardiff South and
                      Penarth constituency in the Senedd. {" "}
                    </li>

                    <li>
                      Following the 2016 election, First Minister Carwyn
                      Jones promoted Gething to the Welsh Cabinet as Cabinet
                      Secretary for Health, Well-being and Sport. The position
                      was then renamed as Minister for Health and Social
                      Services.{" "}
                    </li>
                    <li>
                      Since May 2021, Gething has served as  Minister for the
                      Economy.{" "}
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

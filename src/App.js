import { useState } from "react";
import "./App.css";
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
          <Route
            path="/6to9yo/RichardParks"
            element={
              <Person
                indivName={"Richard Parks"}
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
                      >
                        Mind Over Mountain | Richard Parks on Mount Everest
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.youtube.com/watch?v=9COyDnyB_ag"
                        className="resourceHref"
                      >
                        Richard Parks - Welsh Sports Hall of Fame
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.youtube.com/watch?v=0EjCPnLAn6I"
                        className="resourceHref"
                      >
                        Richard Parks: The Big Interview
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.itv.com/news/wales/2022-03-14/the-pandemic-made-me-question-my-identity-and-my-value-to-the-world"
                        className="resourceHref"
                      >
                        Richard Parks: ‘The pandemic made me question my
                        identity and my value to the world’
                      </a>
                    </li>
                    <li className="linkLi">
                      <a
                        href="https://www.visitwales.com/things-do/adventure-and-activities/discover-richard-parks-epic-wales"
                        className="resourceHref"
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
                    <li>
                      Richard Parks was born in Pontypridd on 14 August 1977 to
                      a Jamaican mother, Lee and a Welsh father, Derek Parks.
                    </li>
                    <li>
                      A gifted schoolboy rugby player, Richard specialised in
                      playing flanker and went on to play rugby professionally.
                    </li>
                    <li>
                      During his rugby career Richard played for Pontypridd
                      (winning the Principality Cup), Leeds (winning the
                      Powergen Cup), Perpignan and Newport Gwent Dragons.
                    </li>
                    <li>
                      Richard represented Wales Sevens in the Rugby World Cup in
                      Argentina in 2001.
                    </li>
                    <li>Richard also won 4 caps playing for Wales.</li>
                    <li>
                      Following an injury to his ligaments and medical problems
                      with his shoulder, Richard retired from professional rugby
                      aged 31 in 2009.
                    </li>
                    <li>He then reinvented himself as an extreme athlete.</li>
                    <li>
                      In July 2011 Richard climbed the highest mountain on each
                      of the world’s seven continents and stood on all three
                      poles (the North Pole, the South Pole and the summit of
                      Everest). Richard completed this incredible test of
                      stamina and strength within just seven months.
                    </li>
                    <li>
                      In January 2014, Richard became the first Welshman, and
                      the fastest ever British person, to ski solo, unsupported
                      and unassisted to the South Pole.
                    </li>
                    <li>
                      Through his incredible achievements – as a professional
                      rugby player and as an extreme athlete – Richard Parks
                      proved that despite setbacks and frustrations, we are all
                      capable of turning our skills and abilities to other
                      things. Because of his never-give-up attitude and
                      determination to succeed at something new, Richard is an
                      inspirational figure to many – both in Wales and beyond.{" "}
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
            element={<AnimCard indivName={"Sidoli's Ice Cream"} />}
          ></Route>
          <Route
            path="/3to6yo/HansLichtenstein"
            element={<AnimCard indivName={"Hans Lichtenstein"} />}
          ></Route>
          <Route
            path="/3to6yo/ArandoraStar"
            element={<AnimCard indivName={"Arandora Star"} />}
          ></Route>
          <Route
            path="/3to6yo/TigerBay"
            element={<AnimCard indivName={"Tiger Bay"} />}
          ></Route>
          <Route
            path="/3to6yo/JohnYstumllyn"
            element={<AnimCard indivName={"John Ystumllyn"} />}
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
                indivName={"Penrhyn Castle"}
                indivNameCym={"Castell Penrhyn"}
                proposedResource={"Filming of building with voiceover."}
                resource={nineApi.slice(2, 1)}
                indivPic={
                  "http://changing-pages.com/wp-content/uploads/2019/05/IMG_4201-1440x1001.jpg"
                }
                text={
                  <ul>
                    <li>
                      The magnificent Penrhyn Castle in north Wales was built on
                      a dark history: one of exploitation, Jamaican sugar
                      fortunes and the transatlantic slave trade.{" "}
                    </li>
                    <li>
                      In the late 17th Century, Gifford Pennant from Flintshire
                      acquired land in Jamaica.{" "}
                    </li>

                    <li>
                      By the 1700’s, the Pennant family had returned to Britain
                      and when Richard Pennant became 1st baron Penrhyn, they
                      were controlling their Jamaican properties by letter.{" "}
                    </li>

                    <li>
                      The estate developed and the numbers of enslaved people
                      increased. By 1805, Richard Pennant owned nearly 1,000
                      enslaved people across his 4 plantations in Jamaica.{" "}
                    </li>

                    <li>
                      Richard Pennant’s ignorance is recorded in his letters of
                      instruction to estate managers. Enslaved persons are
                      described as ‘chattels’ (moveable property).{" "}
                    </li>

                    <li>
                      Despite his links to slavery, Richard Pennant was known as
                      ‘the Improver’, investing his fortune in his North Wales
                      estate.{" "}
                    </li>

                    <li>
                      Money from Jamaica funded roads, railways, schools and the
                      Penrhyn Quarry, once the largest slate quarry in the
                      world. It can also be said that the slate industry in
                      North Wales was primarily financed through slavery.{" "}
                    </li>

                    <li>
                      In 1767, Richard Pennant became one of the two MPs for
                      Liverpool: the major slave trade port of the UK.{" "}
                    </li>

                    <li>
                      Pennant became part of a powerful pro-slavery network and
                      held connections to virtually all the major absentee
                      plantation owners in Britain.{" "}
                    </li>

                    <li>
                      Despite opposition from the pro-slavery lobby, including
                      Richard Pennant, on 25th March 1807, Parliament outlawed
                      the slave trade within the British empire. The
                      transportation of enslaved people to Jamaica was outlawed
                      in March 1808.{" "}
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
                indivName={"Hans Lichtenstein"}
                indivNameCym={"Hans Lichtenstein"}
                proposedResource={
                  "Interview with Jane (daughter) or footage from S4C programme."
                }
                indivPic={
                  "https://i.guim.co.uk/img/media/7c810c258320be244e1d7d4d721e8a171409c677/180_145_1240_744/master/1240.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=d36ac08cc3c44a21c37572bfc483bb4c"
                }
                resource={nineApi.slice(1, 2)}
                text={
                  <ul>
                    <li>
                      On 30th January 1933 Adolf Hitler was appointed as
                      Germany’s new chancellor. Hitler hated the Jews and they
                      were soon victimised, harassed and oppressed.{" "}
                    </li>
                    <li>
                      During ‘Kristallnacht’ (‘Night of Broken Glass’) on
                      November 9-10 1938, many Jewish shops and businesses were
                      destroyed.{" "}
                    </li>

                    <li>
                      Following Kristallnacht, some people joined together to
                      rescue Jewish children from Germany and other
                      Nazi-controlled areas. The rescue operation was called
                      ‘Kindertransport’ (Children’s Transport). Among those
                      rescued was Hans Lichtenstein.{" "}
                    </li>

                    <li>
                      On arriving in Britain, 12-years-old Hans was educated at
                      the prestigious Gordonstoun School.{" "}
                    </li>

                    <li>
                      Hans studied medicine at Trinity College, Cambridge, and
                      completed his medical training at Guy’s hospital in
                      London.{" "}
                    </li>

                    <li>
                      Hans had to do National Service (join the army, navy or
                      air force) which took him to Malaya (now Malaysia), where,
                      during the state of national emergency, he was a medical
                      officer for the admired SAS.{" "}
                    </li>

                    <li>
                      In Malaysia, Hans helped to establish the first medical
                      care for the indigenous people of Malaysia, the Orang
                      Asli.  He also met Beryl Rush, a British nurse and they
                      married in Kuala Lumpur in 1956.{" "}
                    </li>

                    <li>
                      Hans and Beryl eventually settled in Llandrindod, where
                      Hans worked as a much-respected GP for 32 years.{" "}
                    </li>

                    <li>
                      In retirement, Hans helped to set up the Bracken Trust in
                      Llandrindod, which offers cancer support, counselling and
                      complementary therapies.{" "}
                    </li>

                    <li>
                      Hans later life took up marathon running and paragliding,
                      and in his late 70s he could be seen soaring above Cwm
                      Elan near his home.{" "}
                    </li>

                    <li> Dr Hans Lichtenstein died aged 91 in March 2019. </li>
                  </ul>
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
              <Person
                resource={api.slice(1, 2)}
                proposedResource={"Film the building with voice over."}
                indivName={"Merthyr Tydfil Synagogue"}
                indivNameCym={"Synagog Merthyr Tudful"}
                indivPic={
                  "https://upload.wikimedia.org/wikipedia/commons/7/78/The_Top_of_Church_Street%2C_Merthyr_Tydfil_%28geograph_4834858%29.jpg"
                }
                text={
                  <ul className="welshUl">
                    <li>The Merthyr Synagogue was built in 1877.</li>
                    <li>
                      It was designed by Charles Taylor, an architect, who lived
                      locally.
                    </li>
                    <li>
                      A lot of Jewish people moved to Merthyr Tydfil when lots
                      of factories opened there and it became the largest town
                      in Wales.
                    </li>
                    <li>
                      The Jewish people formed a congregation, a group to pray
                      together, in in 1848.
                    </li>
                    <li>
                      When the factories had less work a lot of Jews left
                      Merthyr to look for jobs elsewhere.
                    </li>
                    <li>
                      The Merthyr Synagogue is probably the only synagogue in
                      the world which has a Welsh dragon on it.
                    </li>
                    <li>
                      In 1960 the synagogue was painted by the well-known
                      artist, L. S. Lowry. The painting sold for £277,000 in
                      March 2022.
                    </li>
                    <li>
                      In 2019, the building was bought by the Foundation for
                      Jewish Heritage.
                    </li>
                    <li>
                      In 2021 they had to repair the building to make it safe
                      and weather-proof.
                    </li>
                    <li>
                      The Foundation for Jewish Heritage hope to open the
                      building as a Jewish Heritage Centre by 2025.{" "}
                    </li>
                    <li>
                      Michael Mail of the Foundation for Jewish Heritage
                      believes the building is very important because ‘it’s the
                      oldest purpose-built Jewish building surviving in Wales’.
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
              ></Person>
            }
          ></Route>
          <Route
            path="/6to9yo/ReuelElijah"
            element={
              <Person
                indivName={"Reuel Elijah"}
                indivNameCym={"Reuel Elijah"}
                proposedResource={"Interview with Reuel."}
                slugText={"Musician, performer and dancer."}
                resource={api.slice(2, 3)}
                indivPic={
                  "https://i.scdn.co/image/ab6761610000e5eb60d8b331c307dce08e839b02"
                }
                text={
                  <ul>
                    <li>
                      Reuel Elijah (born Marlon Bertram) was born on 25th May
                      1996, and raised in Cardiff.{" "}
                    </li>
                    <li>
                      In Reuel’s early years, he studied at ‘The Gate’
                      Performing arts school, taking part in many musicals.{" "}
                    </li>
                    <li>
                      Reuel’s family enjoyed music at home – especially jazz.{" "}
                    </li>

                    <li>
                      The family also attended Pentecostal church: his mum was
                      in the choir, and his father played the organ.{" "}
                    </li>

                    <li>
                      Asked to describe the importance of music, Reuel replies:
                      ‘Music is a really big part of who I am. I love how it
                      makes me feel, move... there’s so much to it, too much to
                      comprehend...’{" "}
                    </li>

                    <li>
                      During his teenage/high school years, Reuel joined
                      “Jukebox Juniors” – which was crowned third best dance
                      group in the world at the Hip-hop Internationals in Las
                      Vegas, and runners up in Sky 1’s Got to Dance finals in
                      2010.{" "}
                    </li>

                    <li>
                      Also in these years, Reuel began nurturing his singing and
                      rapping at vocal school “EYK” (Expression of the Young
                      Kind) in Cardiff.{" "}
                    </li>

                    <li>
                      It was at EYK that Reuel saw his future in music and
                      performing.{" "}
                    </li>

                    <li>
                      In 2012 Reuel finished college and invested in his own
                      recording resources and started to get creative with his
                      own sound.{" "}
                    </li>

                    <li>
                      His early cover of Drake’s ‘Girls Love Beyonce’, picked up
                      thousands of views on YouTube.{" "}
                    </li>

                    <li>
                      In 2016, Reuel was a part of the BBC Horizons scheme,
                      where he was chosen to tour around the UK. The following
                      year, Reuel made a surprise appearance on X-Factor.{" "}
                    </li>

                    <li>
                      In 2018 Reuel Released his debut album ‘Alignment’ – it
                      charted Top 24 in the Hip Hop/Rap iTunes Charts.{" "}
                    </li>
                  </ul>
                }
              ></Person>
            }
          ></Route>
          <Route
            path="/6to9yo/LennLawrence"
            element={
              <Person
                indivName={"Lenn Lawrence"}
                indivNameCym={"Lenn Lawrence"}
                proposedResource={"Discussion points."}
                slugText={
                  "Carpenter and co-former of the Carribean Friendship Society."
                }
                resource={api.slice(3, 4)}
                indivPic={
                  "https://blackhistorywales.org.uk/wp-content/uploads/2020/07/Screenshot-2020-07-09-at-07.56.04.png"
                }
                text={
                  <ul>
                    <li>
                      Lenn Lawrence was the first black carpenter and foreman
                      for the British Steel Corporation in Neath Port Talbot.{" "}
                    </li>
                    <li>
                      Lenn helped build the M4 motorway, the deep-water dock for
                      Marple ridgeway, Port Talbot town centre, the Pontdrefen
                      bridge and many more sites.{" "}
                    </li>
                    <li>
                      Being an ethnic minority in 1962 in Wales was difficult
                      and this led Lenn and other members of the community to
                      start the Caribbean Friendship Society. Together they met
                      with the police, councilors and other agencies.{" "}
                    </li>

                    <li>
                      Although the Caribbean Friendship Society lacked funds,
                      Lenn and other members used their own money to set up
                      meetings in each other’s houses, in a shed at the back of
                      Corporation Road or at the Talbot pub.{" "}
                    </li>

                    <li>
                      In 1981, the Caribbean Friendship Society relocated to
                      Swansea and lasted until 1992, when it evolved into
                      Swansea Bay Regional Equality Council.{" "}
                    </li>

                    <li>
                      Today it still upholds its initial principle, which is to
                      value the rights of people.{" "}
                    </li>

                    <li>Lenn Lawrence is a patron of Black History Wales. </li>
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
              <Person
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
                text={
                  <ul>
                    <li>Gypsies have lived in Wales for over 400 years. </li>
                    <li>
                      Today there are about 1092 travelers caravans in Wales.{" "}
                    </li>

                    <li>Wales also has around 136 traveler sites. </li>

                    <li>
                      The Welsh Romani have given Wales a lot to be proud of.{" "}
                    </li>

                    <li>
                      The Romani community has a rich, beautiful culture.{" "}
                    </li>

                    <li>
                      They are very fond of creating music, writing poetry,
                      storytelling and dancing.{" "}
                    </li>

                    <li>
                      John Roberts, a Welsh gypsy, performed around Europe and
                      in front of royalty.{" "}
                    </li>

                    <li>
                      Many of the customs and traditions of the Romanis are
                      being forgotten though.{" "}
                    </li>
                    <li>
                      Teleri Gray is a Romani storyteller and she is helping
                      people to remember about the Traveller’s history.{" "}
                    </li>
                    <li>
                      Teleri and her sister are the only two Gypsy teachers in
                      Wales.{" "}
                    </li>

                    <li>
                      Teleri’s ancestors were famous Romani musicians. Her
                      grandfather, her great- grandfather and her great great
                      grandfather played the harp. Teleri’s
                      great-great-grandfather John Roberts was known as the
                      Harpist of Wales (or Telynor Cymru). As famous musicians,
                      they traveled all over Wales, performing in the homes of
                      rich people.{" "}
                    </li>

                    <li>
                      Teleri also talks about what life is like for Traveller
                      children and their families today.{" "}
                    </li>

                    <li>
                      Life can be very hard for Romani’s. They are not always
                      welcomed in communities because there are a lot of false
                      things said about them and people do not understand the
                      way they choose to live.{" "}
                    </li>

                    <li>
                      The Romanis in Wales are a big part of Wales’ national
                      identity.{" "}
                    </li>

                    <li>
                      Memories and archives are now being collected to preserve
                      their culture.{" "}
                    </li>
                  </ul>
                }
              ></Person>
            }
          ></Route>
          <Route
            path="/6to9yo/FongSui"
            element={
              <Person
                proposedResource={"Factfile including discussion points."}
                indivName={"Fong Sui"}
                indivNameCym={"Fong Sui"}
                slugText={"First Generation Chinese in Wales."}
                resource={api.slice(5, 6)}
                indivPic={
                  "https://i2-prod.walesonline.co.uk/incoming/article6289157.ece/ALTERNATES/s810/JS28547881.jpg"
                }
                text={
                  <ul>
                    <li>
                      Many of today’s older Chinese people living in Wales
                      arrived as children and young adults during the 1940s -
                      1970s.{" "}
                    </li>
                    <li>
                      A lot came from Hong Kong and the Guangdong province.{" "}
                    </li>

                    <li>
                      Many of these people were put to work in Chinese
                      restaurants whilst others opened their own laundrettes.{" "}
                    </li>

                    <li>
                      Fong Sui came to Wales from her home village in China as a
                      new bride to her husband Chi Mau Chin.{" "}
                    </li>

                    <li>
                      The young couple went on to open one of the first Chinese
                      laundries in Swansea.{" "}
                    </li>

                    <li>They also opened a brand new restaurant. </li>

                    <li>Life was very hard when Fong Sui arrived in Wales. </li>

                    <li>
                      She was put in a laundry, given just one meal a day and
                      ironed 100 garments each shift, where she often burnt
                      herself.{" "}
                    </li>

                    <li>
                      At the age of 18, she moved with her husband to Swansea to
                      run the KKK laundry in Bryn-y-Mor Road.{" "}
                    </li>

                    <li>
                      They borrowed £500 from friends to be partners of the
                      now-closed Ming Yon restaurant which they ran for seven
                      years.{" "}
                    </li>

                    <li>
                      Fong Sui working in the laundry by day, the restaurant two
                      nights a week and raising four children.{" "}
                    </li>
                    <li>Fong Sui is now a widow and grandmother of seven. </li>
                    <li>
                      Fong Sui’s story is very similar to many young Chinese
                      girls arriving in Wales during the mid-20th century. Life
                      was very difficult but they worked very hard and left a
                      lasting legacy in Wales.{" "}
                    </li>
                  </ul>
                }
              ></Person>
            }
          ></Route>
          <Route
            path="/6to9yo/ArandoraStar"
            element={
              <Person
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
                    <li>
                      The SS Arandora Star was a ship that had once been used
                      for cruises.{" "}
                    </li>
                    <li>
                      During World War Two it was then used to carry soldiers.{" "}
                    </li>

                    <li>She was painted grey and guns were added. </li>

                    <li>
                      In 1940 the ship took prisoners of war from Britain who
                      were to be sent to camps in Canada.
                    </li>

                    <li>
                      The ship had too many passengers - 1678 men boarded but
                      the ship should only have taken 500.{" "}
                    </li>

                    <li>734 of these men were Welsh Italian. </li>

                    <li>
                      Among these Welsh Italians, many lived in the valleys of
                      south Wales.{" "}
                    </li>

                    <li>
                      These Italian men were declared “enemy aliens” by the
                      British government despite their families moving to Wales
                      decades before.{" "}
                    </li>

                    <li>
                      On 2 July 1940, just one day into the journey, a German
                      torpedo hit The Arandora Star.{" "}
                    </li>

                    <li>
                      The ship was just off the coast of Ireland at the time.{" "}
                    </li>

                    <li>
                      The ship wasn’t displaying the International Red Cross
                      symbol – this would have told other ships that it was
                      carrying civilians on board, and therefore shouldn’t be
                      fired at.{" "}
                    </li>

                    <li>More than 800 lives were lost. </li>

                    <li>53 Welsh Italians died. </li>

                    <li>
                      Lifeboats that could have been used to rescue some men
                      were blocked by heavy wire so people couldn’t get at them.
                      The barbed wire placed on deck also caused major problems.{" "}
                    </li>

                    <li>
                      The women and the children left changed the rules of
                      deporting civilians and helped to change British policy on
                      internment.{" "}
                    </li>
                  </ul>
                }
              ></Person>
            }
          ></Route>
          <Route
            path="/6to9yo/WilsonMonk"
            element={
              <Person
                indivName={"Wilson Monk"}
                indivNameCym={"Wilson Monk"}
                proposedResource={"Factfile including discussion points."}
                slugText={"Member of the 320th Barrage Balloon Battalion."}
                resource={api.slice(7, 8)}
                indivPic={
                  "https://images.squarespace-cdn.com/content/v1/55e4bcf2e4b01d0dc78c9848/1441893157537-7AL21O6U939POF0AYWGB/image-asset.jpeg"
                }
                text={
                  <ul>
                    <li>
                      In February 1944, the 320th Barrage Balloon Battalion, a
                      unit of the 621 men from the US Army, arrived in
                      Pontypool.{" "}
                    </li>
                    <li>
                      They were part of the 130,000 black US troops stationed
                      all over Britain who were assembling for D-Day in World
                      War Two as part of a large Allied force.{" "}
                    </li>
                    <li>
                      The Battalion had white officers in charge of black
                      soldiers - the US Army practiced segregation.
                    </li>
                    <li>
                      Five medics from the Battalion arrived on Omaha Beach on 6
                      June 1944. The rest of the Battalion soon followed. {" "}
                    </li>
                    <li>
                      As a Barrage Balloon Battalion their job was to raise
                      helium balloons over the invasion beaches to prevent
                      German airplanes from flying over the beaches.{" "}
                    </li>
                    <li>
                      These men found Wales a very different country to the one
                      they had come from. Wales had very different attitudes to
                      America in the way residents treated black people. It was
                      a surprisingly positive experience for the black soldiers.{" "}
                    </li>

                    <li>
                      One member of the 320th who found a welcome in Wales was
                      Wilson Caldwell Monk.{" "}
                    </li>

                    <li>
                      Monk, before joining the army, had held down as many jobs
                      as he could squeeze into a day. He mopped floors,
                      delivered pharmacy orders, sold salt-water taffy and
                      waited on tables in restaurants that would never serve a
                      black man like himself.{" "}
                    </li>

                    <li>
                      When America entered the war in 1941, and he traveled to
                      Wales, he met people like Jessie Prior.{" "}
                    </li>

                    <li>
                      Jessie looked after Monk as if he was her son and wrote to
                      his own mother saying he was being looked after in Wales.{" "}
                    </li>

                    <li>
                      The people of Wales taught Monk that not everyone treated
                      black people badly.{" "}
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
                indivName={"Dame Shirley Bassey"}
                indivNameCym={"Y Fonesig Shirley Bassey"}
                proposedResource={
                  "Podcast with Mel and Emily? Or Aleighia Scott?"
                }
                slugText={"The world famous Welsh singer from Tiger Bay."}
                resource={api.slice(8, 9)}
                indivPic={
                  "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F75b621da-8fff-4cfb-ad8e-d63040e1f7a8.jpg?fit=scale-down&source=next&width=700"
                }
                text={
                  <ul>
                    <li>
                      Dame Shirley was one of the first Black British
                      entertainers to gain national and international fame. Her
                      powerful expressive voice has made her one of the most
                      popular singers in the world.{" "}
                    </li>
                    <li>
                      She has sold over 135 million records and was the first
                      Welsh artist to achieve a UK number one single in 1959.{" "}
                    </li>

                    <li>
                      Dame Shirley was born in Tiger Bay, Cardiff. Her
                      father was Nigerian, and her mother came from Teesside.  {" "}
                    </li>

                    <li>
                      After leaving school at age 15, she worked in a factory,
                      sang in men’s clubs, and performed in touring revues
                      before making her breakthrough in a Christmas show in
                      London in 1955.{" "}
                    </li>

                    <li>
                      Landing a record contract, she had her first British hit
                      in 1957 with “Banana Boat Song.”{" "}
                    </li>

                    <li>
                      Over her long career she has had 27 Top 40 hits in the UK,
                      including two number-ones.{" "}
                    </li>

                    <li>
                      She became well-known for recording the soundtrack theme
                      songs of the James Bond films Goldfinger (1964), Diamonds
                      Are Forever  (1971)and Moonraker (1979).{" "}
                    </li>

                    <li>
                      In 2020, Bassey became the first female artist to have an
                      album in the Top 40 UK Albums Chart in every decade over a
                      period of 70 years.
                    </li>

                    <li>
                      Dame Shirley has also had numerous BBC television shows
                      and has hosted her own variety series Shirley Bassey.{" "}
                    </li>

                    <li>
                      Since making her first appearance at the Royal Albert
                      Hall in 1971 she has performed at the venue 45 times.{" "}
                    </li>

                    <li>
                      She has even sung at Glastonbury wearing diamante
                      encrusted wellington boots.{" "}
                    </li>

                    <li>
                      She received the first award for Best British Female Solo
                      Artist at the First Brit Awards in 1977 was awarded the
                      title of Most Successful Female Singer in 2000’s Guinness
                      World Records (a title she still holds today).{" "}
                    </li>

                    <li>
                      Dame Shirley was appointed a Dame in 1999 for services to
                      the performing arts. In 2003, Dame Shirley was ranked
                      among the "100 Great Black Britons". Her song "Goldfinger"
                      was inducted into the Grammy Hall of Fame in 2008.{" "}
                    </li>
                  </ul>
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
            path="/6to9yo/EnricoStennet"
            element={
              <Person
                indivName={"Enrico Stennet"}
                indivNameCym={"Enrico Stennet"}
                proposedResource={"Not developed yet"}
                slugText={"Not developed yet"}
                resource={api.slice(10, 11)}
                indivPic={""}
                text={
                  <ul>
                    <li>Not developed yet</li>
                  </ul>
                }
              ></Person>
            }
          ></Route>
          <Route
            path="/6to9yo/IdrisPhillips"
            element={
              <Person
                indivName={"Idris Phillips"}
                indivNameCym={"Idris Phillips"}
                proposedResource={"Not developed yet"}
                slugText={"Not developed yet"}
                resource={api.slice(11, 12)}
                indivPic={""}
                text={
                  <ul>
                    <li>Not developed yet</li>
                  </ul>
                }
              ></Person>
            }
          ></Route>
          <Route
            path="/9to12yo/ColinJackson"
            element={
              <Person
                indivName={"Colin Jackson"}
                indivNameCym={"Colin Jackson"}
                proposedResource={"Interview with Colin and his sister?"}
                slugText={"The Olympic medal winner."}
                resource={nineApi.slice(3, 4)}
                indivPic={
                  "https://ichef.bbci.co.uk/onesport/cps/624/cpsprodpb/2ED2/production/_95868911_gettyimages-1852091.jpg"
                }
                text={
                  <ul>
                    <li>
                      Colin Jackson was born in Cardiff on 18 February 1967.{" "}
                    </li>
                    <li>
                      His remarkable sporting prowess emerged while he was a
                      pupil at Llanederyn High School. A gifted sportsman, Colin
                      concentrated on athletics and joined the athletics club,
                      Birchgrove Harriers, which nurtured his talent. He later
                      trained with Brecon Athletics Club.{" "}
                    </li>

                    <li>
                      An Olympian sprinter and Welsh hurdling champion, Colin
                      won his first major medal, a silver, in the 110m hurdles,
                      aged 19, at the 1986 Commonwealth Games.{" "}
                    </li>

                    <li>
                      He went on to win a silver medal at the 1988 Seoul Olympic
                      Games and won European and Commonwealth gold medals in
                      1990.{" "}
                    </li>

                    <li>
                      Colin didn’t win a medal at the Barcelona Olympics in
                      1992. But he was undefeated at the European championships
                      for 12 years in a row and remains the 60m hurdles world
                      record holder. Jackson set a world record of 12.91 seconds
                      to become the 1993 World Champion.{" "}
                    </li>

                    <li>
                      During his illustrious career, Colin won twenty-four
                      medals at World, Olympic, Commonwealth and European level
                      – little wonder then that he’s widely regarded as Europe’s
                      greatest-ever hurdler.{" "}
                    </li>

                    <li>
                      Asked if being Welsh was important to him, Colin said he
                      loved ‘being Welsh’. It was, he said, ‘part of my
                      identity’. It had provided his ‘laid-backness’, and his
                      ‘quiet determination’.{" "}
                    </li>

                    <li>
                      Today a television sports commentator and presenter, Colin
                      has appeared on Strictly Come Dancing and when aged 50, he
                      came out as gay.{" "}
                    </li>

                    <li>
                      Colin Jackson’s importance to Wales and Welsh sport is
                      undeniable. No single image more powerfully redefined
                      Welsh identity for the 1990s than that of a triumphant
                      Colin proudly draped in Y Ddraig Goch (the National Flag
                      of Wales).{" "}
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
                    <li>Iris Williams was born on 20 April 1944. </li>
                    <li>
                      She was born in Rhydyfelin and brought up in a Children’s
                      Home in Tonyrefail. Her father was a black American
                      soldier posted to Wales during World War Two and her
                      mother, whom he met at a dance hall in Pontypridd, gave
                      her up for adoption.{" "}
                    </li>

                    <li>
                      Iris’s career took off after she won a scholarship to the
                      Royal Welsh College of Music and Drama.{" "}
                    </li>

                    <li>
                      She is now regarded as a jazz legend after a glittering
                      40-year international jazz singing career.{" "}
                    </li>

                    <li>
                      Her hits include: ‘He Was Beautiful’ (1979) and ‘Pererin
                      Wyf’ (1971) a Welsh-language version of ‘Amazing Grace’.
                      She won the Welsh talent contest Cân i Gymru (A Song for
                      Wales) in 1974 with the song ‘I gael Cymru’n Gymru Rydd’
                      (For a Free Wales). Iris was one of the stars of the gala
                      concert to celebrate the opening of the National Assembly
                      of Wales in 1999.{" "}
                    </li>

                    <li>
                      In the New Year Honours list of 2004, Iris was honoured
                      with an OBE (Officer of the Order of the British Empire)
                      for her contribution to music, performing for troops
                      around the world.{" "}
                    </li>

                    <li>
                      In 2006, she performed at the Brecon Jazz Festival, and
                      was later admitted to the Gorsedd of Bards at the National
                      Eisteddfod of Wales.{" "}
                    </li>

                    <li>
                      Iris Williams became a foster care champion for Rhondda
                      Cynon Taf Council in 2014.{" "}
                    </li>
                    <li>Iris now lives in California in the USA. </li>

                    <li>
                      Despite any difficulties Iris Williams suffered at the
                      start of her life, she showed great strength of character
                      to become an international singing star.{" "}
                    </li>
                  </ul>
                }
              ></Person>
            }
          ></Route>
          <Route
            path="/9to12yo/PaulRobeson"
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
                  "https://aaregistry.org/wp-content/uploads/2009/09/paul-robeson.jpg"
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
                indivName={"Clive Sullivan"}
                indivNameCym={"Clive Sullivan"}
                proposedResource={"Factfile with discussion."}
                slugText={"The rugby league legend."}
                resource={nineApi.slice(7, 8)}
                indivPic={
                  "https://e2.365dm.com/20/10/2048x1152/skysports-anthony-sullivan_5116431.jpg"
                }
                text={
                  <ul>
                    <li>
                      Clive Sullivan was born in Splott, Cardiff, on 9 April
                      1943.{" "}
                    </li>
                    <li>
                      Clive played rugby at school, but injuries required
                      surgery on his knees, feet and shoulders. Doctors feared
                      mobility issues – and thought a rugby career unlikely.{" "}
                    </li>

                    <li>
                      1961 – Clive joins the army and is posted to Yorkshire. On
                      account of being Welsh, Clive is picked to play in an
                      inter-corps rugby match. Fearful of being invalided out of
                      the army, Clive doesn’t mention having suffered major
                      injuries.{" "}
                    </li>

                    <li>
                      Intending to deliberately play badly, instinct took over
                      and Clive scored a long distance try – suffering no ill
                      effects. {" "}
                    </li>

                    <li>
                      Soon offered a trial with Rugby League side Hull, Clive
                      scored 3 tries and signed as a professional.{" "}
                    </li>

                    <li>
                      During his career, Clive played for Hull, Hull Kingston
                      Rovers, Oldham and Doncaster. Constant knee problems
                      required further operations. Yet Clive played 352 games
                      for Hull, scoring 250 tries and 213 games for Hull K.R.
                      scoring 118 tries.{" "}
                    </li>

                    <li>
                      In 1967, Clive made his debut for Great Britain. In 1972,
                      Clive was handed the captaincy of GB and in the World Cup
                      that year Clive captained GB to become world champions.
                      Scoring a try in GB’s 4 games, Sullivan scored a memorable
                      try to level 10-10 against Australia in the final, after
                      running the length of the field.{" "}
                    </li>

                    <li>
                      Clive’s Great Britain career ended in 1973 and in 1974,
                      Clive was awarded an MBE for services to rugby league.{" "}
                    </li>

                    <li>
                      Clive Sullivan died of cancer on 8 October 1985, aged just
                      42. The city of Hull named an approach road ‘Clive
                      Sullivan Way’ in his honour.
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
              <Person
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
                      We do not know where John originally lived before he
                      arrived in Wales. He possible came here as a victim of the
                      Atlantic slave trade when he was eight years of age, which
                      may mean he came from the West Africa or the West Indies.{" "}
                    </li>

                    <li>
                      Once in Wales, John came to live with the Wynn family as a
                      servant at their Ystumllyn estate in Criccieth, where he
                      was christened with the Welsh name John Ystumllyn.{" "}
                    </li>

                    <li>
                      John was taught English and Welsh by the local people and
                      also learned how to be a gardener on the estate where he
                      became very good at his job.{" "}
                    </li>

                    <li>
                      John had his portrait painted when he was a young man and
                      it shows that he was very handsome.{" "}
                    </li>

                    <li>
                      John fell in love with a white local maid called Margaret
                      Gruffydd. In 1768, when Margaret left for another job,
                      John left his gardening job to marry her. Theirs may have
                      been the first mixed marriage in Wales.{" "}
                    </li>

                    <li>They had seven children, five of whom survived. </li>

                    <li>
                      John and Margaret worked as land stewards. Later, John
                      went back into the employment of the Wynn family. Ellis
                      Wynn gave him a large garden and cottage at Y Nhyra Isa to
                      say thank you for all his hard work.{" "}
                    </li>

                    <li>
                      John died in 1786; his wife, Margaret, lived for more than
                      forty years more.{" "}
                    </li>

                    <li>
                      Many years after his death, a small monument was built
                      near where John was buried in St Cynhaearn's Church.{" "}
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
                      made a Grade II listed building  in 1999. It was listed
                      "as of special interest in commemorating a slave in
                      service in Wales in the later years of the C18, who must
                      have been well enough thought of that he was provided with
                      a handsome memorial".{" "}
                    </li>

                    <li>
                      John was the earliest black person in Wales who we have
                      information about. John was a very likeable person. He
                      also is known to have not suffered much racial prejudice,
                      though locals did often express surprise at seeing a black
                      man for the first time.{" "}
                    </li>
                  </ul>
                }
                proposedResource={" S4C clip of flower from Garddio a Mwy."}
              ></Person>
            }
          ></Route>
          <Route
            path="/9to12yo/TigerBay"
            element={
              <Person
                indivName={"Tiger Bay"}
                indivNameCym={"Tiger Bay"}
                proposedResource={"Factfile with discussion."}
                slugText={"The bustling multi-ethnic community in Cardiff Bay."}
                resource={nineApi.slice(9, 10)}
                indivPic={
                  "https://i2-prod.walesonline.co.uk/incoming/article9925412.ece/ALTERNATES/s1227b/JS70059056.jpg"
                }
                text={
                  <ul>
                    <li>
                      Tiger Bay is one of the UK’s oldest multi-ethnic
                      communities.{" "}
                    </li>
                    <li>
                      The site grew as a consequence of the Industrial
                      Revolution. Coal mining brought many people to Cardiff to
                      work on the docks and as coal production increased, so did
                      the population.{" "}
                    </li>

                    <li>
                      At one point, Tiger Bay’s community had people from over
                      50 countries settling in the area around the docks.{" "}
                    </li>

                    <li>
                      Communities included the Somalis, Yemenis, Greeks,
                      African, Afro- Caribbean, Chinese, Arab, Somali and South
                      Asian sailors and sea-merchants.{" "}
                    </li>

                    <li>
                      Together these different communities made essential
                      contributions to Cardiff’s wealth and achievements and
                      brought different cultural influences that can still be
                      seen today.{" "}
                    </li>

                    <li>
                      Tiger Bay had a reputation as a tough and dangerous area;
                      but locals who lived and stayed in the area described it
                      as a friendly place.{" "}
                    </li>

                    <li>
                      The economic decline in the 1960s and 1970s led to a large
                      amount of unemployment in Tiger Bay. By the 1970s and
                      1980s the area was demolished and redeveloped.{" "}
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
                      families.{" "}
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
                      Ice Cream Alliance Silver Challenge Cup. The Sidoli brand
                      is now a household name.{" "}
                    </li>
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
            path="/9to12yo/VernesterCyril"
            element={
              <Person
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
                      Vernester Cyril was a happy little girl. She enjoyed
                      school in St Lucia, an island in the Caribbean, where she
                      recited poetry and learned about famous British writers.{" "}
                    </li>

                    <li>
                      In March 1962, Vernester travelled by ship to Great
                      Britain. On arriving, Vernester was shocked by how cold it
                      was. But Vernester was determined to make a new life in
                      the UK – and she immediately looked for work.{" "}
                    </li>

                    <li>
                      Vernester felt sad when some people stared at her and made
                      funny faces. But Vernester was tough. If people stupidly
                      behaved like that, then that was their problem.{" "}
                    </li>

                    <li>
                      Vernester worked in a factory, then a nursing home. She
                      then trained as a nurse, then as a midwife. Vernester
                      easily passed her exams and received the Best Promising
                      Midwife award. Vernester worked as a midwife for over 30
                      years, was promoted several times and she delivered and
                      assisted at the births of over 500 babies.{" "}
                    </li>

                    <li>
                      Vernester loved being a midwife. She was also proud of her
                      Caribbean heritage, and educated herself – and others – in
                      the cultural traditions of black people. A nursing sister
                      told her off for wearing her hair in the Afro hairstyle:
                      Vernester told her to look at books and see how people
                      wore their hair in the Caribbean and Africa.{" "}
                    </li>

                    <li>
                      Sadly, Vernester encountered racism from some patients
                      too. Race equality laws did not yet exist in Britain. But
                      Vernester always challenged discrimination and promoted
                      racial equality.{" "}
                    </li>

                    <li>
                      For Vernester’s tireless work, she was awarded an OBE from
                      the Queen at Buckingham Palace in 1999. Vernester had come
                      a long way.{" "}
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
            path="/12to16yo/JoeCalzaghe"
            element={
              <Person
                indivName={"Joe Calzaghe"}
                indivNameCym={"Joe Calzaghe"}
                proposedResource={"Factfile with discussion"}
                resource={twelveApi.slice(2, 3)}
                slugText={"The super-middleweight world champion."}
                indivPic={
                  "https://upload.wikimedia.org/wikipedia/commons/a/a5/JoeCalzaghe-July2007.jpg"
                }
                text={
                  <ul>
                    <li>
                      Joe Calzaghe was born on 23 March 1972 in Hammersmith,
                      London, to an Italian (Sardinian) father and a Welsh
                      mother.{" "}
                    </li>
                    <li>
                      Joe joined his first boxing club, Newbridge Amateur Boxing
                      Club at ten-years-old.  He moved on to Oakdale
                      Comprehensive School when aged eleven.{" "}
                    </li>

                    <li>
                      Joe was the target of regular verbal bullying as a
                      teenager – which left him feeling isolated. Calzaghe later
                      admitted that he ‘never recovered from the abuse’ and left
                      school without sitting any of his GCSEs.{" "}
                    </li>

                    <li>
                      After a successful amateur boxing career: winning 110 of
                      120 amateur contests, in October 1993, Joe boxed
                      professionally for the first time – and defeated his
                      opponent in one round. It was the start of a glittering
                      career.{" "}
                    </li>

                    <li>
                      Among the other titles Joe won during his career, in
                      October 1997, Joe won the WBO (World Boxing Organization)
                      super-middleweight title – he retained the title in March
                      2006.{" "}
                    </li>

                    <li>
                      In November 2007, Joe retained the WBO and The Ring
                      super-middleweight titles and also won the WBA (World
                      Boxing Association) (Undisputed) and WBC (World Boxing
                      Council) super-middleweight titles.{" "}
                    </li>

                    <li>
                      In November 2008, he retained The Ring light-heavyweight
                      title after a gruelling contest. Three months later, on 5
                      February 2009, Joe announced his retirement from
                      professional boxing. On doing so, Calzaghe became one of
                      only fifteen world champions to retire as an undefeated
                      world champion.{" "}
                    </li>

                    <li>
                      During his professional career Joe, nicknamed ‘the Pride
                      of Wales’ and the ‘Italian Dragon’, had 46 professional
                      fights. He won them all: by knockout 32, and by decision
                      14. It is a remarkable record.{" "}
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
            path="/12to16yo/JasonMohammed"
            element={
              <Person
                indivName={"Jason Mohammed"}
                indivNameCym={"Jason Mohammed"}
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
                  "https://i.guim.co.uk/img/media/f77982ffce62788f1ab622c5a878a0b186b5d2db/1450_147_4297_2578/master/4297.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=509500c71e7dcda098b5952a4f2ba212"
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
              ></Person>
            }
          ></Route>
          <Route
            path="/12to16yo/ElizabethCampbell"
            element={
              <Person
                indivName={"Elizabeth Campbell"}
                indivNameCym={"Elizabeth Campbell"}
                proposedResource={
                  "Mel interviewing Natalie Jones? or Wayne (Connagh's dad?)"
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

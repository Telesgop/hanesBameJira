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
import johnBackground from "./Images/johnWBackground.jpeg";
import PersonTVBack from "./Components/Person/PersonTVBack";
import Index from "./Components/Index/Index";
import ThreeToSix from "./Components/ThreeToSix/ThreeToSix";
import TwelveToSixteen from "./Components/TwelveToSixteen/TwelveToSixteen";
import AnimCard from "./Components/AnimCard/AnimCard";

function App() {
  const [lang, setLang] = useState(false);
  return (
    <BrowserRouter basename="/hanesbame">
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

          <Route
            path="/6to9yo/RichardParks"
            element={
              <Person
                indivName={"Richard Parks"}
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
                indivName={"Nigel Walker"}
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
              ></Person>
            }
          ></Route>
          <Route
            path="/12to16yo/GlennWebbe"
            element={
              <Person
                indivName={"Glenn Webbe"}
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
              ></Person>
            }
          ></Route>
          <Route
            path="/9to12yo/PenrhynCastle"
            element={
              <Person
                indivName={"Penrhyn Castle"}
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
                indivPic={
                  "https://i.guim.co.uk/img/media/7c810c258320be244e1d7d4d721e8a171409c677/180_145_1240_744/master/1240.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=d36ac08cc3c44a21c37572bfc483bb4c"
                }
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
                indivName={"Merthyr Tydfil Synagogue"}
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
            path="/6to9yo/JohnYstumllyn"
            element={
              <PersonTVBack
                indivName={"John Ystumllyn"}
                welshText={
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
                      In 2001, Richard represented Wales Sevens in the Rugby
                      World Cup in Argentina.
                    </li>
                    <li>Richard also won 4 caps playing for Wales.</li>
                    <li>
                      Following an injury to his ligaments and medical problems
                      with his shoulder, Richard retired from professional rugby
                      aged 31 in 2009. He then reinvented himself as an extreme
                      athlete.
                    </li>
                    <li>
                      In July 2011, on an expedition known as the 737 Challenge,
                      Richard became the first person to climb the highest
                      mountain on each of the world’s seven continents and stand
                      on all three poles (the North Pole, the South Pole and the
                      summit of Everest). Richard completed this incredible test
                      of stamina and strength within just seven months.
                    </li>
                    <li>
                      In January 2014, Richard became the first Welshman, and
                      the fastest ever British person, to ski solo, unsupported
                      and unassisted to the South Pole.
                    </li>
                  </ul>
                }
                text={
                  <p>
                    John Ystumllyn – who is also known by the names Jack Du or
                    Jack Black – was a gardener in the 18th century. He was the
                    first black person in Wales who people wrote about. <br />
                    <br /> We do not know where John originally lived before he
                    arrived in Wales. He possible came here as a victim of the
                    Atlantic slave trade when he was eight years of age, which
                    may mean he came from the West Africa or the West Indies.
                    Once in Wales, John came to live with the Wynn family as a
                    servant at their Ystumllyn estate in Criccieth, where he was
                    christened with the Welsh name John Ystumllyn. <br />
                    <br /> John was taught English and Welsh by the local people
                    and also learned how to be a gardener on the estate where he
                    became very good at his job. John had his portrait painted
                    when he was a young man and it shows that he was very
                    handsome.
                    <br />
                    <br /> John fell in love with a white local maid called
                    Margaret Gruffydd. In 1768, when Margaret left for another
                    job, John left his gardening job to marry her. Theirs may
                    have been the first mixed marriage in Wales. They had seven
                    children, five of whom survived. John and Margaret then
                    worked as land stewards. Later, John went back into the
                    employment of the Wynn family. Ellis Wynn gave him a large
                    garden and cottage at Y Nhyra Isa to say thank you for all
                    his hard work.
                    <br />
                    <br /> John was a very likeable person. He also is known to
                    have not suffered much racial prejudice, though locals did
                    often express surprise at seeing a black man for the first
                    time. John died in 1786; his wife, Margaret, lived for more
                    than forty years more. <br />
                    <br />
                    Many years after his death, a small monument was built near
                    where John was buried in St Cynhaearn's Church. Recently,
                    Zehra Zaidi, the founder of We Too Built Britain, approached
                    the Chelsea flower show winner Harkness Roses with the idea
                    of creating a rose named after John Ystumllyn. The beautiful
                    rose is yellow, symbolising friendship.
                  </p>
                }
                indivPic={johnBackground}
                slugText={"18th Century Gardener"}
              ></PersonTVBack>
            }
          >
            {" "}
          </Route>
          <Route path="/index" element={<Index />}></Route>
        </Routes>
      </LanguageContext.Provider>
    </BrowserRouter>
  );
}

export default App;

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
                indivPic={
                  "https://www.richardparks.co.uk/files/7715/4383/2077/Richard_banner_mobile.png"
                }
                backText={`Through his incredible achievements – as a professional rugby player and as an extreme athlete – Richard Parks proved that despite setbacks and frustrations, we are all capable of turning our skills and abilities to other things.  Because of his never-give-up attitude and determination to succeed at something new, Richard is an inspirational figure to many – both in Wales and beyond.   `}
                slugText={"Rugby player and extreme athlete."}
              ></Person>
            }
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
                welshText={<ul></ul>}
                backText={`Nigel Walker’s career path demonstrates how with perseverance, hard work and focus we can achieve our goals and use our abilities and skills to further our ambitions.  
  
                `}
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
                welshText={<ul></ul>}
                backText={`Hopefully, the racism Glenn experienced and the expectation that he would ‘play on’ despite suffering a head injury now belong firmly in the past.  
                `}
                slugText={"Wales’ first black icon."}
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
                backText={`The Pennant family received in today’s money £1.3 million for freeing 764 enslaved people in Jamacia.  It is money forever tarnished by the suffering caused by slavery.`}
                slugText={
                  "The impressive castle and it's links to the slave trade."
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
                backText={`Dr Hans Lichtenstein lived a remarkable life.  Being Jewish in Hitler’s Germany, Hans faced violence and intimidation.  On moving to Britain on the Kindertransport, Hans worked hard and fulfilled his dream of becoming a doctor – but he never stopped having new interests. `}
                slugText={"The boy who fled from Nazi Germany."}
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
                  <ul>
                    <li>The Merthyr Synagogue was built in 1877 </li>
                    <li>
                      It was designed by Charles Taylor, an architect, who lived
                      locally.{" "}
                    </li>

                    <li>
                      A lot of Jewish people moved to Merthyr Tydfil when lots
                      of factories opened there and it became the largest town
                      in Wales.{" "}
                    </li>
                    <li>
                      The Jewish people formed a congregation, a group to pray
                      together, in in 1848.{" "}
                    </li>

                    <li>
                      When the factories had less work a lot of Jews left
                      Merthyr to look for jobs elsewhere.{" "}
                    </li>

                    <li>
                      The Merthyr Synagogue is probably the only synagogue in
                      the world which has a Welsh dragon on it.{" "}
                    </li>

                    <li>
                      In 1960 the synagogue was painted by the well-known
                      artist, L. S. Lowry. The painting sold for £277,000 in
                      March 2022.{" "}
                    </li>

                    <li>
                      In 2019, the building was bought by the Foundation for
                      Jewish Heritage.{" "}
                    </li>

                    <li>
                      In 2021 they had to repair the building to make it safe
                      and weather-proof.{" "}
                    </li>

                    <li>
                      The Foundation for Jewish Heritage hope to open the
                      building as a Jewish Heritage Centre by 2025.{" "}
                    </li>
                    <li>
                      Michael Mail of the Foundation for Jewish Heritage
                      believes the building is very important because ‘it’s the
                      oldest purpose-built Jewish building surviving in Wales’.{" "}
                    </li>
                  </ul>
                }
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
                backText={`The Merthyr Synagogue is important because it is a symbol of how important the Jewish community has been to Wales and Welsh history. `}
                slugText={
                  "The oldest purpose-built Jewish building surviving in Wales."
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

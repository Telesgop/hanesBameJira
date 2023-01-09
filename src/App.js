import { useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { LanguageContext } from "./Helper/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SixToNine from "./Components/SixToNine/SixToNine";
import Person from "./Components/Person/Person";
import PersonBack from "./Components/Person/PersonBack";
import Copyright from "./Components/Copyright/Copyright";
import NineToTwelve from "./Components/NineToTwelve/NineToTwelve";
import richardParks from "./Images/richardParks.png";
import johnBackground from "./Images/johnWBackground.jpeg";
import PersonTVBack from "./Components/Person/PersonTVBack";
import Index from "./Components/Index/Index";
import data from "./api.json";
import ThreeToSix from "./Components/ThreeToSix/ThreeToSix";

console.log(data);

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
            path="/9to12yo"
            element={<NineToTwelve></NineToTwelve>}
          ></Route>
          <Route path="/12to12yo" element={<SixToNine></SixToNine>}></Route>
          <Route path="/back" element={<PersonBack></PersonBack>}></Route>
          <Route
            path="/6to9yo/example"
            element={
              <Person
                indivName={"Example Post"}
                // indivPic={char1}
                welshText={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim a augue sit amet porta. Vivamus id mi at lectus mattis laoreet tempor nec enim. Suspendisse sit amet dui rhoncus, porta justo imperdiet, mattis lacus. Donec purus dui, lobortis quis odio sed, tincidunt eleifend sapien. Curabitur lobortis fermentum massa et lobortis. Morbi malesuada vulputate nibh, et vulputate urna bibendum euismod. Quisque varius arcu vel nulla iaculis accumsan. Duis mollis justo eget leo ultrices, in congue eros tincidunt. Vestibulum et accumsan enim. Vestibulum luctus quam id massa mollis venenatis. Suspendisse quis nulla quis diam ultricies sollicitudin id sit amet dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin elementum justo id ante malesuada posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis vel efficitur purus. In eget porta diam, ac egestas leo. Vestibulum venenatis cursus diam. In hac habitasse platea dictumst. Nulla in erat augue. Suspendisse et ligula quis neque facilisis condimentum quis vitae dolor. Fusce in aliquam augue. Vivamus in metus mauris. Cras ac diam venenatis, cursus ipsum vitae, congue odio. Proin a risus sit amet turpis lobortis dictum. Praesent eget tempor urna. Susulla iaculis accumsan. Duis mollis justo eget leo ultrices, in congue eros tincidunt. Vestibulum et accumsan enim. Vestibulum luctus quam id massa mollis venenatis. Suspendisse quis nulla quis diam ultricies sollicitudin id sit amet dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin elementum justo id ante malesuada posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis vel efficitur purus. In eget porta diam, ac egestas leo. Vestibulum venenatis cursus diam. In hac habitasse platea dictumst. Nulla in erat augue. Suspendisse et ligula quis neque facilisis condimentum quis vitae dolor. Fusce in aliquam augue. Vivamus in metus mauris. Cras ac diam venenatis, cursus ipsum vitae, congue odio. Proin a risus sit amet turpis lobortis dictum. Praesent eget tempor urna. Suspendisse quis lobortis sapien, eget fermentum nulla. Mauris sit amet elit eu nisi iaculis consequat. Fusce in arcu cursus, vehicula risus non, placerat lectus.`}
                text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim a augue sit amet porta. Vivamus id mi at lectus mattis laoreet tempor nec enim. Suspendisse sit amet dui rhoncus, porta justo imperdiet, mattis lacus. Donec purus dui, lobortis quis odio sed, tincidunt eleifend sapien. Curabitur lobortis fermentum massa et lobortis. Morbi malesuada vulputate nibh, et vulputate urna bibendum euismod. Quisque varius arcu vel nulla iaculis accumsan. Duis mollis justo eget leo ultrices, in congue eros tincidunt. Vestibulum et accumsan enim. Vestibulum luctus quam id massa mollis venenatis. Suspendisse quis nulla quis diam ultricies sollicitudin id sit amet dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin elementum justo id ante malesuada posuere.
                Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis vel efficitur purus. In eget porta diam, ac egestas leo. Vestibulum venenatis cursus diam. In hac habitasse platea dictumst. Nulla in erat augue. Suspendisse et ligula quis neque facilisis condimentum quis vitae dolor. Fusce in aliquam augue. Vivamus in metus mauris. Cras ac diam venenatis, cursus ipsum vitae, congue odio. Proin a risus sit amet turpis lobortis dictum. Praesent eget tempor urna. Susulla iaculis accumsan. Duis mollis justo eget leo ultrices, in congue eros tincidunt. Vestibulum et accumsan enim. Vestibulum luctus quam id massa mollis venenatis. Suspendisse quis nulla quis diam ultricies sollicitudin id sit amet dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin elementum justo id ante malesuada posuere.
                Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis vel efficitur purus. In eget porta diam, ac egestas leo. Vestibulum venenatis cursus diam. In hac habitasse platea dictumst. Nulla in erat augue. Suspendisse et ligula quis neque facilisis condimentum quis vitae dolor. Fusce in aliquam augue. Vivamus in metus mauris. Cras ac diam venenatis, cursus ipsum vitae, congue odio. Proin a risus sit amet turpis lobortis dictum. Praesent eget tempor urna. Suspendisse quis lobortis sapien, eget fermentum nulla. Mauris sit amet elit eu nisi iaculis consequat. Fusce in arcu cursus, vehicula risus non, placerat lectus.`}
              ></Person>
            }
          ></Route>
          <Route
            path="/6to9yo/RichardParks"
            element={
              <Person
                indivName={"Richard Parks"}
                // indivPic={char1}
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
                indivPic={richardParks}
                backText={`Through his incredible achievements – as a professional rugby
                player and as an extreme athlete – Richard Parks proved that
                despite setbacks and frustrations, we are all capable of
                turning our skills and abilities to other things. Because of
                his never-give-up attitude and determination to succeed at
                something new, Richard is an inspirational figure to many –
                both in Wales and beyond.`}
                slugText={"Rugby player / athlete"}
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

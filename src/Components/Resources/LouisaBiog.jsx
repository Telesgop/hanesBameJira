import React from "react";
import "./Resources.css";
import { LanguageContext } from "../../Helper/Context";
import { useContext } from "react";

const LouisaBiog = () => {
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <>
      <div className="resourcePage">
        <h1 className="resourceH1">
          {lang ? "" : "An imaginary biography of Louisa BB Morgan "}
        </h1>

        <p className="resourceP">
          {lang
            ? ""
            : "Travel broadens the mind. Literally. Travel expands the mind, enriches your character and feeds the soul. And I know that from experience as I've been lucky enough to have opportunities to travel to the four corners of the world! "}
        </p>
        <p className="resourceP">
          {lang
            ? ""
            : "When I was born in London in 1951 my father made a promise. If he had any spare money he wouldn't spend it on material things bur rather spend on ensuring that I would get experiences, experiences and more experiences! And fair play, he kept to his word. With support from my parents I've seen and experienced a lot of this old world over the years.  "}{" "}
        </p>
        <p className="resourceP">
          {lang
            ? ""
            : "When I was only 9 years old I got to go to Nigeria to get my education in a Catholic School. It was quite an experience, difficult at first, but looking back this period gave me a solid foundation for the rest of my life. In school I loved singing and dancing and I was always given opportunities to learn new languages. These opportunities lead me to study languages and communication in university.   "}
        </p>
        <p className="resourceP">
          {lang
            ? ""
            : "After I graduated from university I pursued several varied careers. I've worked for the recrod company CBS in London and met famous people galore. I had a period of working as a translator for the Embassy in Grenada. During this time Iearnt how important it is to put yourself in other people's shoes and look at the world through their eyes. I saw how fragile life is for so many people, how fragile some of our habitats are, and how important the relationship between the two is. Unfortunately I cannot talk about the most important path in my career as I'd be breaking the Official Secrets Act and would be in a lot of trouble. I can say that I had a very exciting time working for Hughes Aircraft Systems International for NATO! "}
        </p>
        <p className="resourceP">
          {lang
            ? ""
            : "So I've seen and experienced a lot of this old world during my lifetime, good and bad. I've seen so many incredible things that people do to help each other and the environment. But I've also experienced prejudice and racism across the world including in Wales, my home by now. "}
        </p>
        <p className="resourceP">
          {lang
            ? ""
            : "I feel I've been privelidged and lucky to be able to contribute to making this world a better place but there's a lot more to do if we are to live together in peace on this planet.    "}
        </p>
        <div className="learningOutcomes">
          <h2>{lang ? "Eich tro chi! " : "Your turn! "}</h2>
          <p className="resourceP">
            {lang
              ? ""
              : `In this imagined piece Lousia BB Morgan looks back at her life and the effect that all the travelling has had on her. Why don't you write about memories of a journey that you've been on or an imaginary journey that you would like to do in the future. Describe the locations you've visited, your experiences there and the effect that the visit had on you. e.g. if you travelled to Krakow a visit to Auschwitz would be likely to have a big effect on someone.   `}
          </p>
          <p className="resourceP">
            <strong>{lang ? "Deilliant Dysgu:" : "Learning Outcome:"}</strong>
            <br /> {lang ? "" : "Able to write a biography "}
          </p>
          <p className="resourceP">
            <strong>
              {lang ? "Meini Prawf Llwyddiant: " : "Success Criteria:"}
            </strong>
            <br />{" "}
            {lang ? " " : "Do research and record facts about the locations"}
            <br />
            {lang
              ? ""
              : "Think about the experiences you had or could have had there "}
            <br />
            {lang ? " " : "Describe how these experiences made you feel  "}
            <br />
            {lang
              ? ""
              : "Write in the first person using the past tense of the verb  "}
          </p>
        </div>
      </div>
    </>
  );
};

export default LouisaBiog;

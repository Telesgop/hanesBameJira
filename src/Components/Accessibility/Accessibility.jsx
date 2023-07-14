import React from "react";
import "./Accessibility.css";
import { LanguageContext } from "../../Helper/Context";
import { useContext } from "react";

const Accessibility = () => {
  document.body.style = "background: #f2f2f2;";
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <div className="notesMain">
      <h1 className="a11yH1">Accessibility</h1>
      <p className="notesP">
        {lang !== true
          ? "We are keen for the 'Our Welsh History' website to be easy to use and accessible."
          : "Rydym yn awyddus i wefan 'Hanes Cymru Ni' fod yn hawdd i’w dilyn ac yn hygyrch. "}
      </p>
      <p className="notesP">
        {lang !== true
          ? "To aid accessibility, it is possible to navigate the site using the keyboard."
          : "Er mwyn cynorthwyo'r hygyrchedd, mae modd llywio drwy'r wefan gan ddefnyddio'r bysellfwrdd."}
      </p>
      <ul className="notesP">
        {lang ? (
          <>
            <li>
              Gwasgwch 1 - 4 i newid rhwng y tudalennau blaen Camau Cynnydd.
            </li>
            <li>Gwasgwch L er mwyn newid yr iaith rhwng Cymraeg a Saesneg.</li>
            <li>Gwasgwch M i agor y ddewislen.</li>
            <li>Yna gellir symud drwyddi gan ddefnyddio'r bysell Tab.</li>
          </>
        ) : (
          <>
            <li>Press 1 - 4 to toggle between Progression Step Homepages.</li>
            <li>Press L to switch between English and Welsh.</li>
            <li>
              Press F to flip between the front and back of an individual card.
            </li>
            <li>Press M to access the menu.</li>
            <li>Then you can use the Tab key to cycle through the options.</li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Accessibility;

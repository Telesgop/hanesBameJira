import React from "react";
import "./Resources.css";
import { LanguageContext } from "../../Helper/Context";
import { useContext } from "react";

const Kizzy = ({ bgColour }) => {
  const { lang, setLang } = useContext(LanguageContext);
  document.body.style = "background: #f2f2f2;";

  return (
    <>
      <div className="resourcePage">
        <h1 className="resourceH1">
          {lang ? "Kizzy Crawford" : "Kizzy Crawford"}
        </h1>

        <div
          className="learningOutcomes"
          style={{ "background-color": "#FF686B" }}
        >
          <h2>{lang ? "Eich tro chi! " : "Your turn! "}</h2>
          <p className="resourceP">
            {lang
              ? "Gwrandewch ar y gân 'Enfys yn y glaw'.  "
              : "Listen to the song 'The Starling'. (link in the weblinks section)"}
          </p>
          <p className="resourceP">
            {lang
              ? "Sut mae'r gân yn gwneud i chi deimlo?  "
              : "How does the song make you feel?"}
          </p>
          <p className="resourceP">
            {lang
              ? "Gwrandewch ar y gân eto gan ganolbwyntio ar y delweddau sy'n cael eu defnyddio.  "
              : "Listen to the song again concentrating on the imagery used."}
          </p>
          <p className="resourceP">
            {lang
              ? "Mynegwch sut mae'r gân yn gwneud i chi deimlo neu ceisiwch gyfleu delwedd o'r geiriau mewn darn o gelf o'ch dewis chi.   "
              : "Express how it makes you feel or convey an image form the lyrics through your chosen art form. "}
          </p>
          <p className="resourceP">
            <strong>{lang ? "Deilliant Dysgu:" : "Learning Outcome:"}</strong>
            <br />{" "}
            {lang
              ? "Meddwlgarwch wrth greu celf"
              : "Mindfulness through creating art"}
          </p>
          <p className="resourceP">
            <strong>
              {lang ? "Meini Prawf Llwyddiant: " : "Success Criteria:"}
            </strong>
            <br />{" "}
            {lang
              ? "Lluniau yn adlewyrchu sut ydych yn teimlo neu ddelwedd o'r gân "
              : "Images reflect how you feel or an image from the song"}
          </p>
        </div>
      </div>
    </>
  );
};

export default Kizzy;

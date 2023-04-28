import React from "react";
import "./Resources.css";
import { LanguageContext } from "../../Helper/Context";
import { useContext } from "react";
import newspaper from "../../Images/news.png";
const LennLawrence = () => {
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <>
      <div className="resourcePage">
        <h1 className="resourceH1">
          {lang
            ? "Lenn yr Arwr yn Achub Abertawe! "
            : "Len the Hero Saves Swansea! "}
        </h1>
        <p className="resourceP">
          <strong>
            {lang
              ? "Un o Genhedlaeth Windrush yw Lenn Lawrence. Daeth i Gymru yn 1960 i helpu i ailadeiladu’r wlad ar ôl yr Ail Ryfel Byd. Tra oedd yn byw yn Abertawe, daeth yn arwr dros nos wrth helpu gyda digwyddiad difrifol iawn yn yno. Dyma erthygl papur newydd sy’n adrodd ei hanes: "
              : "Lenn Lawrence is one of the Windrush Generation. He came to Wales in 1960 to help rebuild the country after the Second World War. While he was living in Swansea, he became an overnight hero because of the way he dealt with something really serious which happened there. Here is a newspaper article telling his story: "}
          </strong>{" "}
        </p>
        <div>
          <img
            src={newspaper}
            style={{ height: "800px", width: "600px" }}
          ></img>
        </div>
        <div className="learningOutcomes">
          <h2>{lang ? "Eich tro chi! " : "Your turn! "}</h2>
          <p className="resourceP">
            {lang
              ? "Mae erthygl Papur Newydd yn rhoi gwybodaeth am ddigwyddiad: Beth sydd wedi digwydd? I bwy mae wedi digwydd? Ble ddigwyddodd hyn? Pryd ddigwyddodd hyn? Pam ddigwyddodd hyn? "
              : `A newspaper article provides information about an event: What has happened? 

            Whom has it happened to? 
            
            Where did this happen? 
            
            When did this happen? 
            
            Why did this happen? `}
          </p>
          <p className="resourceP">
            {lang
              ? "Beth am i chi ysgrifennu erthygl papur newydd eich hun am ddigwyddiad yn eich ardal chi? Gallwch osod eich testun mewn colofnau a hefyd ychwanegu lluniau at y darn. "
              : "How about writing a newspaper article yourselves about an event in your area? You can set your text in columns and also add pictures to the piece.  "}
          </p>
          <p className="resourceP">
            <strong>{lang ? "Deilliant Dysgu:" : "Learning Outcome:"}</strong>
            <br />{" "}
            {lang
              ? "Gallu ysgrifennu erthygl papur newydd "
              : "Able to write a newspaper article "}
          </p>
          <p className="resourceP">
            <strong>
              {lang ? "Meini Prawf Llwyddiant: " : "Success Criteria:"}
            </strong>
            <br />{" "}
            {lang
              ? "Pennawd bachog, e.e. Lenn yn dal ei dir! "
              : "A catchy headline, e.g. Lenn holds his ground! "}
            <br />
            {lang ? "Paragraffau byr " : "Short paragraphs "}
            <br />
            {lang
              ? "Mae angen i chi ddyfynnu geiriau rhywun, e.e. llygad dyst "
              : "You need to quote the words of someone, e.g. an eyewitness "}
            <br />
            {lang
              ? "Ysgrifennu yn y gorffennol "
              : "Writing in the past tense "}
            <br />
            {lang
              ? "Gallwch sôn am y digwyddiad yn nhrefn amser "
              : "You can say what happened in chronological order (the order it happened in time)  "}
          </p>
        </div>
      </div>
    </>
  );
};

export default LennLawrence;

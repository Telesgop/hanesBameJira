import React from "react";
import "./Resources.css";
import { LanguageContext } from "../../Helper/Context";
import { useContext } from "react";
import postcard from "../../Images/postcard.png";
import postcardCym from "../../Images/postcardCym5.png";

const WilsonMonk = () => {
  const { lang, setLang } = useContext(LanguageContext);
  document.body.style = "background: #f2f2f2;";

  return (
    <>
      <div className="resourcePage">
        <h1 className="resourceH1">
          {lang
            ? "Llythyr Jessie Prior o Abersychan  "
            : "A letter by Jessie Prior from Abersychan "}
        </h1>
        <p className="resourceP">
          {lang
            ? "Yn ystod yr Ail Ryfel Byd, daeth llawer o filwyr America i Brydain ac un o’r rheini oedd Wilson Monk o Atlantic City. Roedd bywyd oddi cartref yn gallu bod yn anodd iawn i rai o’r milwyr ifanc ond roedd pobl fel Jessie Prior o Abersychan yn barod i’w croesawu i’w cartrefi eu hunain. Tra oedd yng Nghymru, daeth Jessie Prior fel mam faeth i Wilson Monk. O ganlyniad, tyfodd cyfeillgarwch mawr rhwng Jessie a Rosita, mam Wilson. Hyd yn oed ar ôl diwedd y rhyfel bu’r ddwy’n anfon llythyrau at ei gilydd am flynyddoedd lawer a daethon nhw’n ffrindiau am oes. Dyma enghraifft o’r math o lythyr roedd Jessie Prior yn ei ysgrifennu at fam Wilson: "
            : "During the Second World War, many American soldiers came to Britain and Wilson Monk from Atlantic City was one of them. Life away from home could be very difficult for some of the young soldiers but people like Jessie Prior from Abersychan were willing to welcome them into their own homes. While Wilson Monk was in Wales, Jessie Prior became like his foster mother. As a result, a great friendship grew between Jessie and Rosita, Wilson's mum. Even at the end of the war, the two women exchanged letters for many years and became friends for life. This is an example of the kind of letter Jessie Prior wrote to Wilson's mother:  "}
        </p>

        <div className="learningOutcomesPoem">
          {lang ? (
            <img
              src={postcardCym}
              style={{ border: "1px solid black", marginBottom: "20px" }}
            ></img>
          ) : (
            <img
              src={postcard}
              style={{ border: "1px solid black", marginBottom: "20px" }}
            ></img>
          )}
        </div>
        <div
          className="learningOutcomes"
          style={{ backgroundColor: "#CFE57D" }}
        >
          <h2>{lang ? "Eich tro chi! " : "Your turn! "}</h2>
          <p className="resourceP">
            {lang
              ? "Mewn ymson rydych chi’n meddwl yn uchel, yn siarad ac yn sôn am eich teimladau chi. Beth am i chi roi cynnig ar ysgrifennu ymson Wilson Monk? Bydd angen i chi feddwl am deimladau Wilson ynglŷn â gadael ei gartref yn Atlantic City a’r croeso y mae wedi ei gael yn Abersychan. Hefyd, gallwch sôn am ei deimladau am y rhyfel, ei ofnau a’i obeithion am y dyfodol.            "
              : `In a monologue, you are thinking aloud, you are talking and discuss your feelings. How about having a go at writing Wilson Monk's monologue? You will need to think about Wilson's feelings regarding leaving his home in Atlantic City and the welcome he's had in Abersychan. You can also mention his feelings about the war, his fears and hopes for the future. `}
          </p>

          <p className="resourceP">
            <strong>{lang ? "Deilliant Dysgu:" : "Learning Outcome:"}</strong>
            <br />{" "}
            {lang ? "Gallu ysgrifennu ymson  " : "Able to write a monologue   "}
          </p>
          <p className="resourceP">
            <strong>
              {lang ? "Meini Prawf Llwyddiant: " : "Success Criteria:"}
            </strong>
            <br />{" "}
            {lang
              ? "Ysgrifennu yn y person cyntaf, e.e. Dwi’n..  "
              : "Writing in the first person, e.g. I'm.. "}
            <br />
            {lang
              ? "Ysgrifennu am deimladau, e.e. Mae gen i hiraeth  "
              : "Writing about feelings, e.g. I'm homesick "}
            <br />
            {lang
              ? "Defnyddio cwestiynau rhethregol, e.e. Tybed beth fydd yn digwydd..? "
              : "Using rhetorical questions, e.g. I wonder what will happen..?  "}
            <br />
            {lang
              ? "Edrych yn ôl ar ddigwyddiad, e.e. Ddoe roeddwn i wrth fy modd..  "
              : "Looking back at an event, e.g. Yesterday I was really happy..   "}
            <br />
            {lang
              ? "Edrych ymlaen ar beth a ddaw, e.e. Dwi’n gwybod sut bydd o’n ymateb..  "
              : "Looking ahead to what's going to happen, e.g. I know how he'll respond..  "}
          </p>
        </div>
      </div>
    </>
  );
};

export default WilsonMonk;

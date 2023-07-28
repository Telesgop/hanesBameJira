import React from "react";
import "./Info.css";
import { useContext } from "react";
import { LanguageContext } from "../../Helper/Context";

const Info = () => {
  document.body.style = "background: #f2f2f2;";
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <div className="infoMain">
      <h1 className="infoH1">
        {" "}
        {lang ? "Cydnabyddiaethau " : "Acknowledgements"}
      </h1>
      <p className="infoP">
        {lang
          ? "Hoffai Telesgop ddiolch i bawb sydd wedi cyfrannu i'r wefan yn cynnwys -"
          : "  Telesgop would like to thank everyone who contributed to the website including -"}{" "}
      </p>
      <div className="creditsGrid">
        <div className="creditBubble">
          <h1 className="creditsH1">{lang ? "Awduron" : "Authors"}</h1>
          <p>Branwen Davies</p>
          <p>Jade Davies</p>
          <p>Annie Grooms</p>
          <p>Beverly Rogers</p>
          <p>Osian Rowlands</p>
          <p>Wyn Thomas</p>
          <p>Emma Watt</p>
          <p>Jess Wilde</p>
        </div>
        <div className="creditBubble">
          <h1 className="creditsH1">
            {" "}
            {lang
              ? "Ymgynghorwyr a Grŵp Monitro"
              : "Advisors & Monitoring Group"}
          </h1>
          <p>Ashok Ahir</p>
          <p>Isaac Blake</p>
          <p>Jade Davies</p>
          <p>Tudur Dylan</p>
          <p>Catrin Gwyn</p>
          <p>Elizabeth Harewood</p>
          <p>Anwen Jones</p>
          <p>Natalie Jones</p>
          <p>Savanna Jones</p>
          <p>Susan Joshi</p>
          <p>Emily Pemberton</p>
        </div>
        <div className="creditBubble">
          <h1 className="creditsH1">
            {lang ? "Grŵp Treialu " : "Trialling Group"}
          </h1>
          <p>Manon Jones, Ysgol Gynradd Gymraeg Hamadryad</p>
          <p>Matthew Jones & Rachel Davies, Ysgol Bro Famau</p>
          <p>Huw Price & Owen Morgan, Ysgol Gyfun Gymraeg Plasmawr</p>
          <p>Megan Price, Ysgol Cwm Rhymni</p>
        </div>
        <div className="creditBubble">
          <h1 className="creditsH1">{lang ? "Cyfranwyr" : "Contributors"}</h1>
          <p>Theo Cabango</p>
          <p>Hanan Issa</p>
          <p>Mirain Iwerydd</p>
          <p>Dom James</p>
          <p>Gerallt Wyn Jones</p>
          <p>Natalie Jones</p>
          <p>Sian Jones</p>
          <p>Gaynor Legall</p>
          <p>Pete Leung</p>
          <p>Michael Mail</p>
          <p>Mel Owen</p>
          <p>Emily Pemberton</p>
        </div>
        <div className="creditBubble">
          <h1 className="creditsH1">
            {lang ? "Cyfieithu a Golygu" : "Translation and Editing"}
          </h1>
          <p>Elin Meek</p>
          <p>Gwenllian Richards</p>
        </div>
        <div className="creditBubble">
          <h1 className="creditsH1">Telesgop</h1>
          <p>Srishti Berry</p>
          <p>Leia Cordey</p>
          <p>Mared Dafydd</p>
          <p>Siwan Fflur</p>
          <p>Tom Mann</p>
          <p>Mike Moore</p>
          <p>Teleri Rees</p>
          <p>Aled Richards</p>
          <p>Rhodri Rutherford</p>
        </div>
        <div className="creditBubble">
          <h1 className="creditsH1">{lang ? "Arall" : "Other"}</h1>
          <p>Mwnci Animation</p>
          <p>Gafyn Jones</p>
          <p>Guto Orwig</p>
          <p>Beca Evans</p>
          <p>Dom James</p>
          <p>Twm Richards</p>
        </div>
        <div className="creditBubble">
          <h1 className="creditsH1">
            {lang
              ? "Diolch i'r canlynol am ganiatáu i ni ddefnyddio eu lluniau / fideos dan hawlfraint.  "
              : "Thank you to the following for allowing us to use their images / videos under copyright."}
          </h1>
          <p>Dr Ganesh Subrahmanyam</p>
          <p>Sioned Birchall</p>
          <p>Cwmni Da</p>
          <p>Kyle Legall</p>
          <p>Martha Stone Productions</p>
          <p>People's Collection of Wales</p>
        </div>
      </div>
      <p className="infoP">
        {lang
          ? "Rydym wedi gwneud pob ymdrech i sicrhau lluniau sy’n rhydd o hawlfraint o Creative Commons a safleoedd eraill. Os ydych yn credu bod unrhyw lun yn torri deddf hawlfraint yna cysylltwch â ni."
          : "Efforts have been made to source copyright-free images via Creative Commons and other sites. However if it is believed any image contravenes copyright please let us know. "}{" "}
      </p>
      <p className="infoP">Site version 1.0.0 </p>
    </div>
  );
};

export default Info;

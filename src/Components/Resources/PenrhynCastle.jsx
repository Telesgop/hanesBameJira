import React from "react";
import "./Resources.css";
import { LanguageContext } from "../../Helper/Context";
import { useContext } from "react";

const PenrhynCastle = () => {
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <>
      <div className="resourcePage">
        <h1 className="resourceH1">
          {lang
            ? "A ddylai pobl wrthod ymweld â Chastell Penrhyn?"
            : "Should people refuse to visit Penrhyn Castle?"}
        </h1>
        <p className="resourceP">
          {lang ? (
            <strong>
              This is an imagined discussion between Alaw and Dafydd about
              whether or not people should visit Penrhyn Castle.{" "}
            </strong>
          ) : (
            <strong>
              Dyma drafodaeth ddychmygol rhwng Alaw a Dafydd ynglŷn ag a ddylai
              pobl ymweld â Chastell Penrhyn neu beidio.
            </strong>
          )}
        </p>
        <p className="resourceP">
          <strong>Alaw: </strong>
          {lang
            ? "Castell ffantasi enfawr a adeiladwyd rhwng 1820 a 1837 yw Castell Penrhyn. Mae miloedd o bobl yn ymweld â’r safle bob blwyddyn. Adeiladwyd Castell Penrhyn fel cartref moethus i’r teulu Pennant, teulu cyfoethog iawn a oedd yn berchen ar lawer o diroedd yng Nghymru a hefyd ar Ynysoedd y Caribî. Roedd y tir yn y Caribî yn cael ei ddefnyddio i dyfu planhigion siwgr a oedd yn creu elw mawr i’r teulu dros nifer o flynyddoedd. "
            : "Castell Penrhyn is a huge fantasy castle built between 1820 and 1837; thousands of people visit the site every year. Castell Penrhyn was built as a luxury home for the Pennant family, a very rich family who owned a great deal of land in Wales and also in the Caribbean Islands. The land in the Caribbean was used to grow sugar plants that made a large profit for the family over many years. "}
        </p>
        <p className="resourceP">
          {lang
            ? "Buodd adeiladu Castell Penrhyn yn help mawr i ddatblygu’r rhan hwn o Ogledd Cymru. Cyn adeiladu Castell Penrhyn, pentref bychan tlawd oedd pentref Llandygái, ond ar ôl adeiladu’r castell aeth y teulu Pennant ati i adeiladu llawer o dai newydd i’r trigolion. O ganlyniad, tyfodd pentref Llandygái i fod yn un o bentrefi harddaf yr ardal. Yn ogystal â hyn, adeiladwyd nifer o ysgolion i blant yr ardal, ffyrdd, rheilffyrdd, eglwysi a hefyd nifer o ffermydd ar y tir o amgylch y castell. Y peth gorau a wnaeth Teulu Pennant i Ogledd Cymru oedd adeiladu Chwarel y Penrhyn yn ardal Bethesda. Roedd y chwarel yn cynhyrchu llechi a oedd yn cael eu gyrru i bedwar ban byd gan greu nifer o swyddi i bobl ar draws Cymru.  "
            : "Building Penrhyn Castle was a great help in developing this part of North Wales. Before Penrhyn Castle was built, Llandygái was a small and poor village, but after building the castle, the Pennant family built many new houses for the inhabitants. As a result, Llandygái village became one of the area's most beautiful villages. As well as this, a number of schools for the area's children, roads, railways, churches and also farms were built on the land surrounding the castle. The best thing the Pennant Family did for North Wales was to build the Penrhyn Quarry in the Bethesda area. The quarry produced slates which were distributed all over the world, creating many jobs for people across Wales. "}
        </p>
        <p className="resourceP">
          <strong>Dafydd: </strong>{" "}
          {lang
            ? "Ond a yw’r ymwelwyr hyn yn ymwybodol o hanes dadleuol yr adeilad trawiadol hwn? "
            : " But are these visitors aware of the controversial history of this striking building? "}{" "}
        </p>
        <p className="resourceP">
          {lang
            ? "Canlyniad caethwasiaeth oedd yr arian a ddaeth i ddatblygu’r rhan hon o Ogledd Cymru. Caethweision o Affrica oedd yn cael eu gorfodi i weithio’r tir i greu’r siwgr oedd yn bwydo coffrau Teulu Pennant. Mae’n hynod bwysig bod pobl heddiw, sy’n ymweld â’r castell, yn deall yn union sut gwnaeth y teulu eu ffortiwn i’w adeiladu. Er bod Chwarel y Penrhyn wedi creu llawer o swyddi yn yr ardal, buodd Teulu Pennant yn trin y chwarelwyr yn wael iawn. O ganlyniad i hynny cafwyd y streic hiraf yn hanes Prydain, o 1900 i 1903. Dydy ardal Bethesda byth yr un fath ers hynny a dyna pam mae nifer o bobl leol yn gwrthod ymweld â Chastell Penrhyn.  "
            : "The money to develop this part of North Wales was a result of slavery. Slaves from Africa were forced to work the land to grow the sugar which fed the coffers of the Pennant Family. It's extremely important that people visiting the castle today understand exactly how the family made their fortune to build it. Although Penrhyn Quarry created a lot of jobs in the area, the Pennant Family treated the quarrymen very badly. This led to the longest strike in the history of Britain, from 1900 to 1903. The Bethesda area hasn't been the same since, and that's why a number of local people refuse to visit Penrhyn Castle. "}
        </p>
        <p className="resourceP">
          {lang
            ? "Mae’n bwysig fod pobl yn gwybod yr hanes yn llawn am adeiladu Castell Penrhyn fel y gallan nhw wneud y penderfyniad drostyn nhw eu hunain a ydyn nhw eisiau ymweld â’r safle ai peidio. "
            : "It's important that people know the complete history of how Penrhyn Castle was built so they can make up their own minds whether they want to visit the site or not. "}
        </p>

        <div className="learningOutcomes">
          <h2>{lang ? "Eich tro chi! " : "Your turn! "}</h2>
          <p className="resourceP">
            {lang
              ? "Mae testun trafod yn cyflwyno dwy ochr i ddadl drwy gyflwyno pwyntiau dros ac yn erbyn safbwynt penodol. Beth am i chi roi cynnig ar ddylunio poster, naill ai i annog pobl i ymweld â Chastell Penrhyn neu i’w darbwyllo i beidio? "
              : `A discussion topic presents two sides to an argument by presenting points for and against a particular point of view. How about designing a poster, either encouraging people to visit Penrhyn Castle or to convince them not to? `}
          </p>
          <p className="resourceP">
            <strong>{lang ? "Deilliant Dysgu:" : "Learning Outcome:"}</strong>
            <br />{" "}
            {lang
              ? "Gallu gwneud poster i berswadio pobl "
              : "Able to create a poster to persuade people "}
          </p>
          <p className="resourceP">
            <strong>
              {lang ? "Meini Prawf Llwyddiant: " : "Success Criteria:"}
            </strong>
            <br />{" "}
            {lang
              ? "Gwneud y poster yn ddeniadol "
              : "Making the poster attractive "}
            <br />
            {lang
              ? "Gwneud yn siŵr bod y neges yn glir "
              : "Making sure that the message is clear "}
            <br />
            {lang ? "Defnyddio berfau gorchmynnol " : "Using command verbs "}
            <br />
            {lang
              ? "Defnyddio ffeithiau i gefnogi dadl  "
              : "Using facts to support an argument "}
            <br />
          </p>
        </div>
      </div>
    </>
  );
};

export default PenrhynCastle;

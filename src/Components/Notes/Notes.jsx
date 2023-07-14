import React from "react";
import "./Notes.css";
import { LanguageContext } from "../../Helper/Context";
import { useContext } from "react";

const Notes = () => {
  document.body.style = "background: #f2f2f2;";
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <div className="notesMain">
      <h1 className="notesH1">
        {" "}
        {lang ? "Hanes Cymru Ni" : "Our Welsh History"}
      </h1>
      <p className="notesP">
        {lang
          ? "Gwefan sy'n dathlu cyfoeth amrywiaeth hanes Cymru."
          : "A website which celebrates the rich and diverse history of Wales."}
      </p>
      <p className="notesP">
        {lang
          ? "Mae gwefan ‘Ein Hanes Cymru Ni’ wedi cael ei chynllunio'n benodol ar gyfer Cwricwlwm Cymru gan gydweithio'n agos ag athrawon, arbenigwyr addysgol ac aelodau o'r gymuned Ddu, Asiaidd, a Lleiafrifoedd Ethnig."
          : "The 'Our Welsh History' website has been designed specifically for the Curriculum for Wales working closely with teachers, educational experts and members of the Black, Asian, and Minority Ethnic community."}
      </p>
      <p className="notesP">
        {lang
          ? "Mae'n cynnig cyfoeth o adnoddau a fydd yn cefnogi athrawon i ddysgu am hanes a chyfraniad pobl Ddu, Asiaidd a Lleiafrifoedd Ethnig yn rhan o hanes Cymru yn y cwricwlwm newydd a gyflwynwyd yn 2022. "
          : "It provides a wealth of resources that will support teachers to teach Black, Asian, and Minority Ethnic histories and contributions as part of Welsh history in the new curriculum introduced in 2022."}
      </p>
      <p className="notesP">
        {lang
          ? "Mae'n hawdd addasu'r adnoddau i'w defnyddio'n rhan o gwricwlwm ysgol er mwyn cefnogi athrawon ac ymarferwyr i fod â hyder yn y cynnwys y maen nhw'n ei ddefnyddio. Bydd yr amrywiaeth o storïau o bob rhan o Gymru yn helpu dysgwyr i adnabod stori amrywiol Cymru, i gael eu hysbrydoli gan yr hyn sy'n cael ei addysgu iddyn nhw ac i ddod yn ddinasyddion moesegol wybodus y byd."
          : "The resources can be easily adapted to be used within a school's curriculum to support teachers and practitioners to be confident in the content that they are using. The variety of stories from across Wales will help learners to recognise the diverse story of Wales, to feel inspired by what they are being taught and to become ethically informed citizens of the world."}
      </p>
      <p className="notesP">
        {lang
          ? "Edrychwch ar y wefan er mwyn cael eich ysbrydoli!"
          : "Dip in to the website and be inspired!"}
      </p>
      <h1 className="notesH1"> {lang ? "Y Cynnwys" : "The Content"}</h1>
      <p className="notesP">
        {lang
          ? "Mae'r wefan hon yn rhannu storïau o brofiadau pobl Dduon, Asiaidd a Lleiafrifoedd Ethnig. Cafodd ei chreu gan gadw ‘Cwricwlwm Cymru’ mewn cof ac mae'n rhannu cefndir a digwyddiadau hanesyddol unigolion yng Nghymru.  Ei bwriad yw ysbrydoli ymarferwyr a dysgwyr, fel bod diben eglur a dilys wrth ystyried cymunedau Du, Asiaidd a Lleiafrifoedd Ethnig.   Drwy adfyfyrio ac archwilio, dylai ymarferwyr fagu hyder i wreiddio cyfleoedd trawsgwricwlaidd drwy addysgeg o ansawdd uchel.  "
          : "This website shares stories from Black, Asian, and Minority Ethnic experiences. It was created with the 'Curriculum for Wales’ in mind, sharing individual historical background and events in Wales. It is for practitioners and learners to become inspired, providing a clear and authentic purpose when reflecting on Black, Asian and Minority Ethnic communities. Through reflection and exploration, practitioners should become more confident to embed cross-curricular opportunities through high quality pedagogy."}
      </p>
      <p className="notesP">
        {lang ? "Mae cynnwys y wefan:" : "The website content:"}
      </p>
      <ul className="notesP">
        <li>
          {lang
            ? "yn cynnig deunyddiau a fydd yn cefnogi athrawon i ddysgu am hanes a chyfraniad pobl Dduon, Asiaidd a Lleiafrifoedd Ethnig yn rhan o hanes Cymru yn y cwricwlwm newydd a gyflwynwyd yn 2022.  "
            : "provides materials that will support teachers to teach Black, Asian, and Minority Ethnic histories and contributions as part of Welsh history in the new curriculum introduced in 2022."}
        </li>
        <li>
          {lang
            ? "yn hyblyg ac yn hawdd ei ddefnyddio o ran bod modd addasu'r deunyddiau i gefnogi athrawon i fod â hyder yn y cynnwys y maen nhw'n ei ddefnyddio.  "
            : "is flexible and user friendly in that they can easily be adapted to support teachers to be confident in the content they are using."}
        </li>
        <li>
          {lang
            ? "yn helpu dysgwyr i adnabod stori amrywiol Cymru ac i gael safbwynt newydd yn ogystal ag ysgogi trafodaethau ystyrlon am y deunydd pwnc yn eu hystafelloedd dosbarth ac yn y gymuned ehangach.  "
            : "helps learners to recognise the diverse story of Wales and to obtain a fresh perspective as well as stimulating meaningful discussions about the subject matter in their classrooms and wider community."}
        </li>
        <li>
          {lang
            ? "yn adnodd sy'n cefnogi cynllunio gwersi a themâu trawsgwricwlaidd, ond ni ddylai ddisodli'r broses o gynllunio gwersi. yn cynnwys gweithgareddau sy'n gwreiddio ac yn cefnogi'r gwaith o addysgu'r themâu hyn.  "
            : "is not meant to take the place of lesson planning but is a resource which supports lesson planning and cross-curricular themes; it includes activities which embed and support the teaching of these themes."}
        </li>
      </ul>
      <h3>{lang ? " Adrannau" : "Sections"} </h3>
      <p className="notesP">
        {lang
          ? "Mae'r cynnwys wedi'i rannu'n bedwar cam cynnydd, gan rannu profiadau pobl o amrywiaeth o gefndiroedd ethnig, o rannau amrywiol o Gymru mewn ystod o feysydd gan gynnwys y celfyddydau, chwaraeon, gwleidyddiaeth a busnes. Mae'r iaith a'r cynnwys yn mynd yn fwy heriol wrth i chi symud drwy'r camau.  "
          : "The content has been divided into the four progression steps sharing experiences of people from a variety of ethnic backgrounds, from various parts of Wales in a range of fields including the arts, sport, politics and business. The language and content become more challenging as you progress through the stages."}
      </p>
      <p className="notesP" style={{ fontStyle: "italic" }}>
        {lang
          ? "Nodyn: gall fod eitemau o ddiddordeb i chi mewn nifer o gamau cynnydd – cofiwch bori drwy’r wefan er mwyn gweld beth sydd ar gael! "
          : "Note: there may be items of interest to you in several progression steps - be sure to explore the website to see what's available!"}
      </p>
      <p className="notesP">
        {lang
          ? "Mae Cam Cynnydd 1 (CC1) yn cynnwys 6 animeiddiad ar gyfer y disgyblion ieuengaf. Mae'r clipiau byr, deniadol hyn yn cynnwys gwybodaeth ar lefel briodol i'r oedran. "
          : "Progression Step 1 (PS1) features 6 animations for the younger pupils. The engaging, short clips include information at an age appropriate level."}
      </p>
      <p className="notesP">
        {lang
          ? "Mae gan Gamau Cynnydd 2, 3 a 4 amrywiaeth o ‘gardiau’ sy'n rhoi sylw i berson, lle neu ddigwyddiad. Mae prif dudalen pob cerdyn yn cynnwys ffeithiau a ffigurau am yr eitem o dan sylw. Drwy glicio ar y saeth ar y dde i'r wybodaeth, byddwch chi'n datgelu cefn y cerdyn. Mae cefn y cardiau'n cynnwys eitem ychwanegol a all fod yn fideo, yn ffeil sain neu'n adnodd a thasg. Hefyd, maen nhw'n cynnwys syniadau trafod, ffotograffau a dolenni gwe y mae'n bosibl eu defnyddio ar gyfer rhagor o ymchwil.   "
          : "Progression Steps 2, 3 and 4 have a range of 'cards' featuring a person, place or event. The main page of each card contains facts and figures about the featured item. By clicking on the arrow to the right of the information you will reveal the back of the card. The back of the cards feature an additional item which can be a video, an audio file or a resource and task. They also contain discussion ideas, photos and weblinks which can be used for further research."}
      </p>
      <h3>{lang ? "Y Ddewislen " : "Menu"}</h3>
      <p className="notesP">
        {lang
          ? "Mae botwm y ddewislen (tair llinell ar gornel dde uchaf y wefan) yn rhoi mynediad i chi at:"
          : "The menu button (three lines at the top right-hand corner of the site) gives you access to:"}
      </p>
      <ul className="notesP">
        {lang ? (
          <>
            <li>
              <b>Adrannau</b> - dolen i'r dudalen adrannau
            </li>
            <li>
              <b>Mynegai</b> - rhestr o'r holl eitemau drwy'r wefan i gyd
            </li>
            <li>
              <b>Hygyrchedd</b> - cyfarwyddiadau sut i ddefnyddio nodweddion
              hygyrchedd y wefan
            </li>
            <li>
              <b>Deunyddiau ychwanegol</b> - deunyddiau eraill fel cyfweliadau
              estynedig
            </li>
            <li>
              <b>Gwybodaeth am y wefan</b> - gan gynnwys rhestr o gyfranwyr
            </li>
          </>
        ) : (
          <>
            <li>
              <b>Sections</b> - a link to the sections page
            </li>
            <li>
              <b>Index</b> - a list of all the items throughout the site
            </li>
            <li>
              <b>Accessibility</b> - instructions how to use the accessibility
              features of the site
            </li>
            <li>
              <b>Additional materials</b> - extra materials such as extended
              interviews
            </li>
            <li>
              <b>Site information</b> - including a list of contributors
            </li>
          </>
        )}
      </ul>
      <h3>{lang ? "Sut i ddefnyddio'r cynnwys" : "How to use the content"}</h3>
      <p className="notesP">
        {lang
          ? "Nid cynlluniau gwersi yw'r adnoddau ar y wefan hon ond yn hytrach adnoddau a fydd yn ysgogi trafodaeth ac yn ysbrydoli syniadau ar gyfer gweithgareddau yn yr ystafell ddosbarth. Bydd yr ymarferydd yn gallu dewis a dethol elfennau sy'n berthnasol i'w gwricwlwm ysgol a'i gynnwys wrth gynllunio.  "
          : "The resources on this site are not lesson plans but rather resources which will stimulate discussion and inspire ideas for activities within the classroom. The practitioner will be able to pick and choose elements which are relevant for their school curriculum and integrate it into their planning."}
      </p>
      <p className="notesP">
        {lang
          ? "Mae'r wefan wedi'i chreu gan gadw'r canlynol mewn cof: Cwricwlwm Cymru, cymunedau Du, Asiaidd a Lleiafrifoedd Ethnig, a'r dysgwyr, gan ddefnyddio dull integredig er mwyn dysgu am hanes amrywiol Cymru.  "
          : "The website is created with the Curriculum for Wales and Black, Asian, and Minority Ethnic communities and learners in mind using an integrated approach to learning about the diverse history of Wales."}
      </p>
      <p className="notesP">
        {lang
          ? "Mae'r deunyddiau wedi'u harwain gan y diben, felly mae diben eglur i helpu'r dysgwyr ddod yn fwy uchelgeisiol ac yn ddysgwyr abl, moesol wybodus sy’n rhan o gymuned fyd-eang.     "
          : "The materials are purpose led which means that there is a clear purpose to help learners become more ambitious and capable, ethically informed learners of a global community."}
      </p>
      <p className="notesP">
        {lang
          ? "Mae'r pedwar diben wrth wraidd y profiadau addysgol sydd yn adrannau cynnydd y wefan."
          : "The four purposes are at the heart of the pedagogical experiences within the progression sections of the website."}
      </p>
      <p className="notesP">
        {lang
          ? "Mae'r amrediad o adnoddau'n gallu cymhwyso a chefnogi cynllunio cwricwlwm ar gyfer y Chwe Maes Dysgu a Phrofiad, sef Y Celfyddydau Mynegiannol; Iechyd a Lles Emosiynol; Y Dyniaethau; Ieithoedd, Llythrennedd a Chyfathrebu; Mathemateg a Rhifedd; Gwyddoniaeth a Thechnoleg. Rydym wedi darparu amrywiaeth eang o adnoddau a gweithgareddau y gellir eu defnyddio wedyn fel sbardunau yn eich ystafell ddosbarth. Mae enghreifftiau o wahanol fathau o ysgrifennu, fideos a sain sy'n gallu ysbrydoli'r disgyblion i greu eu hadnoddau eu hunain.  "
          : "The range of resources can apply and support curriculum design to the Six Areas of Learning and Experience (AoLEs) Expressive Arts; Health and Well-being; Humanities; Languages, Literacy and Communication; Mathematics and Numeracy; Science and Technology. We have provided a wide range of resources and activities which can then be used as stimuli in your classroom. There are examples of different types of writing, videos and audio which can inspire the pupils to create resources of their own."}
      </p>
      <p className="notesP">
        {lang
          ? "Dylech ddefnyddio'r adnoddau i lywio'r gwaith o ddylunio'r cwricwlwm a hyrwyddo cynnydd disgyblion a'u profiadau dilys o'r byd. Wrth ddefnyddio'r adnoddau, cofiwch fod â'r pedwar diben wrth wraidd y cynllunio.  Edrychwch ar y ‘datganiadau o'r hyn sy'n bwysig’ a meddyliwch am sut bydd y deunyddiau'n galluogi profiad, cydweithrediad, annibyniaeth yn ogystal â datblygu dinasyddion gwybodus a beirniadol ynghylch amrywiaeth, sy'n herio stereoteipiau ac yn cryfhau empathi.   "
          : "The resources should be used to inform curriculum design and promote learner progression and authentic experiences of the world. When using materials, remember to have the four purposes at the heart of planning. Look at ‘what matter statements’ and think about how the materials will enable experience, collaboration, independence as well as developing diverse critically informed citizens, that challenge stereotypes and strengthen empathy."}
      </p>
      <p className="notesP">
        {lang
          ? "Er enghraifft, gan ddefnyddio Meysydd Dysgu a Phrofiad a ‘Disgrifiadau Dysgu’ y Dyniaethau:  Mae cymdeithasau dynol yn gymhleth ac yn amrywiol, ac maen nhw'n cael eu llywio gan weithredoedd a chredoau pobl. Yna, gan edrych ar y wefan, cam cynnydd 1 – animeiddiad Betty Campbell, mae nifer o ffyrdd y gallech chi drafod sut cafodd Betty Campbell effaith enfawr ar brofiad plant o addysg yng Nghymru a bod hyn yn gysylltiedig â'i chredoau.  Mae'n bosibl defnyddio'r adnodd hwn i alluogi dysgwyr i ddatblygu dealltwriaeth gyffredin o hanes amrywiol, treftadaeth ddiwylliannol, amrywiaeth ethnig, hunaniaethau, profiadau a safbwyntiau'r Cymry. Maen nhw'n cynnig cyfleoedd i rannu Cymreictod ac i ehangu eu dealltwriaeth o Gynefin yn eu cymunedau.    "
          : "For example, using the humanities AOLE and ‘Descriptions of Learning’: Human societies are complex and diverse influenced by processes and human actions. Then looking at the website, progression step 1 – Betty Campbell’ animation there are several ways you could discuss how Betty Campbell had a huge impact on children’s experience of education in Wales and this was linked to her beliefs. This resource can be used to enable learners to develop a common understanding of the diverse history, cultural heritage, ethnic diversity, identities, experiences, and perspectives of Welsh people. They provide opportunities to share Welshness and broaden their understanding of Cynefin in their communities."}
      </p>
      <p className="notesP">
        {lang
          ? "Bydd yr amrywiaeth eang o destunau'n ymwneud â phob maes dysgu ar draws y cwricwlwm ac yn berthnasol i ddysgwyr o bob cefndir a lleoliad daearyddol (trefol neu wledig, er enghraifft). Bydd hyn yn cyfoethogi'r dysgu ac yn helpu'r dysgwyr i ddod yn ddinasyddion gwybodus a beirniadol y byd. Bydd y wefan yn rhannu'r cysyniadau allweddol fel amlddiwylliannaeth a moeseg gyfredol yng Nghymru, gan gynnig safbwyntiau ehangach ynghylch Cymry Du Asiaidd a Chymry Lleiafrifoedd Ethnig a'u heffaith ar y wlad heddiw.  Bydd hyn yn galluogi'r dysgwyr i adfyfyrio ar gysylltiadau byd-eang Cymru mewn ffyrdd dilys."
          : "The wide variety of topics will relate to all areas of learning across the curriculum and be relevant to learners from all backgrounds and geographic locations (urban or rural, for example). This will enrich learning and help learners become critically informed citizens of the world. The website will share the key concepts such as current multiculturalism and ethics in Wales, offering wider perspectives on Black Asian and Minority Welsh people and their impact on the country today. This will allow learners to reflect on Wales’s global connections in authentic ways."}
      </p>
      <p className="notesP">
        {lang
          ? "Mae'r tudalennau gwe wedi'u gwahanu'n gamau cynnydd gan ddefnyddio llwybr datblygu iaith sy'n galluogi'r ymarferwyr i ddefnyddio'r pum llwybr datblygu, sef:  "
          : "The webpages are separated into progression steps using developmental language pathway that allow practitioners to use the five developmental pathways which are:"}
      </p>
      <ul className="notesP">
        <li>{lang ? "Perthyn" : "Belonging"}</li>
        <li>{lang ? "Cyfathrebu" : "Communication"}</li>
        <li>{lang ? "Archwilio" : "Exploration"}</li>
        <li>{lang ? "Datblygiad corfforol" : "Physical development"}</li>
        <li>{lang ? "Lles" : "Well-being"}</li>
      </ul>
      <p className="notesP">
        {lang
          ? "Hefyd, mae'r adnoddau'n addas i weithgareddau sy'n ymwneud â phum arfer greadigol y meddwl:  "
          : "The resources also lend themselves to activities which involve the creative habits of mind:"}
      </p>
      <ul className="notesP">
        <li>{lang ? "Cydweithrediad" : "Collaborative"}</li>
        <li>{lang ? "Chwilfrydedd" : "Inquisitive"}</li>
        <li>{lang ? "Disgyblaeth" : "Disciplined"}</li>
        <li>{lang ? "Dychymyg" : "Imaginative"}</li>
        <li>{lang ? "Dyfalbarhad" : "Persistent"}</li>
      </ul>
      <p className="notesP">
        {lang
          ? "Mae'n bosibl defnyddio'r dolenni gwe sy'n cael eu rhoi ar gyfer rhagor o ymchwil a gall y disgyblion gyflwyno eu canfyddiadau mewn amrywiaeth o ffyrdd creadigol. Rydym wedi cynnwys amrywiaeth o adnoddau mewn gwahanol fformatau ar y wefan gan gynnwys: storïau, monologau, stribed cartŵn, erthyglau papur newydd, clipiau sain a fideos. Mae hyn yn rhoi cyfle i'r athro gyflwyno amrywiaeth o fformatau i'r disgyblion er mwyn iddyn nhw wedyn eu hefelychu a'u creu nhw i gyflwyno gwybodaeth eu hunain.  "
          : "The weblinks provided can be used for further research and pupils can present their findings in a range of creative ways. We have included a range of resources in different formats on the website which include: stories, monologues, a cartoon strip, newspaper articles, audio clips and videos. This gives the teacher the opportunity to introduce the pupils a range of formats which they can then imitate and create to present information themselves."}
      </p>
      <p className="notesP">
        {lang
          ? "Gobeithio y byddwch chi'n gweld bod yr adnoddau hyn yn ysbrydoliaeth yn yr ystafell ddosbarth i chi ac i'ch disgyblion ac y byddan nhw'n rhoi cefnogaeth a hyder i chi gyflwyno'r cwricwlwm newydd! "
          : "We hope you will find these resources to be an inspiration in the classroom for you and your pupils and that they will give you support and confidence to deliver the new curriculum!"}
      </p>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Notes;

import React from "react";
import "./Resources.css";
import { LanguageContext } from "../../Helper/Context";
import { useContext } from "react";

const ColinJackson = () => {
  const { lang, setLang } = useContext(LanguageContext);
  document.body.style = "background: #f2f2f2;";

  return (
    <>
      <div className="resourcePage">
        <h1 className="resourceH1">
          {lang
            ? "Cyfweliad dychmygol ar Radio Cymru rhwng y cyflwynydd chwaraeon Jason Mohammad a’r cyn bencampwr byd dros y clwydi, Colin Jackson, wrth iddo edrych ymlaen at y Gemau Olympaidd ym Mharis yn 2024… "
            : "An imaginary interview between sports reporter Jason Mohammad and former World Champion hurdler Colin Jackson as he looks forward to the Olympic Games in Paris in 2024… "}
        </h1>
        <p className="resourceP">
          <strong>Jason Mohammad: </strong>
          {lang
            ? "Croeso i’r rhaglen Colin.  Braf dy gael di yma!  "
            : "Welcome to the programme Colin. Good to have you here!  "}
        </p>
        <p className="resourceP">
          <strong>Colin Jackson: </strong>
          {lang
            ? "Braf bod yma, diolch am fy ngwahodd i ar y rhaglen.  "
            : "It’s great to be here, thank you for inviting me on the programme. "}
        </p>
        <p className="resourceP">
          <strong>Jason Mohammad: </strong>
          {lang
            ? "Rwyt ti’n paratoi i fynd allan i Baris i sylwebu ar y cystadlaethau athletau yn y Gemau Olympaidd? "
            : "You’re preparing to go out to Paris to be a commentator on the athletics competitions in the Olympic Games? "}
        </p>
        <p className="resourceP">
          <strong>Colin Jackson: </strong>
          {lang
            ? "Ydw! Dwi wir yn edrych ymlaen."
            : "Yes!  I’m really looking forward."}
        </p>
        <p className="resourceP">
          <strong>Jason Mohammad: </strong>
          {lang
            ? "Wrth gwrs, cest ti yrfa anhygoel ar y trac dy hun – wyt ti’n gweld eisiau’r cystadlu?"
            : "Of course, you had a remarkable career on the track yourself – do you miss competing?"}
        </p>
        <p className="resourceP">
          <strong>Colin Jackson: </strong>
          {lang
            ? "Ydw a nac ydw!  Doedd dim byd fel y wefr o gystadlu mewn gemau Olympaidd neu Bencampwriaethau’r Byd – ond mae angen gwneud llawer o waith caled iawn cyn y foment honno.  "
            : "Yes and No! There’s nothing like the buzz of competing at an Olympic Games or World Championships – but a lot of hard work goes into that moment beforehand."}
        </p>
        <p className="resourceP">
          <strong>Jason Mohammad: </strong>
          {lang
            ? "Atgoffa ein gwrandawyr o ychydig o dy hanes. Awn ni ’nôl i’r dechrau’n deg, pryd gwnest ti ddechrau?"
            : "Remind listeners a little of your story. We’ll go back to the beginning, when did you start?  "}
        </p>
        <p className="resourceP">
          <strong>Colin Jackson: </strong>
          {lang
            ? "Wel, dechreuais i wneud athletau a chwaraeon eraill yn yr ysgol yng Nghaerdydd ac wedyn ymunais i â Birchgrove Harriers i ganolbwyntio ar athletau ac yna Clwb Athletau Aberhonddu a chanolbwyntio yn y pen draw ar gystadleuaeth y clwydi. "
            : "Well, I started doing athletics and other sports at school in Cardiff and then I joined Birchgrove Harriers to concentrate on athletics, After that, I went to Brecon Athletics Club and focused in the end on the hurdles event.  "}
        </p>
        <p className="resourceP">
          <strong>Jason Mohammad: </strong>
          {lang
            ? "Beth oedd y fedal gyntaf fawr i ti ei hennill? "
            : "What was the first significant medal you won? "}
        </p>
        <p className="resourceP">
          <strong>Colin Jackson: </strong>
          {lang
            ? "Medal arian yng Ngemau’r Gymanwlad ym 1986. Ro’n i’n 19 mlwydd oed. Ac roedd hi’n braf ennill medal mor bwysig yn cynrychioli Cymru!  Yn 1990 wedyn, enillais i fedal aur yng Ngemau’r Gymanwlad, ac eto yn 1994. Roedd sefyll ar ben y podiwm gyda baner y Ddraig Goch yn chwifio a ‘Hen Wlad Fy Nhadau’ yn chwarae yn brofiad wnaf i fyth ei anghofio. "
            : "A silver medal at the Commonwealth Games in 1986. I was 19 years old. It was good to win such an important medal representing Wales! In 1990 I won a gold medal at the Commonwealth Games, and again in 1994 – being on the podium with the Welsh flag waving and ‘Hen Wlad fy Nhadau’ playing was an experience I’ll never forget. "}
        </p>
        <p className="resourceP">
          <strong>Jason Mohammad: </strong>
          {lang
            ? "Ydy dy Gymreictod yn bwysig i ti? "
            : "Is being Welsh important to you?"}
        </p>
        <p className="resourceP">
          <strong>Colin Jackson: </strong>
          {lang
            ? "Yn sicr, mae’n rhan o fy hunaniaeth i. A dwi’n credu bod fy Nghymreictod yn rhannol gyfrifol am roi penderfyniad tawel i mi.  "
            : "Absolutely, it’s part of my identity. I think being Welsh is partly responsible for giving me quiet determination.   "}
        </p>
        <p className="resourceP">
          <strong>Jason Mohammad: </strong>
          {lang
            ? "Pryd gwnest ti gystadlu yn dy Gemau Olympaidd cyntaf a sut brofiad oedd hwnnw? "
            : "When did you compete at your first Olympic Games and what kind of experience was that?"}
        </p>
        <p className="resourceP">
          <strong>Colin Jackson: </strong>
          {lang
            ? "Ym 1988, yn Seoul yn Ne Corea. Roedd popeth am y profiad yn arbennig.  Ac roedd ennill medal arian yno yn gwireddu breuddwyd oes. Yn anffodus pan wnes i ddychwelyd i’r Gemau Olympaidd y blynyddoedd wedyn – yn 1992, 1996 a 2000 – methais ennill medal bob un tro. Dwi’n credu nawr, wrth sylwebu, fod hynny’n meddwl bod gen i empathi gyda phob un cystadleuydd yno gan fy mod i wedi profi gorfoledd a siom yno. Dwi’n hynod falch o fod wedi cystadlu mewn pedair o’r Gemau Olympaidd – does dim llawer o bobol yn gallu dweud hynny!   "
            : "In 1988 in Seoul in South Korea. Everything about the experience was special. And winning a silver medal there was a lifetime dream come true. Unfortunately, when I returned to the Olympics in other years – 1992, 1996 and 2000 – I missed out on a medal each time. I think now, as a commentator, I have empathy with each and every one of the competitors because I’ve experienced jubilation and disappointment there. I’m extremely proud of having competed at four Olympic Games – not many people can say that!      "}
        </p>
        <p className="resourceP">
          <strong>Jason Mohammad: </strong>
          {lang
            ? "Dwi’n siŵr bod hynny’n iawn. Ond roedd llwyddiannau eraill y tu hwnt i’r Gemau Olympaidd, on’d oedd? "
            : "I’m sure you’re right there. But there were other successes away from the Olympic Games."}
        </p>
        <p className="resourceP">
          <strong>Colin Jackson: </strong>
          {lang
            ? "Oedd, wel, ro’n i’n Bencampwr Byd ddwywaith, yn 1993 a 1999. Ac yn 1993 yn Stuttgart rhedais i’r ras mewn 12.91 eiliad, sef record byd ar y pryd. Enillais i fedal aur ym mhob un o’r Pencampwriaethau Ewropeaidd o 1990 i 2002. Bues i’n dal y record byd am y ras 60m dros y clwydi hefyd. "
            : "Well, I was World Champion on two occasions, in 1993 and 1999. And in 1993 in Stuttgart, I ran the race in 12.91 seconds, a world record at the time. I also won a gold medal at every European Championships from 1990 to 2002. I held the world record for the 60m hurdles too.   "}
        </p>
        <p className="resourceP">
          <strong>Jason Mohammad: </strong>
          {lang
            ? "Does dim rhyfedd dy fod ti’n cael dy ystyried fel y rhedwr gorau dros y clwydi yn Ewrop! Roeddet ti’n cystadlu fel gwibiwr hefyd ar adegau. Dros ugain o fedalau i gyd ar lefel Pencampwriaethau'r Byd, y Gemau Olympaidd ac Ewropeaidd! Rwyt ti wedi cyflawni cymaint yn dy yrfa fel athletwr… rwyt ti nawr yn brysur yn sylwebu a chyflwyno… rwyt ti wedi bod ar Strictly Come Dancing, Iaith ar Daith a Dancing on Ice…oes cynlluniau eraill cyffrous ar y gweill…a welwn i di yn y jyngl ar I’m a Celeb rywbryd, efallai?  "
            : "It’s no wonder you’re regarded as the best hurdler in Europe! You also competed as a sprinter on occasions. Over twenty medals in total at World Championship, Olympic and European level.  You achieved so much in your athletics career…and now you’re busy doing commentary and presenting…you’ve been on Strictly Come Dancing, Iaith ar Daith  and Dancing on Ice…have you got any exciting plans on the horizon… will we see you in in the jungle on I’m a Celeb sometime, maybe?  "}
        </p>
        <p className="resourceP">
          <strong>Colin Jackson: </strong>
          {lang
            ? "Nawr, byddai hynny’n werth ei weld!  Ond am y tro, dwi’n canolbwyntio ar gyflwyno’r Gemau ym Mharis! "
            : "Now that would be worth seeing!  But for now, my focus is the Olympic Games in Paris!"}
        </p>
        <p className="resourceP">
          <strong>Jason Mohammad: </strong>
          {lang
            ? " Diolch am ddod ar y rhaglen.  "
            : "Thank you for coming on the programme. "}
        </p>
        <div className="learningOutcomesPoem"></div>
      </div>
    </>
  );
};

export default ColinJackson;

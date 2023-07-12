import React from "react";
import "./Resources.css";
import { LanguageContext } from "../../Helper/Context";
import { useContext } from "react";

const CliveSullivanPortrait = ({ bgColour }) => {
  const { lang, setLang } = useContext(LanguageContext);
  document.body.style = "background: #f2f2f2;";

  return (
    <>
      <div className="resourcePage">
        <h1 className="resourceH1">
          {lang ? "Portread o Clive Sullivan" : "Portrait of Clive Sullivan"}
        </h1>
        <p className="resourceP">
          {lang
            ? "Cafodd Clive Sullivan, neu ‘Sully’ i’w ffrindiau, ei eni yn ardal Splott, Caerdydd yn 1943. Daeth yn enwog yn y 1960au a’r 70au fel chwaraewr rygbi’r gynghrair heb ei ail. Chwaraeodd i dimau Hull F.C., Hull K.R. ac i Oldham, ond uchafbwynt ei yrfa oedd arwain tîm Prydain Fawr i ennill Cwpan y Byd yn 1972. Ef oedd y chwaraewr o liw cyntaf i gael ei wneud yn gapten ar dîm Prydain Fawr, nid yn unig mewn rygbi’r gynghrair, ond mewn unrhyw gamp! Yn anffodus, oherwydd anafiadau, daeth ei yrfa rygbi i ben yn 1973 ond yn 1974 cafodd MBE am ei wasanaeth i rygbi’r gynghrair, tipyn o gamp yn y cyfnod hwn i fachgen o liw o Splott! "
            : "Clive Sullivan, or ‘Sully’ to his friends, was born in the Splott area of Cardiff in 1943. He became famous in the 1960s and 70s as an excellent rugby league player. He played for the teams Hull F.C., Hull K.R. and Oldham, but the highlight of his career was leading Great Britain to win the World Cup in 1972. He was the first black person to be made captain of the Great Britain team, not only in rugby league, but in any sport! Unfortunately, because of injuries, his rugby career came to an end in 1973 but in 1974, he received an MBE for his services to rugby league, quite an achievement at that time for a black person from Splott!"}
        </p>
        <p className="resourceP">
          {lang
            ? "Roedd yn amlwg o’r dyddiau cynnar hynny wrth chwarae gyda’i ffrindiau ym mharciau a strydoedd Caerdydd fod Sully yn dipyn o athletwr. Pan oedd yn ifanc cwynodd wrth ei dad fod y plant hŷn yn gas wrtho os oedden nhw’n llwyddo i’w ddal. Roedden nhw’n amlwg yn awyddus i ddysgu gwers i’r cyw bach hyf am feiddio bod mor chwim, ac yntau mor ifanc! Cyngor ei dad oedd, ‘Wel, bydd rhaid i ti ddysgu rhedeg yn gyflymach, felly!’ A dyna a wnaeth, ei goesau cyhyrog yn gallu newid cyfeiriad yn hollol rwydd a’i freichiau’n pwmpio fel pistonau trên stêm. Dysgodd Sully i chwarae a gwên ar ei wyneb, gyda thȃn yn ei galon ond yn ei lygaid, roedd gwytnwch haearnaidd. Profwyd hyn i’r eithaf yn ystod un gêm, pan gafodd ei anafu mor ddrwg fel roedd rhaisd iddo roi’r gorau i chwarae am flwyddyn gyfan! Ond fel pob tro arall, daeth Sully’n nôl yn gryfach."
            : "It was obvious from those early days playing with his friends in Cardiff's parks and streets that Sully was a great athlete. When he was young, he complained to his father that the older children were nasty to him if they managed to catch him. They were obviously trying to teach the cheeky young lad a lesson for running so fast, at such a young age! His dad's advice was, ‘Well, you'll just have to learn to run faster, then!’ And that's what he did, his muscular legs were able to change direction so easily and his arms pumped like the pistons of a steam train. Sully learned to play with a smile on his face, with fire in his heart, but in his eyes, there was an iron resilience. This was proven to the limit when, during one game, he was so badly injured that he had to give up playing for a whole year! However, as was the case every other time, Sully came back stronger."}{" "}
        </p>
        <p className="resourceP">
          {lang
            ? "Yn ystod ei gyfnod yn y fyddin y sylwodd rhywun am y tro cyntaf ar botensial Sully i fod yn chwaraewr rygbi proffesiynol. Ar ôl arwyddo cytundeb â Hull, aeth o nerth i nerth a choronwyd ei yrfa yn ffeinal Cwpan y Byd yn erbyn Awstralia. Roedd Prydain ar ei hôl hi ac Awstralia’n pwyso unwaith eto i ymestyn eu mantais. Roedd angen rhyw fflach o ysbrydoliaeth o rywle. Rhwygwyd y bêl o afael Awstralia a, fetrau’n unig o’i linell gais ei hun, cododd Sully’r bêl yn gelfydd. Gydag un symudiad perffaith, ochrgamodd heibio i’r amddiffynnwr yn rhwydd ac i ffwrdd ag ef fel milgi i fyny asgell dde’r cae. Yn y ras wedyn, doedd dim gobaith i neb ei ddal, a sgoriodd Sully gais pwysicaf ei yrfa yng nghornel dde’r cae! Roedd Capten Prydain wedi dangos y ffordd i’w dîm ac aeth Prydain Fawr ymlaen i ennill Cwpan y Byd!"
            : "It was during his time in the army that someone noticed Sully's potential to be a professional rugby player. After signing a contract with Hull, he went from strength to strength and the pinnacle of his career was the World Cup final against Australia. Britain was lagging behind and Australia were pushing once again to extend their advantage. A spark of inspiration was needed from somewhere. The ball was ripped from Australia's grasp and, meters from his own try line, Sully picked up the ball skilfully. With one perfect move, he sidestepped the defenders easily and sprinted like a greyhound up the right wing of the field. In the race that followed, no one had a hope of catching him, and Sully scored the most important try of his career in the right-hand corner of the field! The Great Britain captain had led the way for his team, and Great Britain went on to win the World Cup! "}
        </p>
        <p className="resourceP">
          {lang
            ? "Bu farw Clive Sullivan yn 42 oed ac yn ystod ei fywyd roedd yn rhaid iddo orfod wynebu sawl her. Yn aml cafodd ei brofi’n gorfforol ac yn feddyliol. Profodd ragfarn a chenfigen gan eraill, ac oherwydd lliw ei groen, roedd yn rhaid iddo ymdrin â hiliaeth bron yn ddyddiol. Wrth ymdrin â’r holl rwystrau hyn, llwyddodd Clive Sullivan nid yn unig i oroesi ond i gyrraedd y brig yng nghamp rygbi’r gynghrair. Drwy wneud hyn, dangosodd y ffordd i eraill fod modd llwyddo mewn cyfnod a oedd yn gallu bod yn anodd iawn i bobl o’r lleiafrifoedd ethnig. A dyna pam mae Clive ‘Sully’ Sullivan yn un o arwyr pwysicaf chwaraeon Cymru! "
            : "Clive Sullivan died at the age of 42 and during his life, he had to face many challenges and was often tested physically and mentally. He experienced prejudice and jealousy from others and because of his skin colour, he had to tackle racism almost daily. When dealing with all these barriers, Clive Sullivan not only managed to survive, but he also reached the top of rugby league. In so doing, he demonstrated to others that success is possible in a period of time which could be very difficult for those from minority ethnic groups. And this is why Clive ‘Sully’ Sullivan is one of Wales’s most important sports heroes!"}
        </p>
        <div
          className="learningOutcomes"
          style={{ backgroundColor: "#A2D6F9" }}
        >
          <h2>{lang ? "Eich tro chi! " : "Your turn! "}</h2>
          <p className="resourceP">
            {lang
              ? "Mae portread yn disgrifio person. Mae’n disgrifio gwahanol agweddau ar y person hwnnw ac yn sôn ychydig am y nodweddion sy’n arbennig iddo. Beth am i chi ysgrifennu portread o Colin Jackson? Mae llawer o wybodaeth ar gael i’ch helpu chi ar y wefan hon!"
              : `A portrait describes a person. It describes different aspects of that person and discusses the features particular to them. How about writing a portrait of Colin Jackon?
             There is a lot of information to help you on this website!`}
          </p>
          <p className="resourceP">
            <strong>{lang ? "Deilliant Dysgu:" : "Learning Outcome:"}</strong>
            <br />{" "}
            {lang ? "Gallu ysgrifennu portread " : "Able to write a portrait"}
          </p>
          <p className="resourceP">
            <strong>
              {lang ? "Meini Prawf Llwyddiant: " : "Success Criteria:"}
            </strong>
            <br />{" "}
            {lang
              ? "Cyflwyno’r person gan roi ychydig o wybodaeth amdano"
              : "Introducing the person, giving a little information about them"}
            <br />
            {lang
              ? "Disgrifio sut mae’n edrych yn allanol"
              : "Describing their external appearance"}
            <br />
            {lang
              ? "Disgrifio ei bersonoliaeth"
              : "Describing their personality"}
            <br />
            {lang
              ? "Rhoi ychydig o hanesion amdano"
              : "Providing a few stories about them"}
          </p>
        </div>
      </div>
    </>
  );
};

export default CliveSullivanPortrait;

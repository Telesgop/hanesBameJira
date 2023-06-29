import React from "react";
import "./Resources.css";
import { LanguageContext } from "../../Helper/Context";
import { useContext } from "react";

const JoeErskine = ({ bgColour }) => {
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <>
      <div className="resourcePage">
        <h1 className="resourceH1">
          {lang ? " A yw bocsio’n ddiogel? " : "Is Boxing Safe? "}
        </h1>
        <p className="resourceP">
          {lang
            ? "Fel sawl bocsiwr arall, roedd Joe Erskine yn dod o gefndir tlawd iawn yn ardal y dociau yng Nghaerdydd. Cymraes oedd ei fam ac roedd ei dad yn hanu o Jamaica. Roedd plentyndod Joe yn anodd iawn ar adegau a gwelwyd bocsio fel cyfle iddo i wella ei fywyd. Mewn egwyddor, mae’r un peth yn wir heddiw i nifer o bobl ifanc o gefndiroedd tlawd; gall bocsio ‘agor drysau’ a gwireddu breuddwydion. Ond a ddylid annog pobl ifanc i gychwyn bocsio, a yw bocsio’n ddiogel? "
            : "Like many other boxers, Joe Erskine came from an extremely poor background in the area of Cardiff docks. His mother was Welsh and his father came from Jamaica. Joe's childhood was very difficult at times and boxing was seen as an opportunity for him to improve his life. In principle, the same is true today for a number of young people from poor backgrounds; boxing can ‘open doors’ and realise dreams. But should young people be encouraged to take up boxing, is boxing safe? "}
        </p>
        <p className="resourceP">
          {lang
            ? "Mae bocsio yn un o'r chwaraeon mwyaf poblogaidd ar draws y byd. Mae'n hyrwyddo hunanamddiffyn a hunanddisgyblaeth. Mae bocsio yn gofyn am lefel uchel o ffocws, dygnwch a hyblygrwydd, yn gorfforol ac yn feddyliol. Mae llawer o bobl ledled y byd yn cymryd rhan yn y gamp ar gyfer hwyl a ffitrwydd. Ond, cyn annog rhywun i ddechrau bocsio, mae angen ystyried y manteision a'r anfanteision.  "
            : "Boxing is one of the most popular sports across the world. It promotes self-defence and self-confidence. Boxing demands a high level of focus, endurance and flexibility, physically and mentally. Many of people all over the world take part in the sport for fun and fitness. But, before encouraging someone to take up boxing, the advantages and disadvantages need to be considered.  "}{" "}
        </p>
        <p className="resourceP">
          {lang
            ? "Y cyngor gan fyrddau iechyd yw y dylai oedolion wneud tua 100 munud o ymarfer corff yr wythnos i gadw’n iach – ac mae bocsio’n fath da o ymarfer corff. Mae gwyddonwyr yn dweud bod gormod o bobl y DU yn byw bywydau sy’n rhy segur, felly byddai bocsio’n ffordd o gyrraedd y targed yma o 100 munud. Yn ogystal â chodi lefelau ffitrwydd, mae bocsio’n gwella cydbwysedd a chryfder corfforol, yn enwedig cryfder rhan uchaf y corff. Wrth gymryd rhan mewn ymarferion bocsio, mae eich cydsymud llaw i lygad yn datblygu yn ogystal â’ch sgiliau canolbwyntio.  "
            : "Health boards advise adults to do around 100 minutes of physical exercise a week to keep healthy – and boxing is a good kind of physical exercise. Scientists say that too many people in the Uk live lives which are too sedentary, so boxing would be a way of achieving this target of 100 minutes. As well as raising fitness levels, boxing improves balance and physical strength, especially upper body strength. When taking part in boxing exercises, your hand-eye coordination develops as well as your concentration skills.  "}
        </p>
        <p className="resourceP">
          {lang
            ? "Nid gwella’r corff yn unig mae ymarferion bocsio yn ei wneud. Mae gwyddonwyr wedi profi bod gwneud ymarfer corff yn helpu eich iechyd meddwl hefyd. Mae llawer o bobl yn dweud bod hwyliau gwell arnyn nhw ar ôl gwneud ymarfer corff. O ganlyniad, gall bocsio wella iechyd meddwl a hunanhyder rhywun. "
            : "Boxing exercises not only improve the body. Scientists have proven that doing physical exercise helps your mental health as well. Many people say that their mood is better after doing physical exercise. As a result, boxing can improve a person's mental health and self-confidence. "}
        </p>
        <p className="resourceP">
          {lang
            ? "Yn olaf, wrth ddatblygu sgiliau bocsio, byddai rhywun yn dysgu sgiliau hunanamddiffyn. Byddai rhywun yn dysgu sut i wneud symudiadau a safiadau amddiffynnol ac ymosodol, rheoli pellter y frwydr, a chynnal symudiadau gwaith troed. Felly, pe byddai pobl mewn sefyllfa lle mae angen iddyn amddiffyn eu hunain rhag bygythiad neu ymosodiad, byddai’r sgiliau bocsio hyn yn rhoi mantais iddyn nhw.  "
            : "Finally, when developing boxing skills, people would learn self-defence skills. People would learn how to make defensive and attacking movements and stances, controlling the distance of the fight, and maintaining footwork movements. So, if people were in a situation where they need to defend themselves from threat or attack, these boxing skills would give them an advantage. "}
        </p>
        <p className="resourceP">
          {lang ? "Ar y llaw arall...   " : "On the other hand...  "}
        </p>
        <div
          className="learningOutcomes"
          style={{ "background-color": "#FF686B" }}
        >
          <h2>{lang ? "Eich tro chi! " : "Your turn! "}</h2>
          <p className="resourceP">
            {lang
              ? "Rydych wedi darllen am fanteision bocsio yn y darn uchod. Ond, er mwyn ysgrifennu testun trafod effeithiol, mae angen dwy ochr y ddadl. Beth am i chi wneud ychydig o waith ymchwil ac yna ysgrifennu am anfanteision cychwyn bocsio? I gloi, gallwch chi ysgrifennu paragraff byr yn crynhoi’r ddadl ac ysgrifennu eich barn bersonol chi am y testun. "
              : `You have read about the advantages of boxing in the extract above. But, in order to write an effective discussion topic piece, you need both sides of the argument. How about doing some research work and then writing about the disadvantages of taking up boxing? To conclude, you can write a short paragraph summarising the argument and writing your own personal opinion on the topic. `}
          </p>
          <p className="resourceP">
            <strong>{lang ? "Deilliant Dysgu:" : "Learning Outcome:"}</strong>
            <br />{" "}
            {lang
              ? "Gallu ysgrifennu testun trafod  "
              : "Being able to write a discussion topic piece "}
          </p>
          <p className="resourceP">
            <strong>
              {lang ? "Meini Prawf Llwyddiant: " : "Success Criteria:"}
            </strong>
            <br /> {lang ? "Cwestiwn fel teitl" : "Question as a title"}
            <br />
            {lang
              ? "Llunio cyflwyniad i’r pwnc dan sylw"
              : "Creating an introduction to the topic in question "}
            <br />
            {lang
              ? "Llunio paragraff sy’n cynnwys pwyntiau o blaid"
              : "Creating a paragraph including points for"}
            <br />
            {lang
              ? "Llunio paragraff sy’n cynnwys pwyntiau yn erbyn "
              : "Creating a paragraph including points against "}
            <br />
            {lang
              ? "Ysgrifennu paragraff i gloi sy’n mynegi barn bersonol am y pwnc "
              : "Writing a concluding paragraph expressing a personal opinion on the topic  "}
            <br />
            {lang
              ? "Ysgrifennu yn y trydydd person ac mewn arddull ffurfiol "
              : "Writing in the third person and in a formal style "}
          </p>
        </div>
      </div>
    </>
  );
};

export default JoeErskine;

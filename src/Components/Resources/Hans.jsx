import React from "react";
import "./Resources.css";
import { LanguageContext } from "../../Helper/Context";
import { useContext } from "react";

const Hans = () => {
  const { lang, setLang } = useContext(LanguageContext);
  document.body.style = "background: #f2f2f2;";

  return (
    <>
      <div className="resourcePage">
        <h1 className="resourceH1">
          {lang
            ? "Ymson Hans Lichtenstein  "
            : "Hans Lichtenstein's Monologue   "}
        </h1>
        <p className="resourceP">
          <strong>
            {lang
              ? "Roedd Hans Lichtenstein yn un o’r plant hynny a gafodd eu hachub o afael Natsïaid yr Almaen dan gynllun ‘Kindertransport’ (cludo plant). Tybed beth oedd yn mynd trwy ei feddwl wrth iddo eistedd ar y trên ar y daith hir honno i wledydd Prydain?  "
              : "Hans Lichtenstein was one of the children rescued from the grip of the German Nazis under the ‘Kindertransport’ (transport for children) scheme. What was going through his mind as he sat on the train on that long journey to Britain? "}
          </strong>{" "}
        </p>
        <img
          src="https://i.guim.co.uk/img/media/7bb38a56989ac048abe5dc149b02a3118fb0402b/0_0_1578_947/master/1578.jpg?width=620&quality=45&dpr=2&s=none"
          style={{ width: "50vw", height: "30vw" }}
          alt="Image of Hans' family shop, destroyed during Kristallnacht"
        ></img>
        <p className="caption">Image from The Guardian</p>
        <p className="resourceP">
          {lang
            ? "Twnnel arall, sawl un eto? Dwi wedi cael llond bol ar y daith yma erbyn hyn! Beth fydd yn fy nisgwyl i pan fyddai’n cyrraedd? Bydd pob dim yn newydd, pob dim yn ddieithr i mi. Beth os bydd pobl yn gas wrtha i? Ond wedi dweud hynny, all pethau ddim bod cynddrwg ag oedden nhw yn Berlin! Pam mae pobl yn gorfod bod mor gas wrth ei gilydd, mor afiach? "
            : "Another tunnel, how many more? I've had enough of this journey by now! What will be waiting for me when I arrive? Everything will be new; everything will be strange for me. What if people are unkind to me? But having said that, things can't be worse than they were in Berlin! Why do people have to be so unkind to each other, so nasty?  "}{" "}
        </p>
        <p className="resourceP">
          {lang
            ? "Dwi’n cofio pa mor braf oedd hi cyn i Hitler ddod i rym; roedd gennym ni ffrindiau, roedd gennym ni barch. Ond yn araf bach, dechreuodd pethau newid, dechreuodd ffrindiau beidio â dod draw, roedd pobl yn croesi’r ffordd i’n hosgoi ni. Hyn i gyd oherwydd geiriau gwenwynig un dyn! Allaf i ddim deall pam maen nhw’n gwrando arno fo, ydyn nhw’n ei ofni? "
            : "I remember how great it was before Hitler came to power, we had friends, we had respect. But gradually, things started to change, friends didn't come to visit, people crossed the road to avoid us. All this because of the poisonous words of one man! I can't understand why they listen to him, are they afraid of him? "}
        </p>
        <p className="resourceP">
          {lang
            ? "Tybed pa fath o fwyd maen nhw’n ei fwyta ym Mhrydain? Dwi’n gwybod un peth yn siŵr, fydd y bwyd byth cystal â choginio Mam, yn enwedig ei chacennau! Pa fath o ben-blwydd fydd hi y tro ’ma? Anodd credu bod Emerich wedi dod i fy mharti i'r llynedd. Emerich, un o’m ffrindiau gorau i am flynyddoedd. Dwi’n methu cael hunllef yr hyn ddigwyddodd y noson honno allan o fy mhen, noson Kristallnacht! Sŵn y ffenestri’n torri’n deilchion wrth i garreg ar ôl carreg gael eu taflu at ein siop ni. Arogl mwg ym mhob man a’r dorf fel bwystfilod gwyllt yn gweiddi pob math o bethau ofnadwy, ac Emerich yn eu canol nhw! Wnaf i fyth anghofio’r olwg oedd ar ei wyneb, casineb pur! Sut mae person yn gallu newid cymaint mewn blwyddyn? "
            : "I wonder what kind of food they eat in Britain? I know one thing for sure, it will never be better than Mum's cooking, especially her cakes! What kind of birthday will I have this time? It's difficult to believe that Emerich came to my party last year. Emerich, one of my best friends for years. I still can't get the nightmare of what happened that night, the night of Kristallnacht, out of my head! The sound of windows shattering after stones were repeatedly thrown at our shop. Smoke smell everywhere and the crowd like wild beasts shouting all kinds of terrible things, and Emerich in the middle of it all! I'll never forget the look on his face, pure hatred! How can a person change so much in a year? "}
        </p>
        <p className="resourceP">
          {lang
            ? "Beth fydd yn digwydd i Mam a Dad rŵan? Pa fath o ddyfodol fydd i’n teulu ni, a dweud y gwir, i holl Iddewon y wlad? Rydyn ni wedi gweithio mor galed i godi’r busnes. A rŵan mae ein dyfodol, ein gobeithion ni i gyd wedi eu llosgi’n ulw, yn union yr un fath â’r holl bethau eraill a gafodd eu llosgi ar y noson honno!   "
            : "What will happen to Mum and Dad now? What kind of future will there be for our family, to be honest, to all the country's Jews? We've worked so hard to build the business up. And now our future, our hopes have all burnt to a cinder, exactly the same as all the other things which were burnt on that night!   "}
        </p>
        <p className="resourceP">
          {lang
            ? "O’r diwedd, mae’r twnnel ’ma’n dod i ben. Dwi’n siŵr fy mod i’n gallu gweld mymryn bach o olau yn y pellter! "
            : "At last, this tunnel is coming to an end. I'm sure I can see a little bit of light in the distance!  "}
        </p>
        <p className="resourceP">
          {lang
            ? "O Dduw, plîs wnei Di ofalu am Mam a Dad tra byddaf i i ffwrdd a helpa nhw i ddod o hyd i ffordd o ddianc rhag crafangau Hitler a’i Natsïaid. Amen. "
            : "O God, please protect Mum and Dad while I'm away and help them to find a way of escaping from Hitler and his Nazis. Amen. "}
        </p>

        <div
          className="learningOutcomes"
          style={{ backgroundColor: "#A2D6F9" }}
        >
          <h2>{lang ? "Eich tro chi! " : "Your turn! "}</h2>
          <p className="resourceP">
            {lang
              ? "Mewn ymson rydych chi’n meddwl yn uchel, rydych chi yn siarad ac yn sôn am eich teimladau chi. Beth am i chi roi cynnig ar ysgrifennu ymson eich hun? Un debyg i un Hans ond o safbwynt Emerich. Beth oedd ei deimladau ar y noson honno (Kristallnacht)? "
              : `In a monologue, you are thinking aloud, you are talking and discuss your feelings. How about having a go at writing your own monologue? One similar to the one by Hans but from the perspective of Emerich, what were his feelings on that night (Kristallnacht)? 
            `}
          </p>

          <p className="resourceP">
            <strong>{lang ? "Deilliant Dysgu:" : "Learning Outcome:"}</strong>
            <br />{" "}
            {lang ? "Gallu ysgrifennu ymson  " : "Able to write a monologue  "}
          </p>
          <p className="resourceP">
            <strong>
              {lang ? "Meini Prawf Llwyddiant: " : "Success Criteria:"}
            </strong>
            <br />{" "}
            {lang
              ? "Ysgrifennu yn y person cyntaf, e.e. Dwi’n..   "
              : "Writing in the first person, e.g. I'm.. "}
            <br />
            {lang
              ? "Ysgrifennu am deimladau, e.e. Dwi’n difaru.. "
              : "Writing about feelings, e.g. I regret.. "}
            <br />
            {lang
              ? "Defnyddio cwestiynau rhethregol, e.e. Tybed beth fydd yn digwydd..? "
              : "Using rhetorical questions, e.g. I wonder what will happen..? "}
            <br />
            {lang
              ? "Edrych yn ôl ar ddigwyddiad, e.e. Ddoe roeddwn i wrth fy modd..  "
              : "Looking back at an event, e.g. Yesterday I was really happy..   "}
            <br />
            {lang
              ? "Edrych ymlaen at beth a ddaw, e.e. Dwi’n gwybod sut bydd o’n ymateb..   "
              : "Looking ahead to what's going to happen, e.g. I know how he'll respond..   "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Hans;

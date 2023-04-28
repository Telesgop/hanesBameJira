import React from "react";
import "./Resources.css";
import { LanguageContext } from "../../Helper/Context";
import { useContext } from "react";

const IdrisPhillips = () => {
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <>
      <div className="resourcePage">
        <h1 className="resourceH1">
          {lang
            ? "Hunangofiant dychmygol Idris Phillips "
            : "The imaginary biography of Idris Phillips "}
        </h1>
        <p className="resourceP">
          <strong>
            {" "}
            {lang
              ? "Roedd miloedd o lowyr yn Ne Cymru ar un cyfnod ond, oherwydd lliw ei groen, roedd glowyr fel Idris Phillips yn brin iawn. Tybed pa fath o bethau allai fod wedi mynd trwy ei feddwl wrth edrych yn ôl ar ei fywyd yn y pyllau glo?   "
              : "There were thousands of colliers or miners in South Wales at one time but, because of his skin colour, colliers such as Idris Phillips were very rare. What kinds of things might have been going through his mind when looking back on his life in the coal mines?   "}
          </strong>{" "}
        </p>
        <p className="resourceP">
          {lang
            ? "‘Ry’n ni gyd yr un lliw croen ar ôl shifft yn y pwll glo ’ma!’ Dyna roeddwn i wastad yn ei ddweud wrth y bechgyn oedd yn hoffi tynnu fy nghoes i ar ôl shifft i lawr yn y pwll! Doedd rhai o’r glowyr ddim yn ei feddwl yn gas, jôc, ychydig o sbort oedd hyn i rai. Ond doedden nhw byth yn ystyried sut roeddwn i’n teimlo a ’mod i weithiau yn cael llond bol o’r holl bryfocio. Wedi dweud hynny, roedd 'na eraill oedd yn dweud pethau cas ac yn eu golygu nhw pob gair. Y peth callaf i’w wneud gyda’r rheini oedd trio eu hosgoi nhw, orau y gallwn i – sydd ddim yn hawdd pan rydych chi’n gweithio’n agos at eich gilydd, gannoedd o droedfeddi dan ddaear!"
            : "‘We've all got the same skin colour after a shift in this coalmine!’ That's what I always told the boys who liked to pull my leg, after a shift down the mine! Some of the others didn't mean it unkindly, it was a joke, a little bit of fun for some. But they never considered how I felt and that I was sometimes fed up with all the provocation. Having said that, others said unkind things and meant every word. The wisest course of action with those men was to try and avoid them as best I could – which isn't easy when you're working close together, hundreds of feet underground."}
        </p>
        <p className="resourceP">
          {lang
            ? "Beth bynnag, nid dan ddaear roeddwn i’n profi’r hiliaeth waethaf o bell ffordd, ac nid gan y glowyr chwaith! Y gamdriniaeth waethaf roeddwn i’n ei chael oedd gan rywun a ddylai fod yn fy helpu i, fy amddiffyn i rhag hyn, sef aelod o’r heddlu! Roedd yr un cwnstabl yma yn fy nghasáu i am un rheswm, ac un rheswm yn unig, lliw fy nghroen i! Byddai’n ymddangos o unman, yn aml o’r tu cefn imi ac yn fy nharo i’n ddidrugaredd â’i bastwn. Sawl gwaith roeddwn i’n ofni am fy mywyd. Roeddwn yn gallu dweud o’r wȇn ar ei wyneb ei fod yn mwynhau’r pŵer a’i fod yn gwybod yn iawn na fyddai unrhyw bwynt i mi gwyno wrth neb. Pwy fyddai’n credu gair glöwr croenddu yn erbyn gair aelod o’r heddlu? Drwy lwc, roedd e’n ysmygwr trwm felly pan oeddwn i’n dianc o afael ei grafangau cas, roedd e’n gwybod yn iawn na fyddai e byth yn gallu fy nal i’r eildro. "
            : "Anyway, the worst racism I experienced wasn’t underground by any means, and not from the colliers either! The worst abuse I had was from someone who should be helping me, protecting me from it, a policeman! This one constable hated me for one reason, and one reason only, my skin colour! He would appear from nowhere, often from behind me and he used to hit me mercilessly with his truncheon. I feared for my life many times. I could say from the smile on his face that he enjoyed the power, and he knew full well that I wouldn't get anywhere by complaining about him. Who would believe the word of a black miner over a policeman? Fortunately for me, he was a heavy smoker, so once I managed to escape his nasty claws, he knew well that he'd never be able to catch me the second time. "}{" "}
        </p>
        <p className="resourceP">
          {lang
            ? "Oedd, roedd bywyd yn gallu bod yn anodd iawn yr adeg honno. Dim ond pedair ar ddeg oed oeddwn i’n dechrau gweithio i lawr yn y pwll! Ond roedd rhaid i mi weithio er mwyn dod ag arian i’r tŷ. Roedd deg ohonon ni blant, a fy mam a fy nhad, i gyd yn byw mewn tŷ teras bach. Felly pan oedden ni blant yn ddigon hen i fynd i weithio, dyna roedd rhaid ei wneud. Dwi’n cofio’r diwrnod cyntaf hwnnw fel ddoe, pan welodd y rheolwr fi am y tro cyntaf, gwrthododd o adael i mi fynd i lawr i’r pwll. Mynnodd y byddai’r glowyr eraill i gyd yn mynd ar streic cyn gweithio gyda bachgen du ei groen. Pam mae pobl yn gorfod bod mor gas?"
            : "Yes, life could be very difficult at that time. I was only fourteen when I started working down the mine! But I had to work to bring money into the house. There were ten of us children, and my mum and dad as well, living in a small terraced house. So, once we children were old enough to go to work, that's what we had to do. I remember that first day like yesterday, when the manager saw me for the first time, he refused to let me go down the mine. He insisted that all the other colliers would go on strike rather than working with a black boy. Why do people have to be so unkind? "}
        </p>
        <p className="resourceP">
          {lang
            ? "Er gwaetha’r holl hiliaeth, mae adegau wedi bod pan ddangoswyd parch ataf i hefyd. Mae Hydref 21ain, 1966 yn ddiwrnod na wnaf i fyth ei anghofio ond credaf fod hynny’n wir i gannoedd o bobl. Erbyn hynny, roeddwn wedi gweithio fy ffordd i fyny i fod yn rheolwr a fi atebodd y ffôn y bore hwnnw. Dwi’n dal i glywed y llais crynedig yn fy mhen hyd heddiw. ‘Dewch â chymaint o ddynion ag y gallwch chi. Dewch yma’n syth i Aberfan. Mae hi’n drychinebus yma! Mae hi’n dorcalonnus!’ Ar unwaith, trefnais fod pawb yn mynd i lawr y cwm i Aberfan ac oedd, roedd yr olygfa’n drychinebus ac yn wirioneddol dorcalonnus. Roedd pawb yn gwneud eu gorau i helpu ond doedd dim trefn ar y dynion. Roedd pawb mor awyddus i helpu ond roedd angen cael rhyw fath o system yn ei lle. Dwi’n falch o allu dweud mai fi oedd un o’r bobl a gafodd drefn ar yr achubwyr y bore hwnnw a gobeithio bod hynny wedi gallu helpu rhywfaint fel bod y gwaith achub wedi bod yn fwy effeithiol."
            : "Despite all the racism, there have been times when I was shown respect. The 21st of October 1966, is a day I'll never forget, but I think that's true for hundreds of people. By then, I'd worked myself up to be a manager and I was the one who answered the phone that morning. I can still hear the trembling voice in my head to this day. ‘Bring as many men as you can. Come here to Aberfan straight away. It's disastrous here! It's catastrophic!’ At once, I organised everyone to go down the valley to Aberfan and yes, the scene was disastrous and utterly catastrophic. Everyone was doing their best to help but the men were disorganised. Everyone was keen to help but a system needed to be put in place. I'm proud of being able to say that I was one of the people who organised the rescuers that morning and I hope that this helped somewhat to make the rescue work more effective."}
        </p>
        <p className="resourceP">
          {lang
            ? "Do, dwi wedi gweld llawer a chyflawni hyd oed mwy yn ystod fy mywyd fel glöwr ym mhyllau glo De Cymru. Dwi wedi cael llawer o brofiadau ond yn anffodus, mae hiliaeth wedi bod gyda fi drwy gydol fy ngyrfa, fel rhyw gysgod yn y cefndir. Ond gobeithio, drwy rannu fy mhrofiadau, y bydd pethau’n haws i’r genhedlaeth nesaf."
            : "Yes, I've seen a lot and achieved even more during my life as a collier in the South Wales coalmines. I've had many experiences but unfortunately, I've faced racism throughout my career, like a kind of shadow in the background. But hopefully, by sharing my experiences, things will be easier for the next generation."}
        </p>
        <div className="learningOutcomes">
          <h2>{lang ? "Eich tro chi! " : "Your turn! "}</h2>
          <p className="resourceP">
            {lang
              ? "Yn y darn dychmygol hwn, mae Idris Phillips yn cofio am ei brofiadau ar Hydref 21ain, 1966 adeg trychineb Aberfan. Beth am i chi wneud ychydig o waith ymchwil i’r hyn a ddigwyddodd ar y diwrnod ofnadwy hwnnw? Ar ôl casglu rhagor o wybodaeth, gallwch chi greu cwis i gael eich ffrindiau a/neu eich cyd-ddisgyblion hefyd i ymchwilio ac i ddysgu rhagor am y trychineb hwn."
              : `In this imaginary piece of writing, Idris Phillips remembers his experiences on the 21st of October 1966, the day of the Aberfan disaster. How about doing some research into what happened on that terrible day?  
            After gathering more information, you can create a quiz to get your friends and/or fellow pupils to research as well and to learn more about this disaster.  `}
          </p>
          <p className="resourceP">
            <strong>{lang ? "Deilliant Dysgu:" : "Learning Outcome:"}</strong>
            <br />{" "}
            {lang
              ? "Gallu creu cwis ar bwnc penodol"
              : "Able to create a quiz on a particular topic"}
          </p>
          <p className="resourceP">
            <strong>
              {lang ? "Meini Prawf Llwyddiant: " : "Success Criteria:"}
            </strong>
            <br />{" "}
            {lang
              ? "Gwneud gwaith ymchwil a chofnodi ffeithiau am y pwnc dan sylw "
              : "Do research work and record facts about the subject in question "}
            <br />
            {lang
              ? "Meddwl am amrywiaeth o gwestiynau i annog eraill i ddarllen am y pwnc/ i ymchwilio iddo "
              : "Think about a range of questions to encourage others to read about/to research the subject  "}
            <br />
            {lang
              ? "Meddwl am y dull gorau i gyflwyno’r cwis (yn ddigidol neu ar bapur) "
              : "Think about the best format for the quiz (digitally or on paper) "}
            <br />
            {lang
              ? "Creu’r cwis gyda fformat a fydd apelio at eraill "
              : "Creating the quiz with a format which will appeal to others "}
            <br />
            {lang
              ? "Cadw cofnod o’r atebion cywir fel y gallwch farcio eich cwis ar ôl iddo gael ei gwblhau "
              : "Keep a record of the correct answers so you can mark your quiz after it's been completed. "}
          </p>
        </div>
      </div>
    </>
  );
};

export default IdrisPhillips;

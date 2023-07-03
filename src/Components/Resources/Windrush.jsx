import React from "react";
import "./Resources.css";
import { LanguageContext } from "../../Helper/Context";
import { useContext } from "react";

const Windrush = () => {
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <>
      <div className="resourcePage">
        <h1 className="resourceH1">
          {lang
            ? "Pwy yw Cenhedlaeth Windrush? "
            : "Who are the Windrush Generation?  "}
        </h1>
        <p className="resourceP">
          <strong>
            {lang
              ? "Mae sôn wedi bod ar y newyddion yn ddiweddar am Genhedlaeth Windrush a bod y bobl wedi cael eu trin yn wael gan y Deyrnas Unedig. Ond pwy oedd y bobl yma? Pam daethon nhw yma yn y lle cyntaf? "
              : "There has been much discussion in the news recently about the Windrush Generation and how they were badly treated by the UK. But who were these people? Why did they come here in the first place? "}
          </strong>{" "}
        </p>
        <p className="resourceP">
          {lang
            ? "Yn ystod yr Ail Ryfel Byd, rhwng 1939 a 1945, dinistriodd bomiau’r Natsïaid lawer o ddinasoedd a threfi Prydain. Ar ôl i’r Rhyfel orffen, roedd rhaid ceisio ailadeiladu’r wlad. Roedd y dasg yn enfawr ac roedd angen llawer o weithwyr i godi adeiladau newydd fel ysbytai ac ysgolion. Hefyd, roedd angen pobl i weithio yn yr adeiladau newydd hyn ac i’w rhedeg nhw. Felly dyma Llywodraeth Prydain yn creu posteri i geisio perswadio pobl o wledydd eraill fel Ynysoedd y Caribî i symud i fyw i Brydain er mwyn helpu i wneud y gwaith. "
            : "During the Second World War, between 1939 and 1945, many cities and towns in Britain were destroyed by Nazi bombs. Afterwards, reconstruction was needed. The task was huge, and many workers were needed to construct new buildings such as hospitals and schools. Also, people were needed to work in these new buildings and to run them. Therefore, the British government created posters to try and persuade people from other countries such as the Caribbean Islands to move to Britain in order to help with this work.  "}{" "}
        </p>
        <p className="resourceP">
          {lang
            ? "Yn 1948, hwyliodd llong yr Empire Windrush o Ynysoedd y Caribî ar draws Cefnfor Iwerydd i Brydain gan lanio yn Llundain ym mis Mehefin y flwyddyn honno. Ar ei bwrdd roedd 802 o bobl ac roedd pob un yn barod i weithio. Yn eu mysg roedd athrawon, adeiladwyr, nyrsys a doctoriaid i gyd yn barod i weithio i ailadeiladu’r wlad.  "
            : "In 1948, the ship Empire Windrush sailed from the Caribbean across the Atlantic Ocean to Britain, landing in London in June of that year. On board were 802 people who were all ready and willing to work. Amongst these were teachers, builders, nurses and doctors who were all willing to work to reconstruct Britain.   "}
        </p>
        <p className="resourceP">
          {lang
            ? "Cyn pen ychydig wythnosau ar ôl cyrraedd Prydain roedd llawer o’r gweithwyr newydd wedi eu siomi. O’i gymharu ag Ynysoedd y Caribî roedd y tywydd yma yn oer ac yn wlyb ac roedd nifer yn gweld eisiau eu teuluoedd a’u ffrindiau’n ôl gartref. Ac yn hytrach na chael croeso mawr am ddod i helpu i ailadeiladu’r wlad, cafodd nifer mawr o Genhedlaeth Windrush eu trin yn wael. Roedd nifer o’r gweithwyr yn profi hiliaeth a rhagfarn bron bob dydd ac roedd eu plant yn aml yn cael eu bwlio yn yr ysgol.   "
            : "Within a few weeks of arriving here, many of the new workers were disappointed. Compared with the Caribbean Islands, the weather here was cold and wet and many of them missed their families and friends back home. And rather than having a warm welcome for coming to help reconstruct Britain, a great many of the Windrush Generation were badly treated. Many of the workers experienced racism and prejudice nearly every day and their children were often bullied in school.  "}
        </p>
        <p className="resourceP">
          {lang
            ? "Rhwng 1948 a 1971 daeth tua hanner miliwn o bobl i fyw yma ond doedd pawb ddim yn hapus am hyn. I gefnogi ei gilydd, tyfodd cymunedau Cenhedlaeth Windrush yn gymunedau clos iawn mewn mannau fel Brixton yn Llundain a Tiger Bay yng Nghaerdydd. Mae’r cymunedau hyn yn dal i fodoli heddiw ac maen nhw wedi cael effaith fawr ar y ffordd rydyn ni’n byw ein bywydau yn y wlad hon dros y blynyddoedd. Pan ddaeth Cenhedlaeth Windrush yma i fyw, daethon nhw â nifer o bethau eraill gyda nhw, eu traddodiadau fel Carnifal Notting Hill, eu cerddoriaeth fel reggae a ska, a’u bwydydd unigryw fel cyw iâr jerk. Byddai ein bywydau ni yn llawer tlotach heb ddylanwadau Cenhedlaeth Windrush. "
            : "Between 1948 and 1971 around half a million people came to live here but not everyone was happy about this. To support each other, the Windrush Generation communities became very close communities in places such as Brixton in London and Tiger Bay in Cardiff. These communities still exist today and they have greatly affected the way we live our lives in Britain over the years. When the Windrush Generation came to live here, they brought a number of other things with them, their traditions such as the Notting Hill Carnival, their music such as reggae and ska and their unique foods such as jerk chicken. Our lives would be much poorer without the influences of the Windrush Generation.  "}
        </p>
        <p className="resourceP">
          {lang
            ? "Ychydig flynyddoedd yn ôl, roedd llawer o sôn am Genhedlaeth Windrush ar y newyddion yn sgil sgandal a gododd ar ôl i bobl sylweddoli bod Llywodraeth Prydain wedi dinistrio’r cardiau glanio Windrush gwreiddiol. O ganlyniad i hyn, roedd rhai aelodau o Genhedlaeth Windrush yn wynebu colli eu hawliau fel dinasyddion Prydeinig a hyd yn oed yn wynebu cael eu gyrru o’r wlad! Roedd y protestio cyhoeddus a ddaeth wedyn, fodd bynnag, yn dangos un peth yn glir, sef bod mwyafrif pobl Prydain bellach yn ddiolchgar i Genhedlaeth Windrush ac yn falch iawn o’r bobl ac yn gwerthfawrogi popeth wnaethon nhw dros y gwledydd hyn. "
            : "A few years ago, there was much discussion about the Windrush Generation in the news because of a scandal which arose after it was discovered that the UK Government had destroyed the original Windrush landing cards. As a result of this, some members of the Windrush Generation faced losing their rights as British citizens and even faced being sent out of the UK! However, the public protest which came about because of this demonstrated one thing clearly, that the majority of the British people are by now thankful to and very proud of the Windrush Generation and what they did for Britain. "}
        </p>

        <div
          className="learningOutcomes"
          style={{ backgroundColor: "#CFE57D" }}
        >
          <h2>{lang ? "Eich tro chi! " : "Your turn! "}</h2>
          <p className="resourceP">
            {lang
              ? "Yn y darn ffeithiol hwn, dydy’r testun ddim yn disgrifio teimladau na meddyliau’r bobl a benderfynodd symud i Brydain. Beth am i chi roi eu hunain yn esgidiau plentyn o’r Caribî sydd wedi gweld poster Llywodraeth Prydain. Penderfynwch a ydych chi o blaid neu yn erbyn symud, yna ysgrifennwch lythyr dychmygol i berswadio eich rhieni i wneud hyn. Bydd angen i chi bwyso a mesur manteision ac anfanteision derbyn cynnig o’r fath.  "
              : `In this factual piece, the text doesn't describe the feelings or thoughts of the people who took the decision to move to Britain. How about putting yourself in the shoes of a child from the Caribbean who has seen the British Government's poster? Decide whether you are for or against moving, then write an imaginary letter to persuade your parents to do this. You will need to consider carefully the advantages and disadvantages of accepting such an offer. `}
          </p>

          <p className="resourceP">
            <strong>{lang ? "Deilliant Dysgu:" : "Learning Outcome:"}</strong>
            <br />{" "}
            {lang
              ? "Gallu ysgrifennu llythyr perswadio  "
              : "Able to write a persuasive letter  "}
          </p>
          <p className="resourceP">
            <strong>
              {lang ? "Meini Prawf Llwyddiant: " : "Success Criteria:"}
            </strong>
            <br />{" "}
            {lang
              ? "Cyfeiriad a dyddiad ar yr ochr dde  "
              : "Address and date on the right side  "}
            <br />
            {lang
              ? "Cychwyn gyda ‘Annwyl…’ yna dechrau llinell newydd "
              : "Start with ‘Dear...’ then start a new line "}
            <br />
            {lang
              ? "Paragraff i gyflwyno’r pwnc "
              : "A paragraph to introduce the topic "}
            <br />
            {lang
              ? "Nodi eich pwyntiau o blaid / yn erbyn "
              : "State your points for / against  "}
            <br />
            {lang
              ? "Cloi drwy gadarnhau beth yw eich barn bersonol chi  "
              : "Conclude by reinforcing your own personal opinion "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Windrush;

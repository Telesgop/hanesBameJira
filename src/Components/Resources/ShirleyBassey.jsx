import React from "react";
import "./Resources.css";
import { LanguageContext } from "../../Helper/Context";
import { useContext } from "react";

const ShirleyBassey = () => {
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <>
      <div className="resourcePage">
        <h1 className="resourceH1">
          {lang ? "Noson i’w chofio!  " : "A night to remember!  "}
        </h1>
        <p className="resourceP">
          {lang ? "“Mam! Mam! Dwi wedi ennill!” " : "“Mum! Mum! I've won!” "}
        </p>
        <p className="resourceP">{lang ? "“O ddifri?” " : "“Seriously?”  "} </p>
        <p className="resourceP">
          {lang
            ? "“Do! Mae’n dweud yn y fan hyn, edrych, dau docyn VIP i weld y Fonesig Shirley Bassey yng Nghanolfan y Mileniwm ar ddydd Gŵyl Dewi!”   "
            : "“Yes! It says here, look, two VIP tickets to see Dame Shirley Bassey in the Wales Millennium Centre on St David's Day!” "}
        </p>
        <p className="resourceP">
          {lang
            ? "Roedd Megan wedi bod yn ffan mawr o Shirley Bassey ers iddi glywed y gân ‘Goldfinger’ ar ddechrau ffilm James Bond dros y Nadolig. Roedd wedi gwirioni â’r ffaith mai Cymraes oedd yn canu’r brif gân i ffilm am un o gymeriadau enwocaf y byd. Ers hynny roedd wedi lawrlwytho pob cân oedd ganddi a gwylio pob fideo ohoni oedd ar y we. Roedd hyd yn oed wedi perswadio Mrs Rowlands i wneud gwaith arni yn yr ysgol. Ac wrth wneud rhywfaint o waith ymchwil ar gyfer ‘cwis yr wythnos’ y gwelodd Megan y gystadleuaeth. Dim ond ateb tri chwestiwn hollol hawdd a disgrifio mewn rhyw 50 o eiriau pam roedd yn edmygu Shirley Bassey oedd angen ei wneud. Roedd Megan yn gwybod yn syth fod Shirley Bassey wedi ei geni yn Tiger Bay, mai yn 1959 y llwyddodd cân ganddi i gyrraedd rhif un yn y siartiau am y tro cyntaf a’i bod wedi perfformio mewn esgidiau glaw, neu wellingtons yn Glastonbury yn 2007! Bu Megan yn pendroni’n hir am y paragraff byr i esbonio pam roedd hi’n edmygu Shirley Bassey cymaint. Ond ar ôl cychwyn ac ailgychwyn dwsinau o weithiau, penderfynodd fod ychydig bach yn wahanol a chyfansoddi cerdd:  "
            : "Megan had been a huge fan of Shirley Bassey since hearing the song ‘Goldfinger’ at the beginning of a James Bond film over Christmas. She had loved the fact that a Welsh woman was singing the title song of a film about one of the world's most famous characters. Since then, she had downloaded every song of Shirley's and watched every video of hers on the web. She had even persuaded Mrs Rowlands to do a project on her in school. And Megan happened to see the competition when doing a little research for the ‘weekly quiz’. You only needed to answer three really simple questions and describe in around 50 words why you admired Shirley Bassey. Megan knew immediately that Shirley Bassey had been born in Tiger Bay, that she had her first hit in 1959 and that she had performed wearing wellingtons in Glastonbury in 2007! She took a long time thinking about the short paragraph to explain why she admired Shirley Bassey so much. But after starting and restarting dozens of times, she decided to be a bit different and wrote a poem: "}
        </p>
        <div className="learningOutcomesPoem">
          <p className="resourceP">
            {lang
              ? "Pwy ydw i’n edmygu sy’n f’ysbrydoli i?  "
              : "Whom do I admire, who is my inspiration?  "}
            <br />
            {lang
              ? "Daw un yn syth i’m meddwl, un ddaw o’n gwlad fach ni! "
              : "A singer comes to mind, and she's someone from our nation!  "}
            <br />
            {lang
              ? "Un ddawnus, gydwybodol a’i thalent sydd o hyd  "
              : "She's talented, hard-working and always represents us "}
            <br />
            {lang
              ? "Yn cynrychioli Cymru yn wych ar draws y byd! "
              : "Across the world, in cities like Cape Town and Las Vegas! "}
            <br />
            {lang
              ? "O’r Dwyrain i’r Gorllewin, o’r Gogledd lawr i’r De,  "
              : "North, South, East and West, the Welsh people say "}
            <br />
            {lang
              ? "Does neb fel Shirley Bassey, ‘Brenhines’ Tiger Bay!   "
              : "That Shirley Bassey is unique, our ‘Queen’ of Tiger Bay! "}
          </p>
        </div>
        <p className="resourceP">
          {lang
            ? "Hir pob aros, ond o’r diwedd, daeth yr amser i deithio i lawr i Gaerdydd. Ar ôl cyrraedd y theatr doedd Megan, na’i mam ddim yn gallu credu’r peth, roedd y seddi VIP yn y rhes flaen! "
            : "Every waiting seems long, but at last, the time came to travel down to Cardiff. After getting to the theatre, neither Megan nor her mother could believe it, the VIP seats were in the front row! "}
        </p>
        <p className="resourceP">
          {lang
            ? "Ar ôl i Megan a’i mam setlo yn eu seddi, daeth merch smart yn cario clipfwrdd atynt. "
            : "After Megan and her mother settled in their seats, a smart girl came towards them with a clipboard. "}
        </p>
        <p className="resourceP">
          {lang
            ? "“Noswaith dda. Megan Roberts, ia? Chi enillodd ein cystadleuaeth ni ar y wefan, ynte? Wel, mae gennym ni syrpréis bach ychwanegol i chi heno. Yn ogystal â chael seddi VIP yn y rhes flaen, bydd cyfle i chi gyfarfod â’r Fonesig Shirley Bassey ei hun ar ôl y sioe! Bydd cyfle i chi gael sgwrs fach anffurfiol, felly efallai byddai’n syniad i chi feddwl am unrhyw gwestiynau yr hoffech eu gofyn iddi. Gwela’ i chi wedyn; mwynhewch y sioe!” "
            : "“Good evening, it's Megan Roberts, isn't it? You won our competition on our website, didn't you? Well, we've got a little extra surprise for you tonight. As well as having VIP seats in the front row, there’ll be an opportunity for you to meet Dame Shirley Bassey herself after the show! You’ll be able to have a short informal conversation, so it might be an idea for you to think about any questions you'd like to ask her. I'll see you later; enjoy the show!''"}
        </p>
        <p className="resourceP">
          {lang
            ? "Ac am sioe oedd hi! O’r eiliad y daeth hi ar y llwyfan, llwyddodd Shirley Bassey i swyno’r gynulleidfa gydag un gân enwog ar ôl y llall! "
            : " And what a show it was! From the second she came on stage, Shirley Bassey captivated the audience with one hit after the other! "}
        </p>
        <p className="resourceP">
          {lang
            ? "Ar ddiwedd y sioe, daeth y ferch a’r clipfwrdd yn ôl at Megan a’i mam. Arweiniodd y ferch y ddwy ohonyn nhw drwy ddrws ochr a oedd yn mynd â nhw i gefn y llwyfan. Roedd bol Megan yn troi fel peiriant golchi dillad, ond unwaith y gwelodd hi’r wên serchus ar wyneb y ‘diva’ o Tiger Bay, gwyddai fod popeth yn mynd i fod yn iawn, fod popeth yn mynd i fod yn berffaith! "
            : " At the end of the show, the girl with the clipboard came back to fetch Megan and her mother. The girl led them both through a side door which took them backstage. Megan's stomach was whizzing like a washing machine, but once she saw the friendly smile on the Tiger Bay diva's face, she knew that everything would be alright, that everything would be perfect! "}
        </p>

        <div
          className="learningOutcomes"
          style={{ backgroundColor: "#CFE57D" }}
        >
          <h2 className="resourceH2">
            {lang ? "Eich tro chi! " : "Your turn! "}
          </h2>
          <p className="resourceP">
            {lang
              ? "Mae’r stori yma’n gorffen gyda Megan ar fin cyfarfod ei harwres. Tybed pa fath o gwestiynau a holodd Megan a beth oedd atebion y ‘diva’ o Tiger Bay? Eich tasg chi yw gorffen y stori drwy ysgrifennu’r sgwrs a gawson nhw. "
              : `This story ends with Megan about to meet her heroine. Can you think of the kind of questions Megan asked, and what were the responses of the Tiger Bay ‘diva’? Your task is to complete the story by writing the conversation they had. `}
          </p>

          <p className="resourceP">
            <strong>{lang ? "Deilliant Dysgu:" : "Learning Outcome:"}</strong>
            <br />{" "}
            {lang
              ? "Gallu ysgrifennu sgwrs   "
              : "Able to write a conversation   "}
          </p>
          <p className="resourceP">
            <strong>
              {lang ? "Meini Prawf Llwyddiant: " : "Success Criteria:"}
            </strong>
            <br />{" "}
            {lang
              ? "Defnyddio “ a ” i ddangos bod rhywun yn siarad "
              : "Using “ and ” to indicate that someone is speaking  "}
            <br />
            {lang
              ? "Meddwl am beth fydd pob cymeriad yn ei ddweud a sut bydd yn ei ddweud  "
              : "Thinking about what each character will say and how they will say it "}
            <br />
            {lang
              ? "Defnyddio ? ar ddiwedd pob cwestiwn  "
              : "Using ? at the end of each question "}
            <br />
            {lang
              ? "Dechrau llinell newydd pan fydd rhywun gwahanol yn dechrau siarad "
              : "Starting a new line when a different person starts talking   "}
          </p>
        </div>
      </div>
    </>
  );
};

export default ShirleyBassey;

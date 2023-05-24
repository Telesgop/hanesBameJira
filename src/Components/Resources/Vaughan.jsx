import React from "react";
import "./Resources.css";
import { LanguageContext } from "../../Helper/Context";
import { useContext } from "react";

const Vaughan = () => {
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <>
      <div className="resourcePage">
        <h1 className="resourceH1">
          {lang ? "" : "A portrait of Vaughan Gething "}
        </h1>

        <p className="resourceP">
          {lang
            ? ""
            : "Vaughan Gething is a familiar face to many of us here in Wales as he is a leading member of the cabinet in Y Senedd. As a result he is responsible for making a number of very important decisions that affect all our lives. But who is the man behind this important role, what is his background?  "}
        </p>
        <p className="resourceP">
          {lang
            ? ""
            : "Vaughan was born in Zambia in Africa. His father was a vet from Wales and his mother was a native of that Zambia. When Vaughan was two years old the family moved to Monmouthshire for a while but he grew up in Dorset in England. "}{" "}
        </p>
        <p className="resourceP">
          {lang
            ? ""
            : "It was clear from his university days that Vaughan Gething could handle responsibilities. While at Aberystwyth university he was made President of the National Student Union of Wales, the first of ethnic origin to do so, and in his role as president he became famous for his impassioned speeches. After leaving college he worked as a solicitor and then as a partner in the famous law firm Thompsons. During this period in his life he became a member of the GMB, UNSAIN and Unite unions, and he was the youngest ever President of TUC Cymru.   "}
        </p>
        <p className="resourceP">
          {lang
            ? ""
            : "In the past, Vaughan has served as a county councillor, school governor and community service volunteer - supporting and caring for a student with cerebral palsy. This caring trait in his character made it clear that he is someone who is very willing to help in his community. So the next natural step for him was to apply for the Senedd. In 2011 his dream came true when he was elected Member of Parliament for Cardiff South and Penarth.  "}
        </p>
        <p className="resourceP">
          {lang
            ? ""
            : "In December 2018 Vaughan Gething was appointed Minister for Health and Social Services and he was the Health Minister for Wales throughout the Covid-19 pandemic. During this turbulent period he had to make several very difficult decisions. He was praised by some for his strong leadership but severely criticized by others.  "}
        </p>
        <p className="resourceP">
          {lang
            ? ""
            : "The Economy Minister is now Vaughan Gething who provides support and advice to help businesses set up, grow or develop. He continues to live in Cardiff with his wife, Michelle and they have one son. Vaughan loves cricket but doesn't play as much as he would like now. He is also a keen rugby and football fan. "}
        </p>
        <p className="resourceP">
          {lang
            ? ""
            : "Vaughan Gething has fought hard for racial equality throughout his career and is an important member of several committees in the Senedd. But it is as a result of his role as Health Minister during the pandemic that Vaughan Gething will be remembered the most and the impact his decisions had on our lives in one of the most difficult periods in the history of modern Wales!  "}
        </p>
        <div className="learningOutcomes">
          <h2>{lang ? "Eich tro chi! " : "Your turn! "}</h2>
          <p className="resourceP">
            {lang
              ? ""
              : `During his career Vaughan Gething must have made hundreds of speeches, a very important skill for any politician. Write an imaginary speech for Vaughan Gething. Choose a topic for the speech and imagine what his opinion would be about that topic. `}
          </p>
          <p className="resourceP">
            <strong>{lang ? "Deilliant Dysgu:" : "Learning Outcome:"}</strong>
            <br /> {lang ? "" : "Be able to write a speech "}
          </p>
          <p className="resourceP">
            <strong>
              {lang ? "Meini Prawf Llwyddiant: " : "Success Criteria:"}
            </strong>
            <br />{" "}
            {lang
              ? " "
              : "Explain the purpose of the speech at the beginning. "}
            <br />
            {lang ? "" : "Express your opinion clearly. "}
            <br />
            {lang ? " " : "Greet the audience. "}
            <br />
            {lang ? "" : "Give reasons and facts to support your opinion. "}
            <br />
            {lang ? "" : "Repeat words and key points. "}
            <br />
            {lang
              ? ""
              : "Use rhetorical questions. Conclude the speech by thanking for the hearing. "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Vaughan;

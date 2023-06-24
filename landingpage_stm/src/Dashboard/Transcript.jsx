import React, { useState } from "react";
import styles from "../style";

const Transcript = (props) => {
  var actWords = props.actionwords;
  console.log("Summary act words:", actWords);
  const transData = props.transcript;
  const transArr = transData.map((data) => {
    // console.log(data.sentence);
    return { sentence: data.sentence };
  });
  const sentenceArray = transData.map((data) => data.sentence);
  // console.log("TransArray: ", transArr);
  console.log("Sentence array: ", sentenceArray);
  // console.log("Action words: ", actWords);
  // console.log("transcript: ", transData);

  // console.log("what is:", props.transcript.sentence);

  const highlightActionWords = (sentence) => {
    return actWords.reduce((acc, word) => {
      console.log("word", word);
      const regex = new RegExp(`\\b${word}\\b`, "gi");
      return acc.replace(
        regex,
        `<span style="font-weight: bold; background-color:#9BCCEF; padding: 1px 10px 1px 10px; border-radius: 7px;">${word}</span>`
      );
    }, sentence);
  };
  // console.log(highlightActionWords);

  return (
    <div className={`${styles.flexCenter} flex-col mx-2`}>
      <div className=" w-full mb-3 ">
        <div
          className={`  min-w-0 max-w-full bg-pri-10  p-2 rounded-lg ${styles.flexStart} flex-col  `}
        >
          <span
            className={`text-mh-3 font-semibold py-3 text-transparent  bg-clip-text bg-gradient-to-br from-ter-30 to-ter-50`}
          >
            Action Words
          </span>
          <div className={` grid grid-cols-6 gap-3 w-full py-3`}>
            {actWords.map((data) => (
              <div
                key={data}
                className={`${styles.flexCenter} p-3 bg-neu-50 rounded-2xl drop-shadow-lg `}
              >
                <div
                  className={`text-center  ${styles.flexCenter} text-sm cursor-pointer text-pri-40 `}
                >
                  {data}
                </div>
              </div>
            ))}
          </div>
          {/* <span className={`text-mh-3 font-semibold py-3`}>Action Words</span>
          <div
            className={` drop-shadow-md min-w-0 max-w-full bg-pri-10 p-2 rounded-lg ${styles.flexStart} flex-col  `}
          >
            {actWords.map((data) => (
              <div>{data}</div>
            ))}
          </div> */}
          {/* <ActionWords actionwords={props.summary.actionwords} /> */}
          {/* <div className={`${styles.flexStart} flex-col`}></div> */}
        </div>
      </div>
      {/* whole transcript div */}
      <div
        className={`${styles.flexCenter} flex-col gap-4 drop-shadow-md  w-full`}
      >
        {/* each transcript person div */}
        {transData.map((data) => (
          <div className="w-full">
            <div
              key={data.start}
              className={`${styles.flexStart} flex-col bg-pri-10 rounded-xl p-3 gap-2 h-full`}
            >
              <div className={`${styles.flexStart} flex-col`}>
                <span className={`text-mh-4 font-semibold`}>{data.name}</span>
                <span className={`text-mb-2 text-neu-30`}>
                  {data.start} secs
                </span>
              </div>
              <div className={`w-full h-full  border-l-2 border-black `}>
                <span className={`text-mh-5 leading-loose`}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: highlightActionWords(data.sentence),
                    }}
                  ></div>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transcript;

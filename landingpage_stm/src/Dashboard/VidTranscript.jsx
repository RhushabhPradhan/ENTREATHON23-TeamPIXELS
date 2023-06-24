import React, { useState } from "react";
import styles from "../style";
import LoadingSpinner from "./LoadingSpinner";

const VidTranscript = (props) => {
  // const rollingTexts = [
  //   "Your Transcript is being analyzed...",
  //   "Generating Insights...",
  //   "Preparing the summary...",
  // ];
  //   console.log("transcript is ", props.transcript);
  //   const [transData, settransData] = useState(props.transcript);
  // if (props.transcript && props.isLoading) {
  //   return <LoadingSpinner />;
  // } else {
  return (
    <div className={`${styles.flexCenter} flex-col mx-2`}>
      {/* whole transcript div */}
      <div
        className={`${styles.flexCenter} flex-col gap-4 drop-shadow-md  w-full`}
      >
        {/* each transcript person div */}
        {/* {transData.map((data) => ( */}
        <div className="w-full">
          <div
            className={`${styles.flexStart} flex-col bg-pri-10 rounded-xl p-3 gap-2 h-full`}
          >
            <div className={`w-full h-full  border-l-2 border-black `}>
              <span className={`text-mh-5`}>{props.transcript}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// };

export default VidTranscript;

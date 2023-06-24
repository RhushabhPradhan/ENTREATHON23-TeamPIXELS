import jsPDf from "jspdf";
import React from "react";
import styles from "../style";
import LoadingSpinner from "./LoadingSpinner";
import ShuffleTexts from "./ShuffleTexts.jsx";
import TabComponent from "./TabComponent";
import TabComponentVid from "./TabComponentVid";
import { meetingData } from "./constants";

const Hero = (props) => {
  // console.log("Hero", props.vidTranscript);
  const rollingTexts = [
    "Extracting key points...",
    "Compiling important details...",
    "Organizing information...",
    "Summarizing key takeaways...",
    "Analyzing transcript data...",
    "Identifying key themes...",
    "Gathering important insights...",
    "Processing transcript information...",
    "Creating a summary report...",
    "Preparing a detailed analysis...",
    "Generating actionable insights...",
    "Compiling a comprehensive summary...",
    "Breaking down complex information...",
    "Extracting valuable insights...",
  ];
  function downloadPDF() {
    const doc = new jsPDf();
    console.log("afaas", props.vidSummary);
    doc.setFontSize(12);
    const maxWidth = 180;
    const lines = doc.splitTextToSize(props.summary[0].summary, maxWidth);
    doc.text(lines, 10, 10);
    doc.save("summary.pdf");
  }
  return (
    <div
      className={`font-['Poppins'] h-screen w-full scroll-none bg-pri-10 ${styles.flexStart} flex-col  `}
    >
      <div className={`${styles.flexCenter} w-full drop-shadow-xl `}>
        <div
          className={` bg-neu-50 rounded-xl ${styles.flexCenter} justify-between p-2 m-2 w-full `}
        >
          {props.isLoading ? (
            <div
              className={`flex flex-col h-[400px] ${styles.flexCenter} w-full h-screen`}
            >
              <LoadingSpinner />
              <ShuffleTexts texts={rollingTexts} default={rollingTexts[0]} />
            </div>
          ) : (
            <></>
          )}
          {props.showTranscript || props.isLoading ? (
            <TabComponent
              summary={props.summary}
              setIsLoading={props.setIsLoading}
              isLoading={props.isLoading}
            />
          ) : (
            <TabComponentVid
              vidSummary={props.vidSummary}
              vidTranscript={props.vidTranscript}
              setIsLoading={props.setIsLoading}
              isLoading={props.isLoading}
            />
          )}
          {/* {<TabComponent summary={props.summary} />} */}
        </div>
      </div>
    </div>
  );
};

export default Hero;

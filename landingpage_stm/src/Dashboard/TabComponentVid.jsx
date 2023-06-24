import React, { useEffect, useState } from "react";
import styles from "../style";
// import Insights from "./Insights";
// import Summary from "./Summary";
import Transcript from "./Transcript";
import VidSummary from "./VidSummary";
import VidTranscript from "./VidTranscript";

const TabComponentVid = (props) => {
  console.log("afaas", props.vidSummary[0].summary);
  const [finalsummary, updatefinalsummary] = useState(
    props.vidSummary[0].summary
  );
  React.useEffect(() => {
    updatefinalsummary(props.vidSummary[0].summary);
  }, [props.vidSummary]);
  if (props.vidTranscript !== "") {
    const [activeTab, setActiveTab] = useState("transcript");
    console.log(finalsummary);
    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };

    return (
      <div className="w-full font-[Poppins] ">
        <div className={`${styles.flexCenter}    justify-between`}>
          <div className={`${styles.flexCenter} w-full mx-2`}>
            {/* <button
              className={`${
                activeTab === "insights"
                  ? "bg-pri-40 text-neu-50"
                  : "bg-neu-50 text-neu-10"
              } py-2 w-full rounded-lg  border-none cursor-pointer `}
              onClick={() => handleTabClick("insights")}
            >
              Insights
            </button> */}
            <button
              className={`${
                activeTab === "transcript"
                  ? "bg-pri-40 text-neu-50"
                  : "bg-neu-50 text-neu-10"
              } py-2 w-full rounded-lg  border-none cursor-pointer `}
              onClick={() => handleTabClick("transcript")}
            >
              Transcript
            </button>
            <button
              className={`${
                activeTab === "summary"
                  ? "bg-pri-40 text-neu-50"
                  : "bg-neu-50 text-neu-10"
              } py-2 w-full rounded-lg  border-none cursor-pointer `}
              onClick={() => handleTabClick("summary")}
            >
              Summary
            </button>
          </div>
        </div>
        <div className="my-2">
          {/* {activeTab === "insights" && (
            <div>{<Insights insight={props.summary[0].insights} />}</div>
          )} */}
          {activeTab === "transcript" && (
            <div>
              {
                <VidTranscript
                  transcript={props.vidTranscript}
                  setIsLoading={props.setIsLoading}
                  isLoading={props.isLoading}
                />
              }
            </div>
          )}
          {activeTab === "summary" && (
            <div>
              {
                <VidSummary
                  summary={finalsummary}
                  updatefinalsummary={updatefinalsummary}
                />
              }
            </div>
          )}
          {activeTab === "insights" && (
            <div>
              {<VidInsights keywords={["updatefinalsummary", "abcd"]} />}
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full font-[Poppins] ">
        <div className={`${styles.flexCenter}    justify-between `}>
          <div className={`${styles.flexCenter} w-full mx-2 h-96`}>
            Click on{" "}
            <span className="px-4 text-pri-40 font-semibold text-center">
              {" "}
              Import Transcript{" "}
              <span className="text-neu-10 font-normal"> or </span>
              Import Video / Audio
            </span>{" "}
            Button to get started.
          </div>
        </div>
      </div>
    );
  }
};

export default TabComponentVid;

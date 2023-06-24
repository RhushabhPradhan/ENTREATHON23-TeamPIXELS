import React, { useState } from "react";
import styles from "../style";
import Insights from "./Insights";
import Summary from "./Summary";
import Transcript from "./Transcript";
const TabComponent = (props) => {
  if (props.summary[0] !== "") {
    // console.log(props);
    const [activeTab, setActiveTab] = useState("insights");
    const [finalsummary, updatefinalsummary] = useState(
      props.summary[0].summary
    );
    React.useEffect(() => {
      updatefinalsummary(props.summary[0].summary);
    }, props.summary);

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };

    return (
      <div className="w-full font-[Poppins] ">
        <div className={`${styles.flexCenter}    justify-between`}>
          <div className={`${styles.flexCenter} w-full mx-2`}>
            <button
              className={`${
                activeTab === "insights"
                  ? "bg-pri-40 text-neu-50"
                  : "bg-neu-50 text-neu-10"
              } py-2 w-full rounded-lg  border-none cursor-pointer `}
              onClick={() => handleTabClick("insights")}
            >
              Insights
            </button>
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
          {activeTab === "insights" && (
            <div>
              {
                <Insights
                  insight={props.summary[0].insights}
                  keywords={props.summary[0].keyword}
                />
              }
            </div>
          )}
          {activeTab === "transcript" && (
            <div>
              {
                <Transcript
                  transcript={props.summary[0].transcript}
                  setIsLoading={props.setIsLoading}
                  isLoading={props.isLoading}
                  actionwords={props.summary[0].actionwords}
                />
              }
            </div>
          )}
          {activeTab === "summary" && (
            <div>
              {
                <Summary
                  summary={finalsummary}
                  updatefinalsummary={updatefinalsummary}
                />
              }
            </div>
          )}
        </div>
      </div>
    );
  } else if (props.isLoading) {
    return <></>;
  } else {
    return (
      <div className="w-full font-[Poppins] ">
        <div className={`${styles.flexCenter}    justify-between `}>
          <div className={`${styles.flexCenter} w-full mx-2 h-screen`}>
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

export default TabComponent;

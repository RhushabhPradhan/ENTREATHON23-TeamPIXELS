import React from "react";
import styles from "../style";

const Insights = (props) => {
  var activespeakers = 0;
  var totalwords = 0;
  var SpeakerDist = [];
  var speakerjson = props.insight.speakers;
  for (const speaker in speakerjson) {
    if (speakerjson.hasOwnProperty(speaker)) {
      activespeakers++;
      totalwords += speakerjson[speaker];
      var newjas = { speaker: speaker, percent: speakerjson[speaker] * 100 };
      SpeakerDist.push(newjas);
    }
  }
  SpeakerDist.sort((a, b) => b.percent - a.percent);
  for (var i in SpeakerDist) {
    SpeakerDist[i].percent /= totalwords;
  }
  var meetStats = [
    {
      id: "ms-1",
      stat: "Duration",
      value: props.insight.duration,
    },
    {
      id: "ms-2",
      stat: "Total Speakers",
      value: activespeakers,
    },
    {
      id: "ms-3",
      stat: "Active Users",
      value: props.insight.active_members,
    },
  ];
  // keywords data
  var keywords = props.keywords;
  function ActivityBar({ percentage }) {
    return (
      <div className="w-full h-2 bg-white rounded-full">
        <div
          className={`bg-ter-50 rounded-full`}
          style={{
            width: `${percentage}%`,
            height: "100%",
          }}
        ></div>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 gap-7 grid-auto-rows  mx-2`}>
      <div className={` grid grid-cols-2 lg:grid-cols-3 gap-4`}>
        {meetStats.map((data) => (
          <div
            key={data.id}
            className={` drop-shadow-md min-w-0 max-w-sm bg-pri-10 p-2 rounded-lg ${styles.flexStart} flex-col cursor-pointer`}
          >
            <span className={`text-desc1 md:text-tb-1`}>{data.stat}</span>
            <span
              className={`text-mh-1 md:text-th-1 font-semibold text-ter-50`}
            >
              {data.value}
              {data.id === "ms-1" ? (
                <span className="text-sm text-ter-30 font-normal ml-1">
                  {data.value>60? "mins" : "secs"}
                </span>
              ) : (
                <span> </span>
              )}
            </span>
          </div>
        ))}
      </div>
      {/* SPEAKER DISTRIBUTION */}
      <div
        className={` drop-shadow-md min-w-0 max-w-full bg-pri-10 p-2 rounded-lg ${styles.flexStart} flex-col gap-2 cursor-pointer`}
      >
        <span className={`text-mh-3 md:text-tb-1 `}>Speaker Distribution</span>
        {SpeakerDist.map((data) => (
          <div
            key={data.speaker}
            className={`w-full ${styles.flexCenter} gap-2 justify-left`}
          >
            {/* name */}
            <span
              className={`text-desc1 md:text-th-5 font-semibold text-ter-50 min-w-[140px] max-w-[300px] `}
            >
              {data.speaker}
            </span>
            {/* activity bar */}
            <ActivityBar percentage={data.percent} />
            <span
              className={`text-desc1 md:text-th-5 font-semibold text-pri-50`}
            >
              {data.percent.toFixed(2)}
              {"%"}
            </span>
          </div>
        ))}
      </div>
      {/* Keywords */}
      <div
        className={` drop-shadow-md min-w-0 max-w-full bg-pri-10 p-2 rounded-lg ${styles.flexStart} flex-col  `}
      >
        <span className={`text-mh-3 md:text-tb-1 `}>Keywords</span>
        <div className={` grid grid-cols-6 gap-3 w-full py-5`}>
          {keywords.map((data) => (
            <div
              key={data}
              className={`${styles.flexCenter} p-3 bg-neu-50 rounded-2xl drop-shadow-lg  `}
            >
              <div
                className={`text-center w-fit ${styles.flexCenter} text-sm cursor-pointer`}
              >
                {data}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* TOPIC DISTRIBUTION */}
      {/* <div
        className={` drop-shadow-md min-w-0 max-w-full bg-pri-10 p-2 rounded-lg ${styles.flexStart} flex-col gap-2`}
      >
        <span className={`text-mh-3 md:text-tb-1 `}>Topic Distribution</span>
        {TopicDist.map((topicData) => (
          <div
            key={topicData.id}
            className={`${styles.flexStart} w-full bg-white rounded-xl gap-4 `}
          >
            <div className="h-full w-1/12">
              <span
                className={`px-2 rounded-tl-xl rounded-bl-xl bg-pri-20 h-full ${styles.flexCenter} items-center text-mb-2 md:text-th-5`}
              >
                {"#"}
                {topicData.topicNum}
              </span>
            </div>
            <div className="h-full w-11/12">
              <span
                className={`${styles.flexStart} py-3 pr-2 text-mh-5 md:text-th-5`}
              >
                {topicData.topicName}
              </span>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Insights;

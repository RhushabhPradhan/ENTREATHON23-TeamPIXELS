import React from "react";
import styles from "../style";

const VidInsights = (props) => {
  var keywords = props.keywords;
  return (
    <div className={`grid grid-cols-1 gap-7 grid-auto-rows  mx-2`}>
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
    </div>
  );
};

export default VidInsights;

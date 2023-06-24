import React from "react";
import benifit1 from "../assets/benifit-1.svg";
import benifit2 from "../assets/benifit-2.svg";
import benifit3 from "../assets/benifit-3.svg";
const Benifits = () => {
  return (
    <div className={`pt-12 font-['Poppins'] bg-pri-10 px-5 md:px-24 lg:px-40 `}>
      <div
        className={`flex flex-col md:flex-row text-mh-4 justify-center md:justify-between items-center md:gap-10 `}
      >
        <span
          className={`text-center md:text-left text-mh-5 md:text-th-4 lg:text-dh-4 2xl:text-dh-3  max-w-[500px]`}
        >
          Save time by quickly reviewing <b>key points</b> and <b>decisions</b>{" "}
          from meetings
        </span>
        <img
          src={benifit1}
          alt=""
          className={`object-fill w-[220px] md:w-[320px] xl:w-[512px] 2xl:w-[620px]`}
        />
      </div>
      <div
        className={`flex flex-col md:flex-row md:flex-row-reverse text-mh-4 justify-center md:justify-between items-center mt-12 md:gap-10`}
      >
        <span
          className={`text-center md:text-left text-mh-5 md:text-th-4 lg:text-dh-4 2xl:text-dh-3  max-w-[500px]`}
        >
          Identify <b>patterns</b> and <b>trends</b> in team communication and
          collaboration
        </span>
        <img
          src={benifit2}
          alt=""
          className={`object-fill w-[220px] md:w-[320px] xl:w-[512px] 2xl:w-[620px] `}
        />
      </div>
      <div
        className={`flex flex-col md:flex-row  text-mh-4 justify-center md:justify-between items-center mt-12 md:gap-10`}
      >
        <span
          className={`text-center md:text-left text-mh-5 md:text-th-4 lg:text-dh-4 2xl:text-dh-3  max-w-[500px]`}
        >
          Improve team <b>productivity</b> and <b>decision-making</b>
        </span>
        <img
          src={benifit3}
          alt=""
          className={`object-fill w-[220px] md:w-[320px] xl:w-[512px] 2xl:w-[620px] `}
        />
      </div>
    </div>
  );
};

export default Benifits;

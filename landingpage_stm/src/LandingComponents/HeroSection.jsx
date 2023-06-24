import React from "react";
import heroIllustration from "../assets/heroIllustration.svg";
import heroWaves from "../assets/heroWaves.svg";
import styles from "../style";

const HeroSection = () => {
  return (
    <section className={` font-['Poppins'] bg-pri-10 `}>
      <div
        className={` flex flex-col lg:flex-row lg:justify-left justify-center items-center pt-10 ${styles.padding} `}
      >
        <div>
          <p
            className={`text-center font-medium lg:text-left text-mh-2 md:text-th-1 lg:text-dh-4 xl:text-dh-3 2xl:text-dh-2 p-0 m-0  leading-0 md:leading-2.5 `}
          >
            Transform the way you review and analyze virtual meetings
          </p>
          <p className=" text-center text-semibold  lg:text-left text-mh-5 md:text-th-4 lg:text-db-2 xl:text-db-1 text-neu-20 py-5 m-0 ">
            Say goodbye to hours spent combing through long transcripts and
            hello to improved team collaboration with Summarize Teams Meetings
          </p>
        </div>
        <img
          src={heroIllustration}
          className={`w-[300px] md:w-[470px] lg:w-[1215px] h-auto z-0`}
        />
      </div>
      <img
        src={heroWaves}
        className={`-z-50 object-cover w-full -mt-32 md:-mt-80 lg:-mt-52 xl:-mt-90 2xl:-mt-96 `}
      />

      <div className={`mx-5 lg:mx-40`}>
        <p
          className={`text-center font-medium text-mh-4 md:text-th-3 lg:text-dh-3 2xl:text-dh-2 p-0 m-0  leading-0 md:leading-2.5 -mt-5 sm:-mt-20 lg:-mt-28`}
        >
          Streamlined summaries and actionable insights
        </p>
        <p className="text-center  text-mh-5 md:text-th-4 lg:text-dh-4 2xl:text-dh-3 leading-10 text-neu-20 py-5 m-0 mx-5">
          Stay on top of important information and decisions with our app,
          Summarize Teams Meetings. We turn hours of meeting transcripts and
          audio/video recordings into easy-to-digest summaries and actionable
          insights
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

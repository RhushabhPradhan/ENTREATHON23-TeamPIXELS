import React from "react";
import AppImage from "../assets/AppMockup.svg";
import footerGrads from "../assets/footer-grads.svg";
import styles from "../style";
import { Link } from "react-router-dom";
const AppMockup = () => {
  return (
    <div className={`flex flex-col bg-pri-10 gap-10`}>
      <div
        className={`flex flex-col md:flex-row justify-between items-center ${styles.padding}  gap-10 md:gap-20 lg:gap-28 z-0 `}
      >
        <img src={AppImage} alt="" className={`w-[134px] md:w-[400px]`} />
        <div
          className={`flex flex-col justify-center items-center md:items-start gap-5 md:gap-10`}
        >
          <span className=" text-center  text-mh-5 md:text-th-4 lg:text-dh-4 2xl:text-dh-3  md:text-left text-center leading-5 md:leading-8 lg:leading-10 max-w-[744px]">
            Don't let virtual meetings slow down your team's progress. Sign up
            for
            <b> OatFer.ai</b> today and revolutionize the way you review and
            analyze your team's meetings
          </span>
          <Link to="/signup">
            <button className=" cursor-pointer bg-ter-50 border-none px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-6 rounded-lg text-pri-10 text-mh-5 md:text-th-4 lg:text-dh-4 z-10">
              Sign Up Now!
            </button>
          </Link>
        </div>
      </div>
      <img
        src={footerGrads}
        alt=""
        className={`object-cover w-full h-auto -mt-20 md:-mt-48 lg:-mt-56 xl:-mt-96 -z-1`}
      />
    </div>
  );
};

export default AppMockup;

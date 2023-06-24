import React from "react";
import arrow from "../assets/Arrow.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div
      className={` -mt-5 bg-ter-50 flex flex-col justify-center items-center p-5 md:px-24 lg:px-40 gap-10 `}
    >
      <span className=" text-mh-5 md:text-th-4 lg:text-dh-4 2xl:text-dh-3 text-pri-10 text-center  leading-5 md:leading-8 lg:leading-10  mt-5 ">
        Sign up for Summarize Teams Meetings today and start seeing the benefits
        of streamlined meeting summaries and actionable insights!
      </span>
      <Link to="/signup">
        <button className="border-ter-50 hover:border-pri-10 border-solid  cursor-pointer flex flex-row items-center gap-2 justify-center px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-6 rounded-lg  text-mh-5 md:text-th-4 lg:text-dh-4 z-10 bg-ter-50 mb-10 text-pri-10">
          Get Started
          <img src={arrow} alt="" className="" />
        </button>
      </Link>
    </div>
  );
};

export default Footer;

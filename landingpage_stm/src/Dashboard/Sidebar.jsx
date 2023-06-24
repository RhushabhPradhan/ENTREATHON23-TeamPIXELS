import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../style";
import { meetingData } from "./constants";

const Sidebar = (props) => {
  // console.log(meetingData.length);
  const [numToShow, setNumToShow] = useState(7); // Display up to 3 items by default
  const [activeMeetingId, setActiveMeetingId] = useState(null); // Keep track of active meeting card ID
  function truncateText(text, maxLength) {
    let truncated = text.trim().split(" ").slice(0, maxLength).join(" ");
    if (text.length > truncated.length) {
      truncated += "...";
    }
    return truncated;
  }

  const handleShowMore = () => {
    // Display up to 5 more items when the "view more" button is clicked
    setNumToShow(numToShow + 5);
  };

  const handleMeetingCardClick = (data) => {
    // Set the active meeting card ID on click
    // console.log(data);
    if (data.type === "vtt") {
      props.setShowTranscript(true);
      props.setsummary([data]);
    } else {
      props.setShowTranscript(false);
      props.setVidSummary([data]);
      props.setVidTranscript(data.transcript);
    }
  };
  const [activeMeetingData, setActiveMeetingData] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:5000/getdata", {
        token: localStorage.getItem("token"),
      })
      .then((res) => {
        setActiveMeetingData(res.data.meetings);
      });
  }, [props.summary, props.vidSummary]);
  // console.log(activeMeetingData);
  // console.log(meetData);
  return (
    <div
      className={`${props.className} font-['Poppins'] bg-white  h-screen p-3 overflow-y-auto rounded-xl w-full`}
    >
      <div className={`${styles.flexStart} flex-col  bg-white h-full w-full `}>
        <span
          className={`${styles.flexStart} ${styles.headingD} pb-3 font-semibold  w-full text-left `}
        >
          Your Recordings
        </span>
        {/* Meeting Card */}
        {/* <Link to="/hero"> */}
        {activeMeetingData.length == 0 && (
          <div
            className={`bg-white rounded-xl w-fit ${styles.flexCenter} flex-col mt-10 p-5 drop-shadow-md text-neu-10 `}
          >
            <span className="text-mh-4 mb-4 text-center ">
              Your dont have any recordings yet
            </span>
            <div className={`${styles.flexCenter} flex-col`}>
              <span className="text-desc1">Click on </span>
              <button
                className={`text-white font-semibold text-mh-5 py-2 px-4 m-2 rounded-lg border-none bg-pri-40 hover:bg-pri-30 cursor-pointer`}
              >
                Import Transcript
              </button>{" "}
              <span className="text-desc1"> to generate meeting insights</span>
            </div>
          </div>
        )}

        <div className={`flex flex-col gap-4  ${styles.flexCenter} w-full`}>
          {activeMeetingData.slice(0, numToShow).map((data) => (
            <div
              key={data._id}
              className={`bg-pri-40 hover:shadow-lg hover:cursor-pointer ${
                styles.flexStart
              } flex-col gap-3 rounded-xl  ${
                activeMeetingId === data._id ? "bg-pri-40" : ""
              } w-full`}
              onClick={() => handleMeetingCardClick(data)}
            >
              <span
                className={`${styles.meetHeading} font-bold pl-2 pt-2 text-white`}
              >
                {/* {truncateText(data.name, 8)} */}
                {data.name}
              </span>
              <div className={`${styles.flexCenter} gap-1 pl-2 mb-2`}>
                {/* <span className={`text-desc1 text-neu-60 `}>{data.date}</span> */}
                <svg
                  width="3"
                  height="4"
                  viewBox="0 0 3 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="1.5" cy="2" r="1.5" fill="#E1E2E6" />
                </svg>
                {/**************************COMMENTED THIS FOR NOW*************************************/}
                {/* <span className={`text-desc1 text-neu-30`}>{data.day}</span> */}
              </div>
            </div>
          ))}
          {numToShow < activeMeetingData.length && (
            <button
              className="bg-pri-20 cursor-pointer p-2  rounded-lg border-0  text-white font-semibold w-fit"
              onClick={handleShowMore}
            >
              Show More
            </button>
          )}
        </div>

        {/* </Link> */}
      </div>
    </div>
  );
};

export default Sidebar;

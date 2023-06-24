import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
// import { BrowserRouter as Router, Route } from "react-router-dom";

const Dashboard = () => {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (localStorage.getItem("token") === null) {
  //     navigate("/login");
  //   }
  // }, []);
  const [showTranscript, setShowTranscript] = useState(true);
  const [vidTranscript, setVidTranscript] = useState([""]);
  const [vidSummary, setVidSummary] = useState([""]);

  // console.log(vidTranscript);
  // console.log(vidSummary);
  const [isLoading, setIsLoading] = useState(false);

  const [summary, setsummary] = useState([""]);
  return (
    <div className="flex h-screen">
      <div className="grid grid-cols-1 w-full">
        <div className="h-auto z-10 w-full md:flex">
          <Navbar
            summary={summary}
            setsummary={setsummary}
            setShowTranscript={setShowTranscript}
            vidTranscript={vidTranscript}
            setVidTranscript={setVidTranscript}
            vidSummary={vidSummary}
            setVidSummary={setVidSummary}
            setIsLoading={setIsLoading}
            isLoading={isLoading}
          />
        </div>
        <div className="bg-pri-10 flex h-max sm:h-fit lg:h-full">
          {/* <Sidebar
            className="w-full md:w-1/6 h-full ml-2 mt-2"
            summary={summary}
            setsummary={setsummary}
            setVidSummary={setVidSummary}
            vidSummary={vidSummary}
            setVidTranscript={setVidTranscript}
            setShowTranscript={setShowTranscript}
          /> */}
          <div className="bg-pri-10 flex-1 h-full md:w-5/6 overflow-y-auto  md:block">
            <Hero
              summary={summary}
              showTranscript={showTranscript}
              vidTranscript={vidTranscript}
              vidSummary={vidSummary}
              setIsLoading={setIsLoading}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

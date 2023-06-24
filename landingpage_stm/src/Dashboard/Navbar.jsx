import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SwitchOff from "../assets/SwitchOff.svg";
import Close from "../assets/close.svg";
import Menu from "../assets/menu.svg";
import styles from "../style";

const Navbar = ({
  setsummary,
  setVidTranscript,
  setVidSummary,
  setShowTranscript,
  setIsLoading,
  isLoading,
}) => {
  // const navigate = useNavigate();
  const uploadvtt = (files) => {
    setVttModal(false);
    setShowTranscript(true);
    setIsLoading(true);
    const file = files[0];
    const formData = new FormData();
    formData.append("token", localStorage.getItem("token"));
    formData.append("file", file);
    axios.post("http://localhost:5000/api/generate", formData).then((res) => {
      setsummary(res.data);
      // console.log(res.data);
      setIsLoading(false);
    });
  };
  const uploadmp3 = (files) => {
    setMp3Modal(false);
    setShowTranscript(false);
    setIsLoading(true);
    const file = files[0];
    const formData = new FormData();
    formData.append("model", "whisper-1");
    formData.append("file", file);
    axios
      .post("https://api.openai.com/v1/audio/transcriptions", formData, {
        headers: {
          Authorization: `Bearer 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`,
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        },
      })
      .then((res) => {
        const transcript = res.data.text;
        setVidTranscript(transcript);
        // console.log("Transcript is:", transcript);
        const formData = new FormData();
        setMp3Modal(!mp3Modal);
        formData.append("transcript", transcript);
        formData.append("token", localStorage.getItem("token"));
        axios
          .post("http://localhost:5000/api/generateaudio", formData)
          .then((res) => {
            const vidSummary = res.data;
            setVidSummary(vidSummary);
          });
        setIsLoading(false);
      });
  };

  const [toggle, setToggle] = useState(false);
  // const [modal, setModal] = useState(false);
  const [vttModal, setVttModal] = useState(false);
  const [mp3Modal, setMp3Modal] = useState(false);

  const toggleVttModal = () => {
    setVttModal(!vttModal);
  };

  const toggleMp3Modal = () => {
    setMp3Modal(!mp3Modal);
  };

  // const logout = () => {
  //   console.log("hello");
  //   localStorage.removeItem("token");
  //   navigate("/");
  // };

  // const toggleModal = () => {
  //   setModal(!modal);
  // };

  // if (modal) {
  //   document.body.classList.add("active-modal");
  // } else {
  //   document.body.classList.remove("active-modal");
  // }

  if (vttModal || mp3Modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <header className="text-neu-10 font-[Poppins] w-full bg-pri-10 flex flex-col ">
      <div
        className={`${styles.paddingD} ${styles.flexCenter} flex-row justify-between items-center m-2  rounded-2xl bg-white shadow-md`}
      >
        <span>
          <a
            href=""
            className={`${styles.headingD} no-underline text-neu-10 font-bold`}
          >
            MeetInsightz
          </a>
        </span>
        <img
          src={`${toggle ? Close : Menu}`}
          alt=""
          onClick={() => setToggle((prev) => !prev)}
          className="cursor-pointer sm:hidden"
        />
        <div className=" gap-5 lg:gap-10 hidden sm:flex">
          <ul
            className={` p-0 m-0 flex flex-row  text-center items-center justify-center list-none gap-5 `}
          >
            {/* <li className="">
              <a
                href=""
                className={`no-underline bg-transparent text-mh-5 py-2 px-4 rounded-lg border-none hover:bg-pri-40 hover:text-white `}
              >
                Home
              </a>
            </li> */}
            <li className={`${styles.flexCenter}`}>
              <button
                className={`bg-pri-40 text-mh-5 py-3 px-4 rounded-lg border-none hover:bg-pri-50 text-white cursor-pointer mr-2 `}
                onClick={toggleVttModal}
                disabled={isLoading}
              >
                Import transcript
              </button>
              {vttModal && (
                <div className="modal ">
                  <div onClick={toggleVttModal} className="overlay"></div>
                  <div className="modal-content w-1/2">
                    <div className="flex items-center justify-center w-full">
                      <label
                        htmlFor="dropzone-file"
                        className={`${styles.flexCenter}  flex-col w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600`}
                      >
                        <div
                          className={`${styles.flexCenter} flex-col pt-5 pb-6`}
                        >
                          <svg
                            aria-hidden="true"
                            className="w-10 h-10 mb-3 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            ></path>
                          </svg>
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Upload VTT files
                          </p>
                        </div>
                        <input
                          id="dropzone-file"
                          type="file"
                          className="hidden"
                          accept=".vtt"
                          onChange={(e) => uploadvtt(e.target.files)}
                        />
                      </label>
                    </div>

                    <button
                      className="close-modal bg-transparent border-none cursor-pointer"
                      onClick={toggleVttModal}
                    >
                      <img src={Close} />
                    </button>
                  </div>
                </div>
              )}
              <button
                className={`bg-pri-40 text-mh-5 py-3 px-4 rounded-lg border-none hover:bg-pri-50 text-white cursor-pointer  `}
                onClick={toggleMp3Modal}
                disabled={isLoading}
              >
                Import Video / Audio
              </button>
              {mp3Modal && (
                <div className="modal ">
                  <div onClick={toggleMp3Modal} className="overlay"></div>
                  <div className="modal-content w-1/2">
                    <div className="flex items-center justify-center w-full">
                      <label
                        htmlFor="dropzone-file"
                        className={`${styles.flexCenter}  flex-col w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600`}
                      >
                        <div
                          className={`${styles.flexCenter} flex-col pt-5 pb-6`}
                        >
                          <svg
                            aria-hidden="true"
                            className="w-10 h-10 mb-3 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            ></path>
                          </svg>
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Upload Audio / Video files
                          </p>
                        </div>
                        <input
                          id="dropzone-file"
                          type="file"
                          className="hidden"
                          onChange={(e) => uploadmp3(e.target.files)}
                          accept="audio/* , video/*"
                        />
                      </label>
                    </div>

                    <button
                      className="close-modal bg-transparent border-none cursor-pointer"
                      onClick={toggleMp3Modal}
                    >
                      <img src={Close} />
                    </button>
                  </div>
                </div>
              )}
              {/* <button
                className={`bg-transparent text-mh-5 ml-2 h-full rounded-2xl border-none  text-neu-10 cursor-pointer  border-1 border-solid `}
                title="Logout"
                onClick={logout}
              >
                <img src={SwitchOff} className="h-[30px] " alt="" />
              </button> */}
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`${toggle ? "flex" : "hidden"} flex flex-col items-center `}
      >
        <ul
          className={` p-0 m-0 flex flex-col  text-center justify-center list-none `}
        >
          <li className="py-5">
            <a href="" className="no-underline text-neu-10  hover:text-pri-50">
              Home
            </a>
          </li>
          <li className="pb-5">
            <a
              href=""
              className=" text-neu-10 text-mh-4 no-underline hover:text-pri-50"
            >
              Import transcript
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;

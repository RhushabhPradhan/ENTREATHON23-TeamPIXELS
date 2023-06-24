import React, { useState } from "react";
import Menu from "../assets/Menu.svg";
import Close from "../assets/Close.svg";
import styles from "../style";
import { Link } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import HomePage from "./HomePage";

const Header = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [toggle, setToggle] = useState(false);

  return (
    <header className="w-full bg-pri-10 flex flex-col drop-shadow-sm font[Poppins] ">
      <div
        className={`${styles.padding} flex flex-row max-w-[1920px] justify-between items-center  `}
      >
        <span>
          <Link to="/" className="text-mh-4 no-underline text-neu-10 font-bold">
            Oatfer.ai
          </Link>
        </span>
        <img
          src={`${toggle ? Close : Menu}`}
          alt=""
          onClick={() => setToggle((prev) => !prev)}
          className="cursor-pointer sm:hidden"
        />
        <div className=" gap-5 lg:gap-10 hidden sm:flex">
          <ul
            className={` p-0 m-0 flex flex-row  text-center items-center justify-center list-none gap-10 `}
          >
            <li className="">
              <Link
                to="/"
                className="no-underline text-neu-10  hover:text-pri-50 text-btn-14 lg:text-btn-18 sm:text-btn-12"
              >
                Home
              </Link>
            </li>
          </ul>
          <Link to="/signup">
            <button className="hover:bg-pri-60 text-btn-12 lg:text-btn-16 cursor-pointer my-4 py-2.5 px-3  rounded-lg border-0 bg-pri-50 text-neu-50">
              Sign Up
            </button>
          </Link>
          <Link to="/login">
            <button className="hover:bg-pri-60 text-btn-12 lg:text-btn-16 cursor-pointer my-4 py-2.5 px-3 rounded-lg border-0 bg-pri-50 text-neu-50 ">
              Log In
            </button>
          </Link>
        </div>
      </div>
      <div
        className={`${toggle ? "flex" : "hidden"} flex flex-col items-center `}
      >
        <ul
          className={` p-0 m-0 flex flex-col  text-center justify-center list-none `}
        >
          <Link to="/home">
            <li className="py-5 no-underline text-neu-10  hover:text-pri-50">
              Home
            </li>
          </Link>
        </ul>
        <Link to="/signup">
          <button className="hover:bg-pri-60 cursor-pointer my-2.5 py-2.5 w-[114px] rounded-lg border-0 bg-pri-50 no-underline text-neu-50 ">
            Sign Up
          </button>
        </Link>
        <Link to="/login">
          <button className="hover:bg-pri-60 cursor-pointer my-5 py-2.5 w-[114px] rounded-lg border-0 bg-pri-50 no-underline text-neu-10">
            Log In
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;

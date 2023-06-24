import React from "react";

import { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import LoginPageIll from "../assets/LoginPageIll.svg";
import passImg from "../assets/lock.svg";
import emailImg from "../assets/user.svg";
import styles from "../style";
import ForgetPassword from "./ForgetPassword";
import Header from "./Header";

const LoginPage = () => {
  React.useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      navigate("/dashboard");
    }
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log("Email:", email);
    // console.log("Password:", password);
    const loginResponse = await fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const islogin = await loginResponse.json();
    if (islogin.error === undefined) {
      localStorage.setItem("token", islogin.token);
      navigate("/dashboard");
    } else {
      ///////////////////////////////////////////////////////////////////Here, show error message with HTML or CSS
      console.log(islogin.error);
    }
  };
  return (
    <div className={`flex  flex-col h-screen  font-[Poppins]`}>
      {/* header div
      <div>
        <Header />
      </div> */}
      {/* main section div */}
      <div
        className={`${styles.flexCenter} ${styles.padding} justify-between  flex-col sm:flex-row bg-pri-10 h-full gap-4`}
      >
        {/* form div */}
        <div className={` ${styles.flexCenter} w-1/2 flex-col gap-6`}>
          <span
            className={`font-semibold text-center text-neu-10   ${styles.loginHeading}`}
          >
            Welcome Back!
          </span>
          <form
            onSubmit={handleSubmit}
            className={`${styles.flexCenter} flex-col gap-4`}
          >
            {/* email div */}
            <div className={`${styles.flexStart} flex-col gap-1`}>
              <label
                htmlFor="email"
                className="text-neu-30 font-normal mb-1 text-mb-2"
              >
                Email
              </label>
              <div
                className={`flex items-center justify-start bg-white rounded-md w-full py-1.5 px-1 gap-1`}
              >
                <img
                  src={emailImg}
                  alt=""
                  className="object-contain p-2   h-auto "
                />
                <input
                  type="email"
                  placeholder="Eg: user123@gmail.com"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="border-none  p-2 w-[250px]"
                  required
                />
              </div>
            </div>
            {/* password div */}
            <div className={` ${styles.flexStart} flex-col gap-1`}>
              <label
                htmlFor="password"
                className="text-neu-30 font-normal mb-1 text-mb-2"
              >
                Password
              </label>
              <div
                className={`flex items-center justify-start bg-white rounded-md w-full py-1.5 px-1 gap-1`}
              >
                <img
                  src={passImg}
                  alt=""
                  className="object-contain p-2   h-auto"
                />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  placeholder="*******"
                  onChange={(event) => setPassword(event.target.value)}
                  className={`border-none  p-2 w-[250px]`}
                  required
                />
              </div>
              <Link to="/resetpass" className="text-left w-full">
                <button
                  htmlFor="forgotPassword"
                  className="bg-transparent border-none text-neu-30 font-normal cursor-pointer hover:text-pri-50 w-full text-right mt-2 text-desc1"
                >
                  Forgot Passoword?
                </button>
              </Link>
            </div>

            <button
              type="submit"
              className="border-none bg-pri-50 hover:bg-pri-40 cursor-pointer text-white py-2 px-7 rounded-md"
            >
              Login
            </button>
          </form>
        </div>
        {/* img div */}
        <div className={`w-1/2 `}>
          <img
            src={LoginPageIll}
            alt=""
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

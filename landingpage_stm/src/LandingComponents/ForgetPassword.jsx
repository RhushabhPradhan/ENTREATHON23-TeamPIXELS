import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../style";
import emailImg from "../assets/user.svg";
import passImg from "../assets/lock.svg";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Your API request to reset password would go here
  };

  return (
    <div className={`${styles.flexCenter} h-screen bg-pri-10 font-[Poppins] `}>
      <div className={` rounded-lg  p-10 drop-shadow-2xl bg-white`}>
        <h2 className={`${styles.flexCenter} p-0 m-0 my-4`}>
          Forgot your password?
        </h2>
        {!isSubmitted ? (
          <form
            onSubmit={handleSubmit}
            className={`${styles.flexCenter} flex-col gap-7`}
          >
            <div className={`${styles.flexStart} flex-col gap-1`}>
              <label
                htmlFor="email"
                className="text-neu-30 font-normal mb-1 text-mb-2"
              >
                Email
              </label>
              <div
                className={`flex items-center justify-start bg-white rounded-md w-full py-1.5 px-1 gap-1 drop-shadow-md`}
              >
                <img
                  src={emailImg}
                  alt=""
                  className="object-contain p-2 h-auto "
                />
                <input
                  type="email"
                  placeholder="Eg: user123@gmail.com"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-sm  border-none  p-2 w-[250px]"
                  required
                />
              </div>
            </div>
            <div
              className={` ${styles.flexStart} flex-col gap-1 drop-shadow-md`}
            >
              <label
                htmlFor="password"
                className="text-neu-30 font-normal mb-1 text-mb-2"
              >
                Verification Code
              </label>
              <div
                className={`flex items-center justify-start bg-white rounded-md w-full py-1.5 px-1 gap-1`}
              >
                <img
                  src={passImg}
                  alt=""
                  className="object-contain p-2 h-auto"
                />
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="*******"
                  className={`rounded-sm  border-none  p-2 w-[250px]`}
                  required
                />
              </div>
            </div>
            <div className={`flex items-center gap-10 justify-between `}>
              <button
                type="submit"
                className="border-none bg-pri-50 hover:bg-pri-40 cursor-pointer text-white py-2 px-7 rounded-md"
              >
                Reset
              </button>
              <Link
                to="/login"
                className={`no-underline hover:underline text-neu-30 font-normal cursor-pointer hover:text-pri-50   text-desc1`}
              >
                Back to Login
              </Link>
            </div>
          </form>
        ) : (
          <div className={`${styles.flexCenter} flex-col`}>
            <p className={`max-w-[400px] text-center`}>
              An email has been sent to your email address with instructions to
              reset your password.
            </p>
            <Link
              to="/login"
              className={`no-underline hover:underline text-neu-30 font-normal cursor-pointer hover:text-pri-50   text-mh-5`}
            >
              Back to Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgetPassword;

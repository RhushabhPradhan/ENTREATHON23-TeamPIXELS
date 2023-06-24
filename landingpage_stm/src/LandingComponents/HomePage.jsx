import React from "react";
import Benifits from "./Benifits";
import Header from "./Header";
import AppMockup from "./AppMockup";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";
import ForgetPassword from "./ForgetPassword";
import Home from "./Home";

const HomePage = () => {
  return (
    <>
      <Header />
      {/* <HeroSection />
      <Benifits />
      <AppMockup />
      <Footer /> */}
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/resetpass" element={<ForgetPassword />} />
      </Routes>
    </>
  );
};

export default HomePage;

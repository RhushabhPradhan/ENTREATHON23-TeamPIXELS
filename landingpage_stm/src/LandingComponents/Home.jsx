import React from "react";
import Benifits from "./Benifits";
import AppMockup from "./AppMockup";
import HeroSection from "./HeroSection";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Benifits />
      <AppMockup />
      <Footer />
    </>
  );
};

export default Home;

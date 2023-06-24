import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import TabComponent from "./Dashboard/TabComponent";
import Header from "./LandingComponents/Header";
import HomePage from "./LandingComponents/HomePage";
import LoginPage from "./LandingComponents/LoginPage";
import SignupPage from "./LandingComponents/SignupPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Dashboard />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        {/* <Route path="/login" element={<LoginPage />}></Route> */}
        {/* <Route path="/register" element={<SignupPage />}></Route> */}
        {/* <Route path="/*" element={<HomePage />}></Route> */}
      </Routes>
    </>
  );
};

export default App;

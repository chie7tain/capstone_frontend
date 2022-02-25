import React, { useState, useContext } from "react";
// import { CSSTransition } from "react-transition-group";
import styles from "./App.module.scss";
import { ChatContextProvider } from "./context/ChatContext";
// import Radium, { Style } from "radium";
import SignUp from "./components/Signup/SignUpForm";
import MainPage from "./components/MainPage";
import LoginPage from "./components/Login/LoginPage";
import { Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/chat" element={<MainPage />}></Route>
      </Routes>
    </>
  );
};

export default App;

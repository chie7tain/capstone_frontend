import React, { useState, useContext } from "react";
// import { CSSTransition } from "react-transition-group";
import styles from "./App.module.scss";
import { ChatContextProvider } from "./context/ChatContext";
// import Radium, { Style } from "radium";
import SignUp from "./components/Signup/SignUpForm";
import MainPage from "./components/MainPage";
import LoginPage from "./components/Login/LoginPage";

const App: React.FC = () => {
 
  return (
    <div>
      {/* <SignUp /> */}
      {/* <LoginPage /> */}
      <MainPage />
    </div>
  );
};

export default App;

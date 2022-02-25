import SignUp from "./components/Signup/SignUpForm";
import React from "react";
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

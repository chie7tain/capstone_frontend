import React, { useContext } from "react";
// import { CSSTransition } from "react-transition-group";
import SignUp from "./components/Signup/SignUpForm";
import MainPage from "./components/MainPage";
import LoginPage from "./components/Login/LoginPage";
import ProfilePage from "./components/Profile/ProfileContainer";
import { Routes, Route } from "react-router-dom";
import { GlobalStateContext } from "./context/GlobalState";
import ForgotPassword from "./components/forgotPasswordForm/forgotPassword";
// import Radium, { Style } from "radium";

const App: React.FC = () => {
  const { accessToken } = useContext(GlobalStateContext);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={accessToken ? <MainPage /> : <LoginPage />}
        ></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="/chat" element={<MainPage />}></Route>
        <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
      </Routes>
    </>
  );
};

export default App;

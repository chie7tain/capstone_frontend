import SignUp from "./components/Signup/SignUpForm";
import React from "react";
import MainPage from "./components/MainPage";
import LoginPage from "./components/Login/LoginPage";

const App: React.FC = () => {
  return (
    <div>
      {/* <SignUp /> */}
      <LoginPage />
      {/* <MainPage /> */}
    </div>
  );
};

export default App;

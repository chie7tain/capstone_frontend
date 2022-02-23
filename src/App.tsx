import SignUp from "./Signup/SignUpForm";
import "./App.css";
import React from "react";
import MainPage from "./components/MainPage";

const App: React.FC = () => {
  return (
    <div>
      <SignUp />
      {/* <MainPage /> */}
    </div>
  );
};

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { GlobalProvider } from "./context/GlobalState";
import App from "./App";
import "./Styles/index.scss";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

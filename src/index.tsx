import React from "react";
import ReactDOM from "react-dom";
import { GlobalProvider } from "./context/GlobalState";
import { ChatContextProvider } from "./context/ChatContext";
import App from "./App";
import "./Styles/index.scss";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalProvider>
        <ChatContextProvider>
          <App />
        </ChatContextProvider>
      </GlobalProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

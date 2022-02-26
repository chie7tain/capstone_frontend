import React, { useState } from "react";
// import { CSSTransition } from "react-transition-group";
import Chat from "./components/MainContent/Chat/Chat";
import SearchMessage from "./components/MainContent/SearchMessage/SearchMessage";
import styles from "./App.module.scss";
import { ChatContextProvider } from "./context/ChatContext";
// import Radium, { Style } from "radium";
import VideoCall from "./components/Video/VideoCall";

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      {/* <div className={styles.sidebar}>SideBar</div> */}
      <ChatContextProvider>
        <VideoCall/>
        {/* <Chat /> */}
        {/* <SearchMessage /> */}
      </ChatContextProvider>
    </div>
  );
};

export default App;

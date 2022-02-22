// import SideBar from "./components/sidebar/SideBar";
import LeftSideBar from "./components/sidebar/LeftSideBar";

import React from "react";
// import { CSSTransition } from "react-transition-group";
import Chat from "./components/MainContent/Chat/Chat";
import SearchMessage from "./components/MainContent/SearchMessage/SearchMessage";
import styles from "./App.module.scss";
import { ChatContextProvider } from "./context/ChatContext";
// import Radium, { Style } from "radium";

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <div className={styles.sidebar}>
        <LeftSideBar />
      </div>
      <ChatContextProvider>
        <Chat />
        <SearchMessage />
      </ChatContextProvider>
    </div>
  );
};

export default App;

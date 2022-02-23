// import SideBar from "./components/sidebar/SideBar";
import React from "react";
import LeftSideBar from "./sidebar/LeftSideBar";
// import { CSSTransition } from "react-transition-group";
import Chat from "./MainContent/Chat/Chat";
import SearchMessage from "./MainContent/SearchMessage/SearchMessage";
import styles from "../App.module.scss";
import { ChatContextProvider } from "../context/ChatContext";

const MainPage: React.FC = () => {
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

export default MainPage;

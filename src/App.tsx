import React, { useState } from "react";
import {} from "";
import Chat from "./Componets/MainContent/Chat/Chat";
import SearchMessage from "./Componets/MainContent/SearchMessage/SearchMessage";
import styles from "./App.module.scss";
import { ChatContextProvider } from "./Context/ChatContext";

const App: React.FC = () => {
  // const openSearch = () => {
  //   setSearchView(true);
  // };

  // const closeSearch = () => {
  //   setSearchView(false);
  // };

  return (
    <div className={styles.App}>
      <div className={styles.sidebar}>SideBar</div>
      <ChatContextProvider>
        <Chat />
        <SearchMessage />
      </ChatContextProvider>
    </div>
  );
};

export default App;

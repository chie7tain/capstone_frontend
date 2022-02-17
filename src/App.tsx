import React, { useState, useContext } from "react";
// import { CSSTransition } from "react-transition-group";
import Chat from "./Componets/MainContent/Chat/Chat";
import SearchMessage from "./Componets/MainContent/SearchMessage/SearchMessage";
import styles from "./App.module.scss";
import { ChatContextProvider } from "./Context/ChatContext";
import Audio from "./Componets/AudioComponent/AudioFrontend/Audio";
// import Radium, { Style } from "radium";

const App: React.FC = () => {
 
  return (
    <div className={styles.App}>
      <div className={styles.sidebar}>SideBar</div>
      <ChatContextProvider>
        <Chat />
        <SearchMessage />
       <Audio/>
      </ChatContextProvider>
    </div>
  );
};

export default App;

// import SideBar from "./components/sidebar/SideBar";
import React from "react";
import LeftSideBar from "./sidebar/LeftSideBar";
// import { CSSTransition } from "react-transition-group";
import Chat from "./MainContent/Chat/Chat";
import SearchMessage from "./MainContent/SearchMessage/SearchMessage";
import styles from "../App.module.scss";
import { ChatContextProvider } from "../context/ChatContext";
import Audio from "../components/AudioComponent/AudioFrontend/Audio";
import VideoCall from "./Video/VideoCall";
import ProfileLeftBar from "./Profile/ProfileLeftBar";

const MainPage: React.FC = () => {
  return (
    <div className={styles.App}>
      <div className={styles.sidebar}>
        <LeftSideBar />
        {/* <ProfileLeftBar /> */}
      </div>
      <ChatContextProvider>
        <Chat />
        <SearchMessage />
        {/* <Audio /> */}
        {/* <VideoCall /> */}
      </ChatContextProvider>
    </div>
  );
};

export default MainPage;

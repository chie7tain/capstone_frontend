// import SideBar from "./components/sidebar/SideBar";
import React, { useContext } from "react";
import LeftSideBar from "./sidebar/LeftSideBar";
// import { CSSTransition } from "react-transition-group";
import Chat from "./MainContent/Chat/Chat";
import SearchMessage from "./MainContent/SearchMessage/SearchMessage";
import styles from "../App.module.scss";
import Audio from "../components/AudioComponent/AudioFrontend/Audio";
import VideoCall from "./Video/VideoCall";
import ProfileLeftBar from "./Profile/ProfileLeftBar";
import EmptyFormName from "./Profile/EmptyFormName";
import { GlobalStateContext } from "../context/GlobalState";

const MainPage: React.FC = () => {
  const { showProfilePage } = useContext(GlobalStateContext);
  return (
    <div className={styles.App}>
      <div className={styles.sidebar}>
        {showProfilePage ? <ProfileLeftBar /> : <LeftSideBar />}
      </div>
      <Chat />
      <SearchMessage />
      {/* <Audio /> */}
      {/* <VideoCall /> */}
    </div>
  );
};

export default MainPage;

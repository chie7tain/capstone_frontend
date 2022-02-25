import React, { useContext } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { IoVideocamOutline } from "react-icons/io5";
import { CgSearchLoading } from "react-icons/cg";
import { VscChevronDown, VscKebabVertical } from "react-icons/vsc";
import { IoIosArrowUp } from "react-icons/io";
import styles from "./Nav.module.scss";
import ChatContext from "../../../context/ChatContext";
import Peer from "simple-peer";

type NavProps = {};

const Nav: React.FC<NavProps> = () => {
  const setChatContext = useContext(ChatContext);
  const handleSearchShow = () => {
    setChatContext?.setSearchView(true);
    setChatContext?.setIsProfile(false);
  };

  const handleAudioCall = () => {
    setChatContext?.setShowAudio(true);
  };

  return (
    <nav className={styles.nav}>
      <ul>
        <li onClick={handleAudioCall}>
          <i>
            <BiPhoneCall />
          </i>
        </li>
        <li>
          <i>
            <IoVideocamOutline />
          </i>
        </li>
        <li>
          <i>
            <VscKebabVertical />
          </i>
        </li>
        <li onClick={handleSearchShow}>
          <i>
            <CgSearchLoading />
          </i>
        </li>
        <li>
          <i>
            {setChatContext?.hideProfile ? (
              <VscChevronDown
                onClick={() =>
                  setChatContext?.setHideProfile(!setChatContext.hideProfile)
                }
              />
            ) : (
              <IoIosArrowUp
                onClick={() =>
                  setChatContext?.setHideProfile(!setChatContext.hideProfile!)
                }
              />
            )}
          </i>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

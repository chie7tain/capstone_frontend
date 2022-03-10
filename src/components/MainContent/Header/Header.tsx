import React, { useContext } from "react";
import Nav from "../Nav/Nav";
import ChatContext from "../../../context/ChatContext";
import styles from "./Header.module.scss";
import { FaRegHeart } from "react-icons/fa";
import DropDownChatInfo from "../Nav/DropDownChatInfo/DropDownChatInfo";
import { GlobalStateContext } from "../../../context/GlobalState";

// type IHeaderProps = {};

const Header: React.FC = () => {
  const setChatContext = useContext(ChatContext);
  const { friendDetail, currentChat, groupDetail } =
    useContext(GlobalStateContext);

  const handleSearchShow = () => {
    setChatContext?.setSearchView(true);
    setChatContext?.setIsProfile(true);
  };

  return (
    <header className={styles.header}>
      <div className={styles.profile__info}>
        <img
          src={currentChat.id ? friendDetail.avatar : groupDetail.groupImage}
          alt="user tag"
        />
        <div className={styles.name__status}>
          <h2 onClick={handleSearchShow}>
            {currentChat.id
              ? `${friendDetail.firstName} ${friendDetail.lastName}`
              : groupDetail.groupName}
          </h2>
          <p>
            <span></span> Online
          </p>
        </div>
        <i>
          <FaRegHeart />
        </i>
      </div>
      <Nav />
      <DropDownChatInfo />
    </header>
  );
};

export default Header;

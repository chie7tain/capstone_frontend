import React, { useContext } from "react";
import styles from "./SearchMessage.module.scss";
import SearchHeader from "./SearchHeader/SearchHeader";
import SearchBody from "./SearchBody/SearchBody";
import Group from "../../Group-Page/Group/Group";

import ChatContext from "../../../context/ChatContext";

import Friend from "../../FriendProfile/Friend/Friend";
import { GlobalStateContext } from "../../../context/GlobalState";

type SearcViewhProp = {};

const SearchMessage: React.FC<SearcViewhProp> = () => {
  const showSearchRes = useContext(ChatContext);
  const { currentChat } = useContext(GlobalStateContext);

  const contactInfo = currentChat.id ? (
    <Friend userId={"621ea9f79c910d39aefe4a75"} />
  ) : (
    <Group groupId={"61fbf827b932d016e737a90e"} />
  );

  return (
    <div
      className={`${styles.search__message} ${
        showSearchRes?.searchView ? "" : styles.show__search
      }`}
    >
      <SearchHeader />
      {showSearchRes?.isProfile ? contactInfo : <SearchBody />}
    </div>
  );
};

export default SearchMessage;

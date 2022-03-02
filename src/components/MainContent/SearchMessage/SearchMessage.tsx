import React, { useContext } from "react";
import styles from "./SearchMessage.module.scss";
import SearchHeader from "./SearchHeader/SearchHeader";
import SearchBody from "./SearchBody/SearchBody";
import Group from "../../Group-Page/Group/Group";

import ChatContext from "../../../context/ChatContext";

type SearcViewhProp = {};

const SearchMessage: React.FC<SearcViewhProp> = () => {
  const showSearchRes = useContext(ChatContext);

  return (
    <div
      className={`${styles.search__message} ${
        showSearchRes?.searchView ? "" : styles.show__search
      }`}
    >
      <SearchHeader />
      {showSearchRes?.isProfile ? <Group /> : <SearchBody />}
    </div>
  );
};

export default SearchMessage;

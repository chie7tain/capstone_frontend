import React, { useContext } from "react";
import styles from "./SearchMessage.module.scss";
import SearchHeader from "./SearchHeader/SearchHeader";
import SearchBody from "./SearchBody/SearchBody";

import ChatContext from "../../../Context/ChatContext";

type SearcViewhProp = {};

const SearchMessage: React.FC<SearcViewhProp> = () => {
  const showSearchRes = useContext(ChatContext)?.searchView;

  return (
    <div
      className={`${styles.search__message} ${
        showSearchRes ? "" : styles.show__search
      }`}
    >
      <SearchHeader />
      <SearchBody />
    </div>
  );
};

export default SearchMessage;

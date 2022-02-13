import React, { useContext } from "react";
import styles from "./SearchMessage.module.scss";
import SearchHeader from "./SearchHeader/SearchHeader";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
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
      <div className={styles.msearch__input}>
        <i className={styles.search_icon}>
          <HiOutlineArrowSmLeft />
        </i>
        <input type="text" name="search" placeholder="Search..." />
      </div>
      <div className={styles.search__content}>
        <p>{`Search for messages ${"with/in"}`}</p>
      </div>
    </div>
  );
};

export default SearchMessage;

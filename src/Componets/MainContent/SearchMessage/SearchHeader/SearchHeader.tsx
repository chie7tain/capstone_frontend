import React, { useContext } from "react";
import ChatContext from "../../../../Context/ChatContext";
import styles from "./SearchHeader.module.scss";
import { IoClose } from "react-icons/io5";

type ISearchHeader = {};

const SearchHeader: React.FC<ISearchHeader> = () => {
  const setChatContext = useContext(ChatContext);

  const closeView = () => {
    setChatContext?.setSearchView(false);
  };

  return (
    <nav className={styles.search__nav}>
      <i onClick={closeView}>
        <IoClose />
      </i>
      <h3>{"Search Messages"}</h3>
    </nav>
  );
};

export default SearchHeader;

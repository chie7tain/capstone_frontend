import React from "react";
import styles from "./SearchResult.module.scss";
// import { FcCheckmark } from "react-icons/fc";
import { IoCheckmarkDone } from "react-icons/io5";
// import { GrFormCheckmark } from "react-icons/gr";

type SearchMessage = {
  message: string;
};

const SearchResult: React.FC<SearchMessage> = ({ message }) => {
  return (
    <div className={styles.result__Container}>
      <p className={styles.time}>09/02/2022</p>
      <div className={styles.result_body}>
        <i>
          {/* <GrFormCheckmark /> */}
          <IoCheckmarkDone />
        </i>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default SearchResult;

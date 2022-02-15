import React from "react";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import styles from "./SearchBody.module.scss";

const SearchBody = () => {
  return (
    <div>
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

export default SearchBody;

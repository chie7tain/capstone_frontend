import React from "react";
import LeftBarFriends from "./LeftBarFriends";
import person from "../../assets/photo.png";
import styles from "./LeftBar.module.scss";
import { BsDashCircleDotted } from "react-icons/bs";
import { FaRegCommentAlt } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";

const LeftSideBar: React.FC = () => {
  return (
    <div className={styles["leftside-container"]}>
      <div className={styles["leftside-container__items"]}>
        <img className={styles["leftside-img"]} src={person} alt="icon" />
        <BsDashCircleDotted className={styles["left-icon"]} />
        <IoIosArrowDropdown className={styles["dropdown"]} />
      </div>

      <input
        className={styles["search-bar"]}
        type="text"
        placeholder="Search or start a new chat"
      />

      <LeftBarFriends />
    </div>
  );
};

export default LeftSideBar;

import React from "react";
import LeftBarFriends from "./LeftBarFriends";
import person from "../../assets/photo.png";
import eclipsis from "../../assets/Ellipse.png";
import dropdown from "../../assets/Stroke.png";
import styles from "./SideBar.module.scss";

const LeftSideBar: React.FC = () => {
  return (
    <div className={styles["leftside-container"]}>
      <div className={styles["leftside-container__items"]}>
        <img className={styles["leftside-img"]} src={person} alt="icon" />
        <img className={styles["left-icon"]} src={eclipsis} alt="icon" />
        <img className={styles["dropdown"]} src={dropdown} alt="icon" />
      </div>

      <input className={styles["search-bar"]} type="text" placeholder="Search or start a new chat" />

      <LeftBarFriends />
    </div>
  );
};

export default LeftSideBar;

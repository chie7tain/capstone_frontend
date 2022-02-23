import React from "react";
import LeftBarFriends from "./LeftBarFriends";
import person from "../../assets/photo.png";
// import styles from "./LeftSideBar.module.scss";
import styles from "./LeftSideBar.module.scss";
import { BsDashCircleDotted } from "react-icons/bs";
import { CgSearchLoading } from "react-icons/cg";
import { VscChevronDown } from "react-icons/vsc";

const LeftSideBar: React.FC = () => {
  return (
    <div className={styles.sidebarr}>
      <div className={styles.header}>
        <div className={styles.header__profile}>
          <img src={person} alt="icon" />
          <i>
            <BsDashCircleDotted
              className={`${styles.icon__left} ${styles.icon}`}
            />
          </i>
        </div>
        <i className={`${styles.icon__rigth} ${styles.icon}`}>
          <VscChevronDown />
        </i>
      </div>

      <div className={styles.input__field}>
        <i>
          <CgSearchLoading />
        </i>
        <input type="text" placeholder="Search or start a new chat" />
      </div>

      <LeftBarFriends />
    </div>
  );
};

export default LeftSideBar;

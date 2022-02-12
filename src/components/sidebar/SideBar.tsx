import React from "react";
import LeftSideBar from "./LeftSideBar";
import styles from "./SideBar.module.scss";
import RightSideBAr from "./RightSideBar";

const SideBar: React.FC = () => {
  return (
    <div className={styles["sidebar-container"]}>
      <LeftSideBar />
      <RightSideBAr />
    </div>
  );
};

export default SideBar;

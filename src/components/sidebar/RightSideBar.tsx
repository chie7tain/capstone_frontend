import React from "react";
import styles from "./SideBar.module.scss";

import picture from "../../assets/picture.png";

const RightSideBAr: React.FC = () => {
  return (
    <div className={styles["rightbar-container"]}>
      <img src={picture} alt="img" />

      <p className={styles["rightbar-head"]}> Keep your phone connected</p>

      <p className={styles["rightbar-text"]}>
        Whatsapp connects to your phone to sync messages. To reduce data usage.
        connect your phone to Wi-Fi.
      </p>
    </div>
  );
};

export default RightSideBAr;

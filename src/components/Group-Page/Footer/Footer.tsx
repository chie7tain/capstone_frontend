import React from "react";
import styles from "./Footer.module.scss";
import { MdThumbDown } from "react-icons/md";
import { IoExitOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <div>
      <div className={styles["GroupProfile-Danger"]}>
        <IoExitOutline className={styles["danger-icon"]} />
        <p className={styles["danger-text"]}> Exit group </p>
      </div>
      <div className={styles["GroupProfile-Danger"]}>
        <MdThumbDown className={styles["danger-icon"]} />
        <p className={styles["danger-text"]}> Report Group</p>
      </div>
    </div>
  );
}

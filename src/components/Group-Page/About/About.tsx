import React from "react";
import styles from "./About.module.scss";
import { BiEditAlt } from "react-icons/bi";

export default function About() {
  return (
    <div className={styles.about}>
      <h4 className={styles["group-heading"]}>About</h4>

      <div className={styles.new}>
        <p className={styles["profile-item"]}> decagon experiences 🙌</p>
        <BiEditAlt className={styles.name} />
      </div>
    </div>
  );
}

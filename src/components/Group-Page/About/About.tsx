import React from "react";
import styles from "./About.module.scss";
import { BiEditAlt } from "react-icons/bi";
// import { group } from "console";

interface Props {
  groupDescription: string;
}

export default function About(prop: Props) {
  return (
    <div className={styles.about}>
      <h4 className={styles["group-heading"]}>About</h4>

      <div className={styles.new}>
        <p className={styles["profile-item"]}> {prop.groupDescription} </p>
        <BiEditAlt className={styles.name} />
      </div>
    </div>
  );
}

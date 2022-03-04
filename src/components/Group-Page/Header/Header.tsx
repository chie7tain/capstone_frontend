import React from "react";
import styles from "./Header.module.scss";
import picture from "./male4.png";
import { BsCamera } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";

interface HeaderI {
  groupName: string;
  groupImage: string;
  groupMemberCount: number;
}

export default function Header(prop: HeaderI) {
  return (
    <div className={styles.Header}>
      <div className={styles.new}>
        <div className={styles.img}>
          <img className={styles.image} src={prop.groupImage} alt=""></img>
        </div>
        {/* <FaUserEdit className={styles["image icon"]} /> */}
        <BsCamera className={`${styles.image} ${styles.icon} `} />
      </div>

      <div className={styles.nameIcon}>
        <h4 className={styles.name}> {prop.groupName} </h4>
        <BiEditAlt className={styles.name} />
      </div>
      <h5 className={styles.details}>{prop.groupMemberCount} participants</h5>
    </div>
  );
}

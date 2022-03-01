import React from "react";
import styles from "./Header.module.scss";
import picture from "./male4.png";
import { BsCamera } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";

export default function Header() {
  return (
    <div className={styles.Header}>
      <div className={styles.new}>
        <div className={styles.img}>
          <img className={styles.image} src={picture} alt=""></img>
        </div>
        {/* <FaUserEdit className={styles["image icon"]} /> */}
        <BsCamera className={`${styles.image} ${styles.icon} `} />
      </div>

      <div className={styles.nameIcon}>
        <h4 className={styles.name}> SQD 009 NODE STACK </h4>
        <BiEditAlt className={styles.name} />
      </div>
      <h5 className={styles.details}>Group. 64 participants</h5>
    </div>
  );
}

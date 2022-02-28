import React from "react";
import styles from "./DropDownProfile.module.scss";

interface DropDown {
  drop: boolean;
}

const DropDownProfile: React.FC<DropDown> = ({ drop }) => {
  return (
    <nav
      className={`${styles.dropDownP} ${drop ? styles.hideP : styles.dropP}`}
    >
      <ul className={styles.drop__list__P}>
        <li>Contact Info</li>
        <li>Select Messages</li>
        <li>Mute Notifications</li>
        <li>Clear Messages</li>
        <li>Delete Chat</li>
      </ul>
    </nav>
  );
};

export default DropDownProfile;

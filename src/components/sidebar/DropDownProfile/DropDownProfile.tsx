import React, { useContext } from "react";
import { GlobalStateContext } from "../../../context/GlobalState";
import styles from "./DropDownProfile.module.scss";

interface DropDown {
  drop: boolean;
}

const DropDownProfile: React.FC<DropDown> = ({ drop }) => {
  const { showProfile } = useContext(GlobalStateContext);

  const handleShowP = () => {
    showProfile!(true);
  };

  return (
    <nav
      className={`${styles.dropDownP} ${drop ? styles.hideP : styles.dropP}`}
    >
      <ul className={styles.drop__list__P}>
        <li onClick={handleShowP}>Contact Info</li>
        <li>Select Messages</li>
        <li>Mute Notifications</li>
        <li>Clear Messages</li>
        <li>Delete Chat</li>
      </ul>
    </nav>
  );
};

export default DropDownProfile;

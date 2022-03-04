import styles from "./ProfileRightBar.module.scss";
import picture from "../../assets/picture.png";
import { HiLockClosed } from "react-icons/hi";
import { useContext } from "react";
import { GlobalStateContext } from "../../context/GlobalState";

const ProfileRightBar = () => {
  const { setShowMessages } = useContext(GlobalStateContext);

  const handleShow = () => {
    setShowMessages!(true);
  };
  return (
    <div className={styles["rightbar-container"]}>
      <img src={picture} alt="img" />
      <p className={styles["rightbar-head"]}> Keep your phone connected</p>
      <p className={styles["rightbar-text"]}>
        Whatsapp connects to your phone to sync messages. To reduce data usage.
        connect your phone to Wi-Fi.
      </p>

      <div className={styles["rightbar-footer"]}>
        <i onClick={handleShow}>
          <HiLockClosed />
        </i>
        <p>End-to-end-encrypted</p>
      </div>
    </div>
  );
};

export default ProfileRightBar;

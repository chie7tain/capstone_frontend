import styles from "./ProfileContainer.module.scss";
import Frame from "../../assets/Frame.png";
import { BiArrowBack, BiCamera } from "react-icons/bi";

const ProfileLeftBar = () => {
  return (
    <div className={styles["leftbar-container"]}>
      <div className={styles["leftbar-text"]}>
        <p>
          <BiArrowBack />
        </p>
        <h2>Profile</h2>
      </div>

      <div className={styles["profile-pic"]}>
        <p className={styles["icon"]}>
          <BiCamera />
        </p>
      </div>
      <div className={styles["profile-text"]}>
        {/* <input type="" placeholder=""/> */}

        <p className={styles["profile-name"]}>Your name</p>
        <img src={Frame} alt="" />
      </div>
      <div className={styles["profile-paragraph"]}>
        <h4>Shashank Mahajan</h4>
        <p>
          This is not your username or pin. This name will be visibile to your
          WhatsApp contacts.
        </p>
      </div>
      <div className={styles["profile-text"]}>
        <p className={styles["profile-name"]}>About</p>
        <img src={Frame} alt="icon" />
      </div>
      <p className={styles["paragraph-primary"]}>
        Notification off, please expect delayed revert. Call if very urgent.
      </p>
    </div>
  );
};

export default ProfileLeftBar;

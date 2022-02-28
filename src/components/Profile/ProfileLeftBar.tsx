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
        {/* <i className={styles["icon"]}> */}
        {/* <input type="file" /> */}
        <label htmlFor="file-input">
          <i className={styles["icon"]}>
            <BiCamera />
          </i>
        </label>
        <input type="file" className={styles["icon"]} />

        {/* </i> */}
      </div>
      <div className={styles["profile-text"]}>
        <input
          className={styles["profile-input"]}
          type="text"
          name=""
          id=""
          placeholder="Your name"
        />
        {/* <input type="" placeholder=""/> */}
        {/* <p>Your name</p> */}
        <i>
          <img src={Frame} alt="" />
        </i>
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
        <i>
          <img src={Frame} alt="" />
        </i>
      </div>
      <input className={styles["profile-input"]} type="text" name="" id="" />
      <p className={styles["paragraph-primary"]}>
        Notification off, please expect delayed revert. Call if very urgent.
      </p>
    </div>
  );
};

export default ProfileLeftBar;

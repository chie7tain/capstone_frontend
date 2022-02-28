import ProfileLeftBar from "./ProfileLeftBar";
import ProfileRightBar from "./ProfileRightBar";
import styles from "./ProfileContainer.module.scss";

const ProfileContainer = () => {
  return (
    <div className={styles["profile-container"]}>
      <ProfileLeftBar />
      {/* <ProfileRightBar/> */}
    </div>
  );
};

export default ProfileContainer;

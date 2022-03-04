import ProfileLeftBar from "./ProfileLeftBar";
import ProfileRightBar from "./ProfileRightBar";
import styles from "./ProfileContainer.module.scss";
import EmptyFormName from "./EmptyFormName";
import EmptyFormAbout from "./EmptyFormAbout";

const ProfileContainer = () => {
  return (
    <div className={styles["profile-container"]}>
      <ProfileLeftBar />
      <ProfileRightBar />
      <EmptyFormName/>
      {/* <EmptyFormAbout/> */}
    </div>
  );
};

export default ProfileContainer;

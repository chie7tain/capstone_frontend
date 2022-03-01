import styles from "./ProfileLeftBar.module.scss";
import ProfileForm from "./ProfileForm";
import { BiArrowBack, BiCamera, BiEditAlt } from "react-icons/bi";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import EmptyFormName from "./EmptyFormName";

interface Iprofile {
  firstName?: string;
  lastName?: string;
  username?: string;
  about?: string;
}

const ProfileLeftBar = () => {
  const [profile, setProfile] = useState<Iprofile>({});
  const [profileName, setProfilename] = useState(``);
  const [editUserName, setEditUsername] = useState(false);
  const [about, setAbout] = useState("");
  const [editAboutContent, setAboutContent] = useState(false);
  const [formError, setFormError] = useState(false);

  // const handleChange = (e: { target: { value: any } }) => {
  //   setProfilename(e.target.value);
  // };
  const handleUserNameEditClick = () => {
    setEditUsername(true);
  };
  const handleAboutContentClick = () => {
    setAboutContent(true);
  };

  const updateUser = async (property: string, value: string) => {
    // alert(`${property} has been updated to ${value}`);
    if (!value) {
      setFormError(true);
      return;
    }
    const propertyToUpdate = { [property]: value };
    //show user ' fullname h4 ' when user clicks done for editing user fullname

    try {
      if (property === "username") {
        setEditUsername(false);
        setProfilename(value);
      } else if (property === "about") {
        setAboutContent(false);
        setAbout(value);
      }

      const response = await axios.patch(
        "http://localhost:3050/api/v1/users/updateuser",
        propertyToUpdate,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjk2NmE4YTliZmFjOWEzMGJlNzk3YSIsImlhdCI6MTY0NjEzNDQ5OX0.0WcIHwizOQbI_rsmYaEBuZpwTQE6unFO73BE8_yoa6U`,
          },
        }
      );

      // setProfilename()
      // console.log(".......", response);
    } catch (err) {
      alert("error occurred");
    }
  };

  const fetchProfile = async () => {
    try {
      const data = await axios.get("http://localhost:3050/api/v1/users", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjk2NmE4YTliZmFjOWEzMGJlNzk3YSIsImlhdCI6MTY0NjEzNDQ5OX0.0WcIHwizOQbI_rsmYaEBuZpwTQE6unFO73BE8_yoa6U`,
        },
      });

      const profile = data.data.data;
      setProfile(profile);
      setProfilename(
        `${profile.username || profile.firstName + " " + profile.lastName}`
      );
    } catch (e) {}
  };
  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className={styles["leftbar-container"]}>
      <div className={styles["leftbar-text"]}>
        <i>
          <BiArrowBack />
        </i>

        <h2>Profile</h2>
      </div>

      <div className={styles.pic__container}>
        <div className={styles["profile-pic"]}>
          <label htmlFor="file-input">
            <i className={styles["icon"]}>
              <BiCamera />
              <input className={styles["icon"]} type="file" />
            </i>
          </label>
        </div>
      </div>

      <div className={styles["profile-paragraph"]}>
        <p className={styles["profile-name"]}>Your name</p>
        <div className={styles["profile-text"]}>
          {/* if(!inputForm)
          setInputform(false) */}
          
          {editUserName ? (
            <ProfileForm
              content={{
                type: "username",
                value: profileName,
              }}
              handleDone={updateUser}
            />
          ) : (
            <h4>{profileName}</h4>
          )}

          <i onClick={handleUserNameEditClick}>
            {!editUserName && <BiEditAlt />}
          </i>
      
          {formError && <EmptyFormName/>}
        </div>
        <p>
          This is not your username or pin. This name will be visibile to your
          WhatsApp contacts.
        </p>
      </div>

      <div className={styles.about__se}>
        <div className={styles["profile-paragraph"]}>
          <p className={styles["profile-name"]}>About</p>
          <div className={styles["profile-text"]}>
            {editAboutContent ? (
              <ProfileForm
                content={{
                  type: "about",
                  value: about,
                }}
                handleDone={updateUser}
              />
            ) : (
              <h4>{about}</h4>
            )}

            <i onClick={handleAboutContentClick}>
              {!editAboutContent && <BiEditAlt />}
            </i>
          </div>
          <p className={styles["paragraph-primary"]}>
            Notification off, please expect delayed revert. Call if very urgent.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileLeftBar;

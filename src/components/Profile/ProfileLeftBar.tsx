import styles from "./ProfileLeftBar.module.scss";
import ProfileForm from "./ProfileForm";
import { BiArrowBack, BiCamera, BiEditAlt } from "react-icons/bi";
import React, { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";
import EmptyFormName from "./EmptyFormName";
import { GlobalStateContext } from "../../context/GlobalState";

interface Iprofile {
  firstName?: string;
  lastName?: string;
  username?: string;
  about?: string;
  avatar?: string;
}

const ProfileLeftBar = () => {
  const [profile, setProfile] = useState<Iprofile>({});
  const [profileName, setProfilename] = useState(``);
  const [editUserName, setEditUsername] = useState(false);
  const [about, setAbout] = useState(``);
  const [editAboutContent, setAboutContent] = useState(false);
  const [formError, setFormError] = useState(false);
  const [profilePic, setProfilePic] = useState("");
  const [selectedPic, setSelectedPic] = useState("");
  const [previewSource, setPreviewSource] = useState();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<any>();

  /// GlobalContext
  const { user, accessToken, showProfile, showProfilePage, getUser } =
    useContext(GlobalStateContext);

  const handleUserNameEditClick = () => {
    setEditUsername(true);
  };
  const handleAboutContentClick = () => {
    setAboutContent(true);
  };
  const handleInputPicClick = (e: { target: { files: any } }) => {
    const file = e.target.files[0];
    setFile(file);
    previewFile(file);
  };
  const previewFile = (file: any) => {
    const reader: any = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };
  const handleSubmitFile = (e: any) => {
    e.preventDefault();
    if (!previewSource) return;
    uploadImage();
    // const reader = new FileReader()
    // reader.readAsDataURL(editPic)
  };
  const uploadImage = async () => {
    // const fileToUpload = { avatar: base64EncodedImage };
    const fileToUpload = new FormData();
    fileToUpload.append("avatar", file);
    try {
      const data = await axios.patch(
        "http://localhost:3050/api/v1/users/updatepicture",
        fileToUpload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const update = data.data.data.user.avatar;
      let user = JSON.parse(sessionStorage.getItem("user") as string);
      user["avatar"] = update;
      getUser!({ user, accessToken });
      sessionStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      console.error(error);
    }
  };

  const updateUser = async (property: string, value: string) => {
    if (!value) {
      setFormError(true);
      return;
    }
    const propertyToUpdate = { [property]: value };

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
            // "Content-Type": "multipart/form-data;boundary=SOME_BOUNDARY",
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      let user = JSON.parse(sessionStorage.getItem("user") as string);
      user[property] = value;
      sessionStorage.setItem("user", JSON.stringify(user));
    } catch (err) {
      alert("error occurred");
    }
  };

  useEffect(() => {
    // fetchProfile();
    setProfile(user);
    setProfilename(`${user.username || user.firstName + " " + user.lastName}`);
    setAbout(user.about || "");
    // setProfilePic(`${user.avatar || ""}`)
  }, [user]);

  const handleShow = () => {
    showProfile!(false);
  };

  return (
    <div
      className={`${styles["leftbar-container"]} ${
        showProfilePage ? styles.moveIn : styles.moveOut
      }`}
    >
      <div className={styles["leftbar-text"]}>
        <i onClick={handleShow}>
          <BiArrowBack />
        </i>

        <h2>Profile</h2>
      </div>

      <form onSubmit={handleSubmitFile} className={styles.pic__container}>
        <div className={styles["profile-pic"]}>
          {previewSource && <img src={previewSource} alt="" />}
          <img src={user.avatar} alt={user.firstName} />

          <label htmlFor="file-input">
            <i className={styles["icon"]}>
              <BiCamera />
              <input
                className={styles["icon"]}
                type="file"
                onChange={handleInputPicClick}
                value={profilePic}
                ref={fileInputRef}
                accept="image/gif, image/jpeg, image/png, image/jpg"
              />
            </i>
          </label>
        </div>
        <button
          style={{
            background: "green",
            padding: "0.9rem 2rem",
            marginTop: "1.4rem",
            border: "none",
            color: "white",
            borderRadius: "0.4rem",
          }}
          type="submit"
        >
          upload
        </button>
      </form>

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
          {formError && <EmptyFormName />}
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

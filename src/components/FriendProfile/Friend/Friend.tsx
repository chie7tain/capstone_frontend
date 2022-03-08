import About from "../About/About";
import CommonGroup from "../CommonGroup/CommonGroup";
import Media from "../Media/Media";
import MuteNotifications from "../MuteNotifications/MuteNotifications";
import Profile from "../Profile/Profile";
import StarredMessages from "../StarredMessages/StarredMessages";
import BlockReportDelete from "../BlockReportDelete/BlockReportDelete";
import styles from "./friend.module.scss";
import icons, { Circles, Bars } from "react-loading-icons";
import { useState, useContext, useRef } from "react";
import { MdError } from "react-icons/md";
import useAxios from "axios-hooks";
import axios from "axios";
import { GlobalStateContext } from "../../../context/GlobalState";

interface friendI {
  userId: string;
}

const Friend: React.FC<friendI> = ({ userId }) => {
  // const { accessToken} = useContext(GlobalStateContext);
  const { accessToken, user } = useContext(GlobalStateContext);

  // const [{ data, error, loading }] = useAxios({
  //   url: `${process.env.REACT_APP_BACKEND_URL}/users/profile/${userId}`,
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Authorization: `Bearer ${accessToken}`,
  //   },
  // });

  const [{ data, error, loading }] = useAxios({
    url: `${
      process.env.REACT_APP_BACKEND_URL
    }/users/profile/${"61f96689a9bfac9a30be7977"}`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjk2NmM1YTliZmFjOWEzMGJlNzk3ZCIsImlhdCI6MTY0NjI1MDQxNX0.PEHSjX8JskYowmi4RBhnFOmg8yqJjV7Ao7vl6kkGC_0"}`,
    },
  });

  // friendId = res.data.data.members.filter((el: string) => el !== user._id);
  if (loading) {
    return (
      <div className={`${styles.friend}`}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={`${styles.friend}`}>
        <Error errorMsg={`Failed to get profile`} />
      </div>
    );
  }
  // console.log(data)
  console.log(data.data);

  // const userData = data;
  const userData = data.data;

  return (
    <div className={`${styles.friend}`}>
      <Profile
        username={userData.Name}
        email={userData.email}
        imgSrc={userData.Image}
      />
      {userData.about ? (
        <About about={userData.about} aboutInfo={""} />
      ) : (
        <About about={"About"} aboutInfo={""} />
      )}
      <Media />
      <StarredMessages />
      <MuteNotifications />
      <CommonGroup />
      <BlockReportDelete />
    </div>
  );
};

function Loader() {
  return (
    <div className={styles.loaderStyle}>
      <icons.ThreeDots className={styles.loadingIcon} fill={"#054950"} />
    </div>
  );
}

function Error(props: { errorMsg: string }) {
  return (
    <div className={styles.errorStyle}>
      <MdError className={styles.errorIcon} />
      <p>{props.errorMsg}</p>
    </div>
  );
}

export default Friend;

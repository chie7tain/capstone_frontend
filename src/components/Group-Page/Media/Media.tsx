import React from "react";
import styles from "./Media.module.scss";
import { MdPermMedia } from "react-icons/md";
import { IoLinkSharp } from "react-icons/io5";
import { IoDocumentsOutline } from "react-icons/io5";
// import { IoIosArrowForward } from "react-icons/io";

export default function Media() {
  return (
    // <div className="profile__section profile__section--media">
    <div className={styles.media}>
      <div className={styles["media-wrapper"]}>
        <h2 className={styles["media-heading"]}>Media, Links and Documents</h2>
        {/* <button>
          <IoIosArrowForward className={styles["media-icon"]} />
        </button> */}
      </div>
      <div className={styles["media-types"]}>
        <MdPermMedia className={styles.profile} />
        <IoLinkSharp className={styles.profile} />
        <IoDocumentsOutline className={styles.profile} />
      </div>
    </div>
  );
}

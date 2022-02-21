import React from "react";
import styles from "./ImageMessage.module.scss";

const ImageMessage = () => {
  return (
    <div className={styles.textImg}>
      <img
        src="https://www.footyrenders.com/render/Cristiano-Ronaldo-110.png"
        alt="sent_image"
      />
      <div className={styles.imgTxt}>
        <p>This is the GOAT</p>
        <span>12:35pm</span>
      </div>
    </div>
  );
};

export default ImageMessage;

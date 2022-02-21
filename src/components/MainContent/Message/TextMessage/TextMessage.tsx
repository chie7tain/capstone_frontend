import React from "react";
import styles from "./TextMessage.module.scss";

const TextMessage = () => {
  return (
    <div className={styles.textM}>
      <p>
        Helo, this is the first message I told you to expect, I do hope you
        recieve this in good faith
      </p>
      <span>12:35pm</span>
    </div>
  );
};

export default TextMessage;

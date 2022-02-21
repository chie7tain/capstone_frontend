import React from "react";
import styles from "./MessageInput.module.scss";
import { CgAddR } from "react-icons/cg";
import { AiOutlineAudio } from "react-icons/ai";

const MessageInput = () => {
  return (
    <div className={styles.message__input}>
      <p> 😊 </p>
      <i>
        <CgAddR />
      </i>
      <input type="text" name="message" placeholder="Say Something..." />
      <i>
        <AiOutlineAudio />
      </i>
    </div>
  );
};

export default MessageInput;

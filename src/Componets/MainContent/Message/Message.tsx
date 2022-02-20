import React from "react";
import styles from "./Message.module.scss";
import TextMessage from "./TextMessage/TextMessage";
import { RiLock2Line } from "react-icons/ri";

const Message = () => {
  return (
    <div className={styles.message__container}>
      <div className={styles.encryption}>
        <i>
          <RiLock2Line />
        </i>
        <p>
          Messages are end-to-end encrypted. No one outside of this chat, not
          even WhatsApp can read or listen to them click to learn more.
        </p>
      </div>
      <div>
        <TextMessage />
        <TextMessage />
      </div>
    </div>
  );
};

export default Message;

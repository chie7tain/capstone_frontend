import React, { useContext } from "react";
import Header from "../Header/Header";
import Message from "../Message/Message";
import MessageInput from "../MessageInput/MessageInput";
import styles from "./Chat.module.scss";

type ChatProps = {};

const Chat: React.FC<ChatProps> = () => {
  return (
    <div className={styles.main__content}>
      <Header />
      <Message />
      <MessageInput />
    </div>
  );
};

export default Chat;

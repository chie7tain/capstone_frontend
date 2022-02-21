import React, { CSSProperties, useContext } from "react";
import Header from "../Header/Header";
import Message from "../Message/Message";
import MessageInput from "../MessageInput/MessageInput";
import { useMediaQuery } from "../../Hooks/Medis";
import ChatContext from "../../../Context/ChatContext";
import styles from "./Chat.module.scss";

type ChatProps = {};

const Chat: React.FC<ChatProps> = () => {
  const showSearchRes = useContext(ChatContext)?.searchView;
  const mediaMatch = useMediaQuery("(min-width: 1000px)");

  const useQuery = !mediaMatch && showSearchRes;

  const stylesEdit: CSSProperties = {
    display: `${useQuery ? "none" : "flex"}`,
  };

  return (
    <div className={styles.main__content} style={stylesEdit}>
      <Header />
      <Message />
      <MessageInput />
    </div>
  );
};

export default Chat;

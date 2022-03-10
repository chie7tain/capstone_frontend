import React, { useContext, useEffect, useState } from "react";
import styles from "./Message.module.scss";
import TextMessage from "./TextMessage/TextMessage";
import ImageMessage from "./ImageMessage/ImageMessage";
import VideoMessage from "./VideoMessage/VideoMessage";
// import AudioMessage from "./AudioM/AudioMessage";
import { RiLock2Line } from "react-icons/ri";
import { GlobalStateContext } from "../../../context/GlobalState";

const Message = () => {
  let [content, setContent] = useState([]);
  const {
    messages,
    user,
    loading,
    currentChat,
    getMessages,
    groupDetail,
    getGroupMessages,
  } = useContext(GlobalStateContext);
  console.log(user);
  // setContent(messages);

  // useEffect(() => {
  //   currentChat.id && getMessages!(currentChat.id!);
  // }, [currentChat.id]);

  // useEffect(() => {
  //   groupDetail.id && getGroupMessages!(groupDetail.id!);
  // }, [groupDetail.id]);

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
      <div className={styles.messageContainer}>
        {loading
          ? "Loading..."
          : messages?.map((message, i) => {
              if (user._id !== message.senderId) {
                return (
                  <TextMessage reciever={true} content={message.text} key={i} />
                );
              } else {
                return <TextMessage content={message.text} key={i} />;
              }
            })}
        {/* <TextMessage />
        <TextMessage reciever={true} />
        <TextMessage />
        <TextMessage reciever={true} />
        <ImageMessage />
        <TextMessage reciever={true} />
        <VideoMessage /> */}
        {/* <AudioMessage /> */}
      </div>
    </div>
  );
};

export default Message;

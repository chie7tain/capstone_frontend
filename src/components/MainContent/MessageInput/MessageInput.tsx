import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import styles from "./MessageInput.module.scss";
import { CgAddR } from "react-icons/cg";
import { AiOutlineAudio } from "react-icons/ai";

// const ENDPOINT = "http://localhost:3050";
// let socket, selectedChatCompare;
// let user = {
//   name: "Test",
//   _id: "123xxx",
// };

const MessageInput = () => {
  const [socketConnected, setSocketConnected] = useState(false);

  // useEffect(() => {
  //   socket = io(ENDPOINT);
  //   socket.emit("setup", user);
  //   socket.on("connection", () => setSocketConnected(true));
  // }, []);

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

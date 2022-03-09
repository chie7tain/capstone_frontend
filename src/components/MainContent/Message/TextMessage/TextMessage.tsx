import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { GlobalStateContext } from "../../../../context/GlobalState";
import styles from "./TextMessage.module.scss";

interface IText {
  reciever?: boolean;
  content?: string;
}

const TextMessage: React.FC<IText> = ({ reciever, content }) => {
  const { messages } = useContext(GlobalStateContext);
  console.log("messesgese ", messages);

  return (
    <div className={`${styles.textM} ${reciever ? styles.recipant : ""}`}>
      <p>{content}</p>
      <span>12:35pm</span>
    </div>
  );
};

export default TextMessage;

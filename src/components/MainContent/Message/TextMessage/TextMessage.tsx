import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { GlobalStateContext } from "../../../../context/GlobalState";
import styles from "./TextMessage.module.scss";

interface IText {
  reciever?: boolean;
}

const TextMessage: React.FC<IText> = ({ reciever }) => {
  const { messages } = useContext(GlobalStateContext);

  return (
    <div className={`${styles.textM} ${reciever ? styles.recipant : ""}`}>
      <p>
        Hello, this is the first message I told you to expect, I do hope you
        recieve this in good faith
      </p>
      <span>12:35pm</span>
    </div>
  );
};

export default TextMessage;

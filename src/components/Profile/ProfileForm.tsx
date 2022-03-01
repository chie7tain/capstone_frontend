import React, { useRef, FC, useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";
import styles from "./ProfileLeftBar.module.scss";
import EmptyFormName from "./EmptyFormName";

interface profileI {
  content: { type: string; value: string };
  handleDone: Function;
}

const ProfileForm: FC<profileI> = ({ content, handleDone }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputContent, setInputContent] = useState<string>(content.value || "");

  //  const handleChange = (e: { target: { value: any } }) => {
  //    setInputContent(e.target.value);
  //  };

  return (
    <div className={styles["profile-text"]}>
      <input
        ref={inputRef}
        type="text"
        className={styles["input"]}
        maxLength={25}
        value={inputContent}
        onChange={(e) => setInputContent(e.target.value)}
      />
      <div className={styles["profile-input"]}>
        <div className={styles["input-icon"]}>
          <p style={{ fontSize: "1.4rem", opacity: "60%" }}>25</p>
          <i>
            <BsEmojiSmile style={{ width: "2rem", height: "2rem" }} />
          </i>
        </div>

        <i onClick={() => handleDone(content.type, inputContent)}>
          <FiCheck />
        </i>
      </div>
    </div>
  );
};

export default ProfileForm;

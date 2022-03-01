import React from "react";
import groupAvatar from "./male4.png";
import styles from "./Members.module.scss";

export default function Members() {
  const groups = [
    {
      avatar: groupAvatar,
      name: "Jane",
      status: "up and grateful",
    },
    {
      avatar: groupAvatar,
      name: "Aj",
      status: "Rose amongst thorns",
    },
    {
      avatar: groupAvatar,
      name: "Jade",
      status: "Grind and grit",
    },
    {
      avatar: groupAvatar,
      name: "Jade",
      status: "Grind and grit",
    },
    {
      avatar: groupAvatar,
      name: "Jade",
      status: "Grind and grit",
    },
    {
      avatar: groupAvatar,
      name: "Jade",
      status: "Grind and grit",
    },
    {
      avatar: groupAvatar,
      name: "Jade",
      status: "Grind and grit",
    },
    {
      avatar: groupAvatar,
      name: "Jade",
      status: "Grind and grit",
    },
    {
      avatar: groupAvatar,
      name: "Mercy lambo",
      status: "I can handle pressure don slap customer😂",
    },
  ];
  return (
    <div>
      {groups.map((group) => (
        <div className={styles.members} key={group.name}>
          <div className={styles["member-wrapper"]}>
            <img src={group.avatar} alt="Group 3" className={styles.avatar} />
          </div>

          <div className={styles["member-profile"]}>
            <p className={styles["profile-top"]}>{group.name}</p>
            <p className={styles["profile-bottom"]}>{group.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

import React, { useState, useContext, useEffect } from "react";
import styles from "./Header.module.scss";
import picture from "./male4.png";
import { BsCamera } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import { GlobalStateContext } from "../../../context/GlobalState";

interface HeaderI {
  groupName: string;
  groupImage: string;
  groupMemberCount: number;
}

interface groupInput {
  groupName: string;
  about: string;
  description: string;
  groupImage: string;
}

export default function Header(prop: HeaderI) {
  const { data, getGroups } = useContext(GlobalStateContext);

  const { groups } = data;

  console.log(groups, "groupssssss from header");

  useEffect(() => {
    getGroups && getGroups();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let groupData = {} as groupInput;

  if (groupData.groupName) groupData.groupName = groups?.allGroups.groupName;
  if (groupData.about) groupData.about = groups?.allGroups.about;
  if (groupData.groupImage) groupData.groupImage = groups?.allGroups.groupImage;
  if (groupData.description)
    groupData.description = groups?.allGroups.description;
  return (
    <div className={styles.Header}>
      <div className={styles.new}>
        <div className={styles.img}>
          <img className={styles.image} src={prop.groupImage} alt=""></img>
        </div>
        {/* <FaUserEdit className={styles["image icon"]} /> */}
        <BsCamera className={`${styles.image} ${styles.icon} `} />
      </div>

      <div className={styles.nameIcon}>
        <h4 className={styles.name}> {prop.groupName} </h4>
        <BiEditAlt className={styles.name} />
      </div>
      <h5 className={styles.details}>{prop.groupMemberCount} participants</h5>
    </div>
  );
}

import React, { useContext, useEffect } from "react";
import styles from "./FriendsData.module.scss";
import { GlobalStateContext } from "../../context/GlobalState";
import { BsPinAngle } from "react-icons/bs";

const GroupsData: React.FC = () => {
  const { data, getGroups, setShowMessages, showMessages } =
    useContext(GlobalStateContext);
  const { groups } = data;

  useEffect(() => {
    getGroups && getGroups();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showChat = () => {
    setShowMessages!(true);
    console.log("ti;meless", showMessages);
  };

  return (
    <div>
      {groups?.allgroups.map((group: any, index: string) => {
        return (
          <div key={index} className={styles.friends__data} onClick={showChat}>
            <div className={styles.profile__Header}>
              <img
                src={group.groupImage}
                className={styles.profile__img}
                alt=""
              />
              <div className={styles.profile__info}>
                <h2>{group.groupName ? group.groupName : ""}</h2>
                <p>ha ha ha oh man</p>
              </div>
            </div>
            <div className={styles.extra}>
              <span>05:15pm</span>
              <i>
                <BsPinAngle />
              </i>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GroupsData;

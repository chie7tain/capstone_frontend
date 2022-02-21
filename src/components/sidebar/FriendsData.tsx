import React, { useContext, useEffect } from "react";
import styles from "./LeftBar.module.scss";
import { GlobalStateContext } from "../../context/GlobalState";
import Vector from "../../assets/Vector.png";

const FriendsData: React.FC = () => {
  const { data, getFriends } = useContext(GlobalStateContext);
    const { friends } = data;
    
    useEffect(() => {
        getFriends && getFriends();
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <div>
      {friends.friends?.map((friend: any, index: string) => {
        return (
          <div key={index}>
            <div className={styles["chat-headerInnerRight"]}>
              <div className={styles["chat-headerRightImage"]}>
                <img
                  src={friend.friendId.avatar}
                  className={styles["chat-headerRightImage"]}
                  alt=""
                />
              </div>
              <div className={styles["chat-headerRightText"]}>
                <div className={styles["chat-headerRightTextName"]}>
                  {`${friend.friendId.firstName} ${friend.friendId.lastName}`
                    ? `${friend.friendId.firstName} ${friend.friendId.lastName}`
                    : `${friend.friendId.phoneNumber}`}
                </div>
                <div className={styles["chat-headerRightTextMessage"]}>
                  ha ha ha oh man
                </div>
              </div>
            </div>
            <div className={styles["chat-headerInnerLeft"]}>
              <div className={styles["chat-headerLeftTime"]}>05:15pm</div>
              <div className={styles["chat-headerLeftIcon"]}>
                <img className={styles["chatpin"]} src={Vector} alt="" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FriendsData;

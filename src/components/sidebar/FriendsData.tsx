import React, { useContext, useEffect } from "react";
import styles from "./FriendsData.module.scss";
import { GlobalStateContext } from "../../context/GlobalState";
import { BsPinAngle } from "react-icons/bs";

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
          <div key={index} className={styles.friends__data}>
            <div className={styles.profile__Header}>
              <img
                src={friend.friendId.avatar}
                className={styles.profile__img}
                alt=""
              />
              <div className={styles.profile__info}>
                <h2>
                  {`${friend.friendId.firstName} ${friend.friendId.lastName}`
                    ? `${friend.friendId.firstName} ${friend.friendId.lastName}`
                    : `${friend.friendId.phoneNumber}`}
                </h2>
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

export default FriendsData;

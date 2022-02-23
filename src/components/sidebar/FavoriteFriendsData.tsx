import React, { useContext, useEffect } from "react";
import styles from "./FriendsData.module.scss";
import { GlobalStateContext } from "../../context/GlobalState";
import { BsPinAngle } from "react-icons/bs";

const FavoriteFriendsData: React.FC = () => {
  const { data, getFavoriteFriends } = useContext(GlobalStateContext);
  const { favoriteFriendsList } = data;

  console.log("xxxxx", favoriteFriendsList);
  useEffect(() => {
    getFavoriteFriends && getFavoriteFriends();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {favoriteFriendsList.map((friend: any, index: string) => {
        return (
          <div key={index} className={styles.friends__data}>
            <div className={styles.profile__Header}>
              <img src={friend.avatar} className={styles.profile__img} alt="" />
              <div className={styles.profile__info}>
                <h2>
                  {`${friend.firstName} ${friend.lastName}`
                    ? `${friend.firstName} ${friend.lastName}`
                    : `${friend.phoneNumber}`}
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

export default FavoriteFriendsData;

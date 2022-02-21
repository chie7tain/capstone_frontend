import React, { useContext, useEffect } from "react";
import Vector from "../../assets/Vector.png";
import styles from "./LeftBar.module.scss";
import { GlobalStateContext } from "../../context/GlobalState";

const FavoriteFriendsData: React.FC = () => {
  const { data, getFavoriteFriends } = useContext(GlobalStateContext);
  const { favoriteFriendsList } = data;
  // console.log(favoriteFriendsList, "favoriteFriendsList33");

  useEffect(() => {
    getFavoriteFriends && getFavoriteFriends();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div>
      <div className={styles["chat-header"]}>
        <div>
          {favoriteFriendsList?.favoriteFriendsList.map(
            (friend: any, index: string) => {
              return (
                <div key={index}>
                  <div className={styles["chat-headerInnerRight"]}>
                    <div className={styles["chat-headerRightImage"]}>
                      <img
                        src={friend.avatar}
                        className={styles["chat-headerRightImage"]}
                        alt=""
                      />
                    </div>
                    <div className={styles["chat-headerRightText"]}>
                      <div className={styles["chat-headerRightTextName"]}>
                        {`${friend.firstName} ${friend.lastName}`
                          ? `${friend.firstName} ${friend.lastName}`
                          : `${friend.phoneNumber}`}
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
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default FavoriteFriendsData;

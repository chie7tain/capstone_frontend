import React, { useEffect, useContext } from "react";
import axios from "axios";
import styles from "./SideBar.module.scss";
import image1 from "../../assets/image1.png";
import Vector from "../../assets/Vector.png";
import { GlobalStateContext } from "../../context/GlobalState";

const FavoriteFriends: React.FC = () => {
  return (
    <>
      <div className={styles["chat-headerInnerRight"]}>
        <div className={styles["chat-headerRightImage"]}>
          <img src={image1} alt="" />
        </div>
        <div className={styles["chat-headerRightText"]}>
          <div className={styles["chat-headerRightTextName"]}>Coder Fisher</div>
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
    </>
  );
};

const LeftBarFriends: React.FC = () => {
  const { data, getFavoriteFriends } = useContext(GlobalStateContext);

  useEffect(() => {
    getFavoriteFriends && getFavoriteFriends();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let displayFavoriteFriends = "";

  const renderFavoriteFriends = () => {
    displayFavoriteFriends =
      data &&
      data.favoriteFriends.map((friends: any, index: number) => {
        return (
          <>
            <div className={styles["chat-headerInnerRight"]}>
              <div className={styles["chat-headerRightImage"]}>
                <img src={friends.avatar} alt="" />
              </div>
              <div className={styles["chat-headerRightText"]}>
                <div className={styles["chat-headerRightTextName"]}>
                  <p>{`${friends.firstName} ${friends.lastName}`
                    ? friends.phoneNumber
                    : `${friends.firstName} ${friends.lastName}`}
                </p>
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
          </>
        );
      });
  };

  return (
    <div>
      <div className={styles["button"]}>
        <button onClick={renderFavoriteFriends}>Favorites</button>

        {displayFavoriteFriends}
        <button>Friends</button>
        <button>Groups</button>
      </div>

      <div className={styles["chat-header"]}>
        <div className={styles["chat-headerInnerRight"]}>
          <div className={styles["chat-headerRightImage"]}>
            <img src={image1} alt="" />
          </div>
          <div className={styles["chat-headerRightText"]}>
            <div className={styles["chat-headerRightTextName"]}>
              David Momoh
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

      <img src="" alt="" />
    </div>
  );
};

export default LeftBarFriends;

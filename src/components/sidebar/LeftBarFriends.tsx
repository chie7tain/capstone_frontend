import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import styles from "./SideBar.module.scss";
import image1 from "../../assets/image1.png";
import Vector from "../../assets/Vector.png";
import { GlobalStateContext } from '../../context/GlobalState';

const LeftBarFriends: React.FC = () => {
  const { data, getFavoriteFriends } = useContext(GlobalStateContext)
  
  useEffect(() => {
    getFavoriteFriends && getFavoriteFriends();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  
  const handleClick = async () => {
    console.log(data)
  }
  
  
  return (
    <div>
      <div className={styles["button"]}>
        <button onClick={handleClick}>Favorites</button>
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
              Coder Fisher
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
}

export default LeftBarFriends
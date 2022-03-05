import React, { useState, useEffect, useContext } from "react";
import {MdOutlineMessage} from "react-icons/md";
import styles from "./LeftBarFriends.module.scss";
import FavoriteFriendsData from "./FavoriteFriendsData";
import FriendsData from "./FriendsData";
import GroupsData from "./GroupsData";
import { GlobalStateContext } from "../../context/GlobalState";

const LeftBarFriends: React.FC = () => {
  const { getFavoriteFriends, getFriends, getGroups } =
    useContext(GlobalStateContext);
  const [showFavorite, setShowFavorites] = useState(false);
  const [showFriends, setShowFriends] = useState(true);
  const [showGroups, setShowGroups] = useState(false);

  useEffect(() => {
    getFavoriteFriends && getFavoriteFriends();
    getFriends && getFriends();
    getGroups && getGroups();
    // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);



  const toggleFavoriteFriends = () => {
    setShowFavorites(!showFavorite);
    setShowFriends(false);
    setShowGroups(false);
  };

  const toggleFriends = () => {
    setShowFriends(!showFriends);
    setShowFavorites(false);
    setShowGroups(false);
  };

  const toggleGroups = () => {
    setShowGroups(!showGroups);
    setShowFavorites(false);
    setShowFriends(false);
  };

  return (
    <div>
      <div className={styles.ffgButtons}>
        <button onClick={toggleFavoriteFriends}>Favorites</button>
        <button onClick={toggleFriends}>Friends</button>
        <button onClick={toggleGroups}>Groups</button>
      </div>
      <div className={styles.container__list}>
        {showFavorite && <FavoriteFriendsData />}
        {showFriends && <FriendsData />}
        {showGroups && <GroupsData />}

        <MdOutlineMessage />
      </div>
      {/* <img src="" alt="" /> */}
    </div>
  );
};

export default LeftBarFriends;

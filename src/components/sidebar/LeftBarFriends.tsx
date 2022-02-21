import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Router as Route, Link } from "react-router-dom";
import styles from "./LeftBar.module.scss";
import FavoriteFriendsData from "./FavoriteFriendsData";
import FriendsData from "./FriendsData";
import GroupsData from "./GroupsData";
import { GlobalStateContext } from "../../context/GlobalState";

const LeftBarFriends: React.FC = () => {
  const { getFavoriteFriends, getFriends, getGroups } = useContext(GlobalStateContext)
  const [showFavorite, setShowFavorites] = useState(false);
  const [showFriends, setShowFriends] = useState(true);
  const [showGroups, setShowGroups] = useState(false);
   useEffect(() => {
     getFavoriteFriends && getFavoriteFriends();

     // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

  
  useEffect(() => {
    getFriends && getFriends();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getGroups && getGroups();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleFavoriteFriends = () => {
    setShowFavorites(!showFavorite);
  };

  const toggleFriends = () => {
    setShowFriends(!showFriends);
  };

  const toggleGroups = () => {
    setShowGroups(!showGroups);
  };

  return (
    <div>
      <div className={styles["button"]}>
        <button onClick={toggleFavoriteFriends}>Favorites</button>
        <button onClick={toggleFriends}>Friends</button>
        <button onClick={toggleGroups}>Groups</button>
      </div>
      {showFavorite ? <FavoriteFriendsData /> : null}
      {showFriends ? <FriendsData /> : null}
      {showGroups ? <GroupsData /> : null}

      <img src="" alt="" />
    </div>
  );
};

export default LeftBarFriends;

import React, { useContext, useEffect, useState } from 'react';
import styles from './FriendsData.module.scss';
import { GlobalStateContext } from '../../context/GlobalState';
import { BsPinAngle } from 'react-icons/bs';
import Spinner from '../common/Spinner';

const FavoriteFriendsData: React.FC = () => {
  const [chat, setChat] = useState('');
  const {
    data,
    getFavoriteFriends,
    setShowMessages,
    startChat,
    setFriendDetail,
    searchTerm,
    showMessages,
  } = useContext(GlobalStateContext);

  const { favoriteFriendsList } = data;
// this code is for the search bar to filter the friends list by the first name or last name using the search term which comes from the GlobalStateContext
  const filteredFavoriteFriends =
    favoriteFriendsList?.favoriteFriendsList.filter((myFriend: any) => {
      return (
        myFriend.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        myFriend.lastName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

  useEffect(() => {
    getFavoriteFriends && getFavoriteFriends();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const activeChat = (friendId: string) => {
    setChat(friendId);
    const partner = favoriteFriendsList?.favoriteFriendsList.filter(
      (active: any) => active._id === friendId
    );

    setFriendDetail!(partner[0]);
    setShowMessages!(true);
  };

  useEffect(() => {
    chat && startChat!(chat);
  }, [chat]);

  return (
    <div>
      {favoriteFriendsList?.favoriteFriendsList.length === 0 ||
      data === undefined ? (
        <div className={styles.friends__data}>
          <Spinner />
          <h4 style={{ textAlign: 'center', fontSize: '16px' }}>
            No Favorite Friend included yet
          </h4>
        </div>
      ) : (
        // favoriteFriendsList?.favoriteFriendsList.map(
        filteredFavoriteFriends.map(
          (friend: any, index: string) => {
            return (
              <div
                key={index}
                className={styles.friends__data}
                onClick={activeChat.bind(this, friend.id)}
              >
                <div className={styles.profile__Header}>
                  <img
                    src={friend.avatar}
                    className={styles.profile__img}
                    alt=""
                  />
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
          }
        )
      )}
    </div>
  );
};

export default FavoriteFriendsData;

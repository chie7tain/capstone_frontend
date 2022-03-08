import React, { useContext } from 'react';
import styles from './SearchMessage.module.scss';
import SearchHeader from './SearchHeader/SearchHeader';
import SearchBody from './SearchBody/SearchBody';

import ChatContext from '../../../context/ChatContext';

import Friend from '../../FriendProfile/Friend/Friend';

type SearcViewhProp = {};

const SearchMessage: React.FC<SearcViewhProp> = () => {
  const showSearchRes = useContext(ChatContext);

  return (
    <div
      className={`${styles.search__message} ${
        showSearchRes?.searchView ? '' : styles.show__search
      }`}
    >
      <SearchHeader />
      {showSearchRes?.isProfile ? <Friend userId={'621ea9f79c910d39aefe4a75'}  /> : <SearchBody />}
    </div>
  );
};

export default SearchMessage;

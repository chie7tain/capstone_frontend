import React, { useContext } from 'react';
import styles from './SearchMessage.module.scss';
import SearchHeader from './SearchHeader/SearchHeader';
import SearchBody from './SearchBody/SearchBody';

import ChatContext from '../../../Context/ChatContext';

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
      {showSearchRes?.isProfile ? <Friend /> : <SearchBody />}
    </div>
  );
};

export default SearchMessage;

import React from "react";
import Nav from "../ Nav/Nav";
import styles from "./Header.module.scss";
import { FaRegHeart } from "react-icons/fa";

// type IHeaderProps = {};

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.profile__info}>
        <img src="https://i.stack.imgur.com/YQu5k.png" alt="user tag" />
        <div className={styles.name__status}>
          <h2>Jane Cooper</h2>
          <p>
            <span></span> Online
          </p>
        </div>
        <i>
          <FaRegHeart />
        </i>
      </div>
      <Nav />
    </div>
  );
};

export default Header;

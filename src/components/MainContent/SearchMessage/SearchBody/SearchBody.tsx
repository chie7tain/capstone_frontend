import React, { useEffect, useRef, useState } from "react";

// Components
import SearchResult from "./SearchResult/SearchResult";
//ICons
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
// Styles
import styles from "./SearchBody.module.scss";

const messages = [
  "this is the first message from me to you",
  "Hello from my second message",
  "this message is doing me somehow",
  "testing my message funtionality",
  "hello, sending this to you",
  "this is clime",
  "hi whatsapp clone",
  "message is for the weak",
  "hello, this is for message",
  "one last time with my hleoo",
];

const SearchBody = () => {
  const [search, setSearch] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }

    const timer = setTimeout(() => {
      setSearchTerm(search);
    }, 1000);

    return () => clearTimeout(timer);
  }, [setSearchTerm, search]);

  const searchRes = messages.filter((el) => el.includes(search));

  return (
    <div>
      <div className={styles.msearch__input}>
        <i className={styles.search_icon}>
          <HiOutlineArrowSmLeft />
        </i>
        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
          placeholder="Search..."
        />
        <i className={styles.close__search}>
          {search && <IoCloseOutline onClick={() => setSearch("")} />}
        </i>
      </div>
      {search ? (
        <div className={styles.search__container}>
          {searchRes.map((el, i) => (
            <SearchResult key={i} message={el} />
          ))}
        </div>
      ) : (
        <div className={styles.search__content}>
          <p>{`Search for messages ${"with/in"}`}</p>
        </div>
      )}
    </div>
  );
};

export default SearchBody;

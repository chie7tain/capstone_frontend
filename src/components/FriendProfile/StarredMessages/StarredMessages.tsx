import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import {IoIosArrowForward} from 'react-icons/io'
import styles from './starredMessages.module.scss'

function StarredMessages() {
  return (
    <div className={`${styles.starredMsgWrap}`}>
      <div className={`${styles.starredTextContainer}`}>
        <AiFillStar className={`${styles.starIcon}`}/>
        <p>Starred Messages</p>
      </div>
      <IoIosArrowForward className={`${styles.forwardArrow}`}/>
    </div>
  )
}

export default StarredMessages
import React from 'react'
import styles from './muteNotifications.module.scss'
import {BsFillBellFill} from 'react-icons/bs'
import {BsToggle2Off} from 'react-icons/bs'
import {MdOutlineHistoryToggleOff} from 'react-icons/md'
import {IoIosArrowForward} from 'react-icons/io'


function MuteNotifications() {
  return (
    <div className={`${styles.muteNotificationsWrap}`}>
      <div className={`${styles.muteNotificationsCont}`}>
        <div className={`${styles.bellNotificationText}`}>
          <BsFillBellFill className={`${styles.bellNotificationIcon}`}/> 
          <p>Mute notifications</p>
        </div>
        <BsToggle2Off className={`${styles.toggleIcon}`}  />
      </div>

      <div className={`${styles.disappearingMsgCont}`}>
        <div className={`${styles.disapperaingIconText}`}>
          <MdOutlineHistoryToggleOff className={`${styles.disappearingIcon}`}/> 
          <p>Disappearing messages</p>
        </div>
        <IoIosArrowForward className={`${styles.forwardArrow}`}  />
      </div>
      
    </div>
  )
}

export default MuteNotifications
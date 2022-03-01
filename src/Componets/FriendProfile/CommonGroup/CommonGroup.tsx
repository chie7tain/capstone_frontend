import React from 'react'
import styles from './commonGroup.module.scss'
import whatsapp_ppics from '../../../Images/whatsapp_ppics.jpeg' 

function CommonGroup() {
  return (
    <div className={`${styles.commonGrpWrap}`}>
      <p className={`${styles.commonGroupHeader}`}> 4 groups in common </p>
      <div className={`${styles.grpDescriptionWrap}`}>
        <img src={whatsapp_ppics} alt='' className={`${styles.grpProfileImg}`} />
        <div className={`${styles.classDescriptionCont}`}>
          <p className={`${styles.grpDescriptionText}`}>Decagon SQ009 Group</p>
          <p className={`${styles.grpMembers}`}>Anita, Chima, Michael Jackson,Lambo</p>
        </div>
      </div>

      <div className={`${styles.grpDescriptionWrap}`}>
        <img src={whatsapp_ppics} alt='' className={`${styles.grpProfileImg}`} />
        <div className={`${styles.classDescriptionCont}`}>
          <p className={`${styles.grpDescriptionText}`}>Decagon SQ009 Group</p>
          <p className={`${styles.grpMembers}`}>Anita, Chima, Michael Jackson,Lambo</p>
        </div>
      </div>

      <div className={`${styles.grpDescriptionWrap}`}>
        <img src={whatsapp_ppics} alt='' className={`${styles.grpProfileImg}`} />
        <div className={`${styles.classDescriptionCont}`}>
          <p className={`${styles.grpDescriptionText}`}>Decagon SQ009 Group</p>
          <p className={`${styles.grpMembers}`}>Anita, Chima, Michael Jackson,Lambo</p>
        </div>
      </div>

      <div className={`${styles.grpDescriptionWrap}`}>
        <img src={whatsapp_ppics} alt='' className={`${styles.grpProfileImg}`} />
        <div className={`${styles.classDescriptionCont}`}>
          <p className={`${styles.grpDescriptionText}`}>Decagon SQ009 Group</p>
          <p className={`${styles.grpMembers}`}>Anita, Chima, Michael Jackson,Lambo</p>
        </div>
      </div>
    </div>
  )
}

export default CommonGroup
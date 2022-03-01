import React from 'react'
import styles from './profile.module.scss'
import {BsFillTelephoneFill, BsCameraVideoFill} from 'react-icons/bs'
import whatsapp_ppics from '../../../Images/whatsapp_ppics.jpeg' 


const Profile: React.FC = () => {
  return (
    <div className={`${styles.profileWrapper}`}>
      <div className={`${styles.profileWrap}`}>
        <div className={`${styles.profilePicWrap}`}><img src={whatsapp_ppics} alt="" className={`${styles.profilePic}`}></img></div>
        <div className={`${styles.profileDetails}`}>
          <p className={`${styles.profileName}`}> Mercy Lambo </p>
          <p className={`${styles.profileContact}`}>+2348061234567</p>
          <div className={`${styles.profileIconWrap}`}>
            <div className={`${styles.profileIconDv}`}>
              <BsFillTelephoneFill className={`${styles.phoneIcon} ${styles.profileIcon}`}/>
              <p className={`${styles.profileAudio} ${styles.profilePara}`}>Audio</p>
            </div>
            <div className={`${styles.profileIconDv}`}>
              <BsCameraVideoFill className={`${styles.videoIcon} ${styles.profileIcon}`} />
              <p className={`${styles.profileVideo} ${styles.profilePara}`}>Video</p>
            </div>
          </div>
        </div>
      </div>

      
     
    </div>
  )
}

export default Profile
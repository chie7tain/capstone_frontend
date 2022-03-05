import React from 'react'
import styles from './media.module.scss'
import {IoIosArrowForward} from 'react-icons/io'
import whatsapp_ppics from '../../../Images/whatsapp_ppics.jpeg' 

const Media: React.FC = () => {
  return (
    <div className={`${styles.mediaWrapper}`}>
      <div className={`${styles.mediaLinksPara}`}>
        <p className={`${styles.mediaLinksText}`}>Media, Links and Docs</p>
        <IoIosArrowForward  className={styles.forwardArrow}/>
      </div>  
      <div className={`${styles.media}`}>
        <div className={`${styles.imgBox}`}><img src={whatsapp_ppics} alt='' className={`${styles.mediaImg}`}></img></div>
        <div className={`${styles.imgBox}`}><img src={whatsapp_ppics} alt=''  className={`${styles.mediaImg}`}></img></div>
        <div className={`${styles.imgBox}`}><img src={whatsapp_ppics} alt=''  className={`${styles.mediaImg}`}></img></div>
     </div>
    </div>

  )
}

export default Media
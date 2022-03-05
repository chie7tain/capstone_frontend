import React from 'react'
import styles from "./VideoCall.module.scss"
import call1 from "../../Images/call1.png"
import call2 from "../../Images/call2.png"
import call3 from "../../Images/call3.png"
import call4 from "../../Images/call4.png"
import { AiOutlineEyeInvisible } from 'react-icons/ai'

const VideoCall = () => {
  return (
    
    <div className={styles.card}>
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img src={call1} alt="" />
      <button>+ Add people</button>
      </div>
      <div className={styles.wrapper}>
        <img src={call2} alt="" />
      </div>
      <div className={styles.wrapper}>
        <img src={call3} alt="" />
      </div>
      <div className={styles.wrapper}>
        <img src={call4} alt="" />
      </div>
    </div>
    </div>
  );
}

export default VideoCall;

import React from 'react'
import {MdOutlineBlock} from 'react-icons/md'
import {IoMdThumbsDown} from 'react-icons/io'
import {RiDeleteBin6Line} from 'react-icons/ri'
import styles from './blockReportDelete.module.scss'

function BlockReportDelete() {
  return (
    <div className={`${styles.blockReportDeleteWrap}`}>
      <div className={`${styles.blockDetails} ${styles.blockName}`}>
        <MdOutlineBlock className={`${styles.blockIcons}`}/>
        <p  className={`${styles.blockNamePara}`}>Block Mercy Lambo</p>
      </div>
      <div className={`${styles.blockDetails} ${styles.reportName}`}>
        <IoMdThumbsDown className={`${styles.blockIcons}`}/>
        <p> Report Mercy Lambo </p>
      </div>
      <div className={`${styles.blockDetails} ${styles.deleteChat}` }>
        <RiDeleteBin6Line className={`${styles.blockIcons}`}/>
        <p className={`${styles.deleteChatPara}`}>Delete Chat</p>
      </div>
    </div>
  )
}

export default BlockReportDelete
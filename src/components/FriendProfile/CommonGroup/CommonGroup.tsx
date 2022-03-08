import React, { useContext } from 'react'
import styles from './commonGroup.module.scss'
import whatsapp_ppics from '../../../Images/whatsapp_ppics.jpeg' 
import { GlobalStateContext } from '../../../context/GlobalState'
import useAxios from 'axios-hooks'
import icons, { Circles, Bars } from 'react-loading-icons';
import { MdError } from 'react-icons/md';



const CommonGroup: React.FC = () => {
const {accessToken, data, error, loading, friendDetail, user} = useContext(GlobalStateContext); 

interface IGroup{
  createdAt: string;
  createdBy: string;
  groupAdmins: string[];
  groupDescription: string;
  groupId: string;
  groupImage:string;
  groupImageId: string;
  groupName: string;
  id: string;
  members: string[];
  slug: string;

}
const { groups } = data

console.log(groups, '***')

// const [{ error, loading}] = useAxios({
//   url: `${'/api/v1/groups'}`,
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json',
//     Authorization: `Bearer ${accessToken}`
//   },

// })
if (loading) {
  return (
    <div className={`${styles.groupp}`}>
      <Loader />
    </div>
  );
}

if (error) {
  return (
    <div className={`${styles.groupp}`}>
      <Error errorMsg={`Failed to get common groups`} />
    </div>
  );
}

  return (
    <div className={`${styles.commonGrpWrap}`}>
      {groups.map((group:IGroup) => {
        return ( group.members.includes(friendDetail) && group.members.includes(user._id as string)? <div className={`${styles.grpDescriptionWrap}`}>
        <img src={whatsapp_ppics} alt='' className={`${styles.grpProfileImg}`} />
        <div className={`${styles.classDescriptionCont}`}>
          <p className={`${styles.grpDescriptionText}`}>group.groupName</p>
          <p className={`${styles.grpMembers}`}>Anita, Chima, Michael Jackson,Lambo</p>
        </div>
      </div> : null
        )
      })}
      {/* <p className={`${styles.commonGroupHeader}`}> 4 groups in common </p>
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
      </div> */}
    </div>
  )
}


function Loader() {
  return (
    <div className={styles.loaderStyling}>
      <icons.ThreeDots className={styles.loadingIcons} fill={'#054950'} />
    </div>
  );
}

function Error(props: { errorMsg: string }) {
  return (
    <div className={styles.errorStyling}>
      <MdError className={styles.errorIcons} />
      <p>{props.errorMsg}</p>
    </div>
  );
}

export default CommonGroup
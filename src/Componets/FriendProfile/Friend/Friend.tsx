import About from '../About/About';
import CommonGroup from '../CommonGroup/CommonGroup';
import Media from '../Media/Media';
import MuteNotifications from '../MuteNotifications/MuteNotifications';
import Profile from '../Profile/Profile';
import StarredMessages from '../StarredMessages/StarredMessages';
import BlockReportDelete from '../BlockReportDelete/BlockReportDelete';
import styles from './friend.module.scss';
import icons, { Circles, Bars } from 'react-loading-icons';
import { useState } from 'react';
import {MdError} from 'react-icons/md'

const Friend: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // if (loading) {
  //   return (
  //     <div className={`${styles.friend}`}>
  //       <Loader />
  //     </div>
  //   );
  // }

  if (loading){
    return (
      <div className={`${styles.friend}`}>
        <Error />
      </div>
    );
  }


  return (
    <div className={`${styles.friend}`}>
      <Profile />
      <About />
      <Media />
      <StarredMessages />
      <MuteNotifications />
      <CommonGroup />
      <BlockReportDelete />
    </div>
  );
};

function Loader() {
  return (
    <div className={styles.loaderStyle}>
      <icons.ThreeDots className={styles.loadingIcon} fill={'#054950'} />
    </div>
  );
}

 function Error(){
return (
<div className={styles.errorStyle}>
    <MdError  className={styles.errorIcon}/>
  </div>
)
  
 }

export default Friend;

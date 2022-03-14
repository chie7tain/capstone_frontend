import React, { useContext, useEffect, useState } from 'react';
import styles from './FriendsData.module.scss';
import { GlobalStateContext } from '../../context/GlobalState';
import { BsPinAngle } from 'react-icons/bs';
import Spinner from '../common/Spinner';

const GroupsData: React.FC = () => {
  const [chat, setChat] = useState("");
  const {
    data,
    getGroups,
    setShowMessages,
    startChat,
    setGroupDetail,
    searchTerm,
    groupDetail,
    getGroupMessages,
    messages,
  } = useContext(GlobalStateContext);
  const [loading, setLoading] = useState(false);


  const { groups } = data;
  let filteredGroups;
  if(searchTerm){
    filteredGroups = groups?.allgroups.filter((group: any) => {
      return group.groupName.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }else{
    filteredGroups = groups?.allgroups;
  }

  useEffect(() => {
    setLoading(true);
    getGroups && getGroups();
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const activeChat = (groupId: string) => {
    setChat(groupId);

    const partner = groups?.allgroups.filter(
      (active: any) => active.id === groupId
    );
    setGroupDetail!(partner[0]);
    setShowMessages!(true);
  };

  useEffect(() => {
    groupDetail.id && getGroupMessages!(groupDetail.id!);
  }, [groupDetail.id]);

  // let obj = {};
  // if (obj) {
  //   console.log("maroooon 5", groupDetail);
  // }

  // useEffect(() => {
  //   startChat!(chat);
  // }, [chat]);

  // const [redirect, setRedirect] = useState(false);

  // const showChat = () => {
  //   setShowMessages!(true);
  // };

  return (
    <div>
      {
      // groups?.allgroups.map((group: any, index: string) => {
      filteredGroups.map((group: any, index: string) => {
        return (
          <div
            key={index}
            className={styles.friends__data}
            onClick={activeChat.bind(this, group.id)}
          >
            <div className={styles.profile__Header}>
              <img
                src={group.groupImage}
                className={styles.profile__img}
                alt=""
              />
              <div className={styles.profile__info}>
                <h2>{group.groupName ? group.groupName : ''}</h2>
                <p>ha ha ha oh man</p>
              </div>
            </div>
            <div className={styles.extra}>
              <span>05:15pm</span>
              <i>
                <BsPinAngle />
              </i>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GroupsData;
// groups?.allgroups.map((group: any, index: string) => {
//   return (
//     <div
//       key={index}
//       className={styles.friends__data}
//       onClick={activeChat.bind(this, group.id)}
//     >
//       <div className={styles.profile__Header}>
//         <img
//           src={group.groupImage}
//           className={styles.profile__img}
//           alt=""
//         />
//         <div className={styles.profile__info}>
//           <h2>{group.groupName ? group.groupName : ''}</h2>
//           <p>ha ha ha oh man</p>
//         </div>
//       </div>
//       <div className={styles.extra}>
//         <span>05:15pm</span>
//         <i>
//           <BsPinAngle />
//         </i>
//       </div>
//     </div>
//   );
// });

// {
//   groups.allgroups.length < 1 ? (
//     <div
//       className={styles.friends__data}
//       style={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//     >
//       {/* <Spinner /> */}
//       <h4
//         style={{
//           textAlign: 'center',
//           fontSize: '16px',
//           display: 'block',
//         }}
//       >
//         Not Part of any Group yet
//       </h4>
//     </div>
//   ) : (
//     groups?.allgroups.map((group: any, index: string) => {
//       return (
//         <div
//           key={index}
//           className={styles.friends__data}
//           onClick={activeChat.bind(this, group.id)}
//         >
//           <div className={styles.profile__Header}>
//             <img
//               src={group.groupImage}
//               className={styles.profile__img}
//               alt=""
//             />
//             <div className={styles.profile__info}>
//               <h2>{group.groupName ? group.groupName : ''}</h2>
//               <p>ha ha ha oh man</p>
//             </div>
//           </div>
//           <div className={styles.extra}>
//             <span>05:15pm</span>
//             <i>
//               <BsPinAngle />
//             </i>
//           </div>
//         </div>
//       );
//     })
//   );
// }

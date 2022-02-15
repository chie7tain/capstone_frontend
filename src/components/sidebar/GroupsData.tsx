import React, {useContext} from 'react';
import styles from './LeftBar.module.scss';
import { GlobalStateContext } from '../../context/GlobalState';
import Vector from '../../assets/Vector.png';

const GroupsData: React.FC = () => {
    const { data } = useContext(GlobalStateContext);
    const { groups } = data;
    console.log(groups?.allgroups, "checking groups");
    // groups.map((e: any) => console.log(e, "groups"))
  return (
    <div>
      {groups?.allgroups.map((group: any, index: string) => {
        return (
          <div key={index}>
            <div className={styles["chat-headerInnerRight"]}>
              <div className={styles["chat-headerRightImage"]}>
                <img
                  src={group.groupImage}
                  className={styles["chat-headerRightImage"]}
                  alt=""
                />
              </div>
              <div className={styles["chat-headerRightText"]}>
                <div className={styles["chat-headerRightTextName"]}>
                  {group.groupName ? group.groupName : ""}
                </div>
                <div className={styles["chat-headerRightTextMessage"]}>
                  ha ha ha oh man
                </div>
              </div>
            </div>
            <div className={styles["chat-headerInnerLeft"]}>
              <div className={styles["chat-headerLeftTime"]}>05:15pm</div>
              <div className={styles["chat-headerLeftIcon"]}>
                <img className={styles["chatpin"]} src={Vector} alt="" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default GroupsData
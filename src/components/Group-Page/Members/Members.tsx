import React, { useContext, useEffect, useState } from "react";
import groupAvatar from "./male4.png";
import styles from "./Members.module.scss";
import useGet from "../../../utils/getApi";
import { GlobalStateContext } from "../../../context/GlobalState";
import axios from "axios";

interface Props {
  groupMembers: string[];
}

interface Member {
  Name: string;
  Image: string;
  about: string;
  email: string;
  status: string;
}

interface Resdata {
  status: string;
  data: Member;
}

const url = "http://localhost:3050/api/v1/users/profile/";

export default function Members(prop: Props) {
  const [members, setMembers] = useState<any>([]);
  const { accessToken } = useContext(GlobalStateContext);

  useEffect(() => {
    const response = prop.groupMembers.map(async (memberId) => {

      try {
        const res = await axios.get(`${url}${memberId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        return Promise.resolve(res.data);
        // console.log(res.data, "are you fetching my data?????");
      } catch (error: any) {
        console.log(error._message);
      }
    });
    // console.log(Promise.allSettled(response));
    Promise.all(response).then((values) => {
      console.log(values);
      setMembers(values);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {members.map((member: Resdata) => (
        <div className={styles.members} key={member.data.Name}>
          <div className={styles["member-wrapper"]}>
            <img
              src={member.data.Image}
              alt="Group 3"
              className={styles.avatar}
            />
          </div>

          <div className={styles["member-profile"]}>
            <p className={styles["profile-top"]}>{member.data.Name}</p>
            {/* <p className={styles["profile-bottom"]}>{member.status}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
}

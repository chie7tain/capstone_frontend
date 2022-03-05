import React, { FC } from "react";
import Header from "../Header/Header";
import About from "../About/About";
import Media from "../Media/Media";
import Members from "../Members/Members";
import Footer from "../Footer/Footer";
import useGet from "../../../utils/getApi";

interface groupI {
  groupId: string;
}

const Group: FC<groupI> = ({ groupId }) => {
  const backendUrl = `http://localhost:3050/api/v1/groups/${groupId}`;
  const { data, loading, error } = useGet(backendUrl);
  if (loading) {
    return <h1>The page is loading</h1>;
  }
  if (error) {
    return <h1> The page failed to load because of error.</h1>;
  }

  console.log(data);
  return (
    <div>
      <Header
        groupName={data.groupName}
        groupImage={data.groupImage}
        groupMemberCount={data.groupMembers.length}
      />
      <About groupDescription={data.groupDescription} />
      {/* <Media /> */}
      <Members groupMembers={data.groupMembers} />
      <Footer />
    </div>
  );
};

export default Group;

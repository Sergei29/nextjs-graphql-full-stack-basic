import React from "react";
//components:
import UserCard from "../UserCard/UserCard";
//style:
import styles from "../../styles/UserCard.module.css";

type Props = {
  arrUsers: { id: string; avatar_url: string; login: string }[];
};

/**
 * @description users list
 * @param {Object} props component props
 * @returns {JSX} component markup
 */
const UsersList: React.FC<Props> = ({ arrUsers }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      columnGap: "8px",
      rowGap: "8px",
      flexWrap: "wrap",
    }}
  >
    {arrUsers.map((objUser) => (
      <UserCard
        key={objUser.id}
        strAvatarUrl={objUser.avatar_url}
        strUserName={objUser.login}
        strUserId={objUser.id}
      />
    ))}
  </div>
);

export default UsersList;

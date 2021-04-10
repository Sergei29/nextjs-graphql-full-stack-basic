import React from "react";
//style:
import styles from "../../styles/UserCard.module.css";

type Props = {
  strUserId: string;
  strUserName: string;
  strAvatarUrl: string;
};

/**
 * @description user card
 * @param {Object} props component props
 * @returns {JSX} component markup
 */
const UserCard: React.FC<Props> = ({
  strAvatarUrl,
  strUserName,
  strUserId,
}) => {
  return (
    <div className={styles.Card}>
      <div className={styles.Card__imageContainer}>
        <img
          src={strAvatarUrl}
          alt="avatar"
          className={styles.Card__imageContainer__img}
        />
      </div>
      <p className={styles.Card__title}>{strUserName}</p>
    </div>
  );
};

export default UserCard;

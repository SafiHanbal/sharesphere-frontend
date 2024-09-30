import { Fragment } from 'react';

import getImageSrc from '../../utils/getImageSrc';

import UsersListItem from '../users-list-item/users-list-item.component';
import Line from '../line/line.component';

const UsersList = ({ usersList }) => {
  return (
    <div>
      <Line />
      {usersList?.map((user) => {
        const {
          _id,
          firstName,
          lastName,
          link,
          profilePicture,
          latestMessage,
        } = user;

        return (
          <Fragment key={_id}>
            <UsersListItem
              userId={_id}
              name={`${firstName} ${lastName}`}
              link={link}
              avatar={profilePicture && getImageSrc(profilePicture)}
              latestMessage={latestMessage}
            />
            <Line />
          </Fragment>
        );
      })}
    </div>
  );
};

export default UsersList;

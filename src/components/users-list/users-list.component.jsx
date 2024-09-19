import { Fragment } from 'react';

import UsersListItem from '../users-list-item/users-list-item.component';
import Line from '../line/line.component';
import { Container } from './users-list.styles';

const UsersList = ({ usersList }) => {
  return (
    <Container>
      <Line />
      {usersList.map((user) => {
        const { _id, firstName, lastName, link, avatar, latestMessage } = user;
        return (
          <Fragment key={_id}>
            <UsersListItem
              userId={_id}
              name={`${firstName} ${lastName}`}
              link={link}
              avatar={avatar && null}
              latestMessage={latestMessage}
            />
            <Line />
          </Fragment>
        );
      })}
    </Container>
  );
};

export default UsersList;

import { Fragment } from 'react';
import UsersListItem from '../users-list-item/users-list-item.component';
import Line from '../line/line.component';
import { Container } from './users-list.styles';

const UsersList = ({ usersList }) => {
  return (
    <Container>
      <Line />
      {usersList.map((user) => {
        const { _id, firstName, lastName, link, avatar } = user;
        return (
          <Fragment key={_id}>
            <UsersListItem
              name={`${firstName} ${lastName}`}
              link={link}
              avatar={avatar && null}
            />
            <Line />
          </Fragment>
        );
      })}
    </Container>
  );
};

export default UsersList;

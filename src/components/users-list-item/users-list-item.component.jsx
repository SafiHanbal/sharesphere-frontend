import Avatar from '../avatar/avatar.component';

import {
  Container,
  Name,
  MoreInfo,
  ChatName,
  CloseIcon,
  MoreIcon,
} from './users-lists-item.styles';

const UsersListItem = ({
  avatar,
  name,
  lastChat,
  link,
  closeHandler,
  type,
}) => {
  return (
    <Container to={link}>
      <Avatar imageSrc={avatar} />
      <div>
        <Name>{name}</Name>

        {lastChat && (
          <MoreInfo>
            {lastChat.name && <ChatName>{lastChat.name}:</ChatName>}
            <span>
              {lastChat.chat.length > 15
                ? lastChat.chat.slice(0, 15) + '...'
                : lastChat.chat}
            </span>
          </MoreInfo>
        )}

        {type === 'post' && <MoreInfo>12:00PM</MoreInfo>}
      </div>
      {closeHandler && <CloseIcon onClick={closeHandler} />}
      {type === 'post' && <MoreIcon />}
    </Container>
  );
};

export default UsersListItem;

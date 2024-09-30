import { useSelector, useDispatch } from 'react-redux';

import Avatar from '../avatar/avatar.component';

import { selectUser, selectToken } from '../../store/user/userSelector';
import { accessChatAsync } from '../../store/chat/chatAction';

import {
  Container,
  Name,
  MoreInfo,
  ChatName,
  CloseIcon,
  MoreIcon,
} from './users-list-item.styles';

const UsersListItem = ({
  userId,
  avatar,
  name,
  latestMessage,
  link,
  closeHandler,
  type,
  moreInfo,
}) => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const currentUser = useSelector(selectUser);

  const onClickHandler = () => {
    dispatch(accessChatAsync(userId, token));
  };

  return (
    // onClickHandler will run only if there is no link available
    <Container to={link} onClick={!link && onClickHandler}>
      <Avatar imageSrc={avatar} />
      <div>
        <Name>{name}</Name>

        {latestMessage && (
          <MoreInfo>
            {latestMessage?.sender === currentUser?._id && (
              <ChatName>You:</ChatName>
            )}
            <span>
              {latestMessage?.content?.length > 25
                ? latestMessage?.content?.slice(0, 25) + '...'
                : latestMessage?.content}
            </span>
          </MoreInfo>
        )}

        {moreInfo && <MoreInfo>{moreInfo}</MoreInfo>}
      </div>
      {closeHandler && <CloseIcon onClick={closeHandler} />}
      {type === 'post' && <MoreIcon />}
    </Container>
  );
};

export default UsersListItem;

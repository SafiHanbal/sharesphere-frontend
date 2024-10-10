import getImageSrc from '../../utils/functions/getImageSrc';
import getFormattedTime, {
  TIME_FORMAT_STYLE,
} from '../../utils/functions/getFormattedTime';

import { AVATAR_TYPES } from '../avatar/avatar.types';
import Avatar from '../avatar/avatar.component';

import {
  Container,
  AvatarContainer,
  Name,
  Time,
  Content,
} from './comment.styles';

const Comment = ({ comment }) => {
  const { profilePicture, firstName, lastName } = comment.user;
  const { content, createdAt } = comment;

  return (
    <Container>
      <AvatarContainer>
        <Avatar
          avatarType={AVATAR_TYPES.EXTRA_SMALL}
          imageSrc={profilePicture && getImageSrc(profilePicture)}
        />
      </AvatarContainer>

      <Name>
        <span>
          {firstName} {lastName}
        </span>
        <Time>{getFormattedTime(createdAt, TIME_FORMAT_STYLE.SHORT)}</Time>
      </Name>

      <Content>{content}</Content>
    </Container>
  );
};

export default Comment;

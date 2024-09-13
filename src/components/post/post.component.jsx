import DefaultPostImage from '../../assets/images/placeholder-post.png';

// import Line from '../line/line.component';
import UsersListItem from '../users-list-item/users-list-item.component';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { BUTTON_TYPES } from '../button/button.types';

import {
  Container,
  HeaderContainer,
  Image,
  InteractionsContainer,
  InteractionsIconContainer,
  LikeIcon,
  CommentIcon,
  ShareIcon,
  LikesCount,
  Caption,
  CommentForm,
  SendIcon,
} from './post.styles';

const Post = () => {
  return (
    <Container>
      <HeaderContainer>
        <UsersListItem name="Safi Hanbal" type="post" />
      </HeaderContainer>
      {/* <Line /> */}
      <Image src={DefaultPostImage} />
      {/* <Line /> */}
      <InteractionsContainer>
        <InteractionsIconContainer>
          <LikeIcon />
          <CommentIcon />
          <ShareIcon />
        </InteractionsIconContainer>
        <LikesCount>125 Likes</LikesCount>
        <Caption>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Caption>
        <CommentForm>
          <FormInput placeholder="Comment" />
          <Button buttonType={BUTTON_TYPES.SECONDARY_SMALL_OUTLINE}>
            <SendIcon />
          </Button>
        </CommentForm>
      </InteractionsContainer>
    </Container>
  );
};

export default Post;

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import getImageSrc, { IMAGE_FOLDER } from '../../utils/getImageSrc';
import getFormattedTime from '../../utils/getFormattedTime';
import getSingularOrPlural from '../../utils/getSingularOrPlural';

import Line from '../../components/line/line.component';
import UsersListItem from '../../components/users-list-item/users-list-item.component';
import Carousel from '../../components/carousel/carousel.component';

import { selectToken } from '../../store/user/userSelector';
import { likeAsync, unlikeAsync } from '../../store/post/postAction';

import {
  HeaderContainer,
  InteractionsContainer,
  InteractionsIconContainer,
  LikeIcon,
  LikedIcon,
  CommentIcon,
  ShareIcon,
  LikesCount,
  Caption,
} from './post-display.styles';

const PostDisplay = ({ post, commentClickHandler }) => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  // Assingning isLiked according to data from db
  useEffect(() => {
    setIsLiked(post.isLiked);
  }, [post.isLiked]);

  // Assingning likesCount according to data from db
  useEffect(() => {
    setLikesCount(post.likesCount);
  }, [post.likesCount]);

  const likeHandler = () => {
    setIsLiked(true);
    setLikesCount(likesCount + 1);
    dispatch(likeAsync(token, post._id));
  };

  const unlikeHandler = () => {
    setIsLiked(false);
    setLikesCount(likesCount - 1);
    dispatch(unlikeAsync(token, post._id));
  };

  const {
    images,
    caption,
    createdAt,
    user: { _id: userId, firstName, lastName, profilePicture },
  } = post;

  return (
    <>
      <HeaderContainer>
        <UsersListItem
          type="post"
          link={`/account/${userId}`}
          avatar={profilePicture && getImageSrc(profilePicture)}
          name={`${firstName} ${lastName}`}
          moreInfo={getFormattedTime(createdAt)}
        />
      </HeaderContainer>

      <Line />
      <Carousel
        images={images.map((image) => getImageSrc(image, IMAGE_FOLDER.POST))}
      />
      <Line />

      <InteractionsContainer>
        <InteractionsIconContainer>
          {isLiked ? (
            <LikedIcon onClick={unlikeHandler} />
          ) : (
            <LikeIcon onClick={likeHandler} />
          )}
          <CommentIcon onClick={commentClickHandler} />
          <ShareIcon />
        </InteractionsIconContainer>
        <LikesCount>
          {likesCount} {getSingularOrPlural('Like', likesCount)}
        </LikesCount>
        {caption && <Caption>{caption}</Caption>}
      </InteractionsContainer>
    </>
  );
};

export default PostDisplay;

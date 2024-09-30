import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { BUTTON_TYPES } from '../button/button.types';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import PostDisplay from '../../layouts/post-display/post-display.component';
import Comment from '../comment/comment.component';

import { selectToken, selectUser } from '../../store/user/userSelector';
import { commentAsync } from '../../store/post/postAction';

import {
  Container,
  CommentContainer,
  CommentForm,
  SendIcon,
} from './post.styles';

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(selectToken);
  const currentUser = useSelector(selectUser);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setComments(post?.comments);
  }, [post?.comments]);

  const commentClickHandler = () => {
    navigate(`/post/${post?._id}`);
  };

  const onChangeHandler = (event) => {
    setComment(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    // return if comment is empty
    if (!comment) return;

    const newComment = {
      user: {
        profilePicture: currentUser?.profilePicture,
        firstName: currentUser?.firstName,
        lastName: currentUser?.lastName,
      },
      content: comment,
      createdAt: new Date(),
    };

    dispatch(commentAsync(token, post?._id, comment));
    setComments([...comments, newComment]);
    setComment('');
  };

  return (
    <Container>
      <PostDisplay post={post} commentClickHandler={commentClickHandler} />
      {comments?.length > 0 && (
        <CommentContainer>
          {comments?.map((comment, idx) => (
            <Comment key={comment?._id || idx} comment={comment} />
          ))}
        </CommentContainer>
      )}

      <CommentForm onSubmit={onSubmitHandler}>
        <FormInput
          placeholder="Comment"
          value={comment}
          onChangeHandler={onChangeHandler}
        />
        <Button buttonType={BUTTON_TYPES.SECONDARY_SMALL_OUTLINE}>
          <SendIcon />
        </Button>
      </CommentForm>
    </Container>
  );
};

export default Post;

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import LogoSrc from '../../assets/logo/logo.png';

import { BUTTON_TYPES } from '../../components/button/button.types';
import Line from '../../components/line/line.component';
import Alert from '../../components/alert/alert.component';
import PostDisplay from '../../layouts/post-display/post-display.component';
import Comment from '../../components/comment/comment.component';
import FormInput from '../../components/form-input/form-input.component';
import Button from '../../components/button/button.component';

import { selectToken, selectUser } from '../../store/user/userSelector';
import { selectPost } from '../../store/post/postSelector';
import { getPostAsync, commentAsync } from '../../store/post/postAction';

import {
  Container,
  Header,
  Logo,
  PostContainer,
  LineContainer,
  Heading,
  CommentContainer,
  CommentList,
  NoCommentText,
  CommentForm,
  SendIcon,
} from './single-post.styles';

const SinglePost = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const currentUser = useSelector(selectUser);
  const post = useSelector(selectPost);

  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (!token) return;

    dispatch(getPostAsync(token, postId));
  }, [dispatch, postId, token]);

  useEffect(() => {
    if (!post) return;
    setComments(post?.comments);
  }, [post, post?.comments]);

  const commentClickHandler = () => {
    document.getElementById('comment-input').focus();
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

    dispatch(commentAsync(token, post._id, comment));
    setComments([...comments, newComment]);
    setComment('');
  };

  // Return nothing if there is no post
  if (!post) return <></>;
  return (
    <Container>
      <Header>
        <Link to="/">
          <Logo src={LogoSrc} alt="ShareSphere Logo" />
        </Link>
        <Line />
      </Header>
      <Alert />
      <PostContainer>
        <div>
          <PostDisplay post={post} commentClickHandler={commentClickHandler} />
        </div>
        <LineContainer>
          <Line />
        </LineContainer>

        <CommentContainer>
          <Heading>Comments</Heading>
          <Line />
          <CommentList>
            {comments.length > 0 ? (
              comments.map((comment, idx) => (
                <Comment key={comment._id || idx} comment={comment} />
              ))
            ) : (
              <NoCommentText>Post do not have any comment.</NoCommentText>
            )}
          </CommentList>
          <CommentForm onSubmit={onSubmitHandler}>
            <FormInput
              id="comment-input"
              placeholder="Comment"
              value={comment}
              onChangeHandler={onChangeHandler}
            />
            <Button
              type="submit"
              buttonType={BUTTON_TYPES.SECONDARY_SMALL_OUTLINE}
            >
              <SendIcon />
            </Button>
          </CommentForm>
        </CommentContainer>
      </PostContainer>
    </Container>
  );
};

export default SinglePost;

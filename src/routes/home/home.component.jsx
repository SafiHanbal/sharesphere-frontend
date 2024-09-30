import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import LogoSrc from '../../assets/logo/logo.png';

import Alert from '../../components/alert/alert.component';
import Line from '../../components/line/line.component';
import Post from '../../components/post/post.component';
import SearchUser from '../../layouts/search-user/search-user.component';

import { selectToken } from '../../store/user/userSelector';
import { selectPostList } from '../../store/post/postSelector';
import { getPostListAsync } from '../../store/post/postAction';

import {
  Container,
  Header,
  Logo,
  AddPostIcon,
  NotificationsIcon,
  LineContainer,
  ContentContainer,
  PostContainer,
  NoPostText,
  SearchUserContainer,
} from './home.styles';

const Home = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const postList = useSelector(selectPostList);

  useEffect(() => {
    dispatch(getPostListAsync(token));
  }, [dispatch, token]);

  return (
    <Container>
      <Header>
        <Logo src={LogoSrc} alt="ShareSphere Logo" />
        <NotificationsIcon />
        <Link to="/add-post">
          <AddPostIcon />
        </Link>
        <LineContainer>
          <Line />
        </LineContainer>
      </Header>
      <Alert />
      <ContentContainer>
        <PostContainer>
          {postList.length > 0 ? (
            postList.map((post) => <Post key={post._id} post={post} />)
          ) : (
            <NoPostText>Follow users to see their posts</NoPostText>
          )}
        </PostContainer>
        <SearchUserContainer>
          <SearchUser />
        </SearchUserContainer>
      </ContentContainer>
    </Container>
  );
};

export default Home;

import LogoSrc from '../../assets/logo/logo.png';

import Alert from '../../components/alert/alert.component';
import Line from '../../components/line/line.component';
import Post from '../../components/post/post.component';

import SearchUser from '../../layouts/search-user/search-user.component';

import {
  Container,
  Header,
  Logo,
  AddPostIcon,
  NotificationsIcon,
  LineContainer,
  ContentContainer,
  PostContainer,
  SearchUserContainer,
} from './home.styles';

const Home = () => {
  return (
    <Container>
      <Header>
        <Logo src={LogoSrc} alt="ShareSphere Logo" />
        <NotificationsIcon />
        <AddPostIcon />
        <LineContainer>
          <Line />
        </LineContainer>
      </Header>
      <Alert />
      <ContentContainer>
        <PostContainer>
          <Post />
          <Post />
          <Post />
        </PostContainer>
        <SearchUserContainer>
          <SearchUser />
        </SearchUserContainer>
      </ContentContainer>
    </Container>
  );
};

export default Home;

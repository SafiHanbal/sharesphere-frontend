import { useState, useEffect } from 'react';
import { useParams, useHref, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import getImageSrc, { IMAGE_FOLDER } from '../../utils/functions/getImageSrc';
import getSingularOrPlural from '../../utils/functions/getSingularOrPlural';

import ProfileInfo from '../../layouts/profile-info/profile-info.component';
import TopNavbar from '../../layouts/top-navbar/top-navbar.component';

import { selectToken } from '../../store/user/userSelector';
import { selectUser } from '../../store/user/userSelector';
import { selectAccountUser } from '../../store/users/usersSelector';
import { getAccountUserAsync } from '../../store/users/usersAction';

import {
  Container,
  Posts,
  NoPostText,
  PostLink,
  Post,
  PostData,
  LikesCount,
  LinkText,
  InvisibleBox,
} from './profile.styles';

const Profile = () => {
  const { userId } = useParams();
  const href = useHref();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(selectToken);
  const currentUser = useSelector(selectUser);
  const accountUser = useSelector(selectAccountUser);

  const [user, setUser] = useState(null);

  // Redirecting user to auth if not logged in
  useEffect(() => {
    if (!currentUser) navigate('/auth');
  }, [currentUser, navigate]);

  // Fetching User Data
  useEffect(() => {
    if (!token) return;

    dispatch(getAccountUserAsync(token, userId || currentUser?._id));
  }, [dispatch, currentUser?._id, token, userId]);

  // Setting user
  useEffect(() => {
    setUser(accountUser);
  }, [accountUser]);

  return (
    <>
      {href !== '/profile' && <TopNavbar />}

      <Container>
        {user && <ProfileInfo userId={userId} user={user} />}

        <Posts>
          {accountUser?.posts?.length > 0 ? (
            accountUser?.posts.map((post) => (
              <PostLink key={post._id} to={`/post/${post._id}`}>
                <Post src={getImageSrc(post.images[0], IMAGE_FOLDER.POST)} />
                <PostData>
                  <LikesCount>
                    {post.likesCount}{' '}
                    {getSingularOrPlural('Like', post.likesCount)}
                  </LikesCount>
                  <LinkText>see post</LinkText>
                </PostData>
              </PostLink>
            ))
          ) : (
            <NoPostText>User uploaded zero post</NoPostText>
          )}
        </Posts>
        {href === '/profile' && <InvisibleBox />}
      </Container>
    </>
  );
};

export default Profile;

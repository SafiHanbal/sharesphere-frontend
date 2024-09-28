import { useState, useEffect } from 'react';
import { useParams, useHref, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { selectToken } from '../../store/user/userSelector';
import { getAccountUserAsync } from '../../store/users/usersAction';
import { selectUser } from '../../store/user/userSelector';
import { selectAccountUser } from '../../store/users/usersSelector';

import ProfileInfo from '../../layouts/profile-info/profile-info.component';
import TopNavbar from '../../layouts/top-navbar/top-navbar.component';

import { Container, Posts, Post } from './profile.styles';

const Profile = () => {
  const { userId } = useParams();
  const href = useHref();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(selectToken);
  const logedInUser = useSelector(selectUser);
  const accountUser = useSelector(selectAccountUser);

  const [user, setUser] = useState(null);

  // Redirecting user to auth if not logged in
  useEffect(() => {
    if (!logedInUser) navigate('/auth');
  }, [logedInUser, navigate]);

  // Fetching User Data if it is account page
  useEffect(() => {
    if (userId) dispatch(getAccountUserAsync(token, userId));
  }, [dispatch, token, userId]);

  // Setting user depending upong account or profile page
  useEffect(() => {
    if (userId) {
      setUser(accountUser);
    } else {
      setUser(logedInUser);
    }
  }, [accountUser, logedInUser, userId]);

  return (
    <>
      {href !== '/profile' && <TopNavbar />}

      <Container>
        {user && <ProfileInfo userId={userId} user={user} />}

        <Posts>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </Posts>
        {/* <button onClick={() => dispatch(logoutUserAsync(token))}>Logout</button> */}
      </Container>
    </>
  );
};

export default Profile;

import { useNavigate } from 'react-router-dom';

import { AVATAR_TYPES } from '../../components/avatar/avatar.types';
import { BUTTON_TYPES } from '../../components/button/button.types';
import Avatar from '../../components/avatar/avatar.component';
import Button from '../../components/button/button.component';

import Line from '../../components/line/line.component';

import {
  AccountHeader,
  ProfileHeader,
  AddPostIcon,
  BackIcon,
  MenuIcon,
  UserName,
  InfoContainer,
  Name,
  UserNameBigScreen,
  Bio,
  ProfileButtonContainer,
  AccountButtonContainer,
  ShareIcon,
} from './profile-info.styles';

const ProfileInfo = ({ userId, user }) => {
  const navigate = useNavigate();
  const { username, firstName, lastName, bio } = user;

  return (
    <>
      {userId ? (
        <AccountHeader>
          <BackIcon onClick={() => navigate(-1)} />

          <UserName>{username}</UserName>
          <MenuIcon />
        </AccountHeader>
      ) : (
        <ProfileHeader>
          <UserName>{username}</UserName>
          <AddPostIcon />
          <MenuIcon />
        </ProfileHeader>
      )}

      <InfoContainer>
        <Avatar avatarType={AVATAR_TYPES.LARGE} />
        <Name>
          <span>
            {firstName} {lastName}
          </span>
          <UserNameBigScreen>@{username}</UserNameBigScreen>
        </Name>
        <Bio>{bio}</Bio>

        {userId ? (
          <AccountButtonContainer>
            <Button buttonType={BUTTON_TYPES.PRIMARY_SMALL_OUTLINE}>
              Follow
            </Button>
            <Button buttonType={BUTTON_TYPES.PRIMARY_SMALL_OUTLINE}>
              Message
            </Button>
            <Button buttonType={BUTTON_TYPES.PRIMARY_SMALL_OUTLINE}>
              <ShareIcon />
            </Button>
          </AccountButtonContainer>
        ) : (
          <ProfileButtonContainer>
            <Button buttonType={BUTTON_TYPES.PRIMARY_SMALL_OUTLINE}>
              Edit Profile
            </Button>
            <Button buttonType={BUTTON_TYPES.PRIMARY_SMALL_OUTLINE}>
              Share Profile
            </Button>
          </ProfileButtonContainer>
        )}

        <Line />
      </InfoContainer>

      {/* <button onClick={() => dispatch(logoutUserAsync(token))}>Logout</button> */}
    </>
  );
};

export default ProfileInfo;

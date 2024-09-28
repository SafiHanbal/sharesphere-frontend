import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { AVATAR_TYPES } from '../../components/avatar/avatar.types';
import { BUTTON_TYPES } from '../../components/button/button.types';
import Alert from '../../components/alert/alert.component';
import Avatar from '../../components/avatar/avatar.component';
import Button from '../../components/button/button.component';
import Line from '../../components/line/line.component';
import MenuDropdown from '../../components/menu-dropdown/menu-dropdown.component';

import { selectToken } from '../../store/user/userSelector';
import { selectIsAlertVisible } from '../../store/alert/alertSelector';
import { accessChatAsync } from '../../store/chat/chatAction';
import {
  followUserAsync,
  unfollowUserAsync,
} from '../../store/users/usersAction';

import getImageSrc from '../../utils/getImageSrc';

import {
  AccountHeader,
  ProfileHeader,
  AddPostLink,
  AddPostIcon,
  BackIcon,
  MenuIcon,
  UserName,
  InfoContainer,
  AlertContainer,
  Name,
  UserNameBigScreen,
  StatsContainer,
  StatsHeading,
  StatsText,
  Bio,
  ProfileButtonContainer,
  AccountButtonContainer,
  ShareIcon,
} from './profile-info.styles';

const ProfileInfo = ({ userId, user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(selectToken);
  const isAlertVisible = useSelector(selectIsAlertVisible);
  const [isfollowing, setIsFollowing] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);

  // Update following variable when a
  useEffect(() => {
    setIsFollowing(user.isFollowing);
  }, [user.isFollowing]);

  const onMessageButtonClick = () => {
    dispatch(accessChatAsync(userId, token));

    navigate('/chats');
  };

  const toggleDropdownActive = () => setDropdownActive(!dropdownActive);

  const onFollowButtonClick = () => {
    setIsFollowing(true);

    dispatch(followUserAsync(token, userId));
  };

  const onUnfollowButtonClick = () => {
    setIsFollowing(false);
    dispatch(unfollowUserAsync(token, userId));
  };

  const {
    username,
    firstName,
    lastName,
    bio,
    followersCount,
    following,
    postCount,
    profilePicture,
  } = user;
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
          <AddPostLink to="/add-post">
            <AddPostIcon />
          </AddPostLink>
          <MenuIcon onClick={toggleDropdownActive} />
          {dropdownActive && <MenuDropdown />}
        </ProfileHeader>
      )}

      <InfoContainer>
        {isAlertVisible && (
          <AlertContainer>
            <Alert />
          </AlertContainer>
        )}
        <Avatar
          avatarType={AVATAR_TYPES.LARGE}
          imageSrc={getImageSrc(profilePicture)}
        />
        <Name>
          <span>
            {firstName} {lastName}
          </span>
          <UserNameBigScreen>@{username}</UserNameBigScreen>
        </Name>
        <StatsContainer>
          <div>
            <StatsHeading>Post</StatsHeading>
            <StatsText>{postCount}</StatsText>
          </div>
          <div>
            <StatsHeading>Followers</StatsHeading>
            <StatsText>{followersCount}</StatsText>
          </div>
          <div>
            <StatsHeading>Following</StatsHeading>
            <StatsText>{following.length}</StatsText>
          </div>
        </StatsContainer>
        <Bio>{bio}</Bio>

        {userId ? (
          <AccountButtonContainer>
            {isfollowing ? (
              <Button
                buttonType={BUTTON_TYPES.PRIMARY_SMALL_OUTLINE}
                onClick={onUnfollowButtonClick}
              >
                Unfollow
              </Button>
            ) : (
              <Button onClick={onFollowButtonClick}>Follow</Button>
            )}

            <Button onClick={onMessageButtonClick}>Message</Button>
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

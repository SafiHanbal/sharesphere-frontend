import { AVATAR_TYPES } from './avatar.types';
import DefaultProfilePictureSRC from '../../assets/images/default-profile-picture.png';

import {
  ExtraSmallAvatar,
  SmallAvatar,
  MediumAvatar,
  LargeAvatar,
  ExtraLargeAvatar,
} from './avatar.styles';

const getAvatar = (avatarType) =>
  ({
    [AVATAR_TYPES.EXTRA_SMALL]: ExtraSmallAvatar,
    [AVATAR_TYPES.SMALL]: SmallAvatar,
    [AVATAR_TYPES.MEDIUM]: MediumAvatar,
    [AVATAR_TYPES.LARGE]: LargeAvatar,
    [AVATAR_TYPES.EXTRA_LARGE]: ExtraLargeAvatar,
  }[avatarType]);

const Avatar = ({
  imageSrc,
  altText = 'User Avatar',
  avatarType = AVATAR_TYPES.SMALL,
}) => {
  const CustomAvatar = getAvatar(avatarType);

  return (
    <CustomAvatar
      src={imageSrc ? imageSrc : DefaultProfilePictureSRC}
      alt={altText}
    />
  );
};

export default Avatar;

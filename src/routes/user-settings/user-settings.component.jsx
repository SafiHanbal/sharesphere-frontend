import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import LogoSrc from '../../assets/logo/logo.png';

import { AVATAR_TYPES } from '../../components/avatar/avatar.types';
import { INPUT_TYPES } from '../../components/form-input/form-input.types';

import getImageSrc from '../../utils/getImageSrc';
import Line from '../../components/line/line.component';
import Alert from '../../components/alert/alert.component';
import Avatar from '../../components/avatar/avatar.component';
import FormInput from '../../components/form-input/form-input.component';
import TextArea from '../../components/text-area/text-area.component';
import Button from '../../components/button/button.component';

import {
  selectLoading,
  selectUser,
  selectToken,
  selectActionTarget,
} from '../../store/user/userSelector';
import {
  updatePasswordAsync,
  updateProfilePictureAsync,
  updateUserAsync,
} from '../../store/user/userAction';

import {
  Container,
  ContentContainer,
  Header,
  Logo,
  ProfilePictureForm,
  AvatarContainer,
  Heading,
  Input,
  Label,
  Form,
  InfoContainer,
  Info,
} from './user-settings.styles';

const UserSettings = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const actionTarget = useSelector(selectActionTarget);

  // Storing file and src for profile picture form
  const [photoSrc, setPhotoSrc] = useState(getImageSrc(user?.profilePicture));
  const [photo, setPhoto] = useState(null);

  // Change photo onChange listener
  const onChangeHandler = (event) => {
    const file = event.target.files[0];
    setPhoto(file);
    setPhotoSrc(URL.createObjectURL(file));
  };

  // Submit for profile picture form
  const onSubmitHandler = (event) => {
    event.preventDefault();

    dispatch(updateProfilePictureAsync(token, photo));
  };

  const formikUpdateUser = useFormik({
    initialValues: {
      username: user?.username,
      firstName: user?.firstName,
      lastName: user?.lastName,
      bio: user?.bio,
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required('Username is required.')
        .matches(/^[A-Za-z][A-Za-z0-9_]{0,29}$/, {
          message: 'Username can only have letters, numbers, and underscore.',
        }),
      firstName: Yup.string().required('First Name is required.'),
      lastName: Yup.string().required('Last Name is required.'),
      bio: Yup.string().required('Bio is required.'),
    }),
    onSubmit: () => {
      dispatch(updateUserAsync(token, user._id, formikUpdateUser.values));
    },
  });

  const formikUpdatePassword = useFormik({
    initialValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      currentPassword: Yup.string()
        .required('Password is required.')
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, {
          message: 'Please provide a valid password.',
        }),
      newPassword: Yup.string()
        .required('Password is required.')
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, {
          message: 'Please provide a valid password.',
        }),
      confirmPassword: Yup.string()
        .required('Confirm Password is required')
        .test('confirm-password', 'Password does not match.', function (value) {
          return this.parent.newPassword === value;
        }),
    }),
    onSubmit: () => {
      dispatch(updatePasswordAsync(token, formikUpdatePassword.values));
    },
  });

  return (
    <Container>
      <ContentContainer>
        <Header>
          <Link to="/">
            <Logo src={LogoSrc} alt="ShareSphere Logo" />
          </Link>
          <Line />
        </Header>

        <ProfilePictureForm onSubmit={onSubmitHandler}>
          <Heading>Update Profile Picture</Heading>
          {actionTarget === 'update-profile-picture' && <Alert />}
          <AvatarContainer>
            <Avatar
              avatarType={AVATAR_TYPES.EXTRA_LARGE}
              imageSrc={photoSrc}
              altText="Profile Pictrue Preview"
            />
            <Label htmlFor="profile-pic">Change Photo</Label>
            <Input
              id="profile-pic"
              type="file"
              accept="image/*"
              onChange={onChangeHandler}
            />
          </AvatarContainer>

          <Button
            type="submit"
            disabled={!photo || (loading && actionTarget === 'login')}
          >
            {loading && actionTarget === 'update-profile-picture' ? (
              <span>Updating Profile Picture</span>
            ) : (
              <span>Update Profile Picture</span>
            )}
          </Button>
        </ProfilePictureForm>

        <Form onSubmit={formikUpdateUser.handleSubmit}>
          <Heading>Update User Info</Heading>
          {actionTarget === 'update-user' && <Alert />}
          <FormInput
            label="Username"
            type="text"
            name="username"
            value={formikUpdateUser.values.username}
            onChangeHandler={formikUpdateUser.handleChange}
            errorMsg={
              formikUpdateUser.touched.username &&
              formikUpdateUser.errors.username
            }
          />

          <InfoContainer>
            <Info>
              Username can only have letters, numbers, and underscore.
            </Info>
          </InfoContainer>

          <FormInput
            label="First Name"
            type="text"
            name="firstName"
            value={formikUpdateUser.values.firstName}
            onChangeHandler={formikUpdateUser.handleChange}
            errorMsg={
              formikUpdateUser.touched.firstName &&
              formikUpdateUser.errors.firstName
            }
          />

          <FormInput
            label="Last Name"
            type="text"
            name="lastName"
            value={formikUpdateUser.values.lastName}
            onChangeHandler={formikUpdateUser.handleChange}
            errorMsg={
              formikUpdateUser.touched.lastName &&
              formikUpdateUser.errors.lastName
            }
          />

          <TextArea
            label="Bio"
            rows={5}
            name="bio"
            value={formikUpdateUser.values.bio}
            onChangeHandler={formikUpdateUser.handleChange}
            errorMsg={
              formikUpdateUser.touched.bio && formikUpdateUser.errors.bio
            }
          />

          <Button
            type="submit"
            disabled={
              !formikUpdateUser.isValid ||
              (loading && actionTarget === 'update-user')
            }
          >
            {loading && actionTarget === 'update-user' ? (
              <span>Updating User Info</span>
            ) : (
              <span>Update User Info</span>
            )}
          </Button>
        </Form>

        <Form onSubmit={formikUpdatePassword.handleSubmit}>
          <Heading>Update Password</Heading>
          {actionTarget === 'update-password' && <Alert />}

          <FormInput
            label="Current Password"
            type="password"
            name="currentPassword"
            inputType={INPUT_TYPES.PASSWORD}
            value={formikUpdatePassword.values.currentPassword}
            onChangeHandler={formikUpdatePassword.handleChange}
            errorMsg={
              formikUpdatePassword.touched.currentPassword &&
              formikUpdatePassword.errors.currentPassword
            }
          />
          <FormInput
            label="New Password"
            type="password"
            name="newPassword"
            inputType={INPUT_TYPES.PASSWORD}
            value={formikUpdatePassword.values.newPassword}
            onChangeHandler={formikUpdatePassword.handleChange}
            errorMsg={
              formikUpdatePassword.touched.newPassword &&
              formikUpdatePassword.errors.newPassword
            }
          />
          <FormInput
            label="Confirm Password"
            type="password"
            inputType={INPUT_TYPES.PASSWORD}
            name="confirmPassword"
            value={formikUpdatePassword.values.confirmPassword}
            onChangeHandler={formikUpdatePassword.handleChange}
            errorMsg={
              formikUpdatePassword.touched.confirmPassword &&
              formikUpdatePassword.errors.confirmPassword
            }
          />
          <InfoContainer>
            <Info>
              Password should have min 8 characters with 1 number, 1 uppercase
              character and 1 special character.
            </Info>
          </InfoContainer>
          <Button
            type="submit"
            disabled={
              !formikUpdatePassword.isValid ||
              (loading && actionTarget === 'update-password')
            }
          >
            {loading && actionTarget === 'update-password' ? (
              <span>Updating Password</span>
            ) : (
              <span>Update Password</span>
            )}
          </Button>
        </Form>
      </ContentContainer>
    </Container>
  );
};

export default UserSettings;

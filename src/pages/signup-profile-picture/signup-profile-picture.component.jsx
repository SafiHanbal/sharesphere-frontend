import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { BUTTON_TYPES } from '../../components/button/button.types';
import { AVATAR_TYPES } from '../../components/avatar/avatar.types';
import Alert from '../../components/alert/alert.component';
import Button from '../../components/button/button.component';
import Avatar from '../../components/avatar/avatar.component';
import Stepper from '../../components/stepper/stepper.component';

import { showAlert } from '../../store/alert/alertAction';
import { updateProfilePictureAsync } from '../../store/user/userAction';
import { selectToken } from '../../store/user/userSelector';

import {
  Container,
  Form,
  Input,
  Label,
  SaveIcon,
  SkipButton,
} from './signup-profile-picture.styles';

const SignUpProfilePicture = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(selectToken);
  const [photoSrc, setPhotoSrc] = useState(null);
  const [photo, setPhoto] = useState(null);

  const successHandler = () => {
    navigate('/');
  };

  // Change photo onChange listener
  const onChangeHandler = (event) => {
    const file = event.target.files[0];
    if (!file.type.startsWith('image/'))
      return dispatch(showAlert('Invalid file type. Please upload an image.'));

    setPhoto(file);
    setPhotoSrc(URL.createObjectURL(file));
  };

  // Submit for profile picture form
  const onSubmitHandler = (event) => {
    event.preventDefault();

    dispatch(updateProfilePictureAsync(token, photo, successHandler));
  };

  return (
    <Container>
      <Stepper step="3" totalStep="3" title="Profile Picture" />

      <Alert />
      <Form onSubmit={onSubmitHandler}>
        <Avatar
          avatarType={AVATAR_TYPES.EXTRA_LARGE}
          imageSrc={photoSrc}
          altText="Profile Pictrue Preview"
        />
        <Label htmlFor="profile-pic">Upload Photo</Label>
        <Input
          id="profile-pic"
          type="file"
          accept="image/*"
          onChange={onChangeHandler}
        />
        <Button
          type="submit"
          buttonType={BUTTON_TYPES.SECONDARY_SMALL_FILL}
          // disabled={!formik.isValid}
        >
          <SaveIcon />
          <span>Save</span>
        </Button>
        <SkipButton to="/">Skip</SkipButton>
      </Form>
    </Container>
  );
};

export default SignUpProfilePicture;

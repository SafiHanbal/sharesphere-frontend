import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { BUTTON_TYPES } from '../../components/button/button.types';
import { AVATAR_TYPES } from '../../components/avatar/avatar.types';
import Alert from '../../components/alert/alert.component';
import Button from '../../components/button/button.component';
import Avatar from '../../components/avatar/avatar.component';
import Stepper from '../../components/stepper/stepper.component';

import { showAlert } from '../../store/alert/alertAction';

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
  const [photoSrc, setPhotoSrc] = useState(null);

  const onChangeHandler = (event) => {
    const file = event.target.files[0];
    if (!file.type.startsWith('image/'))
      return dispatch(showAlert('Invalid file type. Please upload an image.'));

    setPhotoSrc(URL.createObjectURL(file));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
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

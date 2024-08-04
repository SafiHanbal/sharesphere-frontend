import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Stepper from '../../components/stepper/stepper.component';
import { BUTTON_TYPES } from '../../components/button/button.types';
import Button from '../../components/button/button.component';
import TextArea from '../../components/text-area/text-area.component';

import {
  selectToken,
  selectLoading,
  selectUser,
} from '../../store/user/userSelector';
import { updateUserAsync } from '../../store/user/userAction';

import {
  Container,
  Form,
  NextIcon,
  SkipButton,
} from './signup-account-info.styles';

const SignUpAccountInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const loading = useSelector(selectLoading);
  const user = useSelector(selectUser);

  const successHandler = () => {
    formik.resetForm();
    navigate('/auth/sign-up-profile-picture');
  };

  const formik = useFormik({
    initialValues: {
      bio: '',
    },
    validationSchema: Yup.object({
      bio: Yup.string().required('Bio is required.'),
    }),
    onSubmit() {
      dispatch(updateUserAsync(token, user._id, formik.values, successHandler));
    },
  });

  return (
    <Container>
      <Stepper step="2" totalStep="3" title="Account Info" />

      <Form onSubmit={formik.handleSubmit}>
        <TextArea
          label="Bio"
          rows={5}
          name="bio"
          value={formik.values.bio}
          onChangeHandler={formik.handleChange}
          errorMsg={formik.touched.bio && formik.errors.bio}
        />
        <Button
          type="submit"
          buttonType={BUTTON_TYPES.SECONDARY_SMALL_FILL}
          disabled={!formik.isValid || loading}
        >
          {loading ? <span>Saving</span> : <span>Next</span>}
          <NextIcon />
        </Button>
        <SkipButton to="/">Skip</SkipButton>
      </Form>
    </Container>
  );
};

export default SignUpAccountInfo;

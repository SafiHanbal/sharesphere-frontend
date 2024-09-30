import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { INPUT_TYPES } from '../../components/form-input/form-input.types';
import { BUTTON_TYPES } from '../../components/button/button.types';
import Alert from '../../components/alert/alert.component';
import Stepper from '../../components/stepper/stepper.component';
import FormInput from '../../components/form-input/form-input.component';
import Button from '../../components/button/button.component';

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
} from './signup-personal-info.styles';

const SignUpPersonalInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const loading = useSelector(selectLoading);
  const currentUser = useSelector(selectUser);

  const successHandler = () => {
    formik.resetForm();
    navigate('/auth/sign-up-account-info');
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First Name is required.'),
      lastName: Yup.string().required('Last Name is required.'),
      dateOfBirth: Yup.string().required('Date of Birth is required.'),
    }),
    onSubmit() {
      dispatch(
        updateUserAsync(token, currentUser?._id, formik.values, successHandler)
      );
    },
  });

  return (
    <Container>
      <Stepper step="1" totalStep="3" title="Personal Info" />

      <Form onSubmit={formik.handleSubmit}>
        <Alert />
        <FormInput
          label="First Name"
          type="text"
          name="firstName"
          value={formik.values.firstName}
          onChangeHandler={formik.handleChange}
          errorMsg={formik.touched.firstName && formik.errors.firstName}
        />

        <FormInput
          label="Last Name"
          type="text"
          name="lastName"
          value={formik.values.lastName}
          onChangeHandler={formik.handleChange}
          errorMsg={formik.touched.lastName && formik.errors.lastName}
        />

        <FormInput
          label="Date of Birth"
          type="date"
          inputType={INPUT_TYPES.DATE}
          optionalLabel="mm/dd/yyyy"
          name="dateOfBirth"
          value={formik.values.dateOfBirth}
          onChangeHandler={formik.handleChange}
          errorMsg={formik.touched.dateOfBirth && formik.errors.dateOfBirth}
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

export default SignUpPersonalInfo;

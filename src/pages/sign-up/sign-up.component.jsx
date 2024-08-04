import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { INPUT_TYPES } from '../../components/form-input/form-input.types';
import FormInput from '../../components/form-input/form-input.component';
import Button from '../../components/button/button.component';
import Alert from '../../components/alert/alert.component';
import Line from '../../components/line/line.component';

import { signUpUserAsync } from '../../store/user/userAction';
import { selectLoading, selectUser } from '../../store/user/userSelector';

import {
  Container,
  Form,
  Heading,
  Info,
  LoginIcon,
  LoginLinkContainer,
  Paragraph,
  LoginLink,
} from './sign-up.styles';

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user) navigate('/');
  }, [navigate, user]);

  const onSignUpSuccess = () => {
    formik.resetForm();
    navigate('/auth/sign-up-info');
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required('Username is required.')
        .matches(/^[A-Za-z][A-Za-z0-9_]{0,29}$/, {
          message: 'Username can only have letters, numbers, and underscore.',
        }),
      email: Yup.string()
        .required('Email is required.')
        .email('Please provide a valid email.'),
      password: Yup.string()
        .required('Password is required.')
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, {
          message: 'Please provide a valid password.',
        }),
      confirmPassword: Yup.string()
        .required('Confirm Password is required')
        .test('confirm-password', 'Password does not match.', function (value) {
          return this.parent.password === value;
        }),
    }),
    onSubmit: () => {
      dispatch(signUpUserAsync(formik.values, onSignUpSuccess));
    },
  });

  return (
    <Container>
      <Form onSubmit={formik.handleSubmit}>
        <Heading>Sign Up With Email and Password</Heading>

        <Alert />

        <FormInput
          label="Username"
          type="text"
          name="username"
          value={formik.values.username}
          onChangeHandler={formik.handleChange}
          errorMsg={formik.touched.username && formik.errors.username}
        />

        <FormInput
          label="Email"
          type="email"
          name="email"
          value={formik.values.email}
          onChangeHandler={formik.handleChange}
          errorMsg={formik.touched.email && formik.errors.email}
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          inputType={INPUT_TYPES.PASSWORD}
          value={formik.values.password}
          onChangeHandler={formik.handleChange}
          errorMsg={formik.touched.password && formik.errors.password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          inputType={INPUT_TYPES.PASSWORD}
          value={formik.values.confirmPassword}
          onChangeHandler={formik.handleChange}
          errorMsg={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
        />

        <Info>
          Password should have min 8 characters with 1 number, 1 uppercase
          character and 1 special character.
        </Info>

        <Button type="submit" disabled={!formik.isValid || loading}>
          {loading ? <span>Signing Up</span> : <span>Sign Up</span>}
          <LoginIcon />
        </Button>
      </Form>

      <Line />

      <LoginLinkContainer>
        <Paragraph>Already have an account?</Paragraph>
        <LoginLink to="/auth">Login</LoginLink>
      </LoginLinkContainer>
    </Container>
  );
};

export default SignUp;

import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useGoogleLogin } from '@react-oauth/google';
import useFacebookLogin from '../../utils/hooks/useFacebookLogin';

import GoogleSVG from '../../assets/icons/google.svg?react';
import FacebookSVG from '../../assets/icons/facebook.svg?react';

import { INPUT_TYPES } from '../../components/form-input/form-input.types';
import { BUTTON_TYPES } from '../../components/button/button.types';

import FormInput from '../../components/form-input/form-input.component';
import Button from '../../components/button/button.component';
import Alert from '../../components/alert/alert.component';
import Line from '../../components/line/line.component';

import {
  selectLoading,
  selectUser,
  selectActionTarget,
} from '../../store/user/userSelector';
import {
  loginUserAsync,
  loginWithFacebookAsync,
  loginWithGoogleAsync,
} from '../../store/user/userAction';
import { showAlert } from '../../store/alert/alertAction';

import {
  Container,
  SocialLogin,
  Form,
  Heading,
  LoginIcon,
  Info,
  Paragraph,
  NavigationLink,
} from './login.styles';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const facebookLogin = useFacebookLogin(import.meta.env.VITE_FACEBOOK_APP_ID);
  const loading = useSelector(selectLoading);
  const actionTarget = useSelector(selectActionTarget);
  const currentUser = useSelector(selectUser);

  useEffect(() => {
    if (currentUser) navigate('/');
  }, [navigate, currentUser]);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required('Email is required.')
        .email('Please provide a valid email.'),
      password: Yup.string()
        .required('Password is required.')
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, {
          message: 'Please provide a valid password.',
        }),
    }),
    onSubmit: () => {
      dispatch(loginUserAsync(formik.values, formik.resetForm));
    },
  });

  const loginWithGoogleHandler = useGoogleLogin({
    onSuccess: (credentialResponse) => {
      const accessToken = credentialResponse.access_token;

      dispatch(loginWithGoogleAsync(accessToken));
    },
    onError: () => {
      dispatch(showAlert('Login with google failed.'));
    },
  });

  const loginWithFacebookHandler = () => {
    facebookLogin((accessToken) => {
      dispatch(loginWithFacebookAsync(accessToken));
    });
  };

  return (
    <Container>
      <SocialLogin>
        {actionTarget !== 'login' && <Alert />}
        <Button
          buttonType={BUTTON_TYPES.SECONDARY_SMALL_FILL}
          onClick={loginWithGoogleHandler}
          disabled={loading && actionTarget === 'login-with-google'}
        >
          <GoogleSVG />
          {loading && actionTarget === 'login-with-google' ? (
            <span>Loging In With Google</span>
          ) : (
            <span>Login With Google</span>
          )}
        </Button>
        <Button
          buttonType={BUTTON_TYPES.SECONDARY_SMALL_FILL}
          onClick={loginWithFacebookHandler}
          disabled={loading && actionTarget === 'login-with-facebook'}
        >
          <FacebookSVG />
          {loading && actionTarget === 'login-with-facebook' ? (
            <span>Loging In</span>
          ) : (
            <span>Login With Facebook</span>
          )}
        </Button>
      </SocialLogin>

      <Line />

      <Form onSubmit={formik.handleSubmit}>
        <Heading>Login With Email and Password</Heading>

        {actionTarget === 'login' && <Alert />}

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
          inputType={INPUT_TYPES.PASSWORD}
          name="password"
          value={formik.values.password}
          onChangeHandler={formik.handleChange}
          errorMsg={formik.touched.password && formik.errors.password}
        />

        <Info>
          Password should have min 8 characters with 1 number, 1 uppercase
          character and 1 special character.
        </Info>

        <Button
          type="submit"
          disabled={!formik.isValid || (loading && actionTarget === 'login')}
        >
          {loading && actionTarget === 'login' ? (
            <span>Logging In</span>
          ) : (
            <span>Login</span>
          )}
          <LoginIcon />
        </Button>
        <NavigationLink to="/auth/reset-password">
          Forgot Password?
        </NavigationLink>
      </Form>

      <Line />

      <Paragraph>
        <span>Don&apos;t have an account?</span>
        <NavigationLink to="/auth/sign-up">Sign Up</NavigationLink>
      </Paragraph>
    </Container>
  );
};

export default Login;

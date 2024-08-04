import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { INPUT_TYPES } from '../../components/form-input/form-input.types';
import { BUTTON_TYPES } from '../../components/button/button.types';
import FormInput from '../../components/form-input/form-input.component';
import Button from '../../components/button/button.component';
import Alert from '../../components/alert/alert.component';
import Line from '../../components/line/line.component';

import GoogleSVG from '../../assets/icons/google.svg?react';
import FacebookSVG from '../../assets/icons/facebook.svg?react';

import { loginUserAsync } from '../../store/user/userAction';
import { selectLoading, selectUser } from '../../store/user/userSelector';

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
  const loading = useSelector(selectLoading);
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user) navigate('/');
  }, [navigate, user]);

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

  return (
    <Container>
      <SocialLogin>
        <Button buttonType={BUTTON_TYPES.SECONDARY_SMALL_FILL}>
          <GoogleSVG />
          <span>Login With Google</span>
        </Button>
        <Button buttonType={BUTTON_TYPES.SECONDARY_SMALL_FILL}>
          <FacebookSVG />
          <span>Login With Facebook</span>
        </Button>
      </SocialLogin>

      <Line />

      <Form onSubmit={formik.handleSubmit}>
        <Heading>Login With Email and Password</Heading>

        <Alert />

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

        <Button type="submit" disabled={!formik.isValid || loading}>
          {loading ? <span>Logging In</span> : <span>Login</span>}
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

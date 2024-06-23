import * as Yup from 'yup';
import { useFormik } from 'formik';

import Line from '../../components/line/line.component';
import FormInput, {
  INPUT_TYPES,
} from '../../components/form-input/form-input.component';
import Button, { BUTTON_TYPES } from '../../components/button/button.component';

import { ReactComponent as GoogleSVG } from '../../assets/icons/google.svg';
import { ReactComponent as FacebookSVG } from '../../assets/icons/facebook.svg';

import {
  Container,
  SocialLogin,
  Form,
  Heading,
  LoginIcon,
  SignUpLinkContainer,
  Paragraph,
  SignUpLink,
} from './login.styles';

const Login = () => {
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
          message:
            'Password should have min 8 characters with 1 number and 1 uppercase character.',
        }),
    }),
    onSubmit: () => {
      alert(JSON.stringify(formik.values));
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
        <FormInput
          label="Email"
          type="text"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          errorMsg={formik.touched.email && formik.errors.email}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          inputType={INPUT_TYPES.PASSWORD_INPUT}
          value={formik.values.password}
          onChange={formik.handleChange}
          errorMsg={formik.touched.password && formik.errors.password}
        />

        <Button buttonType={BUTTON_TYPES.PRIMARY_SMALL_FILL} type="submit">
          <span>Login</span>
          <LoginIcon />
        </Button>
      </Form>

      <Line />

      <SignUpLinkContainer>
        <Paragraph>Don't have an account?</Paragraph>
        <SignUpLink>Sign Up</SignUpLink>
      </SignUpLinkContainer>
    </Container>
  );
};

export default Login;

import * as Yup from 'yup';
import { useFormik } from 'formik';

import { INPUT_TYPES } from '../../components/form-input/form-input.types';
import FormInput from '../../components/form-input/form-input.component';
import Button from '../../components/button/button.component';
import Line from '../../components/line/line.component';

import {
  Container,
  Heading,
  Form,
  GetOTPContainer,
} from './reset-password.styles';

const ResetPassword = () => {
  const formikGetOTP = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required('Email is required.')
        .email('Please provide a valid email.'),
    }),
    onSubmit: () => {
      console.log('submit fired');
    },
  });

  const formikResetPassword = useFormik({
    initialValues: {
      otp: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      otp: Yup.string()
        .required('OTP is required')
        .length(6, 'OTP should be 6 characters.'),
      password: Yup.string()
        .required('Password is required.')
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, {
          message:
            'Password should have min 8 characters with 1 number and 1 uppercase character.',
        }),
      confirmPassword: Yup.string()
        .required('Confirm Password is required')
        .test('confirm-password', 'Password does not match.', function (value) {
          return this.parent.password === value;
        }),
    }),
    onSubmit: () => {
      console.log('submit fired form reset password');
    },
  });

  return (
    <Container>
      <Form onSubmit={formikGetOTP.handleSubmit}>
        <Heading>Enter Email to Get OTP</Heading>
        <GetOTPContainer>
          <FormInput
            label="Email"
            type="email"
            name="email"
            value={formikGetOTP.values.email}
            onChangeHandler={formikGetOTP.handleChange}
            errorMsg={formikGetOTP.touched.email && formikGetOTP.errors.email}
          />

          <Button type="submit">Get OTP</Button>
        </GetOTPContainer>
      </Form>

      <Line />

      <Form onSubmit={formikResetPassword.handleSubmit}>
        <Heading>Reset Password</Heading>

        <FormInput
          label="OTP"
          type="number"
          name="otp"
          value={formikResetPassword.values.otp}
          onChangeHandler={formikResetPassword.handleChange}
          errorMsg={
            formikResetPassword.touched.otp && formikResetPassword.errors.otp
          }
        />
        <FormInput
          label="New Password"
          type="password"
          name="password"
          inputType={INPUT_TYPES.PASSWORD}
          value={formikResetPassword.values.password}
          onChangeHandler={formikResetPassword.handleChange}
          errorMsg={
            formikResetPassword.touched.password &&
            formikResetPassword.errors.password
          }
        />
        <FormInput
          label="Confirm Password"
          type="password"
          inputType={INPUT_TYPES.PASSWORD}
          name="confirmPassword"
          value={formikResetPassword.values.confirmPassword}
          onChangeHandler={formikResetPassword.handleChange}
          errorMsg={
            formikResetPassword.touched.confirmPassword &&
            formikResetPassword.errors.confirmPassword
          }
        />

        <Button type="submit">Reset Password</Button>
      </Form>
    </Container>
  );
};

export default ResetPassword;

import axios from 'axios';
import { ALERT_TYPES } from '../../components/alert/alert.types';
import { showAlert } from '../alert/alertAction';

import {
  loginUserStart,
  loginUserSuccess,
  loginUserFailed,
  loginWithGoogleStart,
  loginWithGoogleSuccess,
  loginWithGoogleFailed,
  loginWithFacebookStart,
  loginWithFacebookSuccess,
  loginWithFacebookFailed,
  signUpUserStart,
  signUpUserSuccess,
  signUpUserFailed,
  logoutUserStart,
  logoutUserSuccess,
  logoutUserFailed,
  resetPasswordStart,
  resetPasswordSuccess,
  resetPasswordFailed,
  updateUserStart,
  updateUserSuccess,
  updateUserFailed,
} from './userSlice';

const baseUrl = import.meta.env.VITE_BASE_URL;

export const loginUserAsync =
  (userCredentials, resetForm) => async (dispatch) => {
    dispatch(loginUserStart());
    try {
      const { data } = await axios.post(
        `${baseUrl}users/login`,
        userCredentials
      );

      dispatch(
        loginUserSuccess({
          token: data.token,
          user: data.data.user,
        })
      );
      resetForm();
      dispatch(showAlert('Login successfully!', ALERT_TYPES.SUCCESS));
    } catch (err) {
      dispatch(loginUserFailed());
      dispatch(showAlert(err.response.data.message));
    }
  };

export const loginWithGoogleAsync = () => async (dispatch) => {
  dispatch(loginWithGoogleStart());

  try {
    dispatch(loginWithGoogleSuccess());
  } catch (err) {
    dispatch(loginWithGoogleFailed());
    dispatch(showAlert(err.response.data.message));
  }
};

export const loginWithFacebookAsync = () => async (dispatch) => {
  dispatch(loginWithFacebookStart());

  try {
    dispatch(loginWithFacebookSuccess());
  } catch (err) {
    dispatch(loginWithFacebookFailed());
    dispatch(showAlert(err.response.data.message));
  }
};

export const signUpUserAsync =
  (userCredentials, successHandler) => async (dispatch) => {
    dispatch(signUpUserStart());
    try {
      const { data } = await axios.post(
        `${baseUrl}users/sign-up`,
        userCredentials
      );

      dispatch(
        signUpUserSuccess({
          token: data.token,
          user: data.data.user,
        })
      );
      successHandler();
      dispatch(
        showAlert(
          'SignUp successfully! Please provide necessary details.',
          ALERT_TYPES.SUCCESS
        )
      );
    } catch (err) {
      dispatch(signUpUserFailed());
      dispatch(showAlert(err.response.data.message));
    }
  };

export const logoutUserAsync = (token) => async (dispatch) => {
  dispatch(logoutUserStart());
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    await axios.get(`${baseUrl}users/logout`, config);

    dispatch(logoutUserSuccess());
    dispatch(showAlert('Logout successfully!', ALERT_TYPES.SUCCESS));
  } catch (err) {
    dispatch(logoutUserFailed());
    dispatch(showAlert(err.response.data.message));
  }
};

export const getOtpAsync = (userCredentials) => async (dispatch) => {
  dispatch(resetPasswordStart('get-otp'));
  try {
    const { data } = await axios.post(
      `${baseUrl}users/forgot-password`,
      userCredentials
    );

    dispatch(resetPasswordSuccess(userCredentials.email));
    dispatch(showAlert(data.message, ALERT_TYPES.SUCCESS));
  } catch (err) {
    dispatch(resetPasswordFailed());
    dispatch(showAlert(err.response.data.message));
  }
};

export const resetPasswordAsync =
  (userCredentials, successHandler) => async (dispatch) => {
    dispatch(resetPasswordStart('reset-password'));
    try {
      const { data } = await axios.post(
        `${baseUrl}users/reset-password`,
        userCredentials
      );

      successHandler();
      dispatch(resetPasswordSuccess());
      dispatch(showAlert(data.message, ALERT_TYPES.SUCCESS));
    } catch (err) {
      console.log(err);
      dispatch(resetPasswordFailed());
      dispatch(showAlert(err.response.data.message));
    }
  };

export const updateUserAsync =
  (token, userId, userCredentials, successHandler) => async (dispatch) => {
    dispatch(updateUserStart());
    try {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      const { data } = await axios.patch(
        `${baseUrl}users/${userId}`,
        userCredentials,
        config
      );

      dispatch(updateUserSuccess(data.data.user));
      successHandler();
      dispatch(
        showAlert('User data updated successfully!', ALERT_TYPES.SUCCESS)
      );
    } catch (err) {
      dispatch(updateUserFailed());
      dispatch(showAlert(err.response.data.message));
    }
  };

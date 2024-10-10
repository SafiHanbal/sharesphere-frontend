import axios from 'axios';
import { ALERT_TYPES } from '../../components/alert/alert.types';
import { showAlert } from '../alert/alertAction';

import { clearCurrentChat } from '../chat/chatSlice';
import {
  initializeAsyncFunc,
  endAsyncFunc,
  loginUserSuccess,
  signUpUserSuccess,
  logoutUserSuccess,
  resetPasswordSuccess,
  updateUserSuccess,
} from './userSlice';

const baseUrl = import.meta.env.VITE_BASE_URL;

export const loginUserAsync =
  (userCredentials, resetForm, socketLogin) => async (dispatch) => {
    dispatch(initializeAsyncFunc('login'));
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
      socketLogin(data.data.user._id);
      dispatch(showAlert('Login successfully!', ALERT_TYPES.SUCCESS));
    } catch (err) {
      dispatch(endAsyncFunc());
      dispatch(showAlert(err.response.data.message));
    }
  };

export const loginWithGoogleAsync =
  (accessToken, socketLogin) => async (dispatch) => {
    dispatch(initializeAsyncFunc('login-with-google'));

    try {
      const url = `${baseUrl}users/google-login`;
      const { data } = await axios.post(url, { accessToken });

      socketLogin(data.data.user._id);
      dispatch(loginUserSuccess({ token: data.token, user: data.data.user }));
      dispatch(showAlert('Login successfully!', ALERT_TYPES.SUCCESS));
    } catch (err) {
      dispatch(endAsyncFunc());
      dispatch(showAlert(err.response.data.message));
    }
  };

export const loginWithFacebookAsync =
  (accessToken, socketLogin) => async (dispatch) => {
    dispatch(initializeAsyncFunc('login-with-facebook'));

    try {
      const url = `${baseUrl}users/facebook-login`;
      const { data } = await axios.post(url, { accessToken });

      socketLogin(data.data.user._id);
      dispatch(loginUserSuccess({ token: data.token, user: data.data.user }));
      dispatch(showAlert('Login successfully!', ALERT_TYPES.SUCCESS));
    } catch (err) {
      dispatch(endAsyncFunc());
      dispatch(showAlert(err.response.data.message));
    }
  };

export const signUpUserAsync =
  (userCredentials, successHandler) => async (dispatch) => {
    dispatch(initializeAsyncFunc('signUp'));
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
      dispatch(endAsyncFunc());
      dispatch(showAlert(err.response.data.message));
    }
  };

export const logoutUserAsync = (token, socketLogout) => async (dispatch) => {
  dispatch(initializeAsyncFunc('logout'));

  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const url = `${baseUrl}users/logout`;
    await axios.get(url, config);

    socketLogout();
    dispatch(clearCurrentChat());
    dispatch(logoutUserSuccess());
    dispatch(showAlert('Logout successfully!', ALERT_TYPES.SUCCESS));
  } catch (err) {
    dispatch(endAsyncFunc());
    dispatch(showAlert(err.response.data.message));
  }
};

export const getOtpAsync = (userCredentials) => async (dispatch) => {
  dispatch(initializeAsyncFunc('get-otp'));
  try {
    const { data } = await axios.post(
      `${baseUrl}users/forgot-password`,
      userCredentials
    );

    dispatch(resetPasswordSuccess(userCredentials.email));
    dispatch(showAlert(data.message, ALERT_TYPES.SUCCESS));
  } catch (err) {
    dispatch(endAsyncFunc());
    dispatch(showAlert(err.response.data.message));
  }
};

export const resetPasswordAsync =
  (userCredentials, successHandler) => async (dispatch) => {
    dispatch(initializeAsyncFunc('reset-password'));
    try {
      const { data } = await axios.post(
        `${baseUrl}users/reset-password`,
        userCredentials
      );

      successHandler();
      dispatch(resetPasswordSuccess());
      dispatch(showAlert(data.message, ALERT_TYPES.SUCCESS));
    } catch (err) {
      dispatch(endAsyncFunc());
      dispatch(showAlert(err.response.data.message));
    }
  };

export const updateUserAsync =
  (token, userId, userCredentials, successHandler) => async (dispatch) => {
    dispatch(initializeAsyncFunc('update-user'));
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

      if (successHandler) successHandler();

      dispatch(
        showAlert('User data updated successfully!', ALERT_TYPES.SUCCESS)
      );
    } catch (err) {
      dispatch(endAsyncFunc());
      dispatch(showAlert(err.response.data.message));
    }
  };

export const updateProfilePictureAsync =
  (token, profilePicture, successHandler) => async (dispatch) => {
    dispatch(initializeAsyncFunc('update-profile-picture'));

    if (!profilePicture) {
      dispatch(endAsyncFunc());

      return dispatch(
        showAlert(
          'Please provide a photo',
          ALERT_TYPES.ERROR,
          'update-profile-picture'
        )
      );
    }

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      };

      const formData = new FormData();
      formData.append('profilePicture', profilePicture);

      const url = `${baseUrl}users/profile-picture`;
      const { data } = await axios.patch(url, formData, config);

      // Updating user data in local storage
      dispatch(updateUserSuccess(data.data.user));
      dispatch(
        showAlert('Profile picture updated successfully.', ALERT_TYPES.SUCCESS)
      );
      if (successHandler) successHandler();
    } catch (err) {
      dispatch(endAsyncFunc());
      dispatch(showAlert(err.response.data.message));
    }
  };

export const updatePasswordAsync =
  (token, passwordData) => async (dispatch) => {
    dispatch(initializeAsyncFunc('update-password'));

    try {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      const url = `${baseUrl}users/update-password`;
      const { data } = await axios.post(url, passwordData, config);

      // Updating user data in local storage
      dispatch(
        loginUserSuccess({
          token: data.token,
          user: data.data.user,
        })
      );
      dispatch(
        showAlert('Password updated successfully.', ALERT_TYPES.SUCCESS)
      );
    } catch (err) {
      dispatch(endAsyncFunc());
      dispatch(showAlert(err.response.data.message));
    }
  };

import axios from 'axios';
import { showAlert } from '../alert/alertAction';
import {
  loginUserStart,
  loginUserSuccess,
  loginUserFailed,
  signUpUserStart,
  signUpUserSuccess,
  signUpUserFailed,
  logoutUserStart,
  logoutUserSuccess,
  logoutUserFailed,
  updateUserStart,
  updateUserSuccess,
  updateUserFailed,
} from './userSlice';

const baseUrl = import.meta.env.VITE_BASE_URL;

export const loginUserAsync = (userData, resetForm) => async (dispatch) => {
  dispatch(loginUserStart());
  try {
    const { data } = await axios.post(`${baseUrl}users/login`, userData);

    dispatch(
      loginUserSuccess({
        token: data.token,
        user: data.data.user,
      })
    );
    resetForm();
  } catch (err) {
    dispatch(loginUserFailed());
    dispatch(showAlert(err.response.data.message));
  }
};

export const signUpUserAsync =
  (userData, successHandler) => async (dispatch) => {
    dispatch(signUpUserStart());
    try {
      const { data } = await axios.post(`${baseUrl}users/sign-up`, userData);

      dispatch(
        signUpUserSuccess({
          token: data.token,
          user: data.data.user,
        })
      );
      successHandler();
    } catch (err) {
      dispatch(signUpUserFailed());
      dispatch(showAlert(err.response.data.message));
    }
  };

export const logoutUserAsync = () => async (dispatch) => {
  dispatch(logoutUserStart());
  try {
    await axios.get(`${baseUrl}users/logout`);

    dispatch(logoutUserSuccess());
  } catch (err) {
    dispatch(logoutUserFailed());
    dispatch(showAlert(err.response.data.message));
  }
};

export const updateUserAsync =
  (token, userId, userData, successHandler) => async (dispatch) => {
    dispatch(updateUserStart());
    try {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      const { data } = await axios.patch(
        `${baseUrl}users/${userId}`,
        userData,
        config
      );

      dispatch(updateUserSuccess(data.data.user));
      successHandler();
    } catch (err) {
      dispatch(updateUserFailed());
      dispatch(showAlert(err.response.data.message));
    }
  };

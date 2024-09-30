import axios from 'axios';

import {
  initializeAsyncFunc,
  endAsyncFunc,
  getUsersSuccess,
  getAccountUserSuccess,
} from './usersSlice';

import { showAlert } from '../alert/alertAction';
import { ALERT_TYPES } from '../../components/alert/alert.types';

const baseUrl = import.meta.env.VITE_BASE_URL;

export const getUsersListAsync = (searchStr, token) => async (dispatch) => {
  dispatch(initializeAsyncFunc());
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const url = `${baseUrl}users/search/${searchStr}?fields=firstName,lastName,profilePicture`;
    const { data } = await axios.get(url, config);

    dispatch(getUsersSuccess(data.data.users));
  } catch (err) {
    dispatch(endAsyncFunc());
    dispatch(showAlert(err.response.data.message));
  }
};

export const getAccountUserAsync = (token, userId) => async (dispatch) => {
  dispatch(initializeAsyncFunc());
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const url = `${baseUrl}users/${userId}`;
    const { data } = await axios.get(url, config);

    dispatch(getAccountUserSuccess(data.data.user));
  } catch (err) {
    dispatch(endAsyncFunc());
    dispatch(showAlert(err.response.data.message));
  }
};

export const followUserAsync = (token, userId) => async (dispatch) => {
  dispatch(initializeAsyncFunc());
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const url = `${baseUrl}users/follow/${userId}`;
    await axios.get(url, config);

    dispatch(endAsyncFunc());
    dispatch(showAlert('Followed user successfully', ALERT_TYPES.SUCCESS));
  } catch (err) {
    dispatch(endAsyncFunc());
    dispatch(showAlert(err.response.data.message));
  }
};

export const unfollowUserAsync = (token, userId) => async (dispatch) => {
  dispatch(initializeAsyncFunc());
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const url = `${baseUrl}users/unfollow/${userId}`;
    await axios.get(url, config);

    dispatch(endAsyncFunc());
    dispatch(showAlert('Unfollowed user successfully.', ALERT_TYPES.SUCCESS));
  } catch (err) {
    dispatch(endAsyncFunc());
    dispatch(showAlert(err.response.data.message));
  }
};

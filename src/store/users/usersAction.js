import axios from 'axios';

import {
  initializeAsyncFunc,
  endAsyncFunc,
  getUsersSuccess,
  getAccountUserSuccess,
} from './usersSlice';
import { showAlert } from '../alert/alertAction';

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
  } catch (err) {
    dispatch(endAsyncFunc());
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
  } catch (err) {
    dispatch(endAsyncFunc());
  }
};

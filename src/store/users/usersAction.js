import axios from 'axios';

import {
  initializeAsyncFunc,
  endAsyncFunc,
  getUsersSuccess,
  getAccountUserSuccess,
} from './usersSlice';
import { showAlert } from '../alert/alertAction';

const baseUrl = import.meta.env.VITE_BASE_URL;

export const getUsersListAsync = (searchStr) => async (dispatch) => {
  dispatch(initializeAsyncFunc());
  try {
    const url = `${baseUrl}users/search/${searchStr}?fields=firstName,lastName,profilePicture`;
    const { data } = await axios.get(url);

    dispatch(getUsersSuccess(data.data.users));
  } catch (err) {
    dispatch(endAsyncFunc());
    dispatch(showAlert(err.response.data.message));
  }
};

export const getAccountUserAsync = (userId) => async (dispatch) => {
  dispatch(initializeAsyncFunc());
  try {
    const url = `${baseUrl}users/${userId}`;
    const { data } = await axios.get(url);

    dispatch(getAccountUserSuccess(data.data.user));
  } catch (err) {
    dispatch(endAsyncFunc());
    dispatch(showAlert(err.response.data.message));
  }
};

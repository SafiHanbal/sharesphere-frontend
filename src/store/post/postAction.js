import axios from 'axios';

import { ALERT_TYPES } from '../../components/alert/alert.types';
import { showAlert } from '../alert/alertAction';

import {
  initializeAsyncFunc,
  endAsyncFunc,
  getPostListSuccess,
  getPostSuccess,
} from './postSlice';

const baseUrl = import.meta.env.VITE_BASE_URL;

export const createPostAsync =
  (token, images = [], caption = '', successHandler) =>
  async (dispatch) => {
    dispatch(initializeAsyncFunc('create-post'));
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      };

      const formData = new FormData();

      // Appending images separately
      Array.from(images).forEach((image) => formData.append('images', image));
      formData.append('caption', caption);

      const url = `${baseUrl}posts`;
      await axios.post(url, formData, config);

      dispatch(endAsyncFunc());
      if (successHandler) successHandler();
      dispatch(showAlert('Post created successfully.', ALERT_TYPES.SUCCESS));
    } catch (err) {
      dispatch(endAsyncFunc());
      dispatch(showAlert(err.response.data.message));
    }
  };

export const getPostListAsync = (token) => async (dispatch) => {
  dispatch(initializeAsyncFunc('get-post-list'));
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const url = `${baseUrl}posts?sort=-createdAt`;
    const { data } = await axios.get(url, config);

    dispatch(getPostListSuccess(data.data.posts));
  } catch (err) {
    dispatch(endAsyncFunc());
    dispatch(showAlert(err.response.data.message));
  }
};

export const getPostAsync = (token, postId) => async (dispatch) => {
  dispatch(initializeAsyncFunc('single-post'));
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const url = `${baseUrl}posts/${postId}`;
    const { data } = await axios(url, config);

    dispatch(getPostSuccess(data.data.post));
  } catch (err) {
    dispatch(endAsyncFunc());
    dispatch(showAlert(err.response.data.message));
  }
};

export const likeAsync = (token, post) => async (dispatch) => {
  dispatch(initializeAsyncFunc('like'));
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const url = `${baseUrl}likes`;
    await axios.post(url, { post }, config);

    dispatch(endAsyncFunc());
  } catch (err) {
    dispatch(endAsyncFunc());
    dispatch(showAlert(err.response.data.message));
  }
};

export const unlikeAsync = (token, post) => async (dispatch) => {
  dispatch(initializeAsyncFunc('like'));
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const url = `${baseUrl}likes/${post}`;
    await axios.delete(url, config);

    dispatch(endAsyncFunc());
  } catch (err) {
    dispatch(endAsyncFunc());
    dispatch(showAlert(err.response.data.message));
  }
};

export const commentAsync = (token, post, content) => async (dispatch) => {
  initializeAsyncFunc('comment');
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const url = `${baseUrl}comments`;
    await axios.post(url, { post, content }, config);

    dispatch(endAsyncFunc());
  } catch (err) {
    dispatch(endAsyncFunc());
    dispatch(showAlert(err.response.data.message));
  }
};

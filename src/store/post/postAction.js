import axios from 'axios';

import { ALERT_TYPES } from '../../components/alert/alert.types';
import { initializeAsyncFunc, endAsyncFunc } from './postSlice';
import { showAlert } from '../alert/alertAction';

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

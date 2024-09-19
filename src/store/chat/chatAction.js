import axios from 'axios';

import {
  initFetch,
  endFetch,
  getChatListSuccess,
  setCurrentChat,
  getMessagesSuccess,
  sendMessageSuccess,
} from './chatSlice';

const baseUrl = import.meta.env.VITE_BASE_URL;

export const getChatListAsync = (token) => async (dispatch) => {
  dispatch(initFetch());
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const url = `${baseUrl}chats`;
    const { data } = await axios.get(url, config);

    dispatch(getChatListSuccess(data.data.chats));
  } catch (err) {
    dispatch(endFetch());
  }
};

export const accessChatAsync = (userId, token) => async (dispatch) => {
  dispatch(initFetch());
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const url = `${baseUrl}chats`;
    const { data } = await axios.post(url, { userId }, config);

    dispatch(setCurrentChat(data.data.chat));
  } catch (err) {
    dispatch(endFetch());
  }
};

export const getMessagesAsync = (token, chatId) => async (dispatch) => {
  dispatch(initFetch());
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const url = `${baseUrl}messages/${chatId}`;
    const { data } = await axios.get(url, config);

    dispatch(getMessagesSuccess(data.data.messages));
  } catch (err) {
    dispatch(endFetch());
  }
};

export const sendMessageAsync =
  (token, chatId, content) => async (dispatch) => {
    dispatch(initFetch());
    try {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      const url = `${baseUrl}messages`;
      const { data } = await axios.post(url, { chatId, content }, config);

      dispatch(sendMessageSuccess(data.data.message));
    } catch (err) {
      dispatch(endFetch());
    }
  };

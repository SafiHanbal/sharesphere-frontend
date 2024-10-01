import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    loading: false,
    chatList: [],
    currentChat: null,
    messages: [],
  },
  reducers: {
    initFetch(state) {
      state.loading = true;
    },
    endFetch(state) {
      state.loading = false;
    },

    getChatListSuccess(state, action) {
      state.loading = false;
      state.chatList = action.payload;
    },

    setCurrentChat(state, action) {
      state.loading = false;
      state.currentChat = action.payload;
    },

    clearCurrentChat(state) {
      state.currentChat = null;
    },

    getMessagesSuccess(state, action) {
      state.loading = false;
      state.messages = action.payload;
    },

    sendMessageSuccess(state, action) {
      state.loading = false;
      state.messages = [...state.messages, action.payload];
    },
  },
});

export const {
  initFetch,
  endFetch,
  getChatListSuccess,
  setCurrentChat,
  clearCurrentChat,
  getMessagesSuccess,
  sendMessageSuccess,
} = chatSlice.actions;

export const chatReducer = chatSlice.reducer;

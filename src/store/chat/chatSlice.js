import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    loading: false,
    typing: false,

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
    setTyping(state, action) {
      state.typing = action.payload;
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

    setMessages(state, action) {
      state.loading = false;
      state.messages = action.payload;
    },

    pushMessage(state, action) {
      state.messages = [...state.messages, action.payload];
    },
    clearMessages(state) {
      state.loading = false;
      state.messages = [];
    },
  },
});

export const {
  initFetch,
  endFetch,
  setTyping,
  getChatListSuccess,
  setCurrentChat,
  clearCurrentChat,
  setMessages,
  pushMessage,
  clearMessages,
} = chatSlice.actions;

export const chatReducer = chatSlice.reducer;

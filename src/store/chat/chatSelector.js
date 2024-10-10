import { createSelector } from 'reselect';

const selectChatSlice = (state) => state.chat;

export const selectLoading = createSelector(
  [selectChatSlice],
  (chatSlice) => chatSlice.loading
);

export const selectTyping = createSelector(
  [selectChatSlice],
  (chatSlice) => chatSlice.typing
);

export const selectChatList = createSelector(
  [selectChatSlice],
  (chatSlice) => chatSlice.chatList
);

export const selectCurrentChat = createSelector(
  [selectChatSlice],
  (chatSlice) => chatSlice.currentChat
);

export const selectMessages = createSelector(
  [selectChatSlice],
  (chatSlice) => chatSlice.messages
);

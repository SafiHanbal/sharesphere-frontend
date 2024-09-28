import { combineReducers } from 'redux';

import { alertReducer } from './alert/alertSlice';
import { userReducer } from './user/userSlice';
import { usersReducer } from './users/usersSlice';
import { chatReducer } from './chat/chatSlice';
import { postReducer } from './post/postSlice';

const rootReducer = combineReducers({
  alert: alertReducer,
  user: userReducer,
  users: usersReducer,
  chat: chatReducer,
  post: postReducer,
});

export default rootReducer;

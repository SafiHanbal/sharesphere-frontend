import { combineReducers } from 'redux';

import { alertReducer } from './alert/alertSlice';
import { userReducer } from './user/userSlice';
import { usersReducer } from './users/usersSlice';
import { chatReducer } from './chat/chatSlice';

const rootReducer = combineReducers({
  alert: alertReducer,
  user: userReducer,
  users: usersReducer,
  chat: chatReducer,
});

export default rootReducer;

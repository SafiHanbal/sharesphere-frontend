import { combineReducers } from 'redux';

import { alertReducer } from './alert/alertSlice';
import { userReducer } from './user/userSlice';
import { usersReducer } from './users/usersSlice';

const rootReducer = combineReducers({
  alert: alertReducer,
  user: userReducer,
  users: usersReducer,
});

export default rootReducer;

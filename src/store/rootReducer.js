import { combineReducers } from 'redux';

import { userReducer } from './user/userSlice';
import { alertReducer } from './alert/alertSlice';

const rootReducer = combineReducers({
  alert: alertReducer,
  user: userReducer,
});

export default rootReducer;

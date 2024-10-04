import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  loading: false,
  user: null,
  token: null,

  email: null,
  actionTarget: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    initializeAsyncFunc(state, action) {
      state.loading = true;
      state.actionTarget = action.payload;
    },

    endAsyncFunc(state) {
      state.loading = false;
    },

    loginUserSuccess(state, action) {
      state.loading = false;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },

    signUpUserSuccess(state, action) {
      state.loading = false;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },

    logoutUserSuccess(state) {
      state.loading = false;
      state.user = null;
      state.token = null;
    },

    resetPasswordSuccess(state, action) {
      state.loading = false;
      state.email = action.payload;
    },

    updateUserSuccess(state, action) {
      state.loading = false;
      state.user = action.payload;
    },
  },
});

export const {
  initializeAsyncFunc,
  endAsyncFunc,
  loginUserSuccess,
  signUpUserSuccess,
  logoutUserSuccess,
  resetPasswordSuccess,
  updateUserSuccess,
  updateTokenSuccess,
} = userSlice.actions;

export const userReducer = userSlice.reducer;

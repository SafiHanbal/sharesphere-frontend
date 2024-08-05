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
    // Login Actions
    loginUserStart(state) {
      state.loading = true;
      state.actionTarget = 'login';
    },
    loginUserSuccess(state, action) {
      state.loading = false;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    loginUserFailed(state) {
      state.loading = false;
    },

    // Login With Google Actions
    loginWithGoogleStart(state) {
      state.loading = true;
      state.actionTarget = 'login-with-google';
    },
    loginWithGoogleSuccess(state) {
      state.loading = false;
    },
    loginWithGoogleFailed(state) {
      state.loading = false;
    },

    // Login With Facebook Actions
    loginWithFacebookStart(state) {
      state.loading = true;
      state.actionTarget = 'login-with-facebook';
    },
    loginWithFacebookSuccess(state) {
      state.loading = false;
    },
    loginWithFacebookFailed(state) {
      state.loading = false;
    },

    // Sign Up Actions
    signUpUserStart(state) {
      state.loading = true;
      state.actionTarget = 'signUp';
    },
    signUpUserSuccess(state, action) {
      state.loading = false;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    signUpUserFailed(state) {
      state.loading = false;
    },

    // Logout Actions
    logoutUserStart(state) {
      state.loading = true;
      state.actionTarget = 'logout';
    },
    logoutUserSuccess(state) {
      state.loading = false;
      state.user = null;
      state.token = null;
    },
    logoutUserFailed(state) {
      state.loading = false;
    },

    // Reset Password Actions
    resetPasswordStart(state, action) {
      state.loading = true;
      state.actionTarget = action.payload;
    },
    resetPasswordSuccess(state, action) {
      state.loading = false;
      state.email = action.payload;
    },
    resetPasswordFailed(state) {
      state.loading = false;
    },

    // Update User Actions
    updateUserStart(state) {
      state.loading = true;
    },
    updateUserSuccess(state, action) {
      state.loading = false;
      state.user = action.payload;
    },
    updateUserFailed(state) {
      state.loading = false;
    },
  },
});

export const {
  loginUserStart,
  loginUserSuccess,
  loginUserFailed,
  loginWithGoogleStart,
  loginWithGoogleSuccess,
  loginWithGoogleFailed,
  loginWithFacebookStart,
  loginWithFacebookSuccess,
  loginWithFacebookFailed,
  signUpUserStart,
  signUpUserSuccess,
  signUpUserFailed,
  logoutUserStart,
  logoutUserSuccess,
  logoutUserFailed,
  resetPasswordStart,
  resetPasswordSuccess,
  resetPasswordFailed,
  updateUserStart,
  updateUserSuccess,
  updateUserFailed,
} = userSlice.actions;

export const userReducer = userSlice.reducer;

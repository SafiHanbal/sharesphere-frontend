import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  loading: false,
  user: null,
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    // Login Actions
    loginUserStart(state) {
      state.loading = true;
    },
    loginUserSuccess(state, action) {
      state.loading = false;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    loginUserFailed(state) {
      state.loading = false;
    },

    // Sign Up Actions
    signUpUserStart(state) {
      state.loading = true;
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
    },
    logoutUserSuccess(state) {
      state.loading = false;
      state.user = null;
    },
    logoutUserFailed(state) {
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
  signUpUserStart,
  signUpUserSuccess,
  signUpUserFailed,
  logoutUserStart,
  logoutUserSuccess,
  logoutUserFailed,
  updateUserStart,
  updateUserSuccess,
  updateUserFailed,
} = userSlice.actions;

export const userReducer = userSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  usersList: [],
  accountUser: null,
  loading: false,
};

const usersSlice = createSlice({
  name: 'users',
  initialState: INITIAL_STATE,
  reducers: {
    initializeAsyncFunc(state) {
      state.loading = true;
    },
    endAsyncFunc(state) {
      state.loading = false;
    },

    getUsersSuccess(state, action) {
      state.loading = false;
      state.usersList = action.payload;
    },

    getAccountUserSuccess(state, action) {
      state.loading = false;
      state.accountUser = action.payload;
    },
  },
});

export const {
  initializeAsyncFunc,
  endAsyncFunc,
  getUsersSuccess,
  getAccountUserSuccess,
} = usersSlice.actions;

export const usersReducer = usersSlice.reducer;

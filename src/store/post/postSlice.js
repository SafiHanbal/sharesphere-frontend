import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  loading: false,
  actionTarget: null,

  postList: [],
};

const postSlice = createSlice({
  name: 'post',
  initialState: INITIAL_STATE,
  reducers: {
    initializeAsyncFunc: (state, action) => {
      state.loading = true;
      state.actionTarget = action.payload;
    },
    endAsyncFunc: (state) => {
      state.loading = false;
    },
  },
});

export const { initializeAsyncFunc, endAsyncFunc } = postSlice.actions;

export const postReducer = postSlice.reducer;

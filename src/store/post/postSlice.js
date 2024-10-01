import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  loading: false,
  actionTarget: null,

  postList: [],
  post: null,
};

const postSlice = createSlice({
  name: 'post',
  initialState: INITIAL_STATE,
  reducers: {
    initializeAsyncFunc(state, action) {
      state.loading = true;
      state.actionTarget = action.payload;
    },
    endAsyncFunc: (state) => {
      state.loading = false;
    },

    getPostListSuccess(state, action) {
      state.loading = false;
      state.postList = action.payload;
    },

    getPostSuccess(state, action) {
      state.loading = false;
      state.post = action.payload;
    },
  },
});

export const {
  initializeAsyncFunc,
  endAsyncFunc,
  getPostListSuccess,
  getPostSuccess,
} = postSlice.actions;

export const postReducer = postSlice.reducer;

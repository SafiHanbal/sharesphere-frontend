import { createSelector } from 'reselect';

const selectPostSlice = (state) => state.post;

export const selectLoading = createSelector(
  [selectPostSlice],
  (postSlice) => postSlice.loading
);

export const selectPostList = createSelector(
  [selectPostSlice],
  (postSlice) => postSlice.postList
);

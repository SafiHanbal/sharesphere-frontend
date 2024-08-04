import { createSelector } from 'reselect';

const selectUserReducer = (state) => state.user;

export const selectLoading = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.loading
);

export const selectUser = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.user
);

export const selectToken = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.token
);

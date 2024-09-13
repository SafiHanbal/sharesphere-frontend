import { createSelector } from 'reselect';

const selectUsersSlice = (state) => state.users;

export const selectLoading = createSelector(
  [selectUsersSlice],
  (usersSlice) => usersSlice.loading
);

export const selectUsersList = createSelector(
  [selectUsersSlice],
  (usersSlice) => {
    const { usersList } = usersSlice;
    if (usersList.length <= 0) return usersList;

    const newUsersList = usersList.map((user) => ({
      ...user,
      avatar: user.profilePicture,
      link: `/account/${user._id}`,
    }));

    return newUsersList;
  }
);

export const selectAccountUser = createSelector(
  [selectUsersSlice],
  (usersSlice) => usersSlice.accountUser
);

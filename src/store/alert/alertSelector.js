import { createSelector } from 'reselect';

const selectAlertReducer = (state) => state.alert;

export const selectIsAlertVisible = createSelector(
  [selectAlertReducer],
  (alertSlice) => alertSlice.isAlertVisible
);

export const selectAlertMessage = createSelector(
  [selectAlertReducer],
  (alertSlice) => alertSlice.alertMessage
);

export const selectAlertType = createSelector(
  [selectAlertReducer],
  (alertSlice) => alertSlice.alertType
);

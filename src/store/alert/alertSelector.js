import { createSelector } from 'reselect';

const selectAlertSlice = (state) => state.alert;

export const selectIsAlertVisible = createSelector(
  [selectAlertSlice],
  (alertSlice) => alertSlice.isAlertVisible
);

export const selectAlertMessage = createSelector(
  [selectAlertSlice],
  (alertSlice) => alertSlice.alertMessage
);

export const selectAlertType = createSelector(
  [selectAlertSlice],
  (alertSlice) => alertSlice.alertType
);

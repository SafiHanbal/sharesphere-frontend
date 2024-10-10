import { createSelector } from 'reselect';

const selectCallSlice = (state) => state.call;

export const selectCallStatus = createSelector(
  [selectCallSlice],
  (callSlice) => callSlice.callStatus
);

export const selectCallType = createSelector(
  [selectCallSlice],
  (callSlice) => callSlice.callType
);

export const selectCallUser = createSelector(
  [selectCallSlice],
  (callSlice) => callSlice.callUser
);

export const selectCallTime = createSelector(
  [selectCallSlice],
  (callSlice) => callSlice.callTime
);

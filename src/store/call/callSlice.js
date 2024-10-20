import { createSlice } from '@reduxjs/toolkit';

export const CALL_STATUS = {
  OUTGOING: 'OUTGOING',
  INCOMING: 'INCOMING',
  ON_CALL: 'ON_CALL',
  REJECTED: 'REJECTED',
  LINE_BUSY: 'LINE_BUSY',
};

const callSlice = createSlice({
  name: 'call',
  initialState: {
    callStatus: null,
    callType: null,
    callUser: null,
  },
  reducers: {
    setCallStatus(state, action) {
      state.callStatus = action.payload;
    },
    setCallType(state, action) {
      state.callType = action.payload;
    },
    setCallUser(state, action) {
      state.callUser = action.payload;
    },
  },
});

export const { setCallType, setCallUser, setCallStatus } = callSlice.actions;

export const callReducer = callSlice.reducer;

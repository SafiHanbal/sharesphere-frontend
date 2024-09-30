import { createSlice } from '@reduxjs/toolkit';

const alertSlice = createSlice({
  name: 'alert',
  initialState: {
    isAlertVisible: false,
    alertMessage: null,
    alertType: null,
    // isAlertVisible: true,
    // alertMessage: 'Post created successfully',
    // alertType: 'SUCCESS',
  },
  reducers: {
    setAlert(state, action) {
      state.isAlertVisible = true;
      state.alertMessage = action.payload.message;
      state.alertType = action.payload.type;
    },
    removeAlert(state) {
      state.isAlertVisible = false;
      state.alertMessage = null;
      state.alertType = null;
    },
  },
});

export const { setAlert, removeAlert } = alertSlice.actions;

export const alertReducer = alertSlice.reducer;

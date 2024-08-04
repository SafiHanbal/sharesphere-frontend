import { setAlert, removeAlert } from './alertSlice';
import { ALERT_TYPES } from '../../components/alert/alert.types';

export const showAlert =
  (message, type = ALERT_TYPES.ERROR) =>
  (dispatch) => {
    dispatch(setAlert({ message, type }));

    setTimeout(() => {
      dispatch(removeAlert());
    }, 5000);
  };

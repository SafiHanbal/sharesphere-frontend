import { useDispatch, useSelector } from 'react-redux';

import { ALERT_TYPES } from './alert.types';

import ErrorAlert from './error-alert/error-alert.component';
import SuccessAlert from './success-alert/success-alert.component';
import WarningAlert from './warning-alert/warning-alert.component';
import InfoAlert from './info-alert/info-alert.component';

import { removeAlert } from '../../store/alert/alertSlice';

import {
  selectIsAlertVisible,
  selectAlertMessage,
  selectAlertType,
} from '../../store/alert/alertSelector';

const getAlert = (alertType) =>
  ({
    [ALERT_TYPES.ERROR]: ErrorAlert,
    [ALERT_TYPES.SUCCESS]: SuccessAlert,
    [ALERT_TYPES.WARNING]: WarningAlert,
    [ALERT_TYPES.INFO]: InfoAlert,
  }[alertType]);

const Alert = () => {
  const dispatch = useDispatch();
  const isAlertVisible = useSelector(selectIsAlertVisible);
  const alertMessage = useSelector(selectAlertMessage);
  const alertType = useSelector(selectAlertType);

  const onCloseHandler = () => dispatch(removeAlert());

  const CustomAlert = getAlert(alertType);
  return isAlertVisible ? (
    <CustomAlert message={alertMessage} onCloseHandler={onCloseHandler} />
  ) : (
    <></>
  );
};

export default Alert;

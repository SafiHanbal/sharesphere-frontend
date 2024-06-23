import ErrorAlert from './alert-variants/error-alert.component';
import SuccessAlert from './alert-variants/success-alert.component';
import WarningAlert from './alert-variants/warning-alert.component';
import InfoAlert from './alert-variants/info-alert.component';

export const ALERT_TYPES = {
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',
  WARNING: 'WARNING',
  INFO: 'INFO',
};

const getAlert = (alertType) =>
  ({
    [ALERT_TYPES.ERROR]: ErrorAlert,
    [ALERT_TYPES.SUCCESS]: SuccessAlert,
    [ALERT_TYPES.WARNING]: WarningAlert,
    [ALERT_TYPES.INFO]: InfoAlert,
  }[alertType]);

const Alert = ({ alertType = ALERT_TYPES.ERROR }) => {
  const CustomAlert = getAlert(alertType);

  return <CustomAlert />;
};

export default Alert;

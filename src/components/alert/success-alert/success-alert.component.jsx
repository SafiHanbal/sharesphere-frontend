import { CloseIcon } from '../alert.styles';
import {
  SuccessContainer,
  SuccessHeading,
  SuccessMessage,
} from './success-alert.styles';

const SuccessAlert = ({ message, onCloseHandler }) => {
  return (
    <SuccessContainer>
      <CloseIcon onClick={onCloseHandler} />
      <SuccessHeading>Success!</SuccessHeading>
      <SuccessMessage>{message}</SuccessMessage>
    </SuccessContainer>
  );
};

export default SuccessAlert;

import { CloseIcon } from '../alert.styles';
import {
  ErrorContainer,
  ErrorHeading,
  ErrorMessage,
} from './error-alert.styles';

const ErrorAlert = ({ message, onCloseHandler }) => {
  return (
    <ErrorContainer>
      <CloseIcon onClick={onCloseHandler} />
      <ErrorHeading>Error!</ErrorHeading>
      <ErrorMessage>{message}</ErrorMessage>
    </ErrorContainer>
  );
};

export default ErrorAlert;

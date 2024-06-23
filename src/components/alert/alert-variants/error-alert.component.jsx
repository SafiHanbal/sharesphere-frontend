import {
  CloseIcon,
  ErrorContainer,
  ErrorHeading,
  ErrorMessage,
} from '../alert.styles';

const ErrorAlert = ({
  message = 'Something went wrong! Please try again later.',
}) => {
  return (
    <ErrorContainer>
      <CloseIcon />
      <ErrorHeading>Error!</ErrorHeading>
      <ErrorMessage>{message}</ErrorMessage>
    </ErrorContainer>
  );
};

export default ErrorAlert;

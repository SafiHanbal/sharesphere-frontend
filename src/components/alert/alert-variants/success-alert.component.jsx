import {
  CloseIcon,
  SuccessContainer,
  SuccessHeading,
  SuccessMessage,
} from '../alert.styles';

const SuccessAlert = ({
  message = 'Something went wrong! Please try again later.',
}) => {
  return (
    <SuccessContainer>
      <CloseIcon />
      <SuccessHeading>Success!</SuccessHeading>
      <SuccessMessage>{message}</SuccessMessage>
    </SuccessContainer>
  );
};

export default SuccessAlert;

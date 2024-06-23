import {
  CloseIcon,
  WarningContainer,
  WarningHeading,
  WarningMessage,
} from '../alert.styles';

const WarningAlert = ({
  message = 'Something went wrong! Please try again later.',
}) => {
  return (
    <WarningContainer>
      <CloseIcon />
      <WarningHeading>Warning!</WarningHeading>
      <WarningMessage>{message}</WarningMessage>
    </WarningContainer>
  );
};

export default WarningAlert;

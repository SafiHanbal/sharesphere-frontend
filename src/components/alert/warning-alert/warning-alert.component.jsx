import { CloseIcon } from '../alert.styles';
import {
  WarningContainer,
  WarningHeading,
  WarningMessage,
} from './warning-alert.styles';

const WarningAlert = ({ message, onCloseHandler }) => {
  return (
    <WarningContainer>
      <CloseIcon onClick={onCloseHandler} />
      <WarningHeading>Warning!</WarningHeading>
      <WarningMessage>{message}</WarningMessage>
    </WarningContainer>
  );
};

export default WarningAlert;

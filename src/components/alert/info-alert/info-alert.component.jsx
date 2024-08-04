import { CloseIcon } from '../alert.styles';
import { InfoContainer, InfoHeading, InfoMessage } from './info-alert.styles';

const InfoAlert = ({ message, onCloseHandler }) => {
  return (
    <InfoContainer>
      <CloseIcon onClick={onCloseHandler} />
      <InfoHeading>Info!</InfoHeading>
      <InfoMessage>{message}</InfoMessage>
    </InfoContainer>
  );
};

export default InfoAlert;

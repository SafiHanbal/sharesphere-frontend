import {
  CloseIcon,
  InfoContainer,
  InfoHeading,
  InfoMessage,
} from '../alert.styles';

const InfoAlert = ({
  message = 'Something went wrong! Please try again later.',
}) => {
  return (
    <InfoContainer>
      <CloseIcon />
      <InfoHeading>Info!</InfoHeading>
      <InfoMessage>{message}</InfoMessage>
    </InfoContainer>
  );
};

export default InfoAlert;

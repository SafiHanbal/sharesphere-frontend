import { useSelector, useDispatch } from 'react-redux';
import { useSocket } from '../../hooks/useSocket';

import LogoSrc from '../../assets/logo/logo.png';
import getImageSrc from '../../utils/functions/getImageSrc';

import { AVATAR_TYPES } from '../../components/avatar/avatar.types';
import Avatar from '../../components/avatar/avatar.component';

import {
  selectCallUser,
  selectCallType,
  selectCallStatus,
} from '../../store/call/callSelector';

import { acceptCall, endCall } from '../../store/call/callAction';

import {
  Container,
  Header,
  Logo,
  Text,
  InfoContainer,
  Name,
  ButtonContainer,
  SingleButtonContainer,
  AcceptButton,
  RejectButton,
  AcceptAudioIcon,
  AcceptVidioIcon,
  RejectIcon,
  SmallScreenBtnContainer,
  LargeScreenBtnContainer,
} from './call-info.styles';
import { CALL_STATUS } from '../../store/call/callSlice';

const CallInfo = ({ time, notAnswered }) => {
  const dispatch = useDispatch();

  const callUser = useSelector(selectCallUser);
  const callType = useSelector(selectCallType);
  const callStatus = useSelector(selectCallStatus);

  const { acceptCallSocket, rejectCallSocket, endCallSocket } = useSocket();

  const onAccpetCall = () => {
    acceptCallSocket(callUser?._id);
    dispatch(acceptCall());
  };

  const onRejectCall = () => {
    dispatch(endCall());
    if (callStatus !== CALL_STATUS.LINE_BUSY) rejectCallSocket(callUser?._id);
  };

  const onEndCall = () => {
    dispatch(endCall());
    if (callStatus !== CALL_STATUS.LINE_BUSY) endCallSocket(callUser?._id);
  };

  return (
    <Container>
      <Header>
        <Logo src={LogoSrc} alt="ShareSphere Logo" />
        <Text>{time}</Text>
      </Header>
      <InfoContainer>
        <Avatar
          avatarType={AVATAR_TYPES.LARGE}
          imageSrc={
            callUser?.profilePicture && getImageSrc(callUser?.profilePicture)
          }
        />
        <div>
          <Name>
            {callUser?.firstName} {callUser?.lastName}
          </Name>

          {notAnswered && <Text>Not Answered</Text>}
          {!notAnswered && callStatus === CALL_STATUS.ON_CALL && (
            <Text>On Call</Text>
          )}
          {!notAnswered && callStatus !== CALL_STATUS.ON_CALL && (
            <Text>
              {callStatus === CALL_STATUS.OUTGOING ? 'Outgoing ' : 'Incoming '}
              {callType + ' '}
              Call
            </Text>
          )}
        </div>
      </InfoContainer>

      <SmallScreenBtnContainer>
        {callStatus === CALL_STATUS.INCOMING ? (
          <ButtonContainer>
            <AcceptButton onClick={onAccpetCall}>
              {callType === 'Audio' ? <AcceptAudioIcon /> : <AcceptVidioIcon />}
            </AcceptButton>
            <RejectButton onClick={onRejectCall}>
              <RejectIcon />
            </RejectButton>
          </ButtonContainer>
        ) : (
          <SingleButtonContainer>
            <RejectButton onClick={onEndCall}>
              <RejectIcon />
            </RejectButton>
          </SingleButtonContainer>
        )}
      </SmallScreenBtnContainer>

      <LargeScreenBtnContainer>
        {callStatus === CALL_STATUS.INCOMING ? (
          <>
            <AcceptButton onClick={onAccpetCall}>
              Accept {callType} Call
            </AcceptButton>
            <RejectButton onClick={onRejectCall}>Decline Call</RejectButton>
          </>
        ) : (
          <RejectButton onClick={onEndCall}>End Call</RejectButton>
        )}
      </LargeScreenBtnContainer>
    </Container>
  );
};

export default CallInfo;

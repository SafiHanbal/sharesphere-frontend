import { useSelector, useDispatch } from 'react-redux';
import { useSocket } from '../../hooks/useSocket';

import LogoSrc from '../../assets/logo/logo.png';

import { selectCallUser } from '../../store/call/callSelector';
import { endCall } from '../../store/call/callAction';

import {
  Container,
  Header,
  Logo,
  Text,
  IncomingVideo,
  OutgoingVideo,
  EndCallButton,
} from './video-call.styles';

const VideoCall = ({ time }) => {
  const dispatch = useDispatch();
  const callUser = useSelector(selectCallUser);
  const { endCallSocket } = useSocket();

  const onEndCall = () => {
    dispatch(endCall());
    endCallSocket(callUser?._id);
  };

  return (
    <Container>
      <Header>
        <Logo src={LogoSrc} alt="ShareSphre Logo" />
        <Text>{time}</Text>
      </Header>
      <IncomingVideo></IncomingVideo>
      <OutgoingVideo></OutgoingVideo>

      <EndCallButton onClick={onEndCall}>End Call</EndCallButton>
    </Container>
  );
};

export default VideoCall;

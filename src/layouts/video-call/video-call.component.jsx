import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSocket } from '../../hooks/useSocket';
import { usePeer } from '../../hooks/usePeer';

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

  const myVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

  const { endCallSocket } = useSocket();
  const { myStream, remoteStream } = usePeer();

  useEffect(() => {
    if (myVideoRef.current && myStream) {
      myVideoRef.current.srcObject = myStream;
    }
  }, [myStream]);

  useEffect(() => {
    if (remoteVideoRef.current && remoteStream) {
      remoteVideoRef.current.srcObject = remoteStream;
    }
  }, [remoteStream]);

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

      <IncomingVideo ref={remoteVideoRef} autoPlay playsInline></IncomingVideo>

      <OutgoingVideo
        ref={myVideoRef}
        autoPlay
        playsInline
        muted
      ></OutgoingVideo>

      <EndCallButton onClick={onEndCall}>End Call</EndCallButton>
    </Container>
  );
};

export default VideoCall;

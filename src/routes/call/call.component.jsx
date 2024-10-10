import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTimer } from '../../hooks/useTimer';

import CallInfo from '../../layouts/call-info/call-info.component';
import VideoCall from '../../layouts/video-call/video-call.component';

import { selectUser } from '../../store/user/userSelector';
import {
  selectCallStatus,
  selectCallUser,
  selectCallTime,
  selectCallType,
} from '../../store/call/callSelector';

import { setCallTime, CALL_STATUS } from '../../store/call/callSlice';
import { endCall, callNotAnswered } from '../../store/call/callAction';

import { Container } from './call.styles';

const Call = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentUser = useSelector(selectUser);

  const callStatus = useSelector(selectCallStatus);
  const callUser = useSelector(selectCallUser);
  const callTime = useSelector(selectCallTime);
  const callType = useSelector(selectCallType);

  const { seconds, time, startTimer, stopTimer } = useTimer();
  const [notAnswered, setNotAnswered] = useState(false);

  // To auth if not logged in
  useEffect(() => {
    if (!currentUser) navigate('/auth');
  }, [navigate, currentUser]);

  // To chat if call ends
  useEffect(() => {
    if (callUser) return;

    stopTimer();
    dispatch(setCallTime('00:00'));
    navigate('/chats');
  }, [callUser]);

  // Start timer
  useEffect(() => {
    startTimer(callTime);
    dispatch(setCallTime(time));
  }, [time]);

  // Reject call after 30 seconds if not accepted
  useEffect(() => {
    if (seconds === 30 && callStatus !== CALL_STATUS.ON_CALL) {
      if (callStatus === CALL_STATUS.OUTGOING) {
        setNotAnswered(true);
        dispatch(callNotAnswered());
      } else {
        dispatch(endCall());
      }
    }
  }, [callStatus, seconds]);

  return (
    <Container>
      {callStatus === CALL_STATUS.ON_CALL && callType === 'Video' ? (
        <VideoCall time={time} />
      ) : (
        <CallInfo time={time} notAnswered={notAnswered} />
      )}
    </Container>
  );
};

export default Call;

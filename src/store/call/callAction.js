import OutgoingMp3 from '../../assets/audio/outgoing.mp3';
import IncomingMp3 from '../../assets/audio/incoming.mp3';
import LineBusyMp3 from '../../assets/audio/line-busy.mp3';
import RejectCallMp3 from '../../assets/audio/reject-call.mp3';
import NotAnsweringMp3 from '../../assets/audio/not-answering.mp3';

import {
  setCallType,
  setCallUser,
  setCallStatus,
  CALL_STATUS,
} from './callSlice';

export const audioCall = () => () => {};

export const videoCall = () => () => {};

const outgoingAudio = new Audio(OutgoingMp3);
const incomingAudio = new Audio(IncomingMp3);
const lineBusyAudio = new Audio(LineBusyMp3);
const rejectCallAudio = new Audio(RejectCallMp3);
const notAnsweringAudio = new Audio(NotAnsweringMp3);

export const startCall = (callUser, callType) => (dispatch) => {
  dispatch(setCallUser(callUser));
  dispatch(setCallType(callType));
  dispatch(setCallStatus(CALL_STATUS.OUTGOING));

  outgoingAudio.pause();
  outgoingAudio.currentTime = 0;
  outgoingAudio.play();
};

export const incomingCall = (callUser, callType) => (dispatch) => {
  dispatch(setCallUser(callUser));
  dispatch(setCallType(callType));
  dispatch(setCallStatus(CALL_STATUS.INCOMING));

  incomingAudio.pause();
  incomingAudio.currentTime = 0;
  incomingAudio.play();
};

export const acceptCall = () => (dispatch) => {
  dispatch(setCallStatus(CALL_STATUS.ON_CALL));

  incomingAudio.pause();
};

export const callAccepted = () => (dispatch) => {
  dispatch(setCallStatus(CALL_STATUS.ON_CALL));

  outgoingAudio.pause();
};

export const endCall = () => (dispatch) => {
  dispatch(setCallStatus(null));
  dispatch(setCallType(null));
  dispatch(setCallUser(null));

  outgoingAudio.pause();
  incomingAudio.pause();
  lineBusyAudio.pause();
  rejectCallAudio.pause();
  notAnsweringAudio.pause();
};

export const callRejected = () => (dispatch) => {
  outgoingAudio.pause();
  rejectCallAudio.pause();
  rejectCallAudio.currentTime = 0;
  rejectCallAudio.play();

  setTimeout(() => {
    dispatch(endCall());
  }, 4000);
};

export const lineBusy = () => (dispatch) => {
  dispatch(setCallStatus(CALL_STATUS.LINE_BUSY));

  outgoingAudio.pause();
  lineBusyAudio.pause();
  lineBusyAudio.currentTime = 0;
  lineBusyAudio.play();
};

export const callNotAnswered = () => (dispatch) => {
  outgoingAudio.pause();

  notAnsweringAudio.pause();
  notAnsweringAudio.currentTime = 0;
  notAnsweringAudio.play();

  setTimeout(() => {
    dispatch(endCall());
  }, 4000);
};

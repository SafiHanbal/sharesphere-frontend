import { useContext } from 'react';

import { SocketContext } from '../context/socketContext';

export const useSocket = () => {
  const {
    socketReady,
    register,
    socketLogin,
    socketLogout,
    joinRoom,
    sendMessage,
    typingStart,
    typingEnd,
    startCallSocket,
    acceptCallSocket,
    endCallSocket,
    rejectCallSocket,
  } = useContext(SocketContext);

  return {
    socketReady,
    register,
    socketLogin,
    socketLogout,
    joinRoom,
    sendMessage,
    typingStart,
    typingEnd,
    startCallSocket,
    acceptCallSocket,
    endCallSocket,
    rejectCallSocket,
  };
};

import { io } from 'socket.io-client';
import { createContext, useEffect, useRef, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { usePeer } from '../hooks/usePeer';

import { selectUser } from '../store/user/userSelector';
import { selectCallUser } from '../store/call/callSelector';
import { pushMessage, setTyping } from '../store/chat/chatSlice';
import {
  incomingCall,
  endCall,
  callAccepted,
  callRejected,
  lineBusy,
} from '../store/call/callAction';

export const SocketContext = createContext({
  socketReady: null,
  register: () => {},
  socketLogin: () => {},
  socketLogout: () => {},
  joinRoom: () => {},
  sendMessage: () => {},
  typingStart: () => {},
  typingEnd: () => {},
  startCallSocket: async () => {},
  acceptCallSocket: async () => {},
  endCallSocket: () => {},
  rejectCallSocket: () => {},
});

export const SocketProvider = ({ children }) => {
  const dispatch = useDispatch();
  const socketRef = useRef(null);
  const currentUser = useSelector(selectUser);
  const callUser = useSelector(selectCallUser);
  const [socketReady, setSocketReady] = useState(false);

  const {
    peer,
    setIncomingOffer,
    getOffer,
    getAnswer,
    setRemoteDescription,
    setIceCandidate,
    startCallPeer,
    acceptCallPeer,
    endCallPeer,
  } = usePeer();

  const onIceCandidate = useCallback(
    (event) => {
      if (!event.candidate) return;

      socketRef.current.emit('set-candidate', {
        recipientId: callUser?._id,
        candidate: event.candidate,
      });
    },
    [callUser?._id]
  );

  const onNegotiationNeeded = useCallback(async () => {
    const offer = await getOffer();
    socketRef.current.emit('set-negotiation-needed', {
      recipientId: callUser?._id,
      offer,
    });
  }, [callUser?._id, getOffer]);

  useEffect(() => {
    // Initializing socket on refresh
    if (socketRef.current) return;
    socketRef.current = io(import.meta.env.VITE_BACKEND_URL);
    setSocketReady(true);

    // Disconnecting socket on web page leave
    return () => {
      if (!socketRef.current) return;
      socketRef.current.disconnect();
      socketRef.current = null;
    };
  }, []);

  // Negotiation Needed Peer event listener
  useEffect(() => {
    if (!peer || !callUser) return;
    peer.addEventListener('negotiationneeded', onNegotiationNeeded);

    () => {
      peer.removeEventListener('negotiationneeded', onNegotiationNeeded);
    };
  }, [peer, callUser, getOffer, onNegotiationNeeded]);

  // Exchanging ice candidates
  useEffect(() => {
    if (!peer || !callUser) return;
    peer.addEventListener('icecandidate', onIceCandidate);

    () => {
      if (!peer) return;
      peer.removeEventListener('icecandidate', onIceCandidate);
    };
  }, [peer, callUser, onIceCandidate]);

  useEffect(() => {
    if (!socketRef.current) return;

    socketRef.current.on('receive-message', ({ recipientId, message }) => {
      if (recipientId === currentUser?._id) dispatch(pushMessage(message));
    });

    socketRef.current.on('get-typing-start', ({ recipientId }) => {
      if (recipientId === currentUser?._id) dispatch(setTyping(true));
    });

    socketRef.current.on('get-typing-stop', ({ recipientId }) => {
      if (recipientId === currentUser?._id) dispatch(setTyping(false));
    });

    socketRef.current.on('incoming-call', ({ caller, callType, offer }) => {
      if (callUser) {
        socketRef.current.emit('set-line-busy', { recipientId: caller?._id });
      } else {
        setIncomingOffer(offer);
        dispatch(incomingCall(caller, callType));
      }
    });

    socketRef.current.on('get-accept-call', async ({ answer }) => {
      await setRemoteDescription(answer);
      dispatch(callAccepted());
    });

    socketRef.current.on('get-reject-call', () => {
      dispatch(callRejected());
      endCallPeer();
    });

    socketRef.current.on('get-end-call', () => {
      dispatch(endCall());
      endCallPeer();
    });

    socketRef.current.on('get-line-busy', () => {
      dispatch(lineBusy());
    });

    socketRef.current.on('get-negotiation-needed', async ({ offer }) => {
      const answer = await getAnswer(offer);

      socketRef.current.emit('set-negotiation-done', {
        recipientId: callUser?._id,
        answer,
      });
    });

    socketRef.current.on('get-negotiation-done', async ({ answer }) => {
      await setRemoteDescription(answer);
    });

    socketRef.current.on('get-candidate', ({ candidate }) => {
      setIceCandidate(candidate);
    });

    return () => {
      if (!socketRef.current) return;

      // Clearing listeners
      socketRef.current.off('receive-message');
      socketRef.current.off('get-typing-start');
      socketRef.current.off('get-typing-stop');
      socketRef.current.off('incoming-call');
      socketRef.current.off('get-accept-call');
      socketRef.current.off('get-reject-call');
      socketRef.current.off('get-end-call');
      socketRef.current.off('get-line-busy');
      socketRef.current.off('get-negotiation-needed');
      socketRef.current.off('get-negotiation-done');
      socketRef.current.off('get-candidate');
    };
  }, [callUser, currentUser?._id]);

  // Register userId->socketId in SocketMap on refresh
  const register = (userId) => {
    if (!socketRef.current) return;
    socketRef.current.emit('register', { userId });
  };

  // Initializing socket on Login and Register userId->socketId in SocketMap on login/signup
  const socketLogin = (userId) => {
    socketRef.current.emit('register', { userId });
  };

  // Disconnecting socket on Logout
  const socketLogout = () => {
    socketRef.current.emit('logout');
  };

  // Message Function
  const joinRoom = (recipientId) => {
    socketRef.current.emit('join-room', {
      userId: currentUser?._id,
      recipientId,
    });
  };

  const sendMessage = (recipientId, message) => {
    socketRef.current.emit('send-message', {
      userId: currentUser?._id,
      recipientId,
      message,
    });
  };

  const typingStart = (userId, recipientId) => {
    socketRef.current.emit('set-typing-start', { userId, recipientId });
  };

  const typingEnd = (userId, recipientId) => {
    socketRef.current.emit('set-typing-stop', { userId, recipientId });
  };

  // Calling Functions
  const startCallSocket = async (caller, recipientId, callType) => {
    // getting stream before creating offer
    // to send neccessary info with offer

    const offer = await startCallPeer(callType);
    socketRef.current.emit('start-call', {
      caller,
      recipientId,
      callType,
      offer,
    });
  };

  const acceptCallSocket = async (recipientId, callType) => {
    const answer = await acceptCallPeer(callType);
    socketRef.current.emit('set-accept-call', { recipientId, answer });
  };

  const endCallSocket = (recipientId) => {
    socketRef.current.emit('set-end-call', { recipientId });
    endCallPeer();
  };

  const rejectCallSocket = (recipientId) => {
    socketRef.current.emit('set-reject-call', { recipientId });
  };

  const value = {
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
  return (
    <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
  );
};

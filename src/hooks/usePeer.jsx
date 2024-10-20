import { useContext } from 'react';
import { PeerContext } from '../context/peerContext';

export const usePeer = () => {
  const {
    peer,
    myStream,
    remoteStream,
    setIncomingOffer,
    getOffer,
    getAnswer,
    setRemoteDescription,
    setIceCandidate,
    acceptCallPeer,
    startCallPeer,
    endCallPeer,
  } = useContext(PeerContext);

  return {
    peer,
    myStream,
    remoteStream,
    setIncomingOffer,
    getOffer,
    getAnswer,
    setRemoteDescription,
    setIceCandidate,
    acceptCallPeer,
    startCallPeer,
    endCallPeer,
  };
};

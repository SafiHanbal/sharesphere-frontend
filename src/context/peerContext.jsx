import { createContext, useRef, useState, useEffect, useCallback } from 'react';

export const PeerContext = createContext({
  peer: null,
  myStream: null,
  remoteStream: null,
  setIncomingOffer: () => {},
  getOffer: async () => {},
  getAnswer: async () => {},
  setRemoteDescription: async () => {},
  setIceCandidate: () => {},

  startCallPeer: async () => {},
  acceptCallPeer: async () => {},
  endCallPeer: () => {},
});

const STREAM_CONFIG = {
  Video: { video: true, audio: true },
  Audio: { video: false, audio: true },
};

export const PeerProvider = ({ children }) => {
  const peerRef = useRef(null);
  const [typeOfCall, setTypeOfCall] = useState(null);
  const [myStream, setMyStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const [incomingOffer, setIncomingOffer] = useState(null);
  const [amICaller, setAmICaller] = useState(false);

  // Close peer on component unmount
  useEffect(() => {
    return () => {
      if (peerRef.current) {
        endCallPeer();
      }
    };
  }, []);

  // Send recipient's stream after caller's stream received
  useEffect(() => {
    if (remoteStream && !amICaller) {
      const sendRecipientsStream = async () => {
        // Get User's media stream
        const stream = await getMediaStream(typeOfCall);

        addTracks(stream);
      };
      sendRecipientsStream();
    }
  }, [remoteStream]);

  const setIceCandidate = (candidate) => {
    if (!peerRef.current) return;

    peerRef.current.addIceCandidate(new RTCIceCandidate(candidate));
  };

  const getMediaStream = async (callType) => {
    const stream = await navigator.mediaDevices.getUserMedia(
      STREAM_CONFIG[callType]
    );

    setMyStream(stream);
    return stream;
  };

  const initPeerConnection = () => {
    if (peerRef.current) {
      peerRef.current.close();
      peerRef.current = null;
    }

    peerRef.current = new RTCPeerConnection({
      iceServers: [
        {
          urls: ['stun:stun.l.google.com:19302'],
        },
      ],
    });
  };

  const getOffer = async () => {
    if (!peerRef.current) return;

    const offer = await peerRef.current.createOffer();
    await peerRef.current.setLocalDescription(new RTCSessionDescription(offer));
    return offer;
  };

  const getAnswer = async (offer) => {
    if (!peerRef.current) return;

    await peerRef.current.setRemoteDescription(
      new RTCSessionDescription(offer || incomingOffer)
    );
    const answer = await peerRef.current.createAnswer();
    await peerRef.current.setLocalDescription(
      new RTCSessionDescription(answer)
    );

    return answer;
  };

  const setRemoteDescription = async (answer) => {
    if (!peerRef.current) return;

    await peerRef.current.setRemoteDescription(
      new RTCSessionDescription(answer)
    );
  };

  const addTracks = (stream) => {
    for (const track of stream.getTracks()) {
      peerRef.current.addTrack(track, stream);
    }
  };

  const onTrackHandler = useCallback((event) => {
    const incomingStream = event.streams[0];
    setRemoteStream(incomingStream);
  }, []);

  const bindEventListener = () => {
    peerRef.current.addEventListener('track', onTrackHandler);
  };

  const startCallPeer = async (callType) => {
    setAmICaller(true);
    setTypeOfCall(callType);

    // Get User's media stream to set myStream
    const stream = await getMediaStream(callType);

    // Initiate new RTCPeerConnection and store it in peerRef
    initPeerConnection();

    // Create offer
    const offer = await getOffer();

    // Add track event listener to peer
    bindEventListener();

    // Add media tracks to peer
    addTracks(stream);

    return offer;
  };

  const acceptCallPeer = async (callType, offer) => {
    // Initiate new RTCPeerConnection and store it in peerRef
    setTypeOfCall(callType);
    initPeerConnection();

    // Create Answer
    const answer = await getAnswer(offer);

    // Add track event listener to peer
    bindEventListener();

    return answer;
  };

  const endCallPeer = () => {
    if (!peerRef.current) return;
    // Stop tracking media
    if (myStream) {
      myStream.getTracks().forEach((track) => track.stop());
    }

    // Remove Event listener
    peerRef.current.removeEventListener('track', onTrackHandler);

    // Close peer connection
    peerRef.current.close();

    // Update states to their initial values
    peerRef.current = null;
    setTypeOfCall(null);
    setMyStream(null);
    setRemoteStream(null);
    setIncomingOffer(null);
    setAmICaller(false);
  };

  const value = {
    peer: peerRef.current,
    myStream,
    remoteStream,
    setIncomingOffer,
    getOffer,
    getAnswer,
    setRemoteDescription,
    setIceCandidate,
    startCallPeer,
    acceptCallPeer,
    endCallPeer,
  };

  return <PeerContext.Provider value={value}>{children}</PeerContext.Provider>;
};

import { useFormik } from 'formik';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSocket } from '../../hooks/useSocket';

import { AVATAR_TYPES } from '../../components/avatar/avatar.types';
import FormInput from '../../components/form-input/form-input.component';
import Button from '../../components/button/button.component';
import Avatar from '../../components/avatar/avatar.component';

import { selectUser, selectToken } from '../../store/user/userSelector';
import {
  selectTyping,
  selectCurrentChat,
  selectMessages,
} from '../../store/chat/chatSelector';

import { setCurrentChat } from '../../store/chat/chatSlice';
import {
  getMessagesAsync,
  sendMessageAsync,
} from '../../store/chat/chatAction';
import { startCall } from '../../store/call/callAction';

import {
  Header,
  BackIcon,
  Name,
  ActiveStatus,
  TypingText,
  VideoCallIcon,
  AudioCallIcon,
  Main,
  ChatArea,
  MyChat,
  OtherChat,
  Form,
} from './single-chat.styles';
import getImageSrc from '../../utils/functions/getImageSrc';

const SingleChat = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentUser = useSelector(selectUser);
  const token = useSelector(selectToken);
  const currentChat = useSelector(selectCurrentChat);
  const messages = useSelector(selectMessages);
  const typing = useSelector(selectTyping);

  const timerRef = useRef(null);
  const chatAreaRef = useRef(null);
  const [chatUser, setChatUser] = useState(null);

  const { joinRoom, sendMessage, typingStart, typingEnd, startCallSocket } =
    useSocket();

  // Setting chatUser to use in Header
  useEffect(() => {
    const user = currentChat?.users?.filter(
      (user) => user?._id !== currentUser?._id
    )[0];

    setChatUser(user);
  }, [currentChat, currentUser?._id]);

  // Getting all messages
  useEffect(() => {
    if (!token) return;

    dispatch(getMessagesAsync(token, currentChat?._id));
  }, [currentChat?._id, dispatch, token]);

  // Joining room on mounting
  useEffect(() => {
    if (!chatUser) return;

    joinRoom(chatUser?._id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatUser, currentUser]);

  // Scrolling ChatArea to its bottom when a new message is added
  useEffect(() => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const onBackButtonClick = () => {
    dispatch(setCurrentChat(null));

    navigate('/chats');
  };

  const onAudioCallStart = () => {
    const caller = {
      _id: currentUser?._id,
      firstName: currentUser?.firstName,
      lastName: currentUser?.lastName,
      profilePicture: currentUser?.profilePicture,
    };

    dispatch(startCall(chatUser, 'Audio'));
    startCallSocket(caller, chatUser?._id, 'Audio');
  };

  const onVideoCallStart = () => {
    const caller = {
      _id: currentUser?._id,
      firstName: currentUser?.firstName,
      lastName: currentUser?.lastName,
      profilePicture: currentUser?.profilePicture,
    };

    dispatch(startCall(chatUser, 'Video'));
    startCallSocket(caller, chatUser?._id, 'Video');
  };

  const formik = useFormik({
    initialValues: {
      content: '',
    },

    onSubmit: () => {
      const newMessage = {
        sender: currentUser?._id,
        content: formik.values.content,
      };

      dispatch(sendMessageAsync(token, currentChat?._id, newMessage));
      formik.resetForm();

      // Sending message through socket
      sendMessage(chatUser?.id, newMessage);

      // Stop typing when message is send
      typingEnd(currentUser?._id, chatUser?._id);
    },
  });

  const onChangeHandler = (event) => {
    formik.handleChange(event);

    // Emit typing if there is no timeouts
    if (!timerRef.current) typingStart(currentUser?._id, chatUser?._id);

    // Clear previous timeout if content change
    if (timerRef.current) clearTimeout(timerRef.current);

    // Set timeout to emit stop typing
    timerRef.current = setTimeout(() => {
      timerRef.current = null;
      typingEnd(currentUser?._id, chatUser?._id);
    }, 2000);
  };

  return (
    <>
      <Header>
        <BackIcon onClick={onBackButtonClick} />
        <Avatar
          avatarType={AVATAR_TYPES.EXTRA_SMALL}
          imageSrc={
            chatUser?.profilePicture && getImageSrc(chatUser?.profilePicture)
          }
        />
        <div>
          <Name>
            {chatUser
              ? `${chatUser?.firstName} ${chatUser?.lastName}`
              : 'ShareSphere User'}
          </Name>
          {typing ? (
            <TypingText>typing...</TypingText>
          ) : (
            <ActiveStatus>Active 12:00PM</ActiveStatus>
          )}
        </div>
        <VideoCallIcon onClick={onVideoCallStart} />
        <AudioCallIcon onClick={onAudioCallStart} />
      </Header>
      <Main>
        <ChatArea ref={chatAreaRef}>
          {messages?.map((message, idx) => {
            const id = message?._id || idx;

            return message?.sender === currentUser?._id ? (
              <MyChat key={id}>{message?.content}</MyChat>
            ) : (
              <OtherChat key={id}> {message?.content}</OtherChat>
            );
          })}
        </ChatArea>
        <Form onSubmit={formik.handleSubmit}>
          <FormInput
            type="text"
            name="content"
            value={formik.values.content}
            placeholder="Type a message..."
            onChangeHandler={onChangeHandler}
            required
          />
          <Button type="submit">Send</Button>
        </Form>
      </Main>
    </>
  );
};

export default SingleChat;

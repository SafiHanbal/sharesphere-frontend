import { io } from 'socket.io-client';
import { useFormik } from 'formik';

import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import FormInput from '../../components/form-input/form-input.component';
import Button from '../../components/button/button.component';
import Avatar from '../../components/avatar/avatar.component';
import { AVATAR_TYPES } from '../../components/avatar/avatar.types';

import { selectUser, selectToken } from '../../store/user/userSelector';
import { setCurrentChat } from '../../store/chat/chatSlice';
import {
  selectCurrentChat,
  selectMessages,
} from '../../store/chat/chatSelector';
import {
  getMessagesAsync,
  sendMessageAsync,
} from '../../store/chat/chatAction';

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

const socket = io(import.meta.env.VITE_BACKEND_URL);
const SingleChat = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentUser = useSelector(selectUser);
  const token = useSelector(selectToken);
  const currentChat = useSelector(selectCurrentChat);
  const messages = useSelector(selectMessages);

  const timerRef = useRef(null);
  const chatAreaRef = useRef(null);
  const [chatUser, setChatUser] = useState(null);
  const [isTyping, setIsTyping] = useState(false);

  // Setting chatUser to use in Header
  useEffect(() => {
    const user = currentChat?.users.filter(
      (user) => user._id !== currentUser._id
    )[0];

    setChatUser(user);
  }, [currentChat, currentUser._id]);

  // Getting all messages
  useEffect(() => {
    dispatch(getMessagesAsync(token, currentChat._id));
  }, [currentChat._id, dispatch, token]);

  // Joining room on mounting
  useEffect(() => {
    if (!chatUser) return;

    socket.emit('joinRoom', {
      userId: currentUser._id,
      recipientId: chatUser._id,
    });
  }, [chatUser, currentUser._id]);

  // Handling typing state for recipient
  useEffect(() => {
    socket.on('typing', ({ recipientId }) => {
      if (recipientId === currentUser._id) setIsTyping(true);
    });

    socket.on('stopTyping', ({ recipientId }) => {
      if (recipientId === currentUser._id) setIsTyping(false);
    });
  }, [currentUser._id]);

  // Listening on receive message
  useEffect(() => {
    socket.on('receiveMessage', ({ recipientId }) => {
      if (recipientId === currentUser._id) {
        dispatch(getMessagesAsync(token, currentChat._id));
      }
    });
  }, [currentChat._id, currentUser._id, dispatch, token]);

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

  const formik = useFormik({
    initialValues: {
      content: '',
    },

    onSubmit: () => {
      dispatch(sendMessageAsync(token, currentChat._id, formik.values.content));
      formik.resetForm();

      socket.emit('sendMessage', {
        userId: currentUser._id,
        recipientId: chatUser._id,
      });

      socket.emit('stopTyping', {
        userId: currentUser._id,
        recipientId: chatUser._id,
      });
    },
  });

  const onChangeHandler = (event) => {
    formik.handleChange(event);

    socket.emit('typing', {
      userId: currentUser._id,
      recipientId: chatUser._id,
    });

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      socket.emit('stopTyping', {
        userId: currentUser._id,
        recipientId: chatUser._id,
      });
    }, 2000);
  };

  return (
    <>
      <Header>
        <BackIcon onClick={onBackButtonClick} />
        <Avatar avatarType={AVATAR_TYPES.EXTRA_SMALL} />
        <div>
          <Name>
            {chatUser
              ? `${chatUser.firstName} ${chatUser.lastName}`
              : 'ShareSphere User'}
          </Name>
          {isTyping ? (
            <TypingText>typing...</TypingText>
          ) : (
            <ActiveStatus>Active 12:00PM</ActiveStatus>
          )}
        </div>
        <VideoCallIcon />
        <AudioCallIcon />
      </Header>
      <Main>
        <ChatArea ref={chatAreaRef}>
          {messages.map((message) =>
            message.sender === currentUser._id ? (
              <MyChat key={message._id}>{message.content}</MyChat>
            ) : (
              <OtherChat key={message._id}>{message.content}</OtherChat>
            )
          )}
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

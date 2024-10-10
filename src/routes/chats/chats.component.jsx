import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { INPUT_TYPES } from '../../components/form-input/form-input.types';
import FormInput from '../../components/form-input/form-input.component';
import UsersList from '../../components/users-list/users-list.component';
import SingleChat from '../../layouts/single-chat/single-chat.component';

import { selectToken, selectUser } from '../../store/user/userSelector';
import {
  selectChatList,
  selectCurrentChat,
} from '../../store/chat/chatSelector';
import { getChatListAsync } from '../../store/chat/chatAction';

import {
  Container,
  Heading,
  ChatList,
  UserListContainer,
  SingleChatContainer,
  NoChatText,
  ListHeader,
} from './chats.styles';

const Chats = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector(selectToken);
  const currentUser = useSelector(selectUser);
  const chatList = useSelector(selectChatList);
  const currentChat = useSelector(selectCurrentChat);

  const [userList, setUserList] = useState([]);
  const [filteredUserList, setFilteredUserList] = useState([]);

  // Redirecting Small Screen to single chat route if ther is a current chat
  useEffect(() => {
    if (window.innerWidth > 900 || !currentChat) return;
    navigate(`/chats/${currentChat._id}`);
  }, [currentChat, navigate]);

  useEffect(() => {
    if (!token) return;

    dispatch(getChatListAsync(token));
  }, [dispatch, token]);

  // Updating usersList variable to pass correctly formatted data to UsersList Component
  useEffect(() => {
    if (!chatList.length) return;

    const formattedChatList = chatList.map((chat) => {
      const otherUser = chat?.users.filter(
        (user) => user?._id !== currentUser?._id
      )[0];

      return {
        chatId: chat?._id,
        ...otherUser,
        latestMessage: chat?.latestMessage,
      };
    });

    setUserList(formattedChatList);
    setFilteredUserList(formattedChatList);
  }, [chatList, currentUser?._id]);

  const onChangeHandler = (event) => {
    const { value } = event.target;

    // To check if firstName or lastName includes the search string.
    const newUserList = userList.filter((user) => {
      const firstFilter = user?.firstName
        .toLowerCase()
        .includes(value.toLowerCase());
      const secondFilter = user?.lastName
        .toLowerCase()
        .includes(value.toLowerCase());

      return firstFilter || secondFilter;
    });

    setFilteredUserList(newUserList);
  };

  return (
    <Container>
      <ChatList>
        <ListHeader>
          <FormInput
            type="search"
            inputType={INPUT_TYPES.SEARCH}
            placeholder="Search Chats"
            onChangeHandler={onChangeHandler}
          />

          <Heading>Chats</Heading>
        </ListHeader>

        {chatList.length > 0 && (
          <UserListContainer>
            <UsersList usersList={filteredUserList} />
          </UserListContainer>
        )}
      </ChatList>

      <SingleChatContainer>
        {currentChat ? (
          <SingleChat />
        ) : (
          <NoChatText>
            No chat selected! Select one to start conversation.
          </NoChatText>
        )}
      </SingleChatContainer>
    </Container>
  );
};

export default Chats;

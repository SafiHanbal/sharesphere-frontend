import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import SingleChatLayout from '../../layouts/single-chat/single-chat.component';

import { selectUser } from '../../store/user/userSelector';

const SingleChat = () => {
  const navigate = useNavigate();
  const currentUser = useSelector(selectUser);

  useEffect(() => {
    if (!currentUser) navigate('/auth');
  }, [navigate, currentUser]);

  return currentUser ? <SingleChatLayout /> : <></>;
};

export default SingleChat;

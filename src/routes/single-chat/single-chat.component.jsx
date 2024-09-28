import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import SingleChatLayout from '../../layouts/single-chat/single-chat.component';

import { selectUser } from '../../store/user/userSelector';

const SingleChat = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (!user) navigate('/auth');
  }, [navigate, user]);

  return user ? <SingleChatLayout /> : <></>;
};

export default SingleChat;

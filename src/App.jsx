import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Authentication from './routes/authentication/authentication.component';
import Chats from './routes/chats/chats.component';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Profile from './routes/profile/profile.component';
import AddPost from './routes/add-post/add-post.component';
import SearchUser from './routes/search-user/search-user.component';
import SingleChat from './routes/single-chat/single-chat.component';
import UserSettings from './routes/user-settings/user-settings.component';

import { selectCurrentChat } from './store/chat/chatSelector';

const App = () => {
  const navigate = useNavigate();

  const currentChat = useSelector(selectCurrentChat);

  // Redirecting Small Screen to single chat route if ther is a current chat
  useEffect(() => {
    if (window.innerWidth > 900 || !currentChat) return;
    navigate(`/chats/${currentChat._id}`);
  }, [currentChat, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/chats/*" element={<Chats />} />
        <Route path="/search-user" element={<SearchUser />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/user-settings" element={<UserSettings />} />
      </Route>
      <Route path="/account/:userId" element={<Profile />} />
      <Route path="/chats/:chatId" element={<SingleChat />} />
      <Route path="/auth/*" element={<Authentication />} />
    </Routes>
  );
};

export default App;

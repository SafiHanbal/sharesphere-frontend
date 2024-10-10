import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useSocket } from './hooks/useSocket';

import Authentication from './routes/authentication/authentication.component';
import Chats from './routes/chats/chats.component';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Profile from './routes/profile/profile.component';
import AddPost from './routes/add-post/add-post.component';
import SearchUser from './routes/search-user/search-user.component';
import SingleChat from './routes/single-chat/single-chat.component';
import UserSettings from './routes/user-settings/user-settings.component';
import SinglePost from './routes/single-post/single-post.component';
import Call from './routes/call/call.component';

import { selectUser } from './store/user/userSelector';
import { selectCallUser } from './store/call/callSelector';

const App = () => {
  const navigate = useNavigate();
  const currentUser = useSelector(selectUser);
  const callUser = useSelector(selectCallUser);
  const { socketReady, register } = useSocket();

  // Register user on app mounting
  useEffect(() => {
    if (currentUser && socketReady) register(currentUser?._id);
  }, [currentUser, socketReady]);

  // Navigate to call route if there is any call user
  useEffect(() => {
    if (!callUser) return;
    navigate('/call');
  }, [callUser, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/chats/*" element={<Chats />} />
        <Route path="/search-user" element={<SearchUser />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/post/:postId" element={<SinglePost />} />
        <Route path="/user-settings" element={<UserSettings />} />
      </Route>
      <Route path="/account/:userId" element={<Profile />} />
      <Route path="/chats/:chatId" element={<SingleChat />} />
      <Route path="/auth/*" element={<Authentication />} />
      <Route path="/call" element={<Call />} />
    </Routes>
  );
};

export default App;

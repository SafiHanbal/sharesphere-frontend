import { Routes, Route } from 'react-router-dom';

import Authentication from './routes/authentication/authentication.component';
import Chats from './routes/chats/chats.component';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Profile from './routes/profile/profile.component';
import SearchUser from './routes/search-user/search-user.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/search-user" element={<SearchUser />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="/auth/*" element={<Authentication />} />
    </Routes>
  );
};

export default App;

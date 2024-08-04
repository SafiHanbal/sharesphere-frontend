import { useHref } from 'react-router-dom';

import {
  Nav,
  NavItem,
  HomeIcon,
  HomeIconActive,
  ChatIcon,
  ChatIconActive,
  ProfileIcon,
  ProfileIconActive,
  SearchIcon,
  SearchIconActive,
} from './bottom-navbar.styles';

const BottomNavbar = () => {
  const href = useHref();
  return (
    <Nav>
      <NavItem to="/">
        {href === '/' ? <HomeIconActive /> : <HomeIcon />}
      </NavItem>
      <NavItem to="/chats">
        {href === '/chats' ? <ChatIconActive /> : <ChatIcon />}
      </NavItem>
      <NavItem to="/search-user">
        {href === '/search-user' ? <SearchIconActive /> : <SearchIcon />}
      </NavItem>
      <NavItem to="/profile">
        {href === '/profile' ? <ProfileIconActive /> : <ProfileIcon />}
      </NavItem>
    </Nav>
  );
};

export default BottomNavbar;

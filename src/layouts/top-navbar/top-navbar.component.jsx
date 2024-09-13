import { useHref } from 'react-router-dom';

import LogoSrc from '../../assets/logo/logo.png';

import {
  Container,
  Nav,
  Logo,
  NavItems,
  NavItem,
  HomeIcon,
  HomeIconActive,
  ChatIcon,
  ChatIconActive,
  ProfileIcon,
  ProfileIconActive,
  NotificationsIcon,
  AddPostIcon,
  MenuIcon,
} from './top-navbar.styles';

const TopNavbar = () => {
  const href = useHref();

  return (
    <Container>
      <Nav>
        <Logo src={LogoSrc} alt="ShareSphere Logo" />
        <NavItems>
          <NavItem to="/">
            {href === '/' ? <HomeIconActive /> : <HomeIcon />}
          </NavItem>
          <NavItem to="/chats">
            {href === '/chats' ? <ChatIconActive /> : <ChatIcon />}
          </NavItem>
          <NavItem to="/profile">
            {href === '/profile' ? <ProfileIconActive /> : <ProfileIcon />}
          </NavItem>
          <NotificationsIcon />
          <AddPostIcon />
          <MenuIcon />
        </NavItems>
      </Nav>
    </Container>
  );
};

export default TopNavbar;

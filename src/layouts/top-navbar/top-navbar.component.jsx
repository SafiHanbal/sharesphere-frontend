import { useState } from 'react';
import { useHref } from 'react-router-dom';

import LogoSrc from '../../assets/logo/logo.png';
import MenuDropdown from '../../components/menu-dropdown/menu-dropdown.component';

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
  AddPostIconActive,
  MenuIcon,
} from './top-navbar.styles';

const TopNavbar = () => {
  const href = useHref();
  const [dropdownActive, setDropdownActive] = useState(false);

  const toggleDropdownActive = () => setDropdownActive(!dropdownActive);

  return (
    <Container>
      <Nav>
        <NavItem to="/">
          <Logo src={LogoSrc} alt="ShareSphere Logo" />
        </NavItem>
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
          <NavItem to="/add-post">
            {href === '/add-post' ? <AddPostIconActive /> : <AddPostIcon />}
          </NavItem>

          <MenuIcon onClick={toggleDropdownActive} />
          {dropdownActive && (
            <MenuDropdown
              isVisible={dropdownActive}
              setIsVisible={setDropdownActive}
            />
          )}
        </NavItems>
      </Nav>
    </Container>
  );
};

export default TopNavbar;

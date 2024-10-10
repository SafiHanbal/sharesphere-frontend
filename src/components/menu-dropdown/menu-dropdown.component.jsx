import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useSocket } from '../../hooks/useSocket';

import Line from '../line/line.component';

import { selectToken } from '../../store/user/userSelector';
import { logoutUserAsync } from '../../store/user/userAction';

import {
  Container,
  DropdownItems,
  SettingIcon,
  LogoutIcon,
  DropdownText,
} from './menu-dropdown.styles';

const MenuDropdown = ({ isVisible, setIsVisible }) => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const dropdownRef = useRef(null);
  const { socketLogout } = useSocket();

  const logoutHandler = () => {
    dispatch(logoutUserAsync(token, socketLogout));
  };

  const handleClickOutside = (event) => {
    // Check if the click is outside of the dropdown menu
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks
    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Clean up event listener on component unmount or when isVisible changes
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return (
    <Container ref={dropdownRef}>
      <DropdownItems as={Link} to="/user-settings">
        <SettingIcon />
        <DropdownText>User Settings</DropdownText>
      </DropdownItems>
      <Line />
      <DropdownItems onClick={logoutHandler}>
        <LogoutIcon />
        <DropdownText>Logout</DropdownText>
      </DropdownItems>
    </Container>
  );
};

export default MenuDropdown;

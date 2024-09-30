import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

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

const MenuDropdown = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  const logoutHandler = () => {
    dispatch(logoutUserAsync(token));
  };

  return (
    <Container>
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

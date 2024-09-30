import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Outlet } from 'react-router-dom';

import TopNavbar from '../../layouts/top-navbar/top-navbar.component';
import BottomNavbar from '../../layouts/bottom-navbar/bottom-navbar.component';

import { selectUser } from '../../store/user/userSelector';

const Navigation = () => {
  const navigate = useNavigate();
  const currentUser = useSelector(selectUser);

  useEffect(() => {
    if (!currentUser) {
      navigate('/auth');
    }
  }, [navigate, currentUser]);

  return (
    <>
      <TopNavbar />
      <Outlet />
      <BottomNavbar />
    </>
  );
};

export default Navigation;

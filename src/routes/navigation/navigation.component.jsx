// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { useNavigate, Outlet } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import TopNavbar from '../../layouts/top-navbar/top-navbar.component';
import BottomNavbar from '../../layouts/bottom-navbar/bottom-navbar.component';

// import { selectUser } from '../../store/user/userSelector';

const Navigation = () => {
  // const navigate = useNavigate();
  // const user = useSelector(selectUser);

  // useEffect(() => {
  //   if (!user) {
  //     navigate('/auth');
  //   }
  // }, [navigate, user]);

  return (
    <>
      <TopNavbar />

      <Outlet />

      <BottomNavbar />
    </>
  );
};

export default Navigation;

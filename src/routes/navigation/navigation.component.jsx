import { Outlet } from 'react-router-dom';

import TopNavbar from '../../layouts/top-navbar/top-navbar.component';
import BottomNavbar from '../../layouts/bottom-navbar/bottom-navbar.component';

const Navigation = () => {
  return (
    <>
      <TopNavbar />
      <Outlet />
      <BottomNavbar />
    </>
  );
};

export default Navigation;

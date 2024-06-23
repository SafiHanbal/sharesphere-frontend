import { Routes, Route } from 'react-router-dom';

import SignUp from '../../pages/sign-up/sign-up.component';
import Login from '../../pages/login/login.component';
import ResetPassword from '../../pages/reset-password/reset-password.component';

import LogoSrc from '../../assets/logo/logo.png';
import LogoLargeSrc from '../../assets/logo/logo-large.png';

import {
  Container,
  Logo,
  LogoLarge,
  RoutesContainer,
} from './authentication.styles';

const Authentication = () => {
  return (
    <Container>
      <Logo src={LogoSrc} alt="ShareSphere Logo" />
      <LogoLarge src={LogoLargeSrc} alt="ShareShere Logo" />
      <RoutesContainer>
        <Routes>
          <Route index element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Routes>
      </RoutesContainer>
    </Container>
  );
};

export default Authentication;

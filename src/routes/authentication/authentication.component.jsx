import { Routes, Route } from 'react-router-dom';

import LogoSrc from '../../assets/logo/logo.png';
import LogoLargeSrc from '../../assets/logo/logo-large.png';

import Login from '../../pages/login/login.component';
import SignUp from '../../pages/sign-up/sign-up.component';
import ResetPassword from '../../pages/reset-password/reset-password.component';
import SignUpPersonalInfo from '../../pages/signup-personal-info/signup-personal-info.component';
import SignUpAccountInfo from '../../pages/signup-account-info/signup-account-info.component';
import SignUpProfilePicture from '../../pages/signup-profile-picture/signup-profile-picture.component';

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
      <LogoLarge src={LogoLargeSrc} alt="ShareSphere Logo" />

      <RoutesContainer>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/sign-up-personal-info"
            element={<SignUpPersonalInfo />}
          />
          <Route path="/sign-up-account-info" element={<SignUpAccountInfo />} />
          <Route
            path="/sign-up-profile-picture"
            element={<SignUpProfilePicture />}
          />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </RoutesContainer>
    </Container>
  );
};

export default Authentication;

import { Link } from 'react-router-dom';

import { Container } from './profile.styles';

const Profile = () => {
  return (
    <Container>
      <h1>This is profile page</h1>

      <Link to="/auth">Authentication</Link>
    </Container>
  );
};

export default Profile;

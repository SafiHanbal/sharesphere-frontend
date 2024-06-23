import { Container } from './home.styles';

import Alert, { ALERT_TYPES } from '../../components/alert/alert.component';

const Home = () => {
  return (
    <Container>
      <Alert alertType={ALERT_TYPES.ERROR} />
    </Container>
  );
};

export default Home;

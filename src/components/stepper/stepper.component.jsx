import { Container, Text } from './stepper.styles';

const Stepper = ({ step, totalStep, title }) => {
  return (
    <Container>
      <Text>
        Step {step}: {title}
      </Text>
      <Text>
        Step {step} of {totalStep}
      </Text>
    </Container>
  );
};

export default Stepper;

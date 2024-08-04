import {
  Container,
  ErrorIcon,
  ErrorMsg,
  Label,
  ResponseContainer,
  TextAreaInput,
} from './text-area.styles';

const TextArea = ({
  label,
  name,
  value,
  rows = 3,
  onChangeHandler,
  errorMsg,
}) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <TextAreaInput
        rows={rows}
        name={name}
        onChange={onChangeHandler}
        value={value}
      ></TextAreaInput>
      {errorMsg && (
        <ResponseContainer>
          <ErrorIcon />
          <ErrorMsg>{errorMsg}</ErrorMsg>
        </ResponseContainer>
      )}
    </Container>
  );
};

export default TextArea;
